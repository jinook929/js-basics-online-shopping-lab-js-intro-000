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
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  let cartItems = "In your cart, you have";
  if(cart.length === 1) {
    return `${cartItems} ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  
  for(let i = 0; i < cart.length; i++) {
    if(i !== (cart.length - 1)) {
      cartItems += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    } else {
      cartItems += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
  }
  
  return cartItems;
}

function total() {
  // write your code here
  let total = 0;
  for(let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 
}

function placeOrder(cardNumber) {
  // write your code here
}
