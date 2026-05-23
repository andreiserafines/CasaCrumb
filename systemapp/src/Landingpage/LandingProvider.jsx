import { useState } from "react";
// import { Announcement } from "./components/Announcement";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Categories } from "./components/Category";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import styles from "../styles/landing.styles";
import ScrollUp from "./components/ScrollUp";

// Data
import { PRODUCTS } from "./data/data";

export default function LandingProvider() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    setCart((prev) => [...prev, { ...product }]);
    setCartOpen(true);
  };

  const removeFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <div className="cc-body">
      <style>{styles}</style>
      <ScrollUp />
      {/* <Announcement /> */}
      <Navbar cartCount={cart.length} onCartOpen={openCart} />
      <Hero />
      <Marquee />
      <Categories />
      <Products onAdd={addToCart} />
      <About />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
      {cartOpen && (
        <Cart cart={cart} onClose={closeCart} onRemove={removeFromCart} />
      )}
    </div>
  );
}
