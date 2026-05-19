// ── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Cookies", href: "#products" },
  { label: "Specialty", href: "#categories" },
  { label: "Gift Sets", href: "#" },
  { label: "About", href: "#about" },
];

const MARQUEE_ITEMS = [
  "Brown Butter Chocolate Chip",
  "Earl Grey Shortbread",
  "Salted Caramel Thumbprint",
  "Raspberry Linzer",
  "Matcha Sesame",
  "Fig & Rosemary",
  "Classic Snickerdoodle",
  "Pistachio Rose",
];

const CATEGORIES = [
  {
    name: "Classic Cookies",
    sub: "Timeless & beloved",
    img: "https://images.unsplash.com/photo-1617691538534-4fdbb8c6a3a7?w=600&q=80&fit=crop",
    href: "#products",
  },
  {
    name: "Gift Sets",
    sub: "Curated with care",
    img: "https://images.unsplash.com/photo-1548592673-3b0eae9b3b65?w=600&q=80&fit=crop",
    href: "#",
  },
  {
    name: "Seasonal Flavors",
    sub: "Limited & special",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80&fit=crop",
    href: "#",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Brown Butter Choc Chip",
    desc: "Nutty browned butter, Valrhona dark chocolate, sea salt flake",
    price: 180,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Pistachio Rose",
    desc: "Toasted pistachios, rosewater glaze, edible dried petals",
    price: 195,
    tag: "New",
    img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80&fit=crop",
  },
  {
    id: 3,
    name: "Matcha Sesame",
    desc: "Ceremonial matcha, black sesame praline, white chocolate drizzle",
    price: 200,
    tag: "",
    img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600&q=80&fit=crop",
  },
  {
    id: 4,
    name: "Blueberry Earl Grey",
    desc: "Bergamot-infused dough, fresh blueberry compote, lemon zest",
    price: 195,
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop",
  },
  {
    id: 5,
    name: "Salted Honey Shortbread",
    desc: "Pure wildflower honey, flaky sea salt, cultured French butter",
    price: 165,
    tag: "",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop&crop=top",
  },
  {
    id: 6,
    name: "Fig & Rosemary",
    desc: "Dried mission figs, fresh rosemary, almond frangipane base",
    price: 200,
    tag: "New",
    img: "https://images.unsplash.com/photo-1600628421060-909a1f1dfbc9?w=600&q=80&fit=crop",
  },
  {
    id: 7,
    name: "Brown Sugar Snickerdoodle",
    desc: "Cinnamon sugar crust, soft pillow center, cream of tartar tang",
    price: 160,
    tag: "",
    img: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80&fit=crop",
  },
  {
    id: 8,
    name: "Lemon Lavender",
    desc: "Sicilian lemon curd, culinary lavender, powdered sugar dusting",
    price: 185,
    tag: "",
    img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80&fit=crop",
  },
];

const STATS = [
  { num: "18+", label: "Cookie Flavors" },
  { num: "5k+", label: "Happy Customers" },
  { num: "100%", label: "Handmade" },
];

const FEATURES = [
  {
    icon: "🌾",
    title: "Quality Ingredients",
    desc: "We source only the finest: Valrhona chocolate, French butter, locally grown seasonal produce.",
  },
  {
    icon: "🕐",
    title: "Fresh to Order",
    desc: "Every batch is baked fresh upon ordering. No pre-made stock, ever. Just cookies at their best.",
  },
  {
    icon: "🎀",
    title: "Beautiful Packaging",
    desc: "Each order arrives wrapped with care — perfect for gifting or treating yourself beautifully.",
  },
];

const TESTIMONIALS = [
  {
    text: "The brown butter chocolate chip is the best cookie I've ever had. I ordered twice in one week — zero regrets.",
    author: "Isabelle R., Makati",
  },
  {
    text: "Gifted the holiday box to my team and they couldn't stop raving. The packaging alone is worth it.",
    author: "Marco T., BGC",
  },
  {
    text: "Obsessed with the pistachio rose. Soft, fragrant, and so beautifully made. This is my go-to treat.",
    author: "Sophia L., Quezon City",
  },
];

const FOOTER_COLS = [
  {
    title: "Shop",
    links: [
      { label: "All Cookies", href: "#products" },
      { label: "Gift Sets", href: "#" },
      { label: "Seasonal", href: "#" },
      { label: "Custom Orders", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Find Us",
    links: [
      { label: "BGC, Taguig", href: "#" },
      { label: "Glorietta, Makati", href: "#" },
      { label: "SM Aura", href: "#" },
      { label: "Online · Metro Manila", href: "#" },
    ],
  },
];

export {
  NAV_LINKS,
  MARQUEE_ITEMS,
  CATEGORIES,
  PRODUCTS,
  STATS,
  FEATURES,
  TESTIMONIALS,
  FOOTER_COLS,
};
