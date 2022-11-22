let menu = []
// let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('foodItems'))
// CurrentMenuItemsCustomerPage.forEach((item) => {
//     // let name = item.name
//     // let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     let menuItems = document.querySelector('.menuItems')
//     let menuItem = document.createElement('div')
//     menuItem.classList.add('menuItem')
//     menuItem.innerHTML = `
//     <img class="itemImg" src="${item.image}" alt="">
//     <h3 class="itemName">${item.name}</h3>
//     <p class="itemPrice">${item.price}</p>
//     <p class="itemDescription">${item.description}</p>
//     `
//     menuItems.appendChild(menuItem)
//     // push to array menu as object
//     menu.push({
//         name: item.name,
//         price: item.price,
//         description: item.description,
//         image: item.image

// })
// })

// console.log(CurrentMenuItemsCustomerPage)
// console.log(menu)


//start of add new menu item 
const addNewMenuItemBtn = document.getElementById('addNewMenuItem');
addNewMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('newItemName').value.toUpperCase();
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    const whereToinsert = document.getElementById('locationNewItem').value;
    for(let i = 0; i < menu.length; i++) {
        if(menu[i].name === name) {
            alert('Item already exists');
            return;
        }
    }
    if(name === '' || price === '' || description === '' || image === '' || calories === '') {
        alert('Please fill out all fields');
        return;
    }
    const newMenuItem = {
        name: document.getElementById('newItemName').value.toUpperCase(),
        price: document.getElementById('newItemPrice').value,
        description: document.getElementById('newItemDescription').value,
        image: document.getElementById('newItemImg').value,
        calories: document.getElementById('newItemCalories').value
    }
    
    setTimeout(() => {
        let addedSuccess = document.querySelector('.addedItemSuccess')
        addedSuccess.style.display = 'block'
    }, .5)
    setTimeout(() => {
        let addedSuccess = document.querySelector('.addedItemSuccess')
        addedSuccess.style.display = 'none'
    }, 1000)
    // menu.push(newMenuItem)
    menu.splice(whereToinsert, 0, newMenuItem)
    console.log(menu)
    appendMenuItems(menu)
    document.getElementById('newItemName').value = '';
    document.getElementById('newItemPrice').value = '';
    document.getElementById('newItemDescription').value = '';
    document.getElementById('newItemImg').value = '';
    document.getElementById('newItemCalories').value = '';
    document.getElementById('locationNewItem').value = '';
})

const appendMenuItems = (menu) => {
    const menuItems = document.querySelector('.menuItems')
    const newMenuItem = document.createElement('div')
    const whereToinsert = document.getElementById('locationNewItem').value;
    newMenuItem.classList.add('menuItem')
    newMenuItem.innerHTML = `
    <img class="itemImg" src="${menu[menu.length - 1].image}"  alt="...">
    <h3 class="itemName">${menu[menu.length - 1].name}</h3>
    <p class="itemDescription">${menu[menu.length - 1].description}</p>
    <p class="itemCalories">${menu[menu.length - 1].calories}</p>
    <p class="itemPrice">${menu[menu.length - 1].price}</p>
`
    // menuItems.appendChild(newMenuItem)
    // menu.splice(whereToinsert, 0, newMenuItem)
    // menuItems.insertBefore(newMenuItem, menuItems.childNodes[whereToinsert])

}
// end of add new menu item

// function to delete menu figure out how to get error message to work properly
const deleteMenuItemBtn = document.getElementById('deleteMenuItem');
deleteMenuItemBtn.addEventListener('click', () => {
    const deleteMenuItem = document.getElementById('deleteItemName').value.toUpperCase();
    for(i = 0 ; i < menu.length ; i++) {
        if(menu[i].name === deleteMenuItem) {
        const menuItems = document.querySelector('.menuItems')
        menuItems.removeChild(menuItems.children[i])
        menu.splice(i, 1)
        console.log(deleteMenuItem)
        console.log(menu)
        }
        document.getElementById('deleteItemName').value = '';
    }
})

// end of function to delete menu items

// function to show edit/add/delete menu items and also unhide the form
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

// add form buttons
const showAddFormHeader = document.getElementById('addMenuHeader');
showAddFormHeader.addEventListener('click', () => {
    let addform1 = document.getElementById('addForm')
    addform1.classList.remove('formsHidden')
    addform1.classList.add('formsActive')
    
})

// const addFormCloseBtn = document.querySelector('.addFormCloseBtn');
// addFormCloseBtn.addEventListener('click', () => {
//     let addform = document.getElementById('addForm')
//     addform.classList.remove('formsActive')
//     addform.classList.add('formsHidden')
// })

const AddFormviewChanges = document.getElementById('AddFormviewChanges');
AddFormviewChanges.addEventListener('click', () => {
    window.location.href = 'Manager-Menu-Page-Updated.html'
})

const addFormConfirmBtn = document.getElementById('addFormConfirmBtn');
addFormConfirmBtn.addEventListener('click', () => {
    localStorage.removeItem('menu')
    localStorage.setItem('menu', JSON.stringify(menu))
})
// end of add form buttons

// delete form buttons
const deleteFormCloseBtn = document.querySelector('.delFormCloseBtn');
deleteFormCloseBtn.addEventListener('click', () => {
    let deleteform = document.getElementById('deleteForm')
    deleteform.classList.remove('formsActive')
    deleteform.classList.add('formsHidden')
})

const deleteAddFormHeader = document.getElementById('deleteMenuHeader');
deleteAddFormHeader.addEventListener('click', () => {
    let deleteform1 = document.getElementById('deleteForm')
    deleteform1.classList.remove('formsHidden')
    deleteform1.classList.add('formsActive')
})

const deleteFormConfirmBtn = document.getElementById('deleteFormConfirmBtn');
deleteFormConfirmBtn.addEventListener('click', () => {
    localStorage.removeItem('menu')
    localStorage.setItem('menu', JSON.stringify(menu))
})

const deleteFormviewChanges = document.getElementById('deleteFormViewChanges');
deleteFormviewChanges.addEventListener('click', () => {
    window.location.href = 'Manager-Menu-Page-Updated.html'
})

// end of delete form buttons

// start of edit form buttons
const editMenuItemBtn = document.getElementById('editMenuItem');
editMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('editItemName').value.toUpperCase();
    const newPrice = document.getElementById('editItemPrice').value;
    const newDescription = document.getElementById('editItemDescription').value;
    const newImage = document.getElementById('editItemImg').value;
    const newCalories = document.getElementById('editItemCalories').value;
    // might use to see if can update location of item would have to check if parsed menu looks the same
    const newItemLocation = document.getElementById('editItemLocation').value;
    for(let i = 0; i < menu.length; i++) {
        if(menu[i].name === name) {
            menu[i].name = name;
            menu[i].price = newPrice;
            menu[i].description = newDescription;
            menu[i].image = newImage;
            menu[i].calories = newCalories;
            console.log(menu)
            return;
        }
    }
    alert('Item does not exist');
})

const editItemConfirmBtn = document.getElementById('editFormConfirmBtn');
editItemConfirmBtn.addEventListener('click', () => {
    localStorage.removeItem('menu')
    localStorage.setItem('menu', JSON.stringify(menu))
})

const editItemFormViewChanges = document.getElementById('editFormViewChanges');
editItemFormViewChanges.addEventListener('click', () => {
    window.location.href = 'Manager-Menu-Page-Updated.html'

})

const editMenuHeader = document.getElementById('editMenuHeader');
editMenuHeader.addEventListener('click', () => {
    let editForm = document.querySelector('.editItemForm')
    editForm.classList.remove('formsHidden')
    editForm.classList.add('formsActive')
})

const editFormCloseBtn = document.querySelector('.editFormCloseBtn');
editFormCloseBtn.addEventListener('click', () => {
    let editForm = document.querySelector('.editItemForm')
    editForm.classList.remove('formsActive')
    editForm.classList.add('formsHidden')
})
// // end of edit form buttons

//  jquery for header buttons to animate forms from left to center
$("#addMenuHeader").click(function(){
    $(".addItemFormContainer").animate({
        left: '1%',
        opacity: '1'
    });
});


$("#deleteMenuHeader").click(function(){
    $(".deleteItemFormContainer").animate({
        left: '34.5%',
        opacity: '1',
    });
});

$("#editMenuHeader").click(function(){
    $(".editItemFormContainer").animate({
        left: '68%',
        opacity: '1'
    });
});
// // end of header buttons jquery
$('.addFormCloseBtn').click(function() {
    $('.addItemFormContainer').animate({
        right: '-100%',
        opacity: '0',
    });
    $('.addNewItemForm').removeClass('formsActive')
})

$('.delFormCloseBtn').click(function() {
    $('.deleteItemFormContainer').animate({
        left: '-100%',
        opacity: '1',
    });
    $('.deleteItemForm').removeClass('formsActive')
})

$('.editFormCloseBtn').click(function() {
    $('.editItemFormContainer').animate({
        left: '-100%',
        opacity: '1',
    });
    $('.editItemForm').removeClass('formsActive')
})


// hamburger menu fix hamburger menu positioning
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