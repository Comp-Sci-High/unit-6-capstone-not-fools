// Cart array to store items
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to update cart UI
function updateCartUI() {
  const cartCount = document.querySelector("#cart button");
  const cartList = document.querySelector("#cart-list");
  const cartItems = document.querySelector("#cart-items");

  // Update the cart count
  cartCount.textContent = `Cart (${cart.length})`;

  // Clear the cart list before repopulating
  cartList.innerHTML = '';

  // Add each item in the cart to the cart UI
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    
    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);

    cartList.appendChild(li);
  });

  // Show cart items
  cartItems.style.display = cart.length > 0 ? 'block' : 'none';

  // Update sessionStorage with the current cart state
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart
function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateCartUI();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Function to toggle the cart display
function toggleCart() {
  const cartItems = document.querySelector("#cart-items");
  cartItems.style.display = cartItems.style.display === 'block' ? 'none' : 'block';
}

// Clear cart functionality
document.getElementById('clear-cart').addEventListener('click', () => {
  cart = [];
  updateCartUI();
});


// Initial cart UI update
updateCartUI();

async function deleteMagic(id) {
  await fetch (`/delete/` + id, {method: 'DELETE'});
  window.location.href = "/magic"
}

async function deleteYugioh(id) {
  await fetch (`/delete/` + id, {method: 'DELETE'});
  window.location.href = "/yugioh"
}