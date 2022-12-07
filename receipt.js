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
        receiptSubTotal += receiptItem.price * receiptItem.quantity
    });
    receiptSubTotalElement.innerHTML = `$${receiptSubTotal.toFixed(2)}`
};
renderReceiptSubTotal();

function renderReceiptTax() {
    tax = receiptSubTotal * .06
    receiptTaxElement.innerHTML = `$${tax.toFixed(2)}`
}
renderReceiptTax();

function renderReceiptTotal() {
    var pointUse = JSON.parse(localStorage.getItem("pointUse"));

    var totalPoints = JSON.parse(localStorage.getItem("totalPoints"));
    let total = receiptSubTotal + tax
    if (pointUse === "true") {
        totalPoints / 10;
        total -= totalPoints;
    };
    receiptTotalElement.innerHTML = `$${total.toFixed(2)}`
};
renderReceiptTotal();
