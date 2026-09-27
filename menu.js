const MENU = [
  { id: "milk", name: "Milk Teas", tag: "the classics, done right", price: 5.5, items: [
    "pearl-milk-tea","earl-grey-milk-tea","jasmine-milk-tea","roasted-oolong-milk-tea","thai-milk-tea","okinawa-milk-tea",
    "brown-sugar-latte","classical-rose-milk-tea","caramel-milk-tea","winter-melon-milk-tea","coconut-milk-tea","honeydew-milk-tea",
    "ballet-chocolate-milk-tea","peppermint-milk-tea","royal-fresh-milk-tea","ginger-milk-tea","pearl-jasmine-milk-tea","taro-pearl-milk-tea",
    "red-bean-milk-tea","grass-jelly-milk-tea","grass-jelly-jasmine-milk-tea","french-pudding-milk-tea","oreo-potted-milk-tea",
    "snow-globe-pearl-milk-tea","milk-tea-pearl-coffee-jelly","matcha-fresh-milk","matcha-strawberry-fresh-milk"
  ]},
  { id: "fruit", name: "Fruit Teas", tag: "bright, cold, loud", price: 5.75, items: [
    "lychee-black-tea","lychee-green-tea","guava-green-tea","guava-royal-tea","apple-black-tea","apple-royal-tea","mango-royal-tea",
    "mango-pineapple-royal-tea","honey-peach-royal-tea","grapefruit-royal-tea","passion-fruit-royal-tea","jadeite-royal-tea",
    "jadeite-lemon-tea","lemon-bomb-green-tea","ruby-strawberry-lemon-tea","guava-strawberry-burst-tea","mango-strawberry-bliss-tea",
    "dragon-strawberry-yogurt-tea","yogurt-green-tea","green-tea-mango-ice-cream","elegant-lady-rose-tea","kumquat-lemon-tea"
  ]},
  { id: "smoothie", name: "Smoothies", tag: "blended to order", price: 6.25, items: [
    "mango-smoothie","strawberry-smoothie","lychee-smoothie","guava-smoothie","lemon-smoothie","apple-smoothie","honey-peach-smoothie",
    "honeydew-smoothie","passion-fruit-smoothie","pina-colada-smoothie","mango-strawberry-smoothie","guava-strawberry-smoothie",
    "strawberry-banana-smoothie","strawberry-lemonade-smoothie","mango-lemonade-smoothie","grapefruit-lemonade-smoothie",
    "orange-creamsicle-smoothie","watermelon-breeze-smoothie","strawberry-vanilla-yogurt-smoothie"
  ]},
  { id: "shake", name: "Milkshakes", tag: "thick. very thick.", price: 6.5, items: [
    "oreo-milkshake","taro-milkshake","matcha-milkshake","matcha-strawberry-milkshake","chocolate-milkshake","caramel-milkshake",
    "coconut-milkshake","strawberry-milkshake","strawberry-banana-milkshake","thai-tea-milkshake","vietnamese-coffee-milkshake",
    "red-bean-milkshake","passion-fruit-milkshake","avocado-milkshake"
  ]},
  { id: "cream", name: "Cream Top", tag: "salted cheese foam on tea", price: 6.25, items: [
    "black-tea-topped-cream","green-tea-topped-cream","oolong-tea-topped-cream","jadeite-tea-topped-cream",
    "winter-melon-topped-cream","mango-royal-tea-topped-cream"
  ]},
  { id: "coffee", name: "Coffee & Hot", tag: "vietnamese drip + warm things", price: 5.25, items: [
    "milk-vietnamese-coffee","black-vietnamese-coffee","milk-vietnamese-coffee-sea-salt-cream","hot-milk-vietnamese-coffee",
    "hot-black-vietnamese-coffee","hot-chocolate","hot-ginger-milk-tea","hot-ginger-tea","ginger-tea","earl-grey-tea",
    "roasted-oolong-tea","jasmine-green-tea","honey-green-tea"
  ]},
  { id: "light", name: "Light & Herbal", tag: "no milk, no fuss", price: 5.0, items: [
    "winter-melon","winter-melon-lemon","honey-aloe","elegant-rose-aloe","honey-grass-jelly","kumquat-with-basil-seeds"
  ]}
];

const NAME_FIX = {
  "matcha-fresh-milk": "Matcha Fresh Milk",
  "pina-colada-smoothie": "Piña Colada Smoothie",
  "milk-tea-pearl-coffee-jelly": "Milk Tea with Pearl & Coffee Jelly",
  "green-tea-mango-ice-cream": "Green Tea with Mango Ice Cream",
  "milk-vietnamese-coffee-sea-salt-cream": "Viet Coffee with Sea Salt Cream",
  "kumquat-with-basil-seeds": "Kumquat with Basil Seeds",
  "oreo-potted-milk-tea": "Oreo Potted Milk Tea",
  "black-tea-topped-cream": "Black Tea Cream Top",
  "green-tea-topped-cream": "Green Tea Cream Top",
  "oolong-tea-topped-cream": "Oolong Cream Top",
  "jadeite-tea-topped-cream": "Jadeite Cream Top",
  "winter-melon-topped-cream": "Winter Melon Cream Top",
  "mango-royal-tea-topped-cream": "Mango Royal Cream Top"
};

const PRICE_FIX = { "avocado-milkshake": 6.95, "brown-sugar-latte": 5.95, "snow-globe-pearl-milk-tea": 6.25 };

const FEATURED = ["brown-sugar-latte","mango-strawberry-bliss-tea","oreo-milkshake","winter-melon-topped-cream","lychee-green-tea","matcha-strawberry-fresh-milk"];

function drinkName(slug) {
  if (NAME_FIX[slug]) return NAME_FIX[slug];
  return slug.split("-").map(w => w === "vietnamese" ? "Viet" : w[0].toUpperCase() + w.slice(1)).join(" ");
}
