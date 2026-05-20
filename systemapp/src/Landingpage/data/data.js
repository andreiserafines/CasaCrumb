import javs from "../../assets/javs.jpeg";
// import conch from "../../assets/conch.jpeg";

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
    img: javs,
    href: "#products",
  },
  {
    name: "Gift Sets",
    sub: "Curated with care",
    img: javs,
    href: "#",
  },
  {
    name: "Seasonal Flavors",
    sub: "Limited & special",
    img: javs,
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
    img: javs,
  },
  {
    id: 2,
    name: "Pistachio Rose",
    desc: "Toasted pistachios, rosewater glaze, edible dried petals",
    price: 195,
    tag: "New",
    img: javs,
  },
  {
    id: 3,
    name: "Matcha Sesame",
    desc: "Ceremonial matcha, black sesame praline, white chocolate drizzle",
    price: 200,
    tag: "",
    img: javs,
  },
  {
    id: 4,
    name: "Blueberry Earl Grey",
    desc: "Bergamot-infused dough, fresh blueberry compote, lemon zest",
    price: 195,
    tag: "Limited",
    img: javs,
  },
  {
    id: 5,
    name: "Salted Honey Shortbread",
    desc: "Pure wildflower honey, flaky sea salt, cultured French butter",
    price: 165,
    tag: "",
    img: javs,
  },
  {
    id: 6,
    name: "Fig & Rosemary",
    desc: "Dried mission figs, fresh rosemary, almond frangipane base",
    price: 200,
    tag: "New",
    img: javs,
  },
  {
    id: 7,
    name: "Brown Sugar Snickerdoodle",
    desc: "Cinnamon sugar crust, soft pillow center, cream of tartar tang",
    price: 160,
    tag: "",
    img: javs,
  },
  {
    id: 8,
    name: "Lemon Lavender",
    desc: "Sicilian lemon curd, culinary lavender, powdered sugar dusting",
    price: 185,
    tag: "",
    img: javs,
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
    text: "Grabe! tataba na ata ako sa mga cookies na 'to, but I don't even care because they're that good. The Brown Butter Chocolate Chip is life-changing!",
    author: "Mahdia P., Taguig",
  },
  {
    text: "Highly recommended! Sobrang sarap! The perfect balance of chewy and crispy, with high-quality ingredients you can really taste.",
    author: "Razia S., BGC",
  },
  {
    text: "Talagang makakadami ka ng bili sa sarap, kahit kailan di ako binigo ng store na ito.",
    author: "Rene T., Quezon City",
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
