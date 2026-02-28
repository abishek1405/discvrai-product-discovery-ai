require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
const products = require("./products");

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.OPENAI_API_KEY) {
  console.warn("WARNING: OPENAI_API_KEY is not set in environment variables");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.get("/api/products", (req, res) => {
  try {
    const { category, search } = req.query;
    let result = [...products];
    if (category) {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


app.post("/api/ask", async (req, res) => {
  const { query } = req.body;
    console.log("Received query:", query);
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const productContext = products
      .map(
        (p) =>
          `${p.id}. ${p.name} - ${p.category} - ₹${p.price} - tags: ${p.tags.join(
            ", "
          )}`
      )
      .join("\n");

    const prompt = `
You are a product recommendation assistant.

Here is the product catalog:
${productContext}

User Query:
"${query}"

Return ONLY valid JSON in this format:
{
  "productIds": [1,2],
  "summary": "short explanation"
}

Do not include any extra text outside JSON.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;
    const cleaned = text.trim();
    const jsonStart = cleaned.indexOf("{");
    const jsonEnd = cleaned.lastIndexOf("}") + 1;
    const safeJson = cleaned.slice(jsonStart, jsonEnd);

    const parsed = JSON.parse(safeJson);

    const matchedProducts = products.filter((p) =>
      parsed.productIds.includes(p.id)
    );

    res.json({
      products: matchedProducts,
      summary: parsed.summary,
    });
  } catch (error) {
    console.error("LLM Error:", error.message);

    res.status(503).json({
      error: "AI service temporarily unavailable",
    });
  }
});


app.get("/", (req, res) => {
  res.send("Product Discovery API running...");
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});