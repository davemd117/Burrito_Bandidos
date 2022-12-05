let customerCart = [];
let currentCustomerCart = JSON.parse(localStorage.getItem("purchaseItems"));

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
        quantity: item.quantity

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
    for (var i = 0; i < cartItem.length; i++) {
        var cartItemPrice = cartItem[i].querySelector(".cartItemPrice h4");
        var cartItemQuantity = cartItem[i].querySelector(".quantity");
        var price = parseFloat(cartItemPrice.innerText.replace("$", ""));
        var quantity = cartItemQuantity.value;
        tax += (subTotal * .06)
        subTotal = subTotal + (price * quantity);
        total = subTotal + tax;
    }
    document.getElementsByClassName("total")[0].innerText = "Total: $" + total.toFixed(2);
    document.getElementsByClassName("subTotal")[0].innerText = "Subtotal: $" + subTotal.toFixed(2);
    document.getElementsByClassName("tax")[0].innerText = "Tax: $" + tax.toFixed(2);
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

// submit button one is on billing/payment form this should hide payment form and show shipping form on click if forms filled out
var submitBtn1 = document.getElementById('submitBtn1');
// submit button two is on shipping form this should redirect to confirmation page on click if forms filled out
var submitBtn2 = document.getElementById('submitBtn2');

//payment info form
var cardNumber = document.getElementById('cardNumber');
var cardName = document.getElementById('cardName');
var cardExpMonth = document.getElementById('cardExpMonth');
var cardExpYear = document.getElementById('cardExpYear');
var cardCvv = document.getElementById('cardCvv');

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
    // let paymentInfoForm = document.getElementById('paymentInfoForm');
    // let paymentFormInputs = paymentInfoForm.querySelectorAll('input');
    // come back later and see if can make cash or credit option validation work
    if (validateForm() == true && validateForm2() == true) {
        let container = document.querySelector('.container');
        container.classList.add("containerHidden");
        container.classList.remove("containerActive");
        let container2 = document.querySelector('.container2');
        container2.classList.add("containerActive");
        container2.classList.remove("containerHidden");
    }
});

submitBtn2.addEventListener('click', function() {
    if (validateForm3() == true) {
        // going to need to save cart items to local storage and then redirect to confirmation page
        localStorage.setItem('finalCart', JSON.stringify(customerCart));
        window.location.href = "receipt.html";
    }
});




// jquery for #cashBtn
// $(".cashBtn").click(function() {
//     $("#paymentInfoForm input").attr("disabled", true);
// });

// // jquery for #cardBtn
// $(".creditBtn").click(function() {
//     $("#paymentInfoForm input").removeAttr("disabled", false);
// });


// $('.cashBtn').click(function() {
//     $('#paymentInfoForm input').css('opacity', '0.5');
// });

