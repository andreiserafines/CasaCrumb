import { useState } from "react";
import { RevealDiv } from "./RevealDiv";

export function Newsletter() {
  const [btnText, setBtnText] = useState("Subscribe");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Thank you ✓");
    setTimeout(() => {
      setBtnText("Subscribe");
      e.target.reset();
    }, 2500);
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <RevealDiv>
          <h2 className="nl-title">
            Get the <em>sweetest</em> updates
          </h2>
        </RevealDiv>
        <RevealDiv>
          <p className="nl-sub">
            New flavors, seasonal drops, and exclusive offers — delivered gently
            to your inbox.
          </p>
        </RevealDiv>
        <RevealDiv>
          <form className="nl-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="nl-input"
              placeholder="Your email address"
              required
            />
            <button type="submit" className="nl-btn">
              {btnText}
            </button>
          </form>
        </RevealDiv>
      </div>
    </section>
  );
}
