import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1 className="logo">🌊 Sell Wave</h1>
        <p className="tagline">Online Shopping.</p>
        <button className="explore-btn">Explore Now</button>
      </header>

      <section className="products">
        <h2 className="section-title">Featured Collections</h2>
        <div className="product-grid">
          {["Watch", "Perfume", "Headphones", "Smart Glasses"].map((item, i) => (
            <div className="product-card" key={i}>
              <div className="product-img"></div>
              <h3>{item}</h3>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Sell Wave. Powered by AI ✨</p>
      </footer>
    </div>
  );
                                                                   }
