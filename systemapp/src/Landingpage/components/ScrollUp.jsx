import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}
