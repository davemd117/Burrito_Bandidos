let customerCart = [];
let currentCustomerCart = JSON.parse(localStorage.getItem("purchaseItems"));
let cartPoints = JSON.parse(localStorage.getItem("cartPoints"));
let customerPoints = JSON.parse(localStorage.getItem("Current User"));
let totalPoints = 0;
let points = [];
totalPoints = customerPoints[0].points + cartPoints;
points.push(totalPoints);
localStorage.setItem("useCredit", true);
localStorage.setItem('usePoints', false);
localStorage.setItem("useDelivery", true);
let tip = 0.00;
localStorage.setItem("tip", tip);

currentCustomerCart.forEach((item) => {
   let cartItems = document.querySelector(".cartItems");
    let cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
    <div class="cartItemImg">
        <img src="${item.image}" alt="">
    </div>
    <div class="cartItemName">
        <h4>${item.name}</h4>
    </div>
    <div class="cartItemQuantity"
    <div><input type="number" class="quantity" value="${item.quantity}" min="1"></div>
    </div>
    <div class="cartItemPrice">
        <h4>$${item.price}</h4>
    </div>
    <div class="removeCartItem">
        <ion-icon class="deleteFromCartBtn" name="close-circle-outline"></ion-icon>
    </div>
    `;
    cartItems.appendChild(cartItem);
    totalPrice();
    

    customerCart.push({
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
    });
    totalPrice();
});
console.log(customerCart);


// remove item from cart
const removeFromCartBtn = document.querySelectorAll(".deleteFromCartBtn");
removeFromCartBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let item = e.target;
        let itemParent = item.parentElement.parentElement;
        itemParent.remove();
        let itemIndex = customerCart.findIndex((item) => {
            return item.name === itemParent.querySelector(".cartItemName h4").innerText;
        });
        customerCart.splice(itemIndex, 1);
        totalPrice();
        console.log(customerCart);
    });
});



function totalPrice() {
    var cart = document.getElementsByClassName("cartItems")[0];
    var cartItem = cart.querySelectorAll(".cartItem");
    var subTotal = 0;
    var tax = 0;
    var total = 0;
    var tip = localStorage.getItem("tip");
    tip = parseFloat(tip.replace("$", ""));
    for (var i = 0; i < cartItem.length; i++) {
        var cartItemPrice = cartItem[i].querySelector(".cartItemPrice h4");
        var cartItemQuantity = cartItem[i].querySelector(".quantity");
        var price = parseFloat(cartItemPrice.innerText.replace("$", ""));
        var quantity = cartItemQuantity.value;
        subTotal += (price * quantity);
        tax = subTotal * .06
        total = subTotal + tax + tip;
    }
    document.getElementsByClassName("total")[0].innerText = "Total: $" + total.toFixed(2);
    document.getElementsByClassName("subTotal")[0].innerText = "Subtotal: $" + subTotal.toFixed(2);
    document.getElementsByClassName("tax")[0].innerText = "Tax: $" + tax.toFixed(2);
    document.getElementsByClassName("tipAmount")[0].innerText = "Tip: $" + tip.toFixed(2);
    }

var quantityInputs = document.getElementsByClassName("quantity");
for (var i = 0; i < quantityInputs.length; i++) {
  quantity = quantityInputs[i];
  var inputChange = quantityInputs[i];
  inputChange.addEventListener("change", quantityChanged);
}
function quantityChanged(e) {
    var quantityInputChanged = e.target;
    if (quantityInputChanged.value <= 0) {
      quantityInputChanged.value = 1;
    }
    totalPrice();
  }


//form requirements/validation

//billing info form
var billingName = document.getElementById('name');
var address = document.getElementById('billingAddress');
var email = document.getElementById('email');
var city = document.getElementById('city');
var state = document.getElementById('state');
var zip = document.getElementById('zip');
var phone = document.getElementById('phone');

var submitBtn1 = document.getElementById('submitBtn1');
var submitBtn2 = document.getElementById('submitBtn2');

//payment info form
var cardNumber = document.getElementById('cardNumber');
var cardName = document.getElementById('cardName');
var cardExpMonth = document.getElementById('cardExpMonth');
var cardExpYear = document.getElementById('cardExpYear');
var cardCvv = document.getElementById('cardCvv');
var tip1 = document.getElementById('tip');

//shipping info form
var shippingName = document.getElementById('shippingName');
var shippingAddress = document.getElementById('shippingAddress');
var shippingCity = document.getElementById('shippingCity');
var shippingState = document.getElementById('shippingState');
var shippingZip = document.getElementById('shippingZip');
var shippingEmail = document.getElementById('shippingEmail');
var shippingMethod = document.getElementById('shippingMethod');


function validateForm() {
    if (billingName.value == "" || address.value == "" || email.value == "" || city.value == "" || state.value == "" || zip.value == "" || email.value.includes("@") == false) {
        alert("Please make sure to fill out all fields properly");
        return false;
    } else {
        return true;
    }
}

function validateForm2() {
        if (cardNumber.value == "" || cardName.value == "" || cardExpMonth.value == "" || cardExpYear.value == "" || cardCvv.value == "" || cardCvv.value.length < 3 || cardNumber.value.length < 16 || cardExpMonth.value.length < 2 || cardExpYear.value.length < 4) {
        alert("Please make sure to fill out all fields properly");
        return false;
    } else {
        return true;
    }
}


function validateForm3() {
    if (shippingName.value == "" || shippingAddress.value == "" || shippingCity.value == "" || shippingState.value == "" || shippingZip.value == "" || shippingEmail.value == "" || shippingMethod.value == "" || shippingEmail.value.includes("@") == false || phone.value == "") {
        alert("Please make sure to fill out all fields properly");
        return false;
    } else {
        return true;
    }
}

//submit btns
submitBtn1.addEventListener('click', function() {
    let tipAmount = document.querySelector("#tip").value;
    if (tipAmount.includes("$") && !isNaN(tipAmount.replace("$", ""))) {
        tipAmount = parseFloat(tipAmount.replace("$", ""));
        localStorage.setItem("tip", tipAmount);
       
    } else {
        localStorage.setItem("tip", 0);
    }
    if (validateForm() == true && validateForm2() == true) {
        let container = document.querySelector('.container');
        container.classList.add("containerHidden");
        container.classList.remove("containerActive");
        let container2 = document.querySelector('.container2');
        container2.classList.add("containerActive");
        container2.classList.remove("containerHidden");
        totalPrice();    
    }
});

let customerPointsSelect = document.getElementById('customerPoints');
customerPointsSelect.addEventListener('change', function() {
    if(customerPointsSelect.value == "usePoints") {
        localStorage.setItem("usePoints", true);
    } else {
        localStorage.setItem("usePoints", false);
    }
});

let deliveryOrPickup = document.getElementById('shippingMethod');
deliveryOrPickup.addEventListener('change', function() {
    if(deliveryOrPickup.value == "delivery") {
        localStorage.setItem("useDelivery", true);
    } else {
        localStorage.setItem("useDelivery", false);
    }
});


submitBtn2.addEventListener('click', function() {
    let quantityInputs = document.querySelectorAll('.quantity');
quantityInputs.forEach((input) => {
    let itemIndex = customerCart.findIndex((item) => {
        return item.name === input.parentElement.parentElement.querySelector(".cartItemName h4").innerText;
    });
    customerCart[itemIndex].quantity = input.value;
    if (validateForm3() == true) {
        localStorage.setItem('totalPoints', points);
        localStorage.removeItem('cartItems');
        localStorage.setItem('finalCart', JSON.stringify(customerCart));
        var specialInstructions = document.getElementById('specialInstructions').value;
        localStorage.setItem('specialInstructions', JSON.stringify(specialInstructions)); 
        window.location.href = "receipt.html";  
    }
});
});

const creditBtn = document.querySelector('.creditBtn');
const cashBtn = document.querySelector('.cashBtn');

cashBtn.addEventListener('click', function() {
    cashBtn.classList.add("paymentOptionSelected");
    creditBtn.classList.remove("paymentOptionSelected");
    cardCvv.value = "Cash expected on delivery";
    cardNumber.value = "Cash expected on delivery";
    cardName.value = "Cash expected on delivery";
    cardExpMonth.value = "Cash expected on delivery";
    cardExpYear.value = "Cash expected on delivery";
    tip1.value = "$0.00";
    localStorage.setItem("useCredit", false);
});

creditBtn.addEventListener('click', function() {
    cashBtn.classList.remove("paymentOptionSelected");
    creditBtn.classList.add("paymentOptionSelected");
    cardCvv.value = "";
    cardNumber.value = "";
    cardName.value = "";
    cardExpMonth.value = "";
    cardExpYear.value = "";
    localStorage.setItem("useCredit", true);
});

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
        $(".side-bar").hide()
 
 }

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


 checkForUser()

