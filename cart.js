// ------------------------------- Variables ------------------------------- 
const cart = document.querySelector('#cartItems');
const cartTotal = document.getElementById('cartTotal');
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// ------------------------------- Cart ------------------------------- 
function updateCart() {
    renderCart();
    renderCartTotal();
};

function renderCart() {
    cart.innerHTML = "";
    let cartPoints = 0;

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
        cartPoints += (10 * cartItem.quantity);
    });
    localStorage.setItem("cartPoints", JSON.stringify(cartPoints));
    console.log(cartPoints)
};

function renderCartTotal() {
    let total = 0;

    cartItems.forEach((cartItem) => {
        total += cartItem.price * cartItem.quantity
    });

    cartTotal.innerHTML = `$${total.toFixed(2)}`;
    localStorage.setItem("orderSubTotal", JSON.stringify(total));
};

function changeCartItemQuantity(action, id) {
    cartItems = cartItems.map((cartItem) => {       //NOTE
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
    updateCart();
};

function removeFromCart(id) {
    cartItems = cartItems.filter( (cartItem) => cartItem.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
};

function purchaseCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty");
        return
    }
    else {
        localStorage.setItem("purchaseItems", JSON.stringify(cartItems));
        window.location.href = "checkout-payment.html"
    }
};
updateCart();
console.log(cartItems)

// ------------------------------- Hamburger Menu ------------------------------- 
$('#ham-menu').click(() => {
    openNav()
 
 })
 $('.exit-sidebar').click(() => {
     closeNav()
  })
 function openNav(){
     $(".side-bar").removeClass("animate__slideOutRight")
     $(".side-bar").show()
 }
 function closeNav(){
     $(".side-bar").addClass("animate__slideOutRight")
 }
//  CHECK FOR USER TO HIDE LOGIN BUTTON

// ------------------------------- Signout ------------------------------- 
function checkForUser(){
    logbtn = document.getElementById("go-to-login")
    profbtn = document.getElementById("go-to-profile")
    
    if(window.localStorage.getItem("Current User")){
        let currentUser = JSON.parse(localStorage.getItem('Current User'));
        profbtn.style.display = "block"
        // logbtn.style.display = "none"
        profbtn.innerHTML = `${currentUser[0].firstName}\'s Profile`
        // POPULATE PROFILE
        let usersname = currentUser[0].firstName
        let usersemail = currentUser[0].email
        let userspoints = currentUser[0].points
        let displayname = document.getElementById("users-name")
        let displayemail = document.getElementById("users-email")
        displaypoints = document.getElementById("users-points")
        displayname.innerHTML = usersname
        displayemail.innerHTML = usersemail
        displaypoints.innerHTML = `Points: ${userspoints}`
    }
    else{
        console.log("NOT There")
        profbtn.style.display = "none"
        // logbtn.style.display = "block"
    }
}
$("#go-to-profile").click(() => {
    profile = document.getElementById("profile-form")
    profile.style.transform = "scale(1)"
 })
 $("#exit-profile").click(() => {
    profile = document.getElementById("profile-form")
    profile.style.transform = "scale(0)"
 })
$("#sign-out").click(() => {
    localStorage.removeItem("Current User")
 })
 checkForUser()