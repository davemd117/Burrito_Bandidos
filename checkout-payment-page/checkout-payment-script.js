// testing parsing from menu to checkout page
// total might work properly if the actual total is being passed from menu page to checkout page will have to test and then variable is grabbed and updated through totalPrice() function



let cartItems = [
    {
        name: "Chicken",
        price: 10.00,
        quantity: 1,
        image: "/checkout-payment-images/burrito1.jpg"
    },
    {
        name: "Chicken",
        price: 5.00,
        quantity: 1,
        image: "/checkout-payment-images/burrito1.jpg"
    },
    {
        name: "Chicken",
        price: 20.00,
        quantity: 1,
        image: "/checkout-payment-images/burrito1.jpg"
    },

]

localStorage.setItem("cartItems", JSON.stringify(cartItems));
// end of testing 

let customerCart = [];
let currentCustomerCart = JSON.parse(localStorage.getItem("cartItems"));
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
    <h4>Qty: 
    <span><input class="quantity" type="number" placeholder=></span>
    </h4>
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

// testing if can pass a total from different page and display it in total on checkout page and update it on change with quantity inputs and removing items from cart
// quantity and total
// let cTotal = [{total:35}]
// localStorage.setItem("total", JSON.stringify(cTotal));
// let customerTotal = JSON.parse(localStorage.getItem("total"));
// let total = document.querySelector(".total");
// total.innerHTML = customerTotal[0].total;


// figure out how to match up quantity with total and update total

  function totalPrice() {
    var cart = document.getElementsByClassName("cartItems")[0];
    var cartItem = cart.querySelectorAll(".cartItem");
    // get total price from local storage figure out how
    var total = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var cartItemPrice = cartItem[i].querySelector(".cartItemPrice h4");
        var cartItemQuantity = cartItem[i].querySelector(".quantity");
        var price = parseFloat(cartItemPrice.innerText.replace("$", ""));
        var quantity = cartItemQuantity.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
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
