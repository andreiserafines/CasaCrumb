import { useState, useRef, useEffect } from "react";
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
import { motion } from "framer-motion";

// Data
import { PRODUCTS } from "./data/data";

export default function LandingProvider() {
  const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <div
      className="cc-body relative"
      ref={scrollRef}
      onScroll={(e) => {
        setShowScroll(e.currentTarget.scrollTop > 300);
      }}
      style={{
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-110"
        >
          ↑
        </button>
      )}
      <style>{styles}</style>
      {/* <Announcement /> */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg w-[320px] space-y-3"
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold">👋 Welcome Customer!</h2>

              <p className="text-sm text-gray-600 leading-snug ">
                This website is still under development. Some features may not
                work as expected.
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 text-sm rounded-md bg-black text-white hover:opacity-80"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
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
