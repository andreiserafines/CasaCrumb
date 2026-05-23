import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition duration-300 hover:-translate-y-1"
    >
      <ChevronUp size={20} />
    </button>
  );
};
