//array to store html elements as objects might need to call on button click
let menu = []
let menuItems = document.querySelectorAll('.menuItem')
menuItems.forEach((item) => {
    // push to array of objects
    menu.push({
        name: item.querySelector('.itemName').textContent,
        price: item.querySelector('.itemPrice').textContent,
        description: item.querySelector('.itemDescription').textContent,
        image: item.querySelector('.itemImg').src,
        calories: item.querySelector('.itemCalories').textContent
    })
})
console.log(menu)

//start of add new menu item  
const addNewMenuItemBtn = document.getElementById('addNewMenuItem');
addNewMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    // test
    // const whereToinsert = document.getElementById('locationNewItem').value;
    // end test
    // checking if inputs are empty or not will need to check if they already exist as well need to figure out why checking name is not working
    if(name === '' || price === '' || description === '' || image === '' || calories === '') {
        alert('Please fill out required fields')
    } else {
    const newMenuItem = {
        name: document.getElementById('newItemName').value,
        price: document.getElementById('newItemPrice').value,
        description: document.getElementById('newItemDescription').value,
        image: document.getElementById('newItemImg').value
    }
    // test trying to make the item appear in manager menu in correct spot and not reload array everytime
    // menu.splice(whereToinsert, 0, newMenuItem)
    // end test
    menu.push(newMenuItem)
    console.log(menu)
    appendMenuItems(menu)    
    }
})

const appendMenuItems = (menu) => {
    const menuItems = document.querySelector('.menuItems')
    const newMenuItem = document.createElement('div')
    const whereToinsert = document.getElementById('locationNewItem').value;
    newMenuItem.classList.add('menuItem')
    newMenuItem.innerHTML = `
    <img class="itemImg" src="${menu[menu.length - 1].image}"  alt="...">
    <h3 class="itemName">${menu[menu.length - 1].name}</h3>
    <p class="itemPrice">${menu[menu.length - 1].price}</p>
    <p class="itemDescription">${menu[menu.length - 1].description}</p>
`
    menuItems.appendChild(newMenuItem)  
}
// end of add new menu item

// function to delete menu item need to check if item name is in cart
const deleteMenuItemBtn = document.getElementById('deleteMenuItem');
deleteMenuItemBtn.addEventListener('click', () => {
    const deleteMenuItem = document.getElementById('deleteItemName').value
    for(i = 0 ; i < menu.length ; i++) {
        if(menu[i].name === deleteMenuItem) {
// delete from card container
        const menuItems = document.querySelector('.menuItems')
        menuItems.removeChild(menuItems.children[i])
//delete from menu array
        menu.splice(i, 1)
        console.log(menu)
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

