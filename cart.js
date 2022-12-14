// ------------------------------- Variables ------------------------------- 
const cart = document.querySelector('#cartItems');
const cartTotal = document.getElementById('cartTotal');
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var currentUser = JSON.parse(localStorage.getItem("Current User"));

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
                <div class="cartItemFlex cart-left">
                    <img  class="cartItemImage" src="${cartItem.image}" alt="">
                </div>
                <div class="cartItemFlex cart-middle">
                    <h4 class="cartItemName">${cartItem.name}</h3>
                    <p class="cartItemDescription">${cartItem.description}</p>
                    <div class="cartQuantityContainer">
                    <div class="removeQtyBtn" onclick="changeCartItemQuantity('minus', ${cartItem.id})">-</div>
                    <div class="cartItemQuantity">${cartItem.quantity}</div>
                    <div class="addQtyBtn" onclick="changeCartItemQuantity('plus', ${cartItem.id})">+</div>
                    </div>
                </div>
                <div class="cartItemFlex cart-right">
                    <p class="cartItemPrice cart-price">$${subTotal.toFixed(2)}</p>
                    <div class="cartItemRemoveButton " onclick="removeFromCart(${cartItem.id})">Remove</div>
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

function setFavorite() {
    currentUser[0].favorites = cartItems;
    localStorage.setItem('Current User', JSON.stringify(currentUser));
};

function renderFavorite() {
    if (currentUser[0].favorites === "") {
        alert("No favorite order found for this user")
        return
    };

    cartItems = currentUser[0].favorites;
    cart.innerHTML = "";
    let cartPoints = 0;

    cartItems.forEach((cartItem) => {
        let subTotal = cartItem.price * cartItem.quantity

        cart.innerHTML += `
            <div class="cartItem">
                <div class="cartItemFlex cart-left">
                    <img  class="cartItemImage" src="${cartItem.image}" alt="">
                </div>
                <div class="cartItemFlex cart-middle">
                    <h4 class="cartItemName">${cartItem.name}</h3>
                    <p class="cartItemDescription">${cartItem.description}</p>
                    <div class="cartQuantityContainer">
                    <div class="removeQtyBtn" onclick="changeCartItemQuantity('minus', ${cartItem.id})">-</div>
                    <div class="cartItemQuantity">${cartItem.quantity}</div>
                    <div class="addQtyBtn" onclick="changeCartItemQuantity('plus', ${cartItem.id})">+</div>
                    </div>
                </div>
                <div class="cartItemFlex cart-right">
                    <p class="cartItemPrice cart-price">$${subTotal.toFixed(2)}</p>
                    <div class="cartItemRemoveButton " onclick="removeFromCart(${cartItem.id})">Remove</div>
                </div>
            </div>
        `;
        cartPoints += (10 * cartItem.quantity);
    });
    localStorage.setItem("cartPoints", JSON.stringify(cartPoints));
    console.log(cartPoints)
};

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
        // POPULATE PROFILE DISPLAY
        let usersname = currentUser[0].firstName
        let usersemail = currentUser[0].email
        let userspoints = currentUser[0].points
        let usersphone = currentUser[0].phone
        let usersaddress = currentUser[0].address
        // let favs = JSON.parse(currentUser[0].favorites)
        // console.log(favs)
        let displayname = document.getElementById("users-name")
        let displayemail = document.getElementById("users-email")
        let displayphone = document.getElementById("users-phone")
        let displayaddress = document.getElementById("users-addy")
        let displaypoints = document.getElementById("users-points")
        let displayfavs = document.getElementById("favs")
        displayname.innerHTML = usersname
        displayemail.innerHTML = usersemail
        displayphone.innerHTML = usersphone
        displayaddress.innerHTML = usersaddress
        displaypoints.innerHTML = `Points: ${userspoints}`
        // displayfavs.innerHTML = favs
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
window.onload =  checkForUser()