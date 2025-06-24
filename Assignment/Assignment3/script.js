const products = [
  { id: 1, name: "Milk", price: 28 },
  { id: 2, name: "Bread", price: 30 },
  { id: 3, name: "Butter", price: 55 },
  { id: 4, name: "Eggs (6 pcs)", price: 34 },
  { id: 5, name: "Cheese Slice", price: 60 },
  { id: 6, name: "Tea Packet", price: 20 },
  { id: 7, name: "Sugar", price: 25 },
  { id: 8, name: "Salt", price: 18 },
  { id: 9, name: "Oil Pouch", price: 95 },
  { id: 10, name: "Rice (1kg)", price: 32 },
  { id: 11, name: "Wheat Flour (1kg)", price: 33 },
  { id: 12, name: "Soap", price: 27 },
  { id: 13, name: "Shampoo ", price: 50 },
  { id: 14, name: "Toothpaste", price: 38 },
  { id: 15, name: "Toothbrush", price: 29 },
  { id: 16, name: "Chips Packet", price: 22 },
  { id: 17, name: "Chocolate Bar", price: 35 },
  { id: 18, name: "Juice Box", price: 31 },
  { id: 19, name: "Detergent", price: 42 },
  { id: 20, name: "Handwash", price: 37 }
];

//  Add to Cart Those  products priced at ₹40 or less, quantity 2
const cart = products
  .filter(product => product.price <= 40)
  .map(product => ({ ...product, quantity: 2 }));

console.log("Cart:", cart);

// Create Order
const order = {
  id: "HTRM5723491",
  items: cart,
  total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
};

console.log("Order Created:", order);

//  Payment
let wallet = 1000;

if (wallet >= order.total) {
  wallet -= order.total;
  console.log(`Payment Successful! Paid ₹${order.total}`);

  //  Order Summary
  const summary = order.items.map(item => ({
    name: item.name,
    price: item.price,
    qty: item.quantity,
    total: item.price * item.quantity
  }));
  console.log("Order Summary:", summary);

  //  Wallet Balance
  console.log("Wallet Balance after purchase:", wallet);
} else {
  console.log("Payment Failed: Insufficient balance");
}