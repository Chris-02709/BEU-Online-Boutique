// 🔁 Load Cart from Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ➕ Add Item to Cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showCartNotification(product.name);
}

// ❌ Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

// 🔁 Update Quantity
function updateQuantity(index, quantity) {
    if (quantity < 1) {
        removeFromCart(index);
    } else {
        cart[index].quantity = quantity;
        saveCart();
        renderCart();
    }
}

// 💾 Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// 🧮 Update Cart Count in Navbar
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = count;
}

// ✅ Show Add to Cart Notification
function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `✓ ${productName} added to cart`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// 🛒 Render Cart Page
function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    container.innerHTML = cart.length ? '' : '<p>Your cart is empty</p>';

    cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>KES ${item.price.toLocaleString()}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        container.appendChild(itemEl);
    });

    if (cart.length) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalEl = document.createElement('div');
        totalEl.className = 'cart-total';
        totalEl.innerHTML = `<h3>Total: KES ${total.toLocaleString()}</h3>`;
        container.appendChild(totalEl);
    }

    // 🧠 Event Delegation
    container.addEventListener('click', e => {
        const index = parseInt(e.target.dataset.index);
        if (e.target.classList.contains('minus')) updateQuantity(index, cart[index].quantity - 1);
        if (e.target.classList.contains('plus')) updateQuantity(index, cart[index].quantity + 1);
        if (e.target.classList.contains('remove-btn')) removeFromCart(index);
    });

    container.addEventListener('change', e => {
        if (e.target.classList.contains('quantity-input')) {
            const index = parseInt(e.target.dataset.index);
            const newQty = parseInt(e.target.value) || 1;
            updateQuantity(index, newQty);
        }
    });
}

// 🚀 Init Cart on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('cart-items')) renderCart();
});

// 🛒 Buy Now Button Logic (Syncs with products.js)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const product = window.products?.find(p => p.id === productId);

        if (product) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            });

            // UX Feedback
            e.target.textContent = "✓ Added";
            e.target.disabled = true;
            setTimeout(() => {
                e.target.textContent = "Buy Now";
                e.target.disabled = false;
            }, 1000);
        }
    }
});
