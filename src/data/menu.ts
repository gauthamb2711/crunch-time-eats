export type MenuItem = {
  name: string;
  price: number;
  desc?: string;
  veg?: boolean;
  tag?: string;
};
export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    blurb: "Towering, golden, double-cheese-melt territory.",
    items: [
      { name: "Chicken Crunchy Burger", price: 227.5, desc: "Thick chicken fillet in extra-crispy breadcrumb crust." },
      { name: "Chicken Crunchy Burger With Cheese", price: 254.5 },
      { name: "Chicken Tower Burger", price: 328.75, desc: "Three mini smash burgers stacked tall." },
      { name: "Chicken Patty Burger", price: 173.5 },
      { name: "Chicken Patty Burger With Cheese", price: 200.5 },
      { name: "Chicken No Bun Burger", price: 308.5, tag: "Keto Friendly" },
      { name: "Chicken No Bun Burger With Cheese", price: 335.5, tag: "Keto" },
      { name: "Paneer Burger", price: 228.5, veg: true },
      { name: "Paneer Cheese Burger", price: 250.5, veg: true },
      { name: "Veg Burger", price: 170.75, veg: true },
      { name: "Veg Burger With Cheese", price: 195.75, veg: true },
    ],
  },
  {
    id: "crunchy",
    label: "Crunchy Chicken",
    blurb: "Shatter-crust outside. Juicy, tender inside. The signature.",
    items: [
      { name: "Hot And Crunchy Chicken", price: 150.5 },
      { name: "Hot And Crunchy Chicken 2pc", price: 268 },
      { name: "Hot And Crunchy Chicken 4pc", price: 507.5 },
      { name: "Hot And Crunchy Chicken 6pc", price: 745.5 },
      { name: "Hot And Crunchy Chicken 8pc", price: 975 },
      { name: "Leg Piece", price: 155.25 },
      { name: "Leg Piece 2pcs", price: 285.5 },
      { name: "Leg Piece 4pcs", price: 520 },
      { name: "Leg Piece 6pcs", price: 758 },
      { name: "Leg Piece 8pcs", price: 983.5 },
    ],
  },
  {
    id: "periperi",
    label: "Peri Peri",
    blurb: "Smoky, fiery, dangerously addictive.",
    items: [
      { name: "Periperi Hot And Crunchy Chicken", price: 160 },
      { name: "Periperi Hot And Crunchy 2pcs", price: 280 },
      { name: "Periperi Hot And Crunchy 4pcs", price: 520 },
      { name: "Periperi Hot And Crunchy 6pcs", price: 755 },
      { name: "Periperi Hot And Crunchy 8pcs", price: 985 },
      { name: "Periperi Leg Piece", price: 165 },
      { name: "Periperi Leg Piece 2pcs", price: 300 },
      { name: "Periperi Leg Piece 4pcs", price: 535 },
      { name: "Periperi Leg Piece 6pcs", price: 769.5 },
      { name: "Periperi Leg Piece 8pcs", price: 987.5 },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    blurb: "Pop-able, share-able, never-enough bites.",
    items: [
      { name: "BBQ Hot Wings 4pcs", price: 254.5 },
      { name: "Chicken Hot Wings 4pcs", price: 227.5 },
      { name: "Periperi Hot Wings 4pcs", price: 241 },
      { name: "Chicken Cheese Balls 5pcs", price: 214 },
      { name: "Chicken Cutlet 5pcs", price: 187 },
      { name: "Chicken Finger 5pcs", price: 227.5 },
      { name: "Chicken Nuggets 5pcs", price: 167.75 },
      { name: "Chicken Popcorn 100g", price: 187 },
      { name: "Periperi Chicken Popcorn 100g", price: 200.5 },
      { name: "Chicken Strips 3pcs", price: 187 },
      { name: "Periperi Chicken Strips 3pcs", price: 200.5 },
      { name: "Chicken Roll 3pcs", price: 227.5 },
      { name: "Loaded Chicken", price: 320 },
      { name: "French Fries", price: 140, veg: true },
      { name: "Medium French Fries", price: 150, veg: true },
      { name: "Periperi French Fries", price: 150, veg: true },
      { name: "Periperi Medium Fries", price: 166.75, veg: true },
      { name: "Cheese Corn Nuggets 5pcs", price: 166.75, veg: true },
      { name: "Smiley 5pcs", price: 140, veg: true },
      { name: "Veg Nuggets 5pcs", price: 110, veg: true },
      { name: "Veg Cheese Ball 5pcs", price: 166.75, veg: true },
      { name: "Veg Cutlet 5pcs", price: 187, veg: true },
      { name: "Veg Finger 5pcs", price: 166.75, veg: true },
      { name: "Veg Roll 5pcs", price: 187, veg: true },
      { name: "Paneer Roll 5pcs", price: 227.5, veg: true },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    blurb: "Rolled tight. Loaded heavy. Sauce on point.",
    items: [
      { name: "Chicken Wrap", price: 166.75, desc: "Juicy chicken, veggies, cheese and spicy mayo." },
      { name: "BBQ Chicken Wrap", price: 187 },
      { name: "Periperi Chicken Wrap", price: 173.5 },
      { name: "Paneer Wrap", price: 227.5, veg: true },
      { name: "Veg Wrap", price: 166.75, veg: true },
    ],
  },
  {
    id: "mojitos",
    label: "Mojitos",
    blurb: "Iced, electric, refreshingly loud.",
    items: [
      { name: "Blue Mojito", price: 170.75, veg: true },
      { name: "Blueberry Mojito", price: 160, veg: true },
      { name: "Strawberry Mojito", price: 155.5, veg: true },
      { name: "Mango Mojito", price: 150.5, veg: true },
      { name: "Mint Mojito", price: 150.5, veg: true },
      { name: "Greenapple Mojito", price: 150.5, veg: true },
      { name: "Pineapple Mojito", price: 150.5, veg: true },
    ],
  },
  {
    id: "shakes",
    label: "Milkshakes",
    blurb: "Thick, creamy, swirled to the top.",
    items: [
      { name: "Chocolate", price: 190, veg: true },
      { name: "Oreo", price: 190, veg: true },
      { name: "Butterscotch", price: 190, veg: true },
      { name: "Strawberry", price: 190, veg: true },
      { name: "Mango", price: 190, veg: true },
      { name: "Vanilla", price: 190, veg: true },
      { name: "Pista", price: 190, veg: true },
      { name: "Black Currant", price: 190, veg: true },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    blurb: "Big plates. Bigger savings. Built for sharing.",
    items: [
      { name: "2 Crunchy Burger + 1 Leg + 1 Crunchy + Fries + Pepsi", price: 825 },
      { name: "Family Feast — 2 Burgers x2 + 2 Leg + 2 Crunchy + 2 Fries + 500ml Pepsi", price: 1460 },
      { name: "4 Leg + 4 Crunchy + 8 Wings + 2 Fries + 1L Pepsi", price: 1680 },
      { name: "4 Wings + 3 Strips + 4 Nuggets + Pepsi", price: 545 },
      { name: "Veg Party — 5 Smiley + Nuggets + Cheese Balls + Pepsi", price: 585, veg: true },
      { name: "Crunchy Burger Combo + Fries + Pepsi", price: 365 },
      { name: "Tower Burger + Fries + Pepsi", price: 450 },
      { name: "Paneer Burger + Fries + Pepsi", price: 365, veg: true },
      { name: "Veg Wrap + Fries + Pepsi", price: 300, veg: true },
      { name: "Chicken Wrap + 5 Finger + Pepsi", price: 395 },
    ],
  },
];
