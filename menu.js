const menuColumn1 = document.getElementById('menuColumn1');
const menuColumn2 = document.getElementById('menuColumn2');
const menuColumn3 = document.getElementById('menuColumn3');


var menuCounter = 1

var foodItems = [
    {
        id: 0,
        name: "Burrito de Bistec",
        price: 9.99,
        image: "bandidos_images/burrito_de_bistec.jpg",
        description: "Flour tortilla stuffed with steak and choice of toppings",
        calories: 920,
    },
    {
        id: 1,
        name: "Burrito de Carnitas",
        price: 8.99,
        image: "bandidos_images/burrito_de_carnitas.jpg",
        description: "Flour tortilla stuffed with pork and choice of toppings",
        calories: 920,
    },
    {
        id: 2,
        name: "Burrito de Chorizo",
        price: 8.99,
        image: "bandidos_images/burrito_de_chorizo.jpg",
        description: "Flour tortilla stuffed with mexican sausage and choice of toppings",
        calories: 920,
    },
    {
        id: 3,
        name: "Burrito de Pollo",
        price: 8.99,
        image: "bandidos_images/burrito_de_pollo.jpg",
        description: "Flour tortilla stuffed with chicken and choice of toppings",
        calories: 920,
    },
    {
        id: 4,
        name: "Burrito de Tinga",
        price: 8.99,
        image: "bandidos_images/burrito_de_tinga.jpg",
        description: "Flour tortilla stuffed with shredded chipotle chicken and choice of toppings",
        calories: 920,
    },
    {
        id: 5,
        name: "Steak Tacos",
        price: 12.99,
        image: "bandidos_images/steak_tacos.jpg",
        description: "Soft corn tortillas stuffed with steak and choice of toppings",
        calories: 920,
    },
    {
        id: 6,
        name: "Fish Tacos",
        price: 11.99,
        image: "bandidos_images/fish_tacos.jpg",
        description: "Soft corn tortillas stuffed with fish and choice of toppings",
        calories: 920,
    },
    {
        id: 7,
        name: "Shrimp Tacos",
        price: 11.99,
        image: "bandidos_images/shrimp_tacos.jpg",
        description: "Soft corn tortillas stuffed with shrimp and choice of toppings",
        calories: 920,
    },
    {
        id: 8,
        name: "Chicken Tacos",
        price: 11.99,
        image: "bandidos_images/chicken_tacos.jpg",
        description: "Soft corn tortillas stuffed with chicken and choice of toppings",
        calories: 920,
    },
    {
        id: 9,
        name: "Carnitas Tacos",
        price: 11.99,
        image: "bandidos_images/carnitas_tacos.jpg",
        description: "Soft corn tortillas stuffed with pork and choice of toppings",
        calories: 920,
    },
    {
        id: 10,
        name: "Steak Quesadillas",
        price: 13.99,
        image: "bandidos_images/steak_quesadillas.jpg",
        description: "Folded corn tortilla or flour tortilla stuffed with steak and choice of toppings",
        calories: 920,
    },
    {
        id: 11,
        name: "Chicken Quesadillas",
        price: 12.99,
        image: "bandidos_images/chicken_quesadillas.jpg",
        description: "Folded corn tortilla or flour tortilla stuffed with chicken and choice of toppings",
        calories: 920,
    },
    {
        id: 12,
        name: "Chorizo Quesadillas",
        price: 12.99,
        image: "bandidos_images/chorizo_quesadillas.jpg",
        description: "Folded corn tortilla or flour tortilla stuffed with Mexican sausage and choice of toppings",
        calories: 920,
    },
    {
        id: 13,
        name: "Carnitas Quesadillas",
        price: 12.99,
        image: "bandidos_images/carnitas_quesadillas.jpg",
        description: "Folded corn tortilla or flour tortilla stuffed with pork and choice of toppings",
        calories: 920,
    },
    {
        id: 14,
        name: "Picadillo Quesadillas",
        price: 12.99,
        image: "bandidos_images/picadillo_quesadillas.jpg",
        description: "Folded corn tortilla or flour tortilla stuffed with ground beef and choice of toppings",
        calories: 920,
    },
    {
        id: 15,
        name: "Enchiladas Rojas",
        price: 14.99,
        image: "bandidos_images/enchiladas_rojas.jpg",
        description: "Choice of steak, chicken or cheese topped with red chile sauce and choice of toppings.",
        calories: 920,
    },
    {
        id: 16,
        name: "Enchiladas Verdes",
        price: 14.99,
        image: "bandidos_images/enchiladas_verdes.jpg",
        description: "Choice of steak, chicken or cheese topped with green chile sauce and choice of toppings.",
        calories: 920,
    },
    {
        id: 17,
        name: "Enchiladas de Mole",
        price: 14.99,
        image: "bandidos_images/enchiladas_de_mole.jpg",
        description: "Stuffed with chicken and topped with mole and choice of toppings",
        calories: 920,
    },
    {
        id: 18,
        name: "Enchiladas Suizas",
        price: 14.99,
        image: "bandidos_images/enchiladas_suizas.jpg",
        description: "Stuffed with chicken, topped with Swiss cheese sauce",
        calories: 920,
    },
    {
        id: 19,
        name: "Super Burrito",
        price: 19.99,
        image: "bandidos_images/super_burrito.jpg",
        description: "A giant burrito stuffed with the hopes and dreams of all of Mexico",
        calories: 920,
    }
]

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
    localStorage.setItem('foodItems', JSON.stringify(foodItems)) //NOTE
}
renderMenu();


function addToCart(id) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Need to push it into the localStorage from this page first
    // Set item here? Then update cart from the begining
    updateCart();
};
