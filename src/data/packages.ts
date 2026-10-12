// Package catalog for the balloon-decoration landing page.
// Birthday & anniversary photos come from the 2026 product shoot; baby shower and
// welcome-baby photos/prices were carried over from the previous WordPress page.
// `price: null` renders as "Price on request".

export type Occasion = "birthday" | "anniversary" | "baby-shower" | "welcome-baby";
export type DecorType = "ring" | "flex" | "panel" | "wall";

export type Package = {
  id: string;
  occasion: Occasion;
  type: DecorType;
  title: string;
  price: number | null;
  image: string;
  width: number;
  height: number;
};

export const OCCASIONS: { id: Occasion; label: string; formLabel: string }[] = [
  { id: "birthday", label: "Birthday", formLabel: "Birthday Decoration" },
  { id: "anniversary", label: "Anniversary", formLabel: "Anniversary Decoration" },
  { id: "baby-shower", label: "Baby Shower", formLabel: "Baby Shower" },
  { id: "welcome-baby", label: "Welcome Baby", formLabel: "Baby Welcome" },
];

export const DECOR_TYPES: Record<DecorType, string> = {
  ring: "Ring",
  flex: "Backdrop",
  panel: "Sequin Panel",
  wall: "Wall Decor",
};

export const PACKAGES: Package[] = [
  { id: "birthday-ring-black-gold", occasion: "birthday", type: "ring", title: "Black & Gold Neon Ring", price: 3799, image: "/images/packages/birthday/ring-black-gold.webp", width: 401, height: 621 },
  { id: "birthday-ring-gold-purple", occasion: "birthday", type: "ring", title: "Gold & Purple Neon Ring", price: 4199, image: "/images/packages/birthday/ring-gold-purple.webp", width: 401, height: 621 },
  { id: "birthday-ring-maroon-silver", occasion: "birthday", type: "ring", title: "Maroon & Silver Ring with Marquee Numbers", price: 4599, image: "/images/packages/birthday/ring-maroon-silver.webp", width: 401, height: 621 },
  { id: "birthday-ring-white-gold", occasion: "birthday", type: "ring", title: "White & Gold Garden Ring", price: 3499, image: "/images/packages/birthday/ring-white-gold.webp", width: 401, height: 621 },
  { id: "birthday-ring-silver-rose-carpet", occasion: "birthday", type: "ring", title: "Silver & White Ring with Rose Carpet", price: 3499, image: "/images/packages/birthday/ring-silver-rose-carpet.webp", width: 401, height: 621 },
  { id: "birthday-ring-purple-copper", occasion: "birthday", type: "ring", title: "Purple, Copper & Silver Ring", price: 3499, image: "/images/packages/birthday/ring-purple-copper.webp", width: 401, height: 621 },
  { id: "birthday-ring-chrome-marquee", occasion: "birthday", type: "ring", title: "Chrome Ring with Marquee Numbers", price: 4999, image: "/images/packages/birthday/ring-chrome-marquee.webp", width: 401, height: 621 },
  { id: "birthday-ring-white-red-marquee", occasion: "birthday", type: "ring", title: "White & Red Ring with Marquee Numbers", price: 4999, image: "/images/packages/birthday/ring-white-red-marquee.webp", width: 401, height: 621 },
  { id: "birthday-backdrop-white-silver", occasion: "birthday", type: "flex", title: "White & Silver Name Backdrop", price: 3999, image: "/images/packages/birthday/backdrop-white-silver.webp", width: 401, height: 621 },
  { id: "birthday-backdrop-rose-gold", occasion: "birthday", type: "flex", title: "Rose-Gold Arch Backdrop", price: 3999, image: "/images/packages/birthday/backdrop-rose-gold.webp", width: 401, height: 621 },
  { id: "birthday-backdrop-gold-purple", occasion: "birthday", type: "flex", title: "Gold & Purple Name Backdrop", price: 4999, image: "/images/packages/birthday/backdrop-gold-purple.webp", width: 401, height: 621 },
  { id: "birthday-backdrop-black-silver", occasion: "birthday", type: "flex", title: "Black & Silver Backdrop with Marquee Numbers", price: 5999, image: "/images/packages/birthday/backdrop-black-silver.webp", width: 401, height: 621 },
  { id: "birthday-backdrop-yellow-white", occasion: "birthday", type: "flex", title: "Yellow & White Backdrop with Marquee Numbers", price: 5999, image: "/images/packages/birthday/backdrop-yellow-white.webp", width: 401, height: 621 },
  { id: "birthday-panel-black-gold-stars", occasion: "birthday", type: "panel", title: "Black Sequin Panel with Gold Stars", price: 10999, image: "/images/packages/birthday/panel-black-gold-stars.webp", width: 401, height: 621 },
  { id: "birthday-panel-rose-gold", occasion: "birthday", type: "panel", title: "Rose-Gold Sequin Panel", price: 11999, image: "/images/packages/birthday/panel-rose-gold.webp", width: 401, height: 621 },
  { id: "birthday-panel-silver", occasion: "birthday", type: "panel", title: "Silver Sequin Panel", price: 11999, image: "/images/packages/birthday/panel-silver.webp", width: 401, height: 621 },
  { id: "birthday-panel-pink", occasion: "birthday", type: "panel", title: "Pink Sequin Panel", price: 11999, image: "/images/packages/birthday/panel-pink.webp", width: 401, height: 621 },
  { id: "birthday-panel-black-gold-twin", occasion: "birthday", type: "panel", title: "Black & Gold Twin Panel", price: 11999, image: "/images/packages/birthday/panel-black-gold-twin.webp", width: 401, height: 621 },
  { id: "birthday-wall-rose-gold", occasion: "birthday", type: "wall", title: "Rose-Gold Foil Wall", price: null, image: "/images/packages/birthday/wall-rose-gold.webp", width: 401, height: 621 },
  { id: "birthday-wall-black-gold", occasion: "birthday", type: "wall", title: "Black & Gold Foil Wall", price: null, image: "/images/packages/birthday/wall-black-gold.webp", width: 401, height: 621 },
  { id: "birthday-wall-gold-curtain", occasion: "birthday", type: "wall", title: "Gold Curtain Wall", price: null, image: "/images/packages/birthday/wall-gold-curtain.webp", width: 401, height: 621 },
  { id: "birthday-wall-red-gold", occasion: "birthday", type: "wall", title: "Red & Gold Foil Wall", price: null, image: "/images/packages/birthday/wall-red-gold.webp", width: 401, height: 621 },
  { id: "birthday-wall-white-gold-frame", occasion: "birthday", type: "wall", title: "White & Gold Balloon Frame", price: null, image: "/images/packages/birthday/wall-white-gold-frame.webp", width: 401, height: 621 },
  { id: "birthday-wall-black-gold-fans", occasion: "birthday", type: "wall", title: "Black & Gold Fan Wall", price: null, image: "/images/packages/birthday/wall-black-gold-fans.webp", width: 401, height: 621 },
  { id: "birthday-wall-gold-sequin", occasion: "birthday", type: "wall", title: "Gold Sequin Wall", price: null, image: "/images/packages/birthday/wall-gold-sequin.webp", width: 401, height: 621 },
  { id: "birthday-wall-blue-silver-photo", occasion: "birthday", type: "wall", title: "Blue & Silver Photo Wall", price: null, image: "/images/packages/birthday/wall-blue-silver-photo.webp", width: 401, height: 621 },
  { id: "birthday-wall-blue-white-lights", occasion: "birthday", type: "wall", title: "Blue & White Fairy-Light Wall", price: null, image: "/images/packages/birthday/wall-blue-white-lights.webp", width: 401, height: 621 },
  { id: "birthday-wall-rose-gold-black", occasion: "birthday", type: "wall", title: "Rose-Gold & Black Foil Wall", price: null, image: "/images/packages/birthday/wall-rose-gold-black.webp", width: 401, height: 621 },
  { id: "birthday-wall-red-gold-arch", occasion: "birthday", type: "wall", title: "Red & Gold Balloon Arch Wall", price: null, image: "/images/packages/birthday/wall-red-gold-arch.webp", width: 401, height: 621 },
  { id: "birthday-wall-royal-blue", occasion: "birthday", type: "wall", title: "Royal Blue Foil Wall", price: null, image: "/images/packages/birthday/wall-royal-blue.webp", width: 401, height: 621 },
  { id: "birthday-wall-black-gold-balloons", occasion: "birthday", type: "wall", title: "Black & Gold Balloon Wall", price: null, image: "/images/packages/birthday/wall-black-gold-balloons.webp", width: 401, height: 621 },
  { id: "anniversary-ring-black-white", occasion: "anniversary", type: "ring", title: "Black & White Ring", price: 3999, image: "/images/packages/anniversary/ring-black-white.webp", width: 401, height: 621 },
  { id: "anniversary-ring-pastel-rainbow", occasion: "anniversary", type: "ring", title: "Pastel Rainbow Ring", price: 4999, image: "/images/packages/anniversary/ring-pastel-rainbow.webp", width: 401, height: 621 },
  { id: "anniversary-ring-white-gold", occasion: "anniversary", type: "ring", title: "White & Gold Ring", price: 4999, image: "/images/packages/anniversary/ring-white-gold.webp", width: 401, height: 621 },
  { id: "anniversary-ring-blue-gold-garden", occasion: "anniversary", type: "ring", title: "Blue & Gold Garden Ring", price: 4999, image: "/images/packages/anniversary/ring-blue-gold-garden.webp", width: 401, height: 621 },
  { id: "anniversary-ring-orange-gold", occasion: "anniversary", type: "ring", title: "Orange & Gold Neon Ring", price: 4999, image: "/images/packages/anniversary/ring-orange-gold.webp", width: 401, height: 621 },
  { id: "anniversary-ring-white-gold-marquee", occasion: "anniversary", type: "ring", title: "White & Gold Ring with Marquee Numbers", price: 4999, image: "/images/packages/anniversary/ring-white-gold-marquee.webp", width: 401, height: 621 },
  { id: "anniversary-ring-red-gold-heart", occasion: "anniversary", type: "ring", title: "Red & Gold Heart Ring", price: 4999, image: "/images/packages/anniversary/ring-red-gold-heart.webp", width: 401, height: 621 },
  { id: "anniversary-ring-gold-chrome", occasion: "anniversary", type: "ring", title: "Gold Chrome Ring", price: 5999, image: "/images/packages/anniversary/ring-gold-chrome.webp", width: 401, height: 621 },
  { id: "anniversary-ring-floral-stage", occasion: "anniversary", type: "ring", title: "Floral Ring Stage", price: 5999, image: "/images/packages/anniversary/ring-floral-stage.webp", width: 401, height: 621 },
  { id: "anniversary-panel-rose-gold", occasion: "anniversary", type: "panel", title: "Rose-Gold Sequin Panel", price: 11999, image: "/images/packages/anniversary/panel-rose-gold.webp", width: 401, height: 621 },
  { id: "anniversary-panel-silver-marquee", occasion: "anniversary", type: "panel", title: "Silver Sequin Panel with Marquee Numbers", price: 11999, image: "/images/packages/anniversary/panel-silver-marquee.webp", width: 401, height: 621 },
  { id: "anniversary-panel-champagne", occasion: "anniversary", type: "panel", title: "Champagne Sequin Panel", price: 11999, image: "/images/packages/anniversary/panel-champagne.webp", width: 401, height: 621 },
  { id: "anniversary-panel-golden-stage", occasion: "anniversary", type: "panel", title: "Golden Years Stage Setup", price: 14599, image: "/images/packages/anniversary/panel-golden-stage.webp", width: 401, height: 621 },
  { id: "anniversary-backdrop-red-arch", occasion: "anniversary", type: "flex", title: "Red Arch Backdrop", price: null, image: "/images/packages/anniversary/backdrop-red-arch.webp", width: 401, height: 621 },
  { id: "anniversary-backdrop-white-silver", occasion: "anniversary", type: "flex", title: "White & Silver Arch Backdrop", price: null, image: "/images/packages/anniversary/backdrop-white-silver.webp", width: 401, height: 621 },
  { id: "anniversary-room-balloons", occasion: "anniversary", type: "wall", title: "Room Balloon Decoration", price: 1999, image: "/images/packages/anniversary/room-balloons.webp", width: 401, height: 621 },
  { id: "anniversary-wall-red-lights", occasion: "anniversary", type: "wall", title: "Red Fairy-Light Wall", price: 1999, image: "/images/packages/anniversary/wall-red-lights.webp", width: 401, height: 621 },
  { id: "baby-shower-ring-pastel-teddy", occasion: "baby-shower", type: "ring", title: "Pastel Ring with Teddy", price: 3999, image: "/images/packages/baby-shower/ring-pastel-teddy.webp", width: 1024, height: 1024 },
  { id: "baby-shower-ring-lilac-white", occasion: "baby-shower", type: "ring", title: "Lilac & White Ring", price: 3999, image: "/images/packages/baby-shower/ring-lilac-white.webp", width: 1024, height: 1024 },
  { id: "baby-shower-wall-pastel-lights", occasion: "baby-shower", type: "wall", title: "Pastel Fairy-Light Wall", price: 4499, image: "/images/packages/baby-shower/wall-pastel-lights.webp", width: 1024, height: 1024 },
  { id: "baby-shower-backdrop-mama-to-be", occasion: "baby-shower", type: "flex", title: "Mama-to-Be Floral Backdrop", price: 6599, image: "/images/packages/baby-shower/backdrop-mama-to-be.webp", width: 1024, height: 1024 },
  { id: "baby-shower-ring-pink-purple", occasion: "baby-shower", type: "ring", title: "Pink & Purple Ring", price: 2999, image: "/images/packages/baby-shower/ring-pink-purple.webp", width: 1024, height: 1024 },
  { id: "welcome-baby-wall-baby-boy", occasion: "welcome-baby", type: "wall", title: "Welcome Baby Boy Foil Wall", price: 1999, image: "/images/packages/welcome-baby/wall-baby-boy.webp", width: 1024, height: 1024 },
  { id: "welcome-baby-ring-blue-silver", occasion: "welcome-baby", type: "ring", title: "Blue & Silver Welcome Ring", price: 3999, image: "/images/packages/welcome-baby/ring-blue-silver.webp", width: 1024, height: 1024 },
  { id: "welcome-baby-ring-orange-white", occasion: "welcome-baby", type: "ring", title: "Orange & White Welcome Ring", price: 3999, image: "/images/packages/welcome-baby/ring-orange-white.webp", width: 1024, height: 1024 },
  { id: "welcome-baby-ring-pastel", occasion: "welcome-baby", type: "ring", title: "Pastel Welcome Baby Ring", price: 4499, image: "/images/packages/welcome-baby/ring-pastel.webp", width: 1024, height: 1024 },
  { id: "welcome-baby-wall-pastel-lights", occasion: "welcome-baby", type: "wall", title: "Pastel Baby Fairy-Light Wall", price: 2499, image: "/images/packages/welcome-baby/wall-pastel-lights.webp", width: 1024, height: 1024 },
];

export const STARTING_PRICE = Math.min(
  ...PACKAGES.flatMap((p) => (p.price === null ? [] : [p.price])),
);

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
