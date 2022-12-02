let menu = []
// test
// var foodItems = [
//     {
//         id: 0,
//         name: "Burrito de Bistec",
//         price: 9.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Flour tortilla stuffed with steak and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 1,
//         name: "Burrito de Carnitas",
//         price: 8.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Flour tortilla stuffed with pork and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 2,
//         name: "Burrito de Chorizo",
//         price: 8.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Flour tortilla stuffed with mexican sausage and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 3,
//         name: "Burrito de Pollo",
//         price: 8.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Flour tortilla stuffed with chicken and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 4,
//         name: "Burrito de Tinga",
//         price: 8.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Flour tortilla stuffed with shredded chipotle chicken and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 5,
//         name: "Steak Tacos",
//         price: 12.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Soft corn tortillas stuffed with steak and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 6,
//         name: "Fish Tacos",
//         price: 11.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Soft corn tortillas stuffed with fish and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 7,
//         name: "Shrimp Tacos",
//         price: 11.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Soft corn tortillas stuffed with shrimp and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 8,
//         name: "Chicken Tacos",
//         price: 11.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Soft corn tortillas stuffed with chicken and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 9,
//         name: "Carnitas Tacos",
//         price: 11.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Soft corn tortillas stuffed with pork and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 10,
//         name: "Steak Quesadillas",
//         price: 13.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Folded corn tortilla or flour tortilla stuffed with steak and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 11,
//         name: "Chicken Quesadillas",
//         price: 12.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Folded corn tortilla or flour tortilla stuffed with chicken and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 12,
//         name: "Chorizo Quesadillas",
//         price: 12.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Folded corn tortilla or flour tortilla stuffed with Mexican sausage and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 13,
//         name: "Carnitas Quesadillas",
//         price: 12.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Folded corn tortilla or flour tortilla stuffed with pork and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 14,
//         name: "Picadillo Quesadillas",
//         price: 12.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Folded corn tortilla or flour tortilla stuffed with ground beef and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 15,
//         name: "Enchiladas Rojas",
//         price: 14.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Choice of steak, chicken or cheese topped with red chile sauce and choice of toppings.",
//         calories: 920,
//     },
//     {
//         id: 16,
//         name: "Enchiladas Verdes",
//         price: 14.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Choice of steak, chicken or cheese topped with green chile sauce and choice of toppings.",
//         calories: 920,
//     },
//     {
//         id: 17,
//         name: "Enchiladas de Mole",
//         price: 14.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Stuffed with chicken and topped with mole and choice of toppings",
//         calories: 920,
//     },
//     {
//         id: 18,
//         name: "Enchiladas Suizas",
//         price: 14.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "Stuffed with chicken, topped with Swiss cheese sauce",
//         calories: 920,
//     },
//     {
//         id: 19,
//         name: "Super Burrito",
//         price: 19.99,
//         image: "Manager-Menu-Page-Images/burrito-1.jpg",
//         description: "A giant burrito stuffed with the hopes and dreams of all of Mexico",
//         calories: 920,
//     }
// ]
// localStorage.setItem("foodItems", JSON.stringify(foodItems));
// end test


let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('foodItems'))
CurrentMenuItemsCustomerPage.forEach((item) => {
    let name = item.name
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    let menuItems = document.querySelector('.menuItems')
    let menuItem = document.createElement('div')
    menuItem.classList.add('menuItem')
    menuItem.innerHTML = `
    <ion-icon class="deleteFromMenuBtn" name="close-circle-outline"></ion-icon>
    <img class="itemImg" src="${item.image}" alt="">
    <h3 class="itemName">${nameCapitalized}</h3>
    <p class="itemPrice">$${item.price}</p>
    <p class="itemCalories">${item.calories} calories</p>
    <p class="itemDescription">${item.description}</p>
    `
    menuItems.appendChild(menuItem)
    // push to array menu as object
    menu.push({
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        calories: item.calories
})
})

console.log(CurrentMenuItemsCustomerPage)
console.log(menu)

//start of add new menu item 
const addNewMenuItemBtn = document.getElementById('addNewMenuItem');
addNewMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('newItemName').value;
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
        name: document.getElementById('newItemName').value,
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
    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    const menuItems = document.querySelector('.menuItems')
    const newMenuItem = document.createElement('div')
    const whereToinsert = document.getElementById('locationNewItem').value;
    newMenuItem.classList.add('menuItem')
    newMenuItem.innerHTML = `
    <ion-icon class="deleteFromMenuBtn" name="close-circle-outline"></ion-icon>
    <img class="itemImg" src="${image}"  alt="...">
    <h3 class="itemName">${name}</h3>
    <p class="itemDescription">${description}</p>
    <p class="itemCalories">${calories}</p>
    <p class="itemPrice">${price}</p>
`
    menuItems.insertBefore(newMenuItem, menuItems.childNodes[whereToinsert])
    const deleteFromMenuBtn = document.querySelectorAll('.deleteFromMenuBtn');
    deleteFromMenuBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove()
        menu.splice(i, 1)
        console.log(menu)
    })
})

}
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
    localStorage.removeItem('menu')
    localStorage.setItem('menu', JSON.stringify(menu))
})
// end of add form buttons

//delete menu items
const deleteFromMenuBtn = document.querySelectorAll('.deleteFromMenuBtn');
deleteFromMenuBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove()
        menu.splice(i, 1)
        console.log(menu)
    })
})

// end of delete menu items

// start of edit items
const editMenuItemBtn = document.getElementById('editMenuItem');
editMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('editItemName').value;
    const newPrice = document.getElementById('editItemPrice').value;
    const newDescription = document.getElementById('editItemDescription').value;
    const newImage = document.getElementById('editItemImg').value;
    const newCalories = document.getElementById('editItemCalories').value;
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