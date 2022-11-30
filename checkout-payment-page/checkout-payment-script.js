// let cartItems = [
//     {
//         name: "Chicken",
//         price: 10.99,
//         quantity: 1,
//         image: "/checkout-payment-images/burrito1.jpg"
//     },
//     {
//         name: "Chicken",
//         price: 5.99,
//         quantity: 1,
//         image: "/checkout-payment-images/burrito1.jpg"
//     },
//     {
//         name: "Chicken",
//         price: 20.99,
//         quantity: 1,
//         image: "/checkout-payment-images/burrito1.jpg"
//     },

// ]

// localStorage.setItem("cartItems", JSON.stringify(cartItems));

let customerCart = [];
let currentCustomerCart = JSON.parse(localStorage.getItem("purchaseItems"));
currentCustomerCart.forEach((item) => {
   let cartItems = document.querySelector(".cartItems");
    let cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
    <div class="cartItemImg">
        <img src="/${item.image}" alt="">
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
    var total = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var cartItemPrice = cartItem[i].querySelector(".cartItemPrice h4");
        var cartItemQuantity = cartItem[i].querySelector(".quantity");
        var price = parseFloat(cartItemPrice.innerText.replace("$", ""));
        var quantity = cartItemQuantity.value;
        total = total + (price * quantity);
    }
    total = total.toFixed(2);
    document.getElementsByClassName("total")[0].innerText = "$" + total;
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
