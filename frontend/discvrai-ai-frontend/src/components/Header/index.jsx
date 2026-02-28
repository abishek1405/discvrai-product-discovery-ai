import { useEffect, useState } from "react";
import './index.css'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <header className="header">
      <h2 className="logo">Discvrai Company Assignment</h2>

      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}