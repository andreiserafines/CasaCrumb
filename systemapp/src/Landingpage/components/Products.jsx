import { useState } from "react";
import { PRODUCTS } from "./data/data";
import { RevealDiv } from "./RevealDiv";

export function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="prod-card">
      <div className="prod-img">
        <img src={product.img} alt={product.name} loading="lazy" />
        {product.tag && <span className="prod-tag">{product.tag}</span>}
      </div>
      <div className="prod-info">
        <div className="prod-name">{product.name}</div>
        <div className="prod-desc">{product.desc}</div>
        <div className="prod-foot">
          <span className="prod-price">₱{product.price}</span>
          <button
            className={`add-btn${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "Added ✓" : "Add to Bag"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Products({ onAdd }) {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <RevealDiv className="section-head">
          <span className="eyebrow">The full collection</span>
          <h2 className="section-title">
            Our <em>favourites</em>
          </h2>
          <div className="rule" />
        </RevealDiv>
        <RevealDiv className="products-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </RevealDiv>
        <RevealDiv className="view-all-row">
          <a href="#" className="btn-ghost">
            View All Cookies
          </a>
        </RevealDiv>
      </div>
    </section>
  );
}
