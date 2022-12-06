// let menu = []
let menuItems = document.querySelector('.menuItems')
var foodItems = JSON.parse(localStorage.getItem('foodItems'))

function renderManagerMenu() {
    menuItems.innerHTML = "";
    foodItems.forEach((foodItem) => {
        let nameCapitalized = foodItem.name.charAt(0).toUpperCase() + foodItem.name.slice(1).toLowerCase()
        menuItems.innerHTML += `
            <div class="menuItem">
                <ion-icon class="deleteFromMenuBtn" onclick="removeFromMenu(${foodItem.id})" name="close-circle-outline"></ion-icon>
                <img class="itemImg" src="${foodItem.image}" alt="">
                <h3 class="itemName">${nameCapitalized}</h3>
                <p class="itemPrice">$${foodItem.price}</p>
                <p class="itemCalories">${foodItem.calories} calories</p>
                <p class="itemDescription">${foodItem.description}</p>
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
        id:  id
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
})

const appendMenuItems = () => {
    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    const menuItems = document.querySelector('.menuItems')
    const newMenuItem1 = document.createElement('div')
    const id = document.getElementById('newItemId').value;
    newMenuItem1.classList.add('menuItem')
    newMenuItem1.innerHTML =  `
    <ion-icon class="deleteFromMenuBtn" onclick="removeFromMenu(${id})" name="close-circle-outline"></ion-icon>
    <img class="itemImg" src="${image}" alt="">
    <h3 class="itemName">${name}</h3>
    <p class="itemPrice">$${price}</p>
    <p class="itemCalories">${calories} calories</p>
    <p class="itemDescription">${description}</p>
    `
    menuItems.appendChild(newMenuItem1)
    renderManagerMenu();
    // newMenuItem1.localStorage.removeItem('foodItems')
    // newMenuItem1.localStorage.setItem('foodItems', JSON.stringify(foodItems))
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

const AddFormviewChanges = document.getElementById('AddFormviewChanges');
AddFormviewChanges.addEventListener('click', () => {
    window.location.href = 'Menu-Updated.html'
})

const addFormConfirmBtn = document.getElementById('addFormConfirmBtn');
addFormConfirmBtn.addEventListener('click', () => {
    localStorage.removeItem('foodItems')
    localStorage.setItem('foodItems', JSON.stringify(foodItems))
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
    for(let i = 0; i < foodItems.length; i++) {
        if(foodItems[i].name === name) {
            foodItems[i].name = name;
            foodItems[i].price = newPrice;
            foodItems[i].description = newDescription;
            foodItems[i].image = newImage;
            foodItems[i].calories = newCalories;
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
    localStorage.removeItem('menu')
    localStorage.setItem('menu', JSON.stringify(menu))
})

const editItemFormViewChanges = document.getElementById('editFormViewChanges');
editItemFormViewChanges.addEventListener('click', () => {
    window.location.href = 'Menu-Updated.html'

})

const editMenuHeader = document.getElementById('editMenuHeader');
editMenuHeader.addEventListener('click', () => {
    let editForm = document.querySelector('.editItemForm')
    editForm.classList.remove('formsHidden')
    editForm.classList.add('formsActive')
})

// // end of edit form buttons

// start of view menu button
const viewMenu = document.getElementById('viewMenu');
viewMenu.addEventListener('click', () => {
    let menuItemsContainer = document.querySelector('.menu')
    menuItemsContainer.classList.remove('menuItemsHidden')
    menuItemsContainer.classList.add('menuItemsActive')
    let hero = document.querySelector('.hero')
    hero.classList.remove('heroActive')
    hero.classList.add('heroHidden')
})
// end of view menu button

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

// start of hamburger menu
let hamburgerBtn = document.querySelector('.hamburgerBtn');
hamburgerBtn.addEventListener('click', () => {
    let hamnurgerMenu = document.querySelector('.hamburger');
    hamnurgerMenu.classList.remove('hamburgerHidden')
    hamnurgerMenu.classList.add('hamburgerActive')
    hamburgerBtn.classList.add('hamburgerBtnLeft')
})

let viewMenuHamburger = document.querySelector('#viewMenuHamburger');
viewMenuHamburger.addEventListener('click', () => {
    let menuItemsContainer = document.querySelector('.menu')
    menuItemsContainer.classList.remove('menuItemsHidden')
    menuItemsContainer.classList.add('menuItemsActive')
    let hero = document.querySelector('.hero')
    hero.classList.remove('heroActive')
    hero.classList.add('heroHidden')
    let hamnurgerMenu = document.querySelector('.hamburger');
    hamnurgerMenu.classList.remove('hamburgerActive')
    hamnurgerMenu.classList.add('hamburgerHidden')
    let hamburgerBtn = document.querySelector('.hamburgerBtn');
    hamburgerBtn.classList.remove('hamburgerBtnLeft')
    hamburgerBtn.classList.add('hamburgerBtn')
})
// end of hamburger menu



// let menuItems = document.querySelectorAll('.menuItem')
// menuItems.forEach((item) => {
    // menu.push({
    //     name: item.querySelector('.itemName').textContent.toUpperCase(),
    //     price: item.querySelector('.itemPrice').textContent,
    //     description: item.querySelector('.itemDescription').textContent,
    //     image: item.querySelector('.itemImg').src,
    //     calories: item.querySelector('.itemCalories').textContent
    // })
// })
// console.log(menu)
// end of pushing static menu items to array menu

// const addFormCloseBtn = document.querySelector('.addFormCloseBtn');
// addFormCloseBtn.addEventListener('click', () => {
//     let addform = document.getElementById('addForm')
//     addform.classList.remove('formsActive')
//     addform.classList.add('formsHidden')
// })

// const editFormCloseBtn = document.querySelector('.editFormCloseBtn');
// editFormCloseBtn.addEventListener('click', () => {
//     let editForm = document.querySelector('.editItemForm')
//     editForm.classList.remove('formsActive')
//     editForm.classList.add('formsHidden')
// })

// const deleteFormCloseBtn = document.querySelector('.delFormCloseBtn');
// deleteFormCloseBtn.addEventListener('click', () => {
//     let deleteform = document.getElementById('deleteForm')
//     deleteform.classList.remove('formsActive')
//     deleteform.classList.add('formsHidden')
// })

// $('.delFormCloseBtn').click(function() {
//     $('.deleteItemFormContainer').animate({
//         left: '-100%',
//         opacity: '1',
//     });
//     $('.deleteItemForm').addClass('animte__fadeOut')
// })

// $("#deleteMenuHeader").click(function(){
//     $(".deleteItemFormContainer").animate({
//         left: '34.5%',
//         opacity: '1',
//     });
// });

// delete form buttons
// const deleteFormHeader = document.getElementById('deleteMenuHeader');
// deleteFormHeader.addEventListener('click', () => {
//     let deleteform1 = document.getElementById('deleteForm')
//     deleteform1.classList.remove('formsHidden')
//     deleteform1.classList.add('formsActive')
// })

// const deleteFormConfirmBtn = document.getElementById('deleteFormConfirmBtn');
// deleteFormConfirmBtn.addEventListener('click', () => {
//     localStorage.removeItem('menu')
//     localStorage.setItem('menu', JSON.stringify(menu))
// })

// const deleteFormviewChanges = document.getElementById('deleteFormViewChanges');
// deleteFormviewChanges.addEventListener('click', () => {
//     window.location.href = 'Menu-Updated.html'
// })
// end of delete form buttons

// function to delete menu figure out how to get error message to work properly
// const deleteMenuItemBtn = document.getElementById('deleteMenuItem');
// deleteMenuItemBtn.addEventListener('click', () => {
//     const deleteMenuItem = document.getElementById('deleteItemName').value.toUpperCase();
//     for(i = 0 ; i < menu.length ; i++) {
//         if(menu[i].name === deleteMenuItem) {
//         const menuItems = document.querySelector('.menuItems')
//         menuItems.removeChild(menuItems.children[i])
//         menu.splice(i, 1)
//         console.log(deleteMenuItem)
//         console.log(menu)
//         }
//         document.getElementById('deleteItemName').value = '';
//     }
// })

// let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('foodItems'))
// CurrentMenuItemsCustomerPage.forEach((item) => {
//     let name = item.name
//     let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    // let menuItems = document.querySelector('.menuItems')
//     let menuItem = document.createElement('div')
//     menuItem.classList.add('menuItem')
//     menuItem.innerHTML = `
//     <ion-icon class="deleteFromMenuBtn" name="close-circle-outline"></ion-icon>
//     <img class="itemImg" src="${item.image}" alt="">
//     <h3 class="itemName">${nameCapitalized}</h3>
//     <p class="itemPrice">$${item.price}</p>
//     <p class="itemCalories">${item.calories} calories</p>
//     <p class="itemDescription">${item.description}</p>
//     `
//     menuItems.appendChild(menuItem)
//     menu.push({
//         name: nameCapitalized,
//         price: item.price,
//         description: item.description,
//         image: item.image,
//         calories: item.calories
// })
// })

// const editMenuItemBtn = document.getElementById('editMenuItem');
// editMenuItemBtn.addEventListener('click', () => {
//     let editItemName = document.getElementById('editItemName').value;
//     let newPrice = document.getElementById('editItemPrice').value;
//     let newDescription = document.getElementById('editItemDescription').value;
//     let newImage = document.getElementById('editItemImg').value;
//     let newCalories = document.getElementById('editItemCalories').value;
//     let newMenuItems = document.querySelector('.menuItems')
//     let editedMenuItem = document.createElement('div')
//     for(let i = 0; i < menu.length; i++) {
//     if(menu[i].name === editItemName) {
//         menu[i].name = name;
//         menu[i].price = newPrice;
//         menu[i].description = newDescription;
//         menu[i].image = newImage;
//         menu[i].calories = newCalories;
//         console.log(menu)
//     editedMenuItem.classList.add('menuItem')
//     editedMenuItem.innerHTML =  `
//     <ion-icon class="deleteFromMenuBtn" name="close-circle-outline"></ion-icon>
//     <img class="itemImg" src="${newImage}" alt="">
//     <h3 class="itemName">${name}</h3>
//     <p class="itemPrice">$${newPrice}</p>
//     <p class="itemCalories">${newCalories} calories</p>
//     <p class="itemDescription">${newDescription}</p>
//     `
//     newMenuItems.replaceChild(editedMenuItem, newMenuItems.childNodes[i])
//     alert('Item has been updated');
//     return;
//     } 
//         alert('Item not found');
//         return;
// }
// })