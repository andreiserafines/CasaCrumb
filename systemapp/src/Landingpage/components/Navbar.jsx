import { useState } from "react";
import { NAV_LINKS } from "../data/data";

export function Navbar({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#" className="logo">
            Casa <em>&</em> Crumb
          </a>
          <div className="nav-right">
            <button className="nav-icon-btn">Search</button>
            <button className="nav-icon-btn" onClick={onCartOpen}>
              Bag ({cartCount})
            </button>
            <button className="cart-pill" onClick={onCartOpen}>
              Bag ({cartCount})
            </button>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <span className="mn-section-label">Menu</span>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <span className="mn-section-label">Connect</span>
        <a href="#" onClick={closeMenu}>
          Instagram
        </a>
        <a href="#" onClick={closeMenu}>
          Facebook
        </a>
        <a href="#" onClick={closeMenu}>
          TikTok
        </a>
        <button
          className="mn-cart-btn"
          onClick={() => {
            closeMenu();
            onCartOpen();
          }}
        >
          View Bag ({cartCount})
        </button>
      </div>
    </>
  );
}
