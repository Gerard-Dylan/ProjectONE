// ------------ affichage menu déroulant -------------

const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector("button");

button.addEventListener("click", function (event) {
    dropdown.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});

// ---------------------------


// constantes tableau pour cibler les filtres.
const restaurants = [
    { name: "Le Petit Bistro", type: "français", price: 25, element: document.getElementById("one") },
    { name: "Brasserie Saint-Germain", type: "français", price: 30, element: document.getElementById("two") },
    { name: "Sakura Sushi", type: "japonais", price: 20, element: document.querySelector(".Japonais #one") },
    { name: "Ramen Ichiban", type: "japonais", price: 18, element: document.querySelector(".Japonais #two") },
    { name: "Burger Haven", type: "americain", price: 15, element: document.querySelector(".Americain .one") },
    { name: "Smokey BBQ House", type: "americain", price: 22, element: document.querySelector(".Americain .two") },
    { name: "El Rancho Grill", type: "mexicain", price: 17, element: document.querySelector(".Mexicain .one") },
    { name: "MexiFusion", type: "mexicain", price: 19, element: document.querySelector(".Mexicain .two") },
    { name: "Lahore Palace", type: "pakistanais", price: 23, element: document.querySelector(".Pakistanais .one") },
    { name: "Karachi Delight", type: "pakistanais", price: 21, element: document.querySelector(".Pakistanais .two") },
    { name: "Trattoria Bella", type: "italien", price: 26, element: document.querySelector(".Italien .one") },
    { name: "Osteria Napoli", type: "italien", price: 28, element: document.querySelector(".Italien .two") },
    { name: "Green Delights", type: "vegan", price: 20, element: document.querySelector(".Vegan .one") },
    { name: "Végét'Horizon", type: "vegan", price: 22, element: document.querySelector(".Vegan .two") },
];

// ------------------------------



// application filtres et tri du prix. 

function applyFilter() {
    const isVegan = document.getElementById('vegan').checked;
    const foodType = document.getElementById('foodType').value;
    const sortOrder = document.getElementById('sortOrder').value;

    console.log("Filtre sélectionné:", { isVegan, foodType, sortOrder });

    // ---------------------------------

    // Filtrage des restaurants suivant les choix ET priorité au filtre vegan pour le type de nourriture.
    let filteredRestaurants = restaurants.filter(restaurant => {
        if (isVegan) {
            return restaurant.type === "vegan";
        }
        return foodType === "" || restaurant.type === foodType;
    });

    if (sortOrder === "price_asc") {
        filteredRestaurants.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price_desc") {
        filteredRestaurants.sort((a, b) => b.price - a.price);
    }


    // Masque tous les restaurants.
    restaurants.forEach(restaurant => {
        if (restaurant.element) restaurant.element.style.display = "none";
    });

    // Affiche seulement le restaurant filtré.
    filteredRestaurants.forEach(restaurant => {
        if (restaurant.element) restaurant.element.style.display = "block";
    });

    // Je séléctionne toutes les div hautes de chaque section du body pour attraper les H1 dedans.
    document.querySelectorAll("body > div").forEach(section => {

        // Je récupère tous les divs enfants (qui sont dans les div correspondant au restaurant).
        const restaurantElements = section.querySelectorAll("div");

        // Je regarde si y'a un restaurant visible ou pas dans le tableau.
        const hasVisibleRestaurant = Array.from(restaurantElements).some(div => div.style.display === "block");

        // Je cache la section si pas de restaurant visible.
        section.style.display = hasVisibleRestaurant ? "block" : "none";
    });

    dropdown.classList.remove("show");
}
// --------------------------------------------------