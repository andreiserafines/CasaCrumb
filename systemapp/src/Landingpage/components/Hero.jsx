export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1400&q=80&fit=crop"
          alt="Artisan cookies"
        />
      </div>
      <div className="hero-text">
        <span className="hero-eyebrow">Handcrafted with intention</span>
        <h1 className="hero-title">
          Cookies made for
          <br />
          <em>quiet</em> little moments
        </h1>
        <p className="hero-sub">
          Each batch baked fresh from our kitchen — using heirloom recipes,
          seasonal ingredients, and a great deal of love.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Shop Now
          </a>
          <a href="#about" className="btn-ghost">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
