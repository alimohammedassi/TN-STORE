class ShoppingCart {
  constructor() {
    this.cart = [];
    this.loadCart();
    this.updateCartCount();
  }

  addItem(product) {
    const existingItem = this.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
    this.updateCartCount();
  }

  removeItem(id) {
    this.cart = this.cart.filter((item) => item.id != id); // مقارنة مرنة لدعم string أو int
    this.saveCart();
    this.updateCartCount();
  }

  updateQuantity(id, quantity) {
    const item = this.cart.find((item) => item.id === id);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.updateCartCount();
    }
  }

  getTotalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
  }

  loadCart() {
    const savedCart = localStorage.getItem("shoppingCart");
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  updateCartCount() {
    const countElement = document.getElementById("cartCount");
    if (countElement) {
      countElement.textContent = this.getTotalItems();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartCount();
  }
}

window.cart = new ShoppingCart();

function showCartModal() {
  const modal = document.createElement("div");
  modal.className = "cart-modal";
  modal.innerHTML = `
      <div class="cart-modal-content">
          <span class="close-cart">&times;</span>
          
          <div class="cart-items-container"></div>
          <div class="cart-total">
              <p>Total: $<span id="cartTotalPrice">${window.cart
                .getTotalPrice()
                .toFixed(2)}</span></p>
              <button id="checkoutBtn">Proceed to Checkout</button>
          </div>
      </div>
  `;

  document.body.appendChild(modal);

  const itemsContainer = modal.querySelector(".cart-items-container");

  if (window.cart.cart.length === 0) {
    itemsContainer.innerHTML = `
          <div class="empty-cart">
              <p>Your cart is empty</p>
          </div>
      `;
  } else {
    window.cart.cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-item-details">
                  <h3>${item.name}</h3>
                  <p>$${item.price.toFixed(2)}</p>
                  <div class="quantity-controls">
                      <button class="quantity-btn minus" data-id="${
                        item.id
                      }">-</button>
                      <span>${item.quantity}</span>
                      <button class="quantity-btn plus" data-id="${
                        item.id
                      }">+</button>
                  </div>
              </div>
              <button class="remove-item" data-id="${item.id}">&times;</button>
          `;
      itemsContainer.appendChild(itemElement);
    });
  }

  // Close modal event
  modal.querySelector(".close-cart").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // Quantity buttons event listeners
  modal.querySelectorAll(".quantity-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      const item = window.cart.cart.find((item) => item.id === id);
      if (e.target.classList.contains("plus")) {
        window.cart.updateQuantity(id, item.quantity + 1);
      } else if (item.quantity > 1) {
        window.cart.updateQuantity(id, item.quantity - 1);
      }
      // Reopen modal to refresh contents
      showCartModal();
    });
  });

  // Remove item buttons event listeners
  modal.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      window.cart.removeItem(id);
      // Reopen modal to refresh contents
      showCartModal();
    });
  });

  // Checkout button event
  modal.querySelector("#checkoutBtn").addEventListener("click", () => {
    // Check if cart is not empty
    if (window.cart.cart.length > 0) {
      // Redirect to payment page
      window.location.href = "/payment.html";
    } else {
      alert("Your cart is empty. Add some products before checkout.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Setup cart icon click event if it exists
  const cartIcon = document.getElementById("cartIcon");
  if (cartIcon) {
    cartIcon.addEventListener("click", showCartModal);
  }

  // If we're on the cart page, display the cart items
  if (window.location.pathname.includes("cart.html")) {
    displayCartItems();
  }
});

// Function to display cart items on the cart.html page
function displayCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalPrice = document.querySelector(".cart-total-price");

  if (cartItemsContainer) {
    // Clear existing content
    cartItemsContainer.innerHTML = "";

    if (window.cart.cart.length === 0) {
      // Show empty cart message
      cartItemsContainer.innerHTML = `
              <div class="empty-cart">
                  <div class="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
              </div>
          `;
    } else {
      // Create cart items list
      window.cart.cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
                  <div class="cart-item-image">
                      <img src="${item.image}" alt="${item.name}">
                  </div>
                  <div class="cart-item-details">
                      <h3 class="cart-item-name">${item.name}</h3>
                      <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                      <div class="cart-item-quantity">
                          <button class="quantity-btn minus" data-id="${
                            item.id
                          }">-</button>
                          <span class="quantity-value">${item.quantity}</span>
                          <button class="quantity-btn plus" data-id="${
                            item.id
                          }">+</button>
                      </div>
                  </div>
                  <button class="remove-cart-item" data-id="${
                    item.id
                  }">Remove</button>
              `;
        cartItemsContainer.appendChild(cartItem);
      });

      // Add event listeners for quantity buttons and remove buttons
      cartItemsContainer.querySelectorAll(".quantity-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(e.target.getAttribute("data-id"));
          const item = window.cart.cart.find((item) => item.id === id);
          if (e.target.classList.contains("plus")) {
            window.cart.updateQuantity(id, item.quantity + 1);
          } else if (item.quantity > 1) {
            window.cart.updateQuantity(id, item.quantity - 1);
          }
          displayCartItems(); // Refresh the cart display
        });
      });

      cartItemsContainer
        .querySelectorAll(".remove-cart-item")
        .forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            window.cart.removeItem(id);
            displayCartItems(); // Refresh the cart display
          });
        });
    }

    // Update total price
    if (cartTotalPrice) {
      cartTotalPrice.textContent = `$${window.cart.getTotalPrice().toFixed(2)}`;
    }

    // Update checkout button to link to payment page
    const checkoutBtn = document.querySelector(".checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        if (window.cart.cart.length > 0) {
          window.location.href = "/payment.html";
        } else {
          alert("Your cart is empty. Add some products before checkout.");
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar functionality
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }

  // Load cart items into the order summary
  loadOrderSummary();

  // Handle form submission
  const paymentForm = document.getElementById("paymentForm");
  if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate form
      if (validateForm()) {
        // Process payment
        processPayment();
      }
    });
  }
});

function loadOrderSummary() {
  const orderItemsContainer = document.getElementById("orderItems");
  const orderTotalElement = document.getElementById("orderTotal");

  // Make sure cart is loaded
  if (window.cart && window.cart.cart) {
    const cartItems = window.cart.cart;

    // Clear existing content
    orderItemsContainer.innerHTML = "";

    if (cartItems.length === 0) {
      // Show empty cart message
      orderItemsContainer.innerHTML = `
              <div class="empty-order">
                <p>Your cart is empty. Add some products before checkout.</p>
                <p><a href="/pages/Products.html">Browse Products</a></p>
              </div>
            `;
      // Update total
      orderTotalElement.textContent = "$0.00";
    } else {
      // Create order items
      cartItems.forEach((item) => {
        const orderItem = document.createElement("div");
        orderItem.className = "order-item";
        orderItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="order-item-details">
                  <h3>${item.name}</h3>
                  <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                  <p><strong>$${(item.price * item.quantity).toFixed(
                    2
                  )}</strong></p>
                  <button class="remove-order-item" data-id="${
                    item.id
                  }">Remove Item</button>
                </div>
              `;
        orderItemsContainer.appendChild(orderItem);
      });

      orderItemsContainer
        .querySelectorAll(".remove-order-item")
        .forEach((btn) => {
          btn.addEventListener("click", function (e) {
            const id = parseInt(e.target.getAttribute("data-id"));
            window.cart.removeItem(id);
            loadOrderSummary();
          });
        });

      // Update total
      const total = window.cart.getTotalPrice();
      orderTotalElement.textContent = `$${total.toFixed(2)}`;
    }
  } else {
    // Cart not loaded
    orderItemsContainer.innerHTML = `
            <div class="empty-order">
              <p>Unable to load cart. Please try again.</p>
              <p><a href="/cart.html">Return to Cart</a></p>
            </div>
          `;
    orderTotalElement.textContent = "$0.00";
  }
}

function validateForm() {
  // Get form elements
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cardName = document.getElementById("cardName").value.trim();
  const expDate = document.getElementById("expDate").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  // Simple validation
  if (
    !fullName ||
    !email ||
    !address ||
    !city ||
    !country ||
    !cardNumber ||
    !cardName ||
    !expDate ||
    !cvv
  ) {
    alert("Please fill in all fields");
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate card number (simple check for digits only)
  const cardNumberRegex = /^\d{16}$/;
  const cleanCardNumber = cardNumber.replace(/\s/g, "");
  if (!cardNumberRegex.test(cleanCardNumber)) {
    alert("Please enter a valid 16-digit card number");
    return false;
  }

  // Validate expiration date (MM/YY format)
  const expDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!expDateRegex.test(expDate)) {
    alert("Please enter a valid expiration date (MM/YY)");
    return false;
  }

  // Validate CVV (3 or 4 digits)
  const cvvRegex = /^[0-9]{3,4}$/;
  if (!cvvRegex.test(cvv)) {
    alert("Please enter a valid CVV");
    return false;
  }

  return true;
}
document.getElementById("email").addEventListener("input", function () {
  const email = this.value.trim();
  const emailError = document.getElementById("emailError");

  if (email.length === 0) {
    this.classList.remove("invalid");
    emailError.style.display = "none";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/; // Basic international phone format

  if (!emailRegex.test(email) && !phoneRegex.test(email)) {
    document.getElementById("email").classList.add("invalid");
    emailError.style.display = "block";
    return false;
  }

  // Rest of your validation code...
  return true;
});

function processPayment() {
  // In a real application, you would send the payment data to a server
  // For this demo, we'll just show a success message and clear the cart

  // Create order object with cart items and form data
  const order = {
    items: window.cart.cart,
    total: window.cart.getTotalPrice(),
    customer: {
      name: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      address: document.getElementById("address").value.trim(),
      city: document.getElementById("city").value.trim(),
      country: document.getElementById("country").value.trim(),
    },
    paymentMethod: "Credit Card",
    date: new Date().toISOString(),
  };

  // Save order to localStorage (in a real app, this would go to a database)
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear the cart
  window.cart.clearCart();

  // Show success message
  alert("Payment successful! Your order has been placed.");

  // Redirect to order confirmation page or home page
  window.location.href = "/index.html";
}
fetch("../NavBar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching navbar:", error));
