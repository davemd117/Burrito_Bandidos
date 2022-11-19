//function to parse local storage and append menu items to menu
let CurrentMenuItemsCustomerPage = JSON.parse(localStorage.getItem('menu'))
CurrentMenuItemsCustomerPage.forEach((item) => {
    let name = item.name
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    let menuItems = document.querySelector('.menuItems')
    let menuItem = document.createElement('div')
    menuItem.classList.add('menuItem')
    menuItem.innerHTML = `
    <img class="itemImg" src="${item.image}" alt="">
    <h3 class="itemName">${nameCapitalized}</h3>
    <p class="itemPrice">${item.price}</p>
    <p class="itemDescription">${item.description}</p>
    `
    menuItems.appendChild(menuItem)
})
console.log(CurrentMenuItemsCustomerPage)
