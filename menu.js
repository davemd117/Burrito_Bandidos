// ------------------------------- Variables ------------------------------- 
const menuColumn1 = document.getElementById('menuColumn1');
const menuColumn2 = document.getElementById('menuColumn2');
const menuColumn3 = document.getElementById('menuColumn3');

var menuCounter = 1;

var foodItems = JSON.parse(localStorage.getItem("foodItems"));


// ------------------------------- Menu ------------------------------- 
function renderMenu() {
    foodItems.forEach( (foodItem) => {
        if(menuCounter == 1) {
            menuColumn1.innerHTML += `
            <div class="menuItem">
                <div class="menuItemImageContainer">
                    <img onclick="addToCart(${foodItem.id})" src="${foodItem.image}" alt="">
                </div>
                <div class="menuItemContent">
                    <h3>${foodItem.name} <span>$${foodItem.price}</span></h3>
                    <p>${foodItem.description}</p>
                </div>
            </div>
            `;
            menuCounter++;
        } else if (menuCounter == 2) {
            menuColumn2.innerHTML += `
            <div class="menuItem">
                <div class="menuItemImageContainer">
                    <img onclick="addToCart(${foodItem.id})" src="${foodItem.image}" alt="">
                </div>
                <div class="menuItemContent">
                    <h3>${foodItem.name} <span>$${foodItem.price}</span></h3>
                    <p>${foodItem.description}</p>
                </div>
            </div>
            `;
            menuCounter++;
        } else if (menuCounter == 3) {
            menuColumn3.innerHTML += `
            <div class="menuItem">
                <div class="menuItemImageContainer">
                    <img onclick="addToCart(${foodItem.id})" src="${foodItem.image}" alt="">
                </div>
                <div class="menuItemContent">
                    <h3>${foodItem.name} <span>$${foodItem.price}</span></h3>
                    <p>${foodItem.description}</p>
                </div>
            </div>
            `;
            menuCounter = 1;
        }
    });
};
renderMenu();

function addToCart(id) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if(window.localStorage.getItem("Current User")){
        if(cartItems.some((foodItem) => foodItem.id === id)){
            alert("Item already in cart")
        }
        else {
            const foodItem = foodItems.find((foodItem) => foodItem.id === id)

            cartItems.push({
                ...foodItem,
                quantity: 1,
            });
        }
    }
    else{
        alert("You must be logged in to add to cart")
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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



//  CART ICON BADGE
$("img").click(()=> {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let badge = document.getElementById("icon-badge")
    let sideBadge = document.getElementById("icon-badge-side")
    let hamBadge = document.getElementById("icon-badge-ham")
    if(cart.length > 0){
        badge.classList.add("animate__flipInY")
        badge.style.display = "flex"
        badge.innerHTML = cart.length
        sideBadge.classList.add("animate__flipInY")
        sideBadge.style.display = "flex"
        sideBadge.innerHTML = cart.length
        hamBadge.classList.add("animate__flipInY")
        hamBadge.style.display = "flex"
        hamBadge.innerHTML = cart.length
    }
    else{
        badge.style.display = "none"
        sideBadge.style.display = "none"
        hamBadge.style.display = "none"
    }
    console.log(cart.length)
})

