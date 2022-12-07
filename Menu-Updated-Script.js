//function to parse local storage and append menu items to menu
let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('foodMenu'))
CurrentMenuItemsCustomerPage.forEach((item) => {
    console.log(CurrentMenuItemsCustomerPage)
    let menuItems = document.querySelector('.menuItems')
    let menuItem = document.createElement('div')
    menuItem.classList.add('menuItem')
    menuItem.innerHTML = `
    <img class="itemImg" src="${item.image}" alt="">
    <h3 class="itemName">${item.name}</h3>
    <p class="itemPrice">$${item.price}</p>
    <p class="itemCalories">${item.calories} calories</p>
    <p class="itemDescription">${item.description}</p>
    `
    menuItems.appendChild(menuItem)
})
console.log(CurrentMenuItemsCustomerPage)
