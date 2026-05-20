import { RevealDiv } from "./RevealDiv";
import { CATEGORIES } from "../data/data";

export function CategoryCard({ cat }) {
  return (
    <a className="cat-card" href={cat.href}>
      <img
        src={cat.img}
        alt={cat.name}
        loading="lazy"
        className="w-full h-64 object-cover"
      />
      <div className="cat-overlay" />
      <div className="cat-info">
        <div className="cat-name">{cat.name}</div>
        <div className="cat-sub">{cat.sub}</div>
        <span className="cat-cta">Shop Collection →</span>
      </div>
    </a>
  );
}

export function Categories() {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <RevealDiv className="section-head">
          <span className="eyebrow">Browse by collection</span>
          <h2 className="section-title">
            What are you <em>craving?</em>
          </h2>
          <div className="rule" />
        </RevealDiv>
        <RevealDiv className="cats-grid">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.name} cat={cat} />
          ))}
        </RevealDiv>
      </div>
    </section>
  );
}
