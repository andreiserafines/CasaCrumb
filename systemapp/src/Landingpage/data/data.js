import doubledecadence from "../../assets/doubledecadence.png";
import emeraldelation from "../../assets/emeraldelation.png";
import velvetdream from "../../assets/velvetdream.png";
import walnutroyale from "../../assets/walnutroyale.png";
import campfirecrave from "../../assets/campfirecrave.png";

// ── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Cookies", href: "#products" },
  { label: "Specialty", href: "#categories" },
  { label: "Gift Sets", href: "#" },
  { label: "About", href: "#about" },
];

const MARQUEE_ITEMS = [
  "Walnut Royale",
  "Velvet Dream",
  "Emerald Elation",
  "Double Decadence",
  "Campfire Crave",
  "Walnut Royale",
  "Velvet Dream",
  "Emerald Elation",
  "Double Decadence",
  "Campfire Crave",
];

const CATEGORIES = [
  {
    name: "Classic Cookies",
    sub: "Timeless & beloved",
    img: walnutroyale,
    href: "#products",
  },
  {
    name: "Gift Sets",
    sub: "Curated with care",
    img: walnutroyale,
    href: "#",
  },
  {
    name: "Seasonal Flavors",
    sub: "Limited & special",
    img: walnutroyale,
    href: "#",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Walnut Royale",
    desc: "A decadent chocolate chip cookie elevated with toasted walnuts for a buttery crunch and nutty depth.",
    price: 60,
    tag: "Bestseller",
    img: walnutroyale,
  },
  {
    id: 2,
    name: "Campfire Crave",
    desc: "Bergamot-infused dough, fresh blueberry compote, lemon zest",
    price: 60,
    tag: "Bestseller",
    img: campfirecrave,
  },
  {
    id: 3,
    name: "Emerald Elation",
    desc: "A luxurious matcha cookie with a smooth, earthy sweetness and soft, melt-in-your-mouth texture.",
    price: 60,
    tag: "",
    img: emeraldelation,
  },
  {
    id: 4,
    name: "Double Decadence",
    desc: "A deeply rich, double-chocolate cookie crafted for intense cocoa flavor and pure chocolate indulgence",
    price: 60,
    tag: "",
    img: doubledecadence,
  },
  {
    id: 5,
    name: "Velvet Dream",
    desc: "A plush red velvet cookie with a soft, velvety crumb and a luscious cream cheese center that melts into every bite.",
    price: 60,
    tag: "New",
    img: velvetdream,
  },
];

const STATS = [
  { num: "10+", label: "Cookie Flavors" },
  { num: "500+", label: "Happy Customers" },
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
