//form requirements/validation
var form = document.getElementById('billingInfoForm');
var form2 = document.getElementById('shippingInfoForm');
var form3 = document.getElementById('paymentInfoForm');

//billing info form
var billingName = document.getElementById('name');
var address = document.getElementById('billingAddress');
var email = document.getElementById('email');
var city = document.getElementById('city');
var state = document.getElementById('state');
var zip = document.getElementById('zip');
var phone = document.getElementById('phone');

//submit btns
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

//form validation
function validateForm() {
    if (billingName.value == "" || address.value == "" || email.value == "" || city.value == "" || state.value == "" || zip.value == "" || email.value.includes("@") == false) {
        alert("Please fill out all fields");
        return false;
    } else {
        return true;
    }
}

function validateForm2() {
    if (cardNumber.value == "" || cardName.value == "" || cardExpMonth.value == "" || cardExpYear.value == "" || cardCvv.value == "" || cardCvv.value.length < 3 || cardNumber.value.length < 16 || cardExpMonth.value.length < 2 || cardExpYear.value.length < 4) {
        alert("Please fill out all fields");
        return false;
    } else {
        return true;
    }
}
// possibly go back and make a bunch of if statements to say which field is missing or incorrect

function validateForm3() {
    if (shippingName.value == "" || shippingAddress.value == "" || shippingCity.value == "" || shippingState.value == "" || shippingZip.value == "" || shippingEmail.value == "" || shippingMethod.value == "" || shippingEmail.value.includes("@") == false || phone.value == "") {
        alert("Please fill out all fields");
        return false;
    } else {
        return true;
    }
}

//submit btns
submitBtn1.addEventListener('click', function() {
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
        window.location.href = "confirmation-page.html";
    }
});
