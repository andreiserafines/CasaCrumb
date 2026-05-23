import { useReveal } from "../hooks/useReveal";
import { STATS } from "../data/data";

export function About() {
  const ref = useReveal();
  return (
    <section className="about-section" id="about">
      <div className="about-img">
        <img
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900&q=80&fit=crop"
          alt="Baker arranging fresh cookies"
          loading="lazy"
        />
      </div>
      <div ref={ref} className="about-text reveal">
        <span className="about-eyebrow">Est. 2026 — Batangas</span>
        <h2 className="about-title">
          Baked with <em>slowness</em>
          <br />
          and intention
        </h2>
        <p className="about-body">
          We started Casa Crumb in a small kitchen in Lipa City, making cookies
          for friends who kept asking for more. Every recipe has been tested
          dozens of times — refined until each bite feels exactly right.
        </p>
        <div className="stats-row">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <span>{s.num}</span>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
