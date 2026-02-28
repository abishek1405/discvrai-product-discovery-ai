Discvrai Assignment AI-Powered Product Search System

An AI-powered product recommendation system built using Node.js, Express, React, and OpenAI (gpt-5-mini).

This project allows users to describe their needs (e.g., "Best laptop under 60000" or "Affordable gaming headphones") and receive structured product recommendations powered by an LLM.

🚀 Features
🔍 Natural language product search
🤖 AI-powered recommendations
📦 Structured JSON response
🖥️ React frontend with dark/light mode
🪟 Product detail modal
✨ Optional AI one-liner per product
📂 Mock product dataset (50+ products)
🏷️ Multi-category support:
        Laptops
        Mobiles
        Headphones
        Tablets
        Smartwatches
        Monitors
        Keyboards
        Mouse
        Speakers

🏗️ Architecture
User → React Frontend → Express API → OpenAI (gpt-5-mini) → Structured JSON → UI Rendering

The system flow:
1.User enters a natural language query.
2.Frontend sends query to /api/ask.
3.Backend calls OpenAI Responses API.
4.Model returns structured JSON:
{
  "products": [],
  "summary": ""
}

5.Frontend renders product cards.
6.Clicking a product opens a detail modal.
7.Optional: AI generates a short one-line summary for the selected product.

🛠 Tech Stack
Backend:
    Node.js
    Express
    OpenAI Responses API
    Model: gpt-5-mini
    Mock JSON dataset (No database as per scope)

Frontend:
    React (Vite)
    Fetch API
    Basic CSS (Dark/Light toggle)

📦 Project Structure
discvrai-product-discovery-ai/
    │
    ├── backend/
    │   ├── node_modules
    │   ├── server.js
    │   ├── products.js
    │   ├── package.json
    │   ├── package-lock.json
    │   └── .env
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── assets
    │   │   ├── components/
    │   │           ├── Header/
    │   │           ├── Home/
    │   │           ├── Productcard/
    │   │           ├── Searchbar/
    │   │           ├── Summarybox/
    │   │   ├── App.jsx
    │   │   └── App.css
    │   └── package.json
    │
    └── README.md
⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone--> https://github.com/abishek1405/discvrai-product-discovery-ai
cd project-folder
2️⃣ Backend Setup
cd backend
npm install

Start backend:
npm start
Backend runs at: http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
🧪 Sample Queries

Best laptop under 60000
Budget gaming mouse
Premium smartphone with good camera
Affordable noise cancelling headphones
Tablet for students under 20000

📌 Design Decisions:

No database used (mock JSON dataset as per assignment scope).
No authentication added (explicitly out of scope).
No complex multi-agent workflows.

Focused on:
    Clean architecture
    AI integration
    Structured LLM output
    Simple and intuitive UI

⏱ Scope Control

This implementation respects the assignment constraint:


The system demonstrates:
    AI integration
    Structured response handling
    React state management
    API communication
    Clean UI/UX fundamentals

Without over-engineering.

🔮 Future Improvements (Optional):

Add database (MongoDB/PostgreSQL)
Add authentication
Add product rating system
Add AI-powered ranking score
Deploy backend & frontend
Add caching layer

👨‍💻 Author:

Abishek
Full Stack Developer (MERN + Django)
AI-focused product engineering enthusiast