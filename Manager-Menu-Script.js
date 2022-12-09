let menuItems = document.querySelector('.menuItems')
var foodItems = JSON.parse(localStorage.getItem('foodItems'))

function renderManagerMenu() {
    menuItems.innerHTML = "";
    foodItems.forEach((foodItem) => {
        menuItems.innerHTML += `
            <div class="menuItem">
                <ion-icon class="deleteFromMenuBtn" onclick="removeFromMenu(${foodItem.id})" name="close-circle-outline"></ion-icon>
                <img class="itemImg" src="${foodItem.image}" alt="">
                <h3 class="itemName">${foodItem.name}</h3>
                <p class="itemPrice">$${foodItem.price}</p>
                <p class="itemCalories">${foodItem.calories} calories</p>
                <p class="itemDescription">${foodItem.description}</p>
                <p class="itemId">ID#${foodItem.id}</p>
            <div>
        `;
    });
};
renderManagerMenu()

//start of add new menu item 
const addNewMenuItemBtn = document.getElementById('addNewMenuItem');
addNewMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    const id = document.getElementById('newItemId').value;
    const id1 = parseInt(id)
    for(let i = 0; i < foodItems.length; i++) {
        if(foodItems[i].name === name) {
            alert('Item already exists');
            return;
        }
    }
    if(name === '' || price === '' || description === '' || image === '' || calories === '') {
        alert('Please fill out all fields');
        return;
    }
    const newMenuItem = {
        name: name,
        price: price,
        description: description,
        image: image,        
        calories: calories,
        id:  id1
    }
    
    setTimeout(() => {
        let addedSuccess = document.querySelector('.addedItemSuccess')
        addedSuccess.style.display = 'block'
    }, .5)
    setTimeout(() => {
        let addedSuccess = document.querySelector('.addedItemSuccess')
        addedSuccess.style.display = 'none'
    }, 1000)
    foodItems.push(newMenuItem)
    localStorage.setItem('foodItems', JSON.stringify(foodItems))
    appendMenuItems(newMenuItem)
    renderManagerMenu();
    document.getElementById('newItemName').value = '';
    document.getElementById('newItemPrice').value = '';
    document.getElementById('newItemDescription').value = '';
    document.getElementById('newItemImg').value = '';
    document.getElementById('newItemCalories').value = '';
    document.getElementById('newItemId').value = '';
})

const appendMenuItems = () => {
    let name = document.getElementById('newItemName').value;
    let price = document.getElementById('newItemPrice').value;
    let description = document.getElementById('newItemDescription').value;
    let image = document.getElementById('newItemImg').value;
    let calories = document.getElementById('newItemCalories').value;
    let menuItems = document.querySelector('.menuItems')
    let newMenuItem1 = document.createElement('div')
    let id = document.getElementById('newItemId').value;    
    newMenuItem1.classList.add('menuItem')
    newMenuItem1.innerHTML =  `
    <ion-icon class="deleteFromMenuBtn" onclick="removeFromMenu(${id})" name="close-circle-outline"></ion-icon>
    <img class="itemImg" src="${image}" alt="">
    <h3 class="itemName">${name}</h3>
    <p class="itemPrice">$${price}</p>
    <p class="itemCalories">${calories} calories</p>
    <p class="itemDescription">${description}</p>
    <p class="itemId">ID#${id}</p>
    `
    menuItems.appendChild(newMenuItem1)
    renderManagerMenu();
}
function removeFromMenu(id) {
    foodItems = foodItems.filter( (foodItem) => foodItem.id !== id);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
    renderManagerMenu();
};

// end of add new menu item

// add form buttons
const showAddFormHeader = document.getElementById('addMenuHeader');
showAddFormHeader.addEventListener('click', () => {
    let addform1 = document.getElementById('addForm')
    addform1.classList.remove('formsHidden')
    addform1.classList.add('formsActive')
    
})


// end of add form buttons

// start of edit items
const editMenuItemBtn = document.getElementById('editMenuItem');
editMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('editItemName').value;
    const newPrice = document.getElementById('editItemPrice').value;
    const newDescription = document.getElementById('editItemDescription').value;
    const newImage = document.getElementById('editItemImg').value;
    const newCalories = document.getElementById('editItemCalories').value;
    const newId = document.getElementById('editItemId').value;
    const newId1 = parseInt(newId)
    for(let i = 0; i < foodItems.length; i++) {
        if(foodItems[i].name === name) {
            foodItems[i].name = name;
            foodItems[i].price = newPrice;
            foodItems[i].description = newDescription;
            foodItems[i].image = newImage;
            foodItems[i].calories = newCalories;
            foodItems[i].id = newId1;
            console.log(foodItems)
            alert('Item has been updated');
            localStorage.setItem('foodItems', JSON.stringify(foodItems))
            return;
        }
    }
    alert('Item does not exist');
})

// end of edit items

// start of edit form buttons
const editItemConfirmBtn = document.getElementById('editFormConfirmBtn');
editItemConfirmBtn.addEventListener('click', () => {
    localStorage.setItem('foodItems', JSON.stringify(foodItems))
    window.location.href = 'Manager-Menu-Page.html'
    
})

const editMenuHeader = document.getElementById('editMenuHeader');
editMenuHeader.addEventListener('click', () => {
    let editForm = document.querySelector('.editItemForm')
    editForm.classList.remove('formsHidden')
    editForm.classList.add('formsActive')
})

//  jquery for header buttons to animate forms from left to center
$("#addMenuHeader").click(function(){
    $(".addItemFormContainer").animate({
        left: '17.5%',
        opacity: '1'
    });
});


$("#editMenuHeader").click(function(){
    $(".editItemFormContainer").animate({
        left: '51.25%',
        opacity: '1'
    });
});

// // end of header buttons jquery

// jquery for forms to animate from center to left on close

$('.addFormCloseBtn').click(function() {
    $('.addItemFormContainer').animate({
        left: '-100%',
        opacity: '1',
    });
    $('.addNewItemForm').addClass('animate__fadeOut')
})

$('.editFormCloseBtn').click(function() {
    $('.editItemFormContainer').animate({
        left: '-100%',
        opacity: '1',
    });
    $('.editItemForm').addClass('animte__fadeOut')
})

// end of jquery for close buttons

// jquery for hamburger menu
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
// end of jquery for hamburger menu

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

// jquery to make hero go fade off screen after 3 seconds and then show menu items
// $(document).ready(function(){
//     setTimeout(function(){
//         $('.hero').addClass('animate__fadeOut')
//         $('.hero').addClass('heroHidden')
//         $('.menu').removeClass('menuItemsHidden')
//         $('.menu').addClass('menuItemsActive')
//     }, 3000);
// });

$('.hero').click(function() {
    // $('.hero').addClass('animate__fadeOut')
    $('.hero').addClass('heroHidden')
    $('.menu').removeClass('menuItemsHidden')
    $('.menu').addClass('menuItemsActive')
})