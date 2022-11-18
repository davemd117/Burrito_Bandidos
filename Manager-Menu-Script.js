// start of pushing static menu items to array menu
let menu = []
let menuItems = document.querySelectorAll('.menuItem')
menuItems.forEach((item) => {
    menu.push({
        name: item.querySelector('.itemName').textContent.toUpperCase(),
        price: item.querySelector('.itemPrice').textContent,
        description: item.querySelector('.itemDescription').textContent,
        image: item.querySelector('.itemImg').src,
        calories: item.querySelector('.itemCalories').textContent
    })
})
console.log(menu)
// end of pushing static menu items to array menu

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
        name: name,
        price: price,
        description: description,
        image: image,
        calories: calories
    }
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
    // menuItems.insertBefore(newMenuItem, menuItems.childNodes[whereToinsert])
}
// end of add new menu item

// function to delete menu 
const deleteMenuItemBtn = document.getElementById('deleteMenuItem');
deleteMenuItemBtn.addEventListener('click', () => {
    const deleteMenuItem = document.getElementById('deleteItemName').value.toUpperCase();
    for(i = 0 ; i < menu.length ; i++) {
        if(menu[i].name === deleteMenuItem) {
        const menuItems = document.querySelector('.menuItems')
        menuItems.removeChild(menuItems.children[i])
        menu.splice(i, 1)
        console.log(menu)
        } else {
            alert('Item does not exist');
            return;
        }
    }
})
// end of function to delete menu items

//clearing local storage and adding updated menu to local storage
const saveChanges = document.getElementById('saveMenu');
saveChanges.addEventListener('click', () => {
    localStorage.clear()
    localStorage.setItem('menu', JSON.stringify(menu))
})

const viewMenu = document.getElementById('viewMenu');
viewMenu.addEventListener('click', () => {
    let menuItemsContainer = document.querySelector('.menu')
    menuItemsContainer.classList.remove('menuItemsHidden')
    menuItemsContainer.classList.add('menuItemsActive')
})

const editMenuBtn = document.getElementById('editMenu');
editMenuBtn.addEventListener('click', () => {
    let form = document.querySelector('.form')
    form.classList.remove('formHidden')
    form.classList.add('formActive')
})

const addFormCloseBtn = document.querySelector('.addFormCloseBtn');
addFormCloseBtn.addEventListener('click', () => {
    let addform = document.getElementById('addForm')
    addform.classList.remove('formsActive')
    addform.classList.add('formsHidden')
})

const deleteFormCloseBtn = document.querySelector('.delFormCloseBtn');
deleteFormCloseBtn.addEventListener('click', () => {
    let deleteform = document.getElementById('deleteForm')
    deleteform.classList.remove('formsActive')
    deleteform.classList.add('formsHidden')
})

const viewChanges = document.getElementById('viewChanges');
viewChanges.addEventListener('click', () => {
    window.location.href = 'Manager-Menu-Page-Updated.html'
})



//function to parse local storage and append menu items to menu
// let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('menu'))
// CurrentMenuItemsCustomerPage.forEach((item) => {
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
// })
// console.log(CurrentMenuItemsCustomerPage)