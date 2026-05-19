const Styles = `
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap");

:root {
  --burgundy: #6b2737;
  --burgundy-hover: #7d3040;
  --blush: #f2ddd5;
  --cream: #faf6f1;
  --rose-mist: #e8c9c0;
  --sage: #c5c4b0;
  --warm-gray: #b8a99a;
  --parchment: #f5ede4;
  --text-dark: #2c1a1a;
  --text-mid: #6b4f4f;
  --text-light: #9a7a7a;
  --nav-h: 68px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

.cc-body {
  font-family: "Jost", sans-serif;
  background: var(--cream);
  color: var(--text-dark);
  font-weight: 300;
  overflow-x: hidden;
  font-size: 15px;
  line-height: 1.6;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  cursor: pointer;
  font-family: "Jost", sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--warm-gray);
  display: block;
  margin-bottom: 14px;
}
.section-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 3.5vw, 50px);
  font-weight: 300;
  color: var(--text-dark);
  line-height: 1.1;
}
.section-title em {
  font-style: italic;
  color: var(--burgundy);
}
.rule {
  width: 36px;
  height: 1px;
  background: var(--burgundy);
  opacity: 0.35;
  margin: 18px auto 0;
}
.section-head {
  text-align: center;
  margin-bottom: 56px;
}

.btn-primary {
  display: inline-block;
  background: var(--burgundy);
  color: var(--blush);
  border: none;
  padding: 13px 34px;
  font-size: 10.5px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 300;
  transition:
    background 0.3s,
    transform 0.25s;
}
.btn-primary:hover {
  background: var(--burgundy-hover);
  transform: translateY(-2px);
}
.btn-ghost {
  display: inline-block;
  background: none;
  color: var(--text-mid);
  border: 1px solid rgba(107, 39, 55, 0.25);
  padding: 12px 26px;
  font-size: 10.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  transition:
    border-color 0.3s,
    color 0.3s;
}
.btn-ghost:hover {
  border-color: var(--burgundy);
  color: var(--burgundy);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.reveal.in {
  opacity: 1;
  transform: none;
}

/* Announce */
.announce {
  background: var(--burgundy);
  color: var(--blush);
  text-align: center;
  padding: 10px 20px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
}

/* Nav */
.nav {
  position: sticky;
  top: 0;
  z-index: 200;
  background: var(--cream);
  border-bottom: 1px solid rgba(107, 39, 55, 0.08);
  height: var(--nav-h);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 48px;
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text-mid);
  font-weight: 300;
  position: relative;
  padding-bottom: 2px;
}
.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--burgundy);
  transition: width 0.3s;
}
.nav-links a:hover {
  color: var(--burgundy);
}
.nav-links a:hover::after {
  width: 100%;
}
.logo {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 300;
  color: var(--burgundy);
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: nowrap;
}
.logo em {
  font-style: italic;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-icon-btn {
  background: none;
  border: none;
  color: var(--text-mid);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0;
  transition: color 0.3s;
}
.nav-icon-btn:hover {
  color: var(--burgundy);
}
.cart-pill {
  background: var(--burgundy);
  color: var(--blush);
  border: none;
  padding: 8px 20px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  transition: background 0.3s;
  white-space: nowrap;
}
.cart-pill:hover {
  background: var(--burgundy-hover);
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text-mid);
  transition: 0.3s;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  display: none;
  position: fixed;
  inset: var(--nav-h) 0 0 0;
  background: var(--cream);
  z-index: 199;
  padding: 36px 28px;
  flex-direction: column;
  overflow-y: auto;
}
.mobile-nav.open {
  display: flex;
}
.mobile-nav a {
  font-size: 24px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  color: var(--text-dark);
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(107, 39, 55, 0.08);
  padding: 18px 0;
  display: block;
}
.mobile-nav a:hover {
  color: var(--burgundy);
}
.mn-section-label {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--warm-gray);
  padding: 28px 0 10px;
}
.mn-cart-btn {
  background: var(--burgundy);
  color: var(--blush);
  text-align: center;
  margin-top: 24px;
  padding: 14px 0;
  font-size: 11px;
  letter-spacing: 2.5px;
  font-family: "Jost", sans-serif;
  font-weight: 300;
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
}

/* Hero */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68vh;
  min-height: 420px;
  max-height: 700px;
  overflow: hidden;
  text-align: center;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
}
.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(44, 26, 26, 0.35) 0%,
    rgba(44, 26, 26, 0.58) 100%
  );
}
.hero-text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  animation: fadeUp 0.9s ease both;
}
.hero-eyebrow {
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(242, 221, 213, 0.9);
  margin-bottom: 18px;
  background: rgba(107, 39, 55, 0.45);
  padding: 5px 14px;
  display: inline-block;
}
.hero-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(38px, 5.5vw, 68px);
  font-weight: 300;
  line-height: 1.06;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 24px rgba(44, 26, 26, 0.4);
}
.hero-title em {
  font-style: italic;
  color: #f0c8bc;
}
.hero-sub {
  font-size: 13.5px;
  line-height: 1.9;
  color: rgba(242, 221, 213, 0.88);
  max-width: 440px;
  margin-bottom: 36px;
  letter-spacing: 0.2px;
  text-shadow: 0 1px 8px rgba(44, 26, 26, 0.35);
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.hero .btn-ghost {
  color: rgba(242, 221, 213, 0.9);
  border-color: rgba(242, 221, 213, 0.45);
}
.hero .btn-ghost:hover {
  color: #fff;
  border-color: rgba(242, 221, 213, 0.8);
}

/* Marquee */
.marquee-section {
  background: var(--cream);
  border-top: 1px solid rgba(107, 39, 55, 0.07);
  border-bottom: 1px solid rgba(107, 39, 55, 0.07);
  padding: 40px 0;
  overflow: hidden;
}
.marquee-row {
  overflow: hidden;
  white-space: nowrap;
  padding: 7px 0;
}
.marquee-row:nth-child(2) .marquee-track {
  animation-direction: reverse;
  animation-duration: 34s;
}
.marquee-track {
  display: inline-flex;
  animation: marquee 26s linear infinite;
}
.marquee-item {
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  font-style: italic;
  color: var(--burgundy);
  letter-spacing: 1.5px;
  padding: 0 36px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  opacity: 0.85;
}
.marquee-dot {
  width: 3px;
  height: 3px;
  background: var(--burgundy);
  border-radius: 50%;
  opacity: 0.4;
  flex-shrink: 0;
}

/* Categories */
.categories-section {
  padding: 96px 0;
}
.cats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cat-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: block;
}
.cat-card img {
  aspect-ratio: 3/4;
  transition: transform 0.7s ease;
}
.cat-card:hover img {
  transform: scale(1.05);
}
.cat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(44, 26, 26, 0.6) 0%,
    transparent 55%
  );
}
.cat-info {
  position: absolute;
  bottom: 28px;
  left: 28px;
  right: 28px;
  color: #fff;
}
.cat-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}
.cat-sub {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  opacity: 0.7;
  font-weight: 300;
}
.cat-cta {
  display: inline-block;
  margin-top: 12px;
  font-size: 10px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--rose-mist);
  border-bottom: 1px solid rgba(242, 221, 213, 0.35);
  padding-bottom: 1px;
}

/* Products */
.products-section {
  padding: 96px 0;
  background: var(--parchment);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.prod-card {
  background: var(--cream);
  cursor: pointer;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}
.prod-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 55px rgba(107, 39, 55, 0.09);
}
.prod-img {
  position: relative;
  overflow: hidden;
}
.prod-img img {
  aspect-ratio: 1;
  transition: transform 0.55s ease;
}
.prod-card:hover .prod-img img {
  transform: scale(1.06);
}
.prod-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--burgundy);
  color: var(--blush);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 9px;
  font-weight: 300;
  z-index: 1;
}
.prod-info {
  padding: 18px 18px 20px;
}
.prod-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 5px;
  letter-spacing: 0.2px;
}
.prod-desc {
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 14px;
  line-height: 1.75;
}
.prod-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.prod-price {
  font-family: "Cormorant Garamond", serif;
  font-size: 19px;
  font-weight: 300;
  color: var(--burgundy);
}
.add-btn {
  background: none;
  border: 1px solid rgba(107, 39, 55, 0.25);
  color: var(--text-mid);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 13px;
  font-weight: 300;
  transition: all 0.3s;
}
.add-btn:hover,
.add-btn.added {
  background: var(--burgundy);
  border-color: var(--burgundy);
  color: var(--blush);
}
.view-all-row {
  text-align: center;
  margin-top: 48px;
}

/* About */
.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 520px;
}
.about-img {
  position: relative;
  overflow: hidden;
}
.about-img img {
  height: 100%;
  object-position: center;
}
.about-text {
  background: var(--burgundy);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px;
}
.about-eyebrow {
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(242, 221, 213, 0.5);
  margin-bottom: 22px;
}
.about-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 3vw, 48px);
  font-weight: 300;
  color: var(--blush);
  line-height: 1.1;
  margin-bottom: 26px;
}
.about-title em {
  font-style: italic;
  color: var(--rose-mist);
}
.about-body {
  font-size: 13px;
  line-height: 1.95;
  color: rgba(242, 221, 213, 0.68);
  font-weight: 300;
  margin-bottom: 38px;
  max-width: 400px;
}
.stats-row {
  display: flex;
  gap: 40px;
  border-top: 1px solid rgba(242, 221, 213, 0.13);
  padding-top: 32px;
}
.stat span {
  font-family: "Cormorant Garamond", serif;
  font-size: 38px;
  font-weight: 300;
  color: var(--blush);
  display: block;
  line-height: 1;
  margin-bottom: 5px;
}
.stat p {
  font-size: 9.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(242, 221, 213, 0.45);
}

/* Features */
.features-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: rgba(107, 39, 55, 0.08);
  gap: 1px;
}
.feat {
  background: var(--blush);
  padding: 50px 44px;
  text-align: center;
}
.feat-icon {
  font-size: 30px;
  margin-bottom: 18px;
  display: block;
}
.feat-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  color: var(--text-dark);
}
.feat-desc {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.8;
  font-weight: 300;
}

/* Testimonials */
.testimonials-section {
  padding: 96px 0;
}
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.testi {
  padding: 36px 32px;
  border: 1px solid rgba(107, 39, 55, 0.1);
  position: relative;
}
.testi::before {
  content: '"';
  font-family: "Cormorant Garamond", serif;
  font-size: 72px;
  color: var(--rose-mist);
  position: absolute;
  top: 12px;
  left: 26px;
  line-height: 1;
}
.stars {
  color: var(--burgundy);
  font-size: 11px;
  letter-spacing: 3px;
  margin-bottom: 12px;
}
.testi-text {
  font-family: "Cormorant Garamond", serif;
  font-size: 16.5px;
  font-style: italic;
  line-height: 1.75;
  color: var(--text-mid);
  margin-bottom: 20px;
  padding-top: 26px;
  font-weight: 300;
}
.testi-author {
  font-size: 10.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--warm-gray);
}

/* Newsletter */
.newsletter-section {
  background: var(--parchment);
  padding: 88px 0;
  text-align: center;
  border-top: 1px solid rgba(107, 39, 55, 0.07);
  border-bottom: 1px solid rgba(107, 39, 55, 0.07);
}
.nl-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 300;
  margin-bottom: 12px;
}
.nl-title em {
  font-style: italic;
  color: var(--burgundy);
}
.nl-sub {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 38px;
  font-weight: 300;
}
.nl-form {
  display: flex;
  max-width: 420px;
  margin: 0 auto;
}
.nl-input {
  flex: 1;
  padding: 13px 18px;
  border: 1px solid rgba(107, 39, 55, 0.2);
  border-right: none;
  background: var(--cream);
  font-family: "Jost", sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: var(--text-dark);
  outline: none;
}
.nl-input::placeholder {
  color: var(--warm-gray);
  font-size: 12px;
  letter-spacing: 0.5px;
}
.nl-btn {
  background: var(--burgundy);
  color: var(--blush);
  border: none;
  padding: 13px 26px;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 300;
  transition: background 0.3s;
  white-space: nowrap;
  cursor: pointer;
}
.nl-btn:hover {
  background: var(--burgundy-hover);
}

/* Footer */
.footer {
  background: var(--text-dark);
  color: rgba(242, 221, 213, 0.55);
  padding: 64px 0 32px;
}
.foot-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 56px;
  margin-bottom: 52px;
}
.foot-brand-logo {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 300;
  color: var(--blush);
  letter-spacing: 3px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 18px;
}
.foot-brand-logo em {
  font-style: italic;
}
.foot-tagline {
  font-size: 12.5px;
  line-height: 1.85;
  max-width: 230px;
  font-weight: 300;
}
.foot-socials {
  display: flex;
  gap: 16px;
  margin-top: 22px;
}
.foot-socials a {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(242, 221, 213, 0.4);
  transition: color 0.3s;
  border-bottom: 1px solid transparent;
}
.foot-socials a:hover {
  color: var(--blush);
}
.foot-col-title {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--blush);
  margin-bottom: 20px;
  font-weight: 300;
}
.foot-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.foot-links a {
  font-size: 13px;
  color: rgba(242, 221, 213, 0.45);
  font-weight: 300;
  transition: color 0.3s;
}
.foot-links a:hover {
  color: var(--blush);
}
.foot-bottom {
  border-top: 1px solid rgba(242, 221, 213, 0.07);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.foot-copy {
  font-size: 11px;
}
.foot-legal {
  display: flex;
  gap: 22px;
}
.foot-legal a {
  font-size: 11px;
  color: rgba(242, 221, 213, 0.35);
  transition: color 0.3s;
}
.foot-legal a:hover {
  color: var(--blush);
}

/* Cart */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(44, 26, 26, 0.35);
  z-index: 300;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.cart-overlay.open {
  opacity: 1;
  pointer-events: all;
}
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: var(--cream);
  z-index: 301;
  transform: translateX(100%);
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
}
.cart-drawer.open {
  transform: none;
}
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid rgba(107, 39, 55, 0.08);
}
.cart-header h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
}
.cart-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--text-mid);
  line-height: 1;
  transition: color 0.3s;
}
.cart-close:hover {
  color: var(--burgundy);
}
.cart-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px 28px;
}
.cart-empty {
  text-align: center;
  padding: 60px 0;
  color: var(--text-light);
  font-size: 13px;
}
.cart-empty span {
  font-size: 40px;
  display: block;
  margin-bottom: 16px;
}
.cart-item {
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(107, 39, 55, 0.07);
  align-items: flex-start;
}
.cart-item-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  flex-shrink: 0;
}
.cart-item-info {
  flex: 1;
}
.cart-item-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 4px;
}
.cart-item-price {
  font-size: 12px;
  color: var(--text-light);
}
.cart-item-remove {
  background: none;
  border: none;
  color: var(--warm-gray);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
  margin-top: 6px;
  transition: color 0.3s;
  display: block;
  cursor: pointer;
}
.cart-item-remove:hover {
  color: var(--burgundy);
}
.cart-footer {
  padding: 20px 28px;
  border-top: 1px solid rgba(107, 39, 55, 0.08);
}
.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.cart-total .total-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-light);
}
.cart-total .total-amount {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  color: var(--burgundy);
  font-weight: 300;
}
.cart-checkout {
  width: 100%;
  padding: 14px;
  background: var(--burgundy);
  color: var(--blush);
  border: none;
  font-size: 10.5px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 300;
  transition: background 0.3s;
  cursor: pointer;
}
.cart-checkout:hover {
  background: var(--burgundy-hover);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .cart-pill {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .cats-grid {
    grid-template-columns: 1fr 1fr;
  }
  .cats-grid .cat-card:last-child {
    grid-column: span 2;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-section {
    grid-template-columns: 1fr;
  }
  .about-img {
    min-height: 52vw;
    max-height: 420px;
  }
  .about-text {
    padding: 52px 40px;
  }
  .features-section {
    grid-template-columns: 1fr 1fr;
  }
  .testi-grid {
    grid-template-columns: 1fr 1fr;
  }
  .foot-top {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
  }
  .foot-top > div:last-child {
    grid-column: 1/-1;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0 20px;
  }
  .nav-inner {
    padding: 0 20px;
  }
  .cats-grid {
    grid-template-columns: 1fr;
  }
  .cats-grid .cat-card:last-child {
    grid-column: auto;
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
  .features-section {
    grid-template-columns: 1fr;
  }
  .testi-grid {
    grid-template-columns: 1fr;
  }
  .foot-top {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .nl-form {
    flex-direction: column;
  }
  .nl-input {
    border-right: 1px solid rgba(107, 39, 55, 0.2);
    border-bottom: none;
  }
  .nl-btn {
    width: 100%;
  }
  .stats-row {
    flex-wrap: wrap;
    gap: 20px;
  }
}
`;

export default Styles;
