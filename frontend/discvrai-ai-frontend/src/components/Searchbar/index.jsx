import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Describe what you need (Laptop, Mobile, Headphones, Tablet, etc.) — AI will find the best match for you"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchbox"
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
}