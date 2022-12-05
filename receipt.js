const receiptItemsContainer = document.getElementById('receiptItemsContainer');
const receiptSubTotalElement = document.getElementById('receiptSubTotal');
const receiptTaxElement = document.getElementById('receiptTax');
const receiptTotalElement = document.getElementById('receiptTotal');
var receiptSubTotal = 0;
var tax = 0;

var receiptItems = JSON.parse(localStorage.getItem("finalCart"));

// var receiptItems = [
//     {
//         id: 0,
//         name: "Burrito de Bistec",
//         price: 9.99,
//         image: "bandidos_images/burrito_de_bistec.jpg",
//         description: "Flour tortilla stuffed with steak and choice of toppings",
//         calories: 920,
//         quantity: 1
//     },
//     {
//         id: 1,
//         name: "Burrito de Carnitas",
//         price: 8.99,
//         image: "bandidos_images/burrito_de_carnitas.jpg",
//         description: "Flour tortilla stuffed with pork and choice of toppings",
//         calories: 920,
//         quantity: 2
//     },
//     {
//         id: 2,
//         name: "Burrito de Chorizo",
//         price: 8.99,
//         image: "bandidos_images/burrito_de_chorizo.jpg",
//         description: "Flour tortilla stuffed with mexican sausage and choice of toppings",
//         calories: 920,
//         quantity: 5
//     }
// ];

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
