"use client";
import { useEffect, useState } from "react";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  const [category, setCategory] = useState("clothes");
  const [gender, setGender] = useState("male");
  const [items, setItems] = useState([]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      const filteredItems =
        productsData?.[category]?.filter((item) => item.gender === gender) || [];
      setItems(filteredItems);
      setFade(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [category, gender]);

  return (
    <div className="products-page">
      <h1 className="page-title">Our Collection</h1>

      {/* Category Filter */}
      <div className="filters">
        {["clothes", "bags", "shoes"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="gender-switch">
        <button
          className={gender === "male" ? "active" : ""}
          onClick={() => setGender("male")}
        >
          Male
        </button>
        <button
          className={gender === "female" ? "active" : ""}
          onClick={() => setGender("female")}
        >
          Female
        </button>
      </div>

      {/* Products Grid */}
      <div className={`products-grid ${fade ? "fade" : ""}`}>
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
