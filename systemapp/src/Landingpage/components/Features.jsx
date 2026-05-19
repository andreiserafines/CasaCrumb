import { FEATURES } from "./data/data";

export function Features() {
  return (
    <div className="features-section">
      {FEATURES.map((f) => (
        <div key={f.title} className="feat">
          <span className="feat-icon">{f.icon}</span>
          <div className="feat-title">{f.title}</div>
          <p className="feat-desc">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
