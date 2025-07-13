let cart = [];

function addToCart(bookTitle, price) {
    const item = cart.find(book => book.title === bookTitle);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ title: bookTitle, price, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);

        total += item.price * item.quantity;
    });

    totalPrice.textContent = `Total: $${total}`;
}
