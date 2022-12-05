const cart = document.querySelector('#cartItems');
const cartTotal = document.getElementById('cartTotal');
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function updateCart() {
    renderCart();
    renderCartTotal();
}

function renderCart() {
    cart.innerHTML = "";
    let cartPoints = 0
    cartItems.forEach((cartItem) => {
        let subTotal = cartItem.price * cartItem.quantity
        cart.innerHTML += `
            <div class="cartItem">
                <div class="cartItemFlex">
                    <img  class="cartItemImage" src="${cartItem.image}" alt="">
                </div>
                <div class="cartItemFlex">
                    <h4 class="cartItemName">${cartItem.name}</h3>
                    <p class="cartItemDescription">${cartItem.description}</p>
                    <div class="cartQuantityContainer">
                    <div class="removeQtyBtn" onclick="changeCartItemQuantity('minus', ${cartItem.id})">-</div>
                    <div class="cartItemQuantity">${cartItem.quantity}</div>
                    <div class="addQtyBtn" onclick="changeCartItemQuantity('plus', ${cartItem.id})">+</div>
                    </div>
                </div>
                <div class="cartItemFlex">
                    <p class="cartItemPrice">$${subTotal.toFixed(2)}</p>
                    <div class="cartItemRemoveButton" onclick="removeFromCart(${cartItem.id})">Remove</div>
                </div>
            </div>
        `;
        cartPoints += (10 * cartItem.quantity)
    });
    localStorage.setItem("cartPoints", JSON.stringify(cartPoints));
    console.log(cartPoints)
};

function renderCartTotal() {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
        totalPrice += cartItem.price * cartItem.quantity
    });

    cartTotal.innerHTML = `$${totalPrice.toFixed(2)}`
}

function changeCartItemQuantity(action, id) {
    cartItems = cartItems.map((cartItem) => {
        let quantity = cartItem.quantity;

        if (cartItem.id === id) {
            if (action === "minus" && quantity > 1) {
                quantity--;
            }
            else if (action === "plus") {
                quantity++;
            }
        }

        return {
            ...cartItem,
            quantity,
        };
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Set localStorage here as well?

    updateCart();
}

function removeFromCart(id) {
    cartItems = cartItems.filter( (cartItem) => cartItem.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // need to identify the cart item and set it's quantity back to one...or I thought I did
    updateCart();
}

function purchaseCart() {
    let purchaseItems = [];
    purchaseItems = cartItems
    localStorage.setItem("purchaseItems", JSON.stringify(cartItems));
    window.location.href = "checkout-payment.html"
    // just need to href to the purchase page
}

updateCart();