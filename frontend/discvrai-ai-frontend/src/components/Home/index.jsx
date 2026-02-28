import { useState } from "react";
import SearchBar from "../Searchbar";
import ProductCard from "../Productcard";
import SummaryBox from "../Summarybox";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const res = await fetch("https://discvrai-product-discovery-ai.onrender.com/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      setProducts(data.products || []);
      setSummary(data.summary || "");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Product Discovery</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Finding best products...</p>}

      {summary && <SummaryBox summary={summary} />}

      <div className="grid container">
        <div className="row">
          {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>
      </div>
    </div>
  );
}