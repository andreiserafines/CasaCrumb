import { RevealDiv } from "./RevealDiv";
import { TESTIMONIALS } from "./data/data";

export function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <RevealDiv className="section-head">
          <span className="eyebrow">What people say</span>
          <h2 className="section-title">
            A little <em>love</em> from our customers
          </h2>
          <div className="rule" />
        </RevealDiv>
        <RevealDiv className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi">
              <div className="stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <span className="testi-author">— {t.author}</span>
            </div>
          ))}
        </RevealDiv>
      </div>
    </section>
  );
}
