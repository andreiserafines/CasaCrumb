import { FOOTER_COLS } from "../data/data";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-top">
          <div>
            <span className="foot-brand-logo">
              Casa <em>&</em> Crumb
            </span>
            <p className="foot-tagline">
              Small-batch artisan cookies made with care in Manila, Philippines.
              Every bite tells a little story.
            </p>
            <div className="foot-socials">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a key={s} href="#">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="foot-col-title">{col.title}</div>
              <ul className="foot-links">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">
            © 2026 Casa Crumb. All rights reserved.
          </span>
          <div className="foot-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
