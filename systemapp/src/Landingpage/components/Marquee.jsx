import { MARQUEE_ITEMS } from "./data/data";

export function MarqueeRow() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-row">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <MarqueeRow />
    </div>
  );
}
