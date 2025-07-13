function avoirPlus(bookTitle) {
    alert(`More details about "${bookTitle}" are coming soon! This book is a masterpiece in its genre.`);
    // Optional: Redirect to a book details page
    // window.location.href = `/book-details.html?title=${encodeURIComponent(bookTitle)}`;
}

function addToCart(bookTitle, price) {
    alert(`"${bookTitle}" has been added to your cart for $${price}!`);
}
