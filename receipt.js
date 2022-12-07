// ------------------------------- HTML Element Variables ------------------------------- 
const receiptItemsContainer = document.getElementById('receiptItemsContainer');
const receiptSubTotalElement = document.getElementById('receiptSubTotal');
const receiptTaxElement = document.getElementById('receiptTax');
const receiptTotalElement = document.getElementById('receiptTotal');

// ------------------------------- Global Variables For Functions ------------------------------- 
var receiptSubTotal = 0;
var tax = 0;
var receiptItems = JSON.parse(localStorage.getItem("finalCart"));

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

function renderReceiptSubTotal() {
    receiptItems.forEach((receiptItem) => {
        receiptSubTotal += receiptItem.price * receiptItem.quantity;
    });
    receiptSubTotalElement.innerHTML = `$${receiptSubTotal.toFixed(2)}`;
};
renderReceiptSubTotal();

function renderReceiptTax() {
    tax = receiptSubTotal * .06;
    receiptTaxElement.innerHTML = `$${tax.toFixed(2)}`;
}
renderReceiptTax();

function renderReceiptTotal() {
    var pointUse = JSON.parse(localStorage.getItem("pointUse"));

    var totalPoints = JSON.parse(localStorage.getItem("totalPoints"));
    let total = receiptSubTotal + tax;
    if (pointUse === "true") {
        totalPoints / 10;
        total -= totalPoints;
    };
    receiptTotalElement.innerHTML = `$${total.toFixed(2)}`;
};
renderReceiptTotal();

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

