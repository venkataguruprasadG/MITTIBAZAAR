// Cart functionality for MittiBazaar

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('mittibazaar-cart');
    return cart ? JSON.parse(cart) : {};
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('mittibazaar-cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(id, name, price) {
    const cart = getCart();

    if (cart[id]) {
        cart[id].quantity += 1;
    } else {
        cart[id] = {
            id: id,
            name: name,
            price: parseFloat(price),
            quantity: 1
        };
    }

    saveCart(cart);
    alert(name + ' added to cart!');
}

// Remove item from cart
function removeFromCart(id) {
    const cart = getCart();
    delete cart[id];
    saveCart(cart);
    location.reload();
}

// Update quantity in cart
function updateQuantity(id, newQuantity) {
    const cart = getCart();
    const qty = parseInt(newQuantity) || 1;

    if (qty > 0) {
        cart[id].quantity = qty;
        saveCart(cart);
        location.reload();
    }
}

// Calculate cart total
function calculateCartTotal() {
    const cart = getCart();
    let total = 0;

    for (let id in cart) {
        total += cart[id].price * cart[id].quantity;
    }

    return total;
}

// Get cart item count
function getCartCount() {
    const cart = getCart();
    let count = 0;

    for (let id in cart) {
        count += cart[id].quantity;
    }

    return count;
}
