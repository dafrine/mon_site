let cartItems = [];
let totalPrice = 0;

function addToCart(title, price) {
    const cartList = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("empty-cart-message");
    const totalPriceElement = document.getElementById("total-price");

    // Add item to cart
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span>${title} - $${price}</span>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(this, ${price})">Remove</button>
    `;
    cartList.appendChild(li);

    // Update total price
    totalPrice += price;
    totalPriceElement.textContent = `Total: $${totalPrice}`;
    totalPriceElement.classList.add("animate-price");

    // Show/hide empty cart message
    if (cartList.children.length > 0) {
        emptyMessage.style.display = "none";
    }
}

function removeFromCart(button, price) {
    const cartList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Remove item from cart
    button.parentElement.remove();

    // Update total price
    totalPrice -= price;
    totalPriceElement.textContent = `Total: $${totalPrice}`;
    totalPriceElement.classList.add("animate-price");

    // Show empty cart message if no items remain
    if (cartList.children.length === 0) {
        document.getElementById("empty-cart-message").style.display = "block";
    }
}

// Remove animation class after animation ends
document.getElementById("total-price").addEventListener("animationend", function () {
    this.classList.remove("animate-price");
});
