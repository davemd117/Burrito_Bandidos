// ------------------------------- HTML Element Variables ------------------------------- 
const receiptItemsContainer = document.getElementById('receiptItemsContainer');
const customerNameElement = document.getElementById('customerName');
const paymentTypeElement = document.getElementById('paymentType');
const orderNumberElement = document.getElementById('orderNumber');
const orderTimeElement = document.getElementById('orderTime');
const receiptSubTotalElement = document.getElementById('receiptSubTotal');
const pointsEarnedElement = document.getElementById('pointsEarned');
const pointsSpentElement = document.getElementById('pointsSpent');
const pointsDiscountElement = document.getElementById('pointsDiscount');
const customerPointsElement = document.getElementById('customerPoints');
const receiptTipElement = document.getElementById('receiptTip');
const receiptTaxElement = document.getElementById('receiptTax');
const receiptTotalElement = document.getElementById('receiptTotal');


// ------------------------------- Global Variables For Functions ------------------------------- 
var receiptItems = JSON.parse(localStorage.getItem("finalCart"));
var currentUser = JSON.parse(localStorage.getItem("Current User"));
var paymentType = true;
//Line above for testing - to be deleted
// var paymentType = JSON.parse(localStorage.getItem("useCredit"));
//Line above commented out for testing - to be uncommented
var orderNumber = 0;
// var orderTime = JSON.parse(localStorage.getItem("orderTime"));
//Line above commented out for testing - to be uncommented
var orderTime = 5;
//Line above for testing - to be deleted
var subTotal = JSON.parse(localStorage.getItem("orderSubTotal"));
var pointUse = JSON.parse(localStorage.getItem("usePoints"));
var cartPoints = JSON.parse(localStorage.getItem("cartPoints"));
var totalPoints = JSON.parse(localStorage.getItem("totalPoints"));
// var tip = JSON.parse(localStorage.getItem("tip"));
//Line above commented out for testing - to be uncommented
var tax = subTotal * .06;
var total = subTotal + tax;
//Line above for testing - to be deleted
// var total = subTotal + tax + tip;
//Line above commented out for testing - to be uncommented


// ------------------------------- Receipt Items ------------------------------- 
function renderReceiptItems() {
    receiptItemsContainer.innerHTML = "";
    receiptItems.forEach((receiptItem) => {
        let receiptItemSubTotal = receiptItem.price * receiptItem.quantity;
        receiptItemsContainer.innerHTML += `
            <div class="receiptItem">
                <div class="receiptItemInfo">
                    <p>${receiptItem.name}</p>
                    <p>Qty: ${receiptItem.quantity}</p>
                </div>
                <p class="receiptItemCost">$${receiptItemSubTotal}</p>
            </div>
        `;
    });
};
renderReceiptItems();



function renderReceiptDetails() {
    customerNameElement.innerHTML = `${currentUser[0].firstName}`;
    if (paymentType = true) {
        paymentTypeElement.innerHTML = `Card`;
    } else {
        paymentTypeElement.innerHTML = `Cash`;
    };
    orderNumber += 1;
    orderNumberElement.innerHTML = `${orderNumber}`
    orderTimeElement.innerHTML = `${orderTime} minutes`
    receiptSubTotalElement.innerHTML = `$${subTotal.toFixed(2)}`;
    // receiptTipElement.innerHTML = `$${tip}`;
    receiptTaxElement.innerHTML = `$${tax.toFixed(2)}`;

    pointsEarnedElement.innerHTML = `${cartPoints}`;
}
renderReceiptDetails();



function renderPointUsage() {
    if (pointUse === true) {
        pointsSpentElement.innerHTML = `${currentUser[0].points}`;
        pointsDiscountElement.innerHTML = `$${currentUser[0].points / 10}`;
        customerPointsElement.innerHTML = `${cartPoints}`

        total -= (currentUser[0].points / 10);

        currentUser[0].points = 0;
    } else {
        customerPointsElement.innerHTML = `${ currentUser[0].points + cartPoints}`
    }

    currentUser[0].points += cartPoints;
    localStorage.setItem('Current User', JSON.stringify(currentUser));
    renderReceiptTotal();
};
renderPointUsage();



function renderReceiptTotal() {
    receiptTotalElement.innerHTML = `$${total.toFixed(2)}`;
};
// renderReceiptTotal();

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

