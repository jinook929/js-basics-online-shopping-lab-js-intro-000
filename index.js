var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.random() * (100 - 1) + 1;
 cart.push({'itemName': item, 'itemPrice': price});
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let cartItems = 
  return `In your cart, you have ${cartItems}.
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
