
/* menu burger */
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
	sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	sidenav.classList.remove("active");
}

// ------------Affiche le menu déroulant-------------

const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector("button");

button.addEventListener("click", (event) => {
	dropdown.classList.toggle("show");
});

document.addEventListener("click", (event) => {
	if (!dropdown.contains(event.target)) {
		dropdown.classList.remove("show");
	}
});

// ---------------------------



// ----------Deplacement du bouton du header dans la nav -------------------

const bmobile = document.getElementById("buttonmobile");
const btablet = document.getElementById("buttontablet");
const header = document.querySelector("header");

function deplacement() {

	if (window.matchMedia("(min-width:768px)").matches) {
		btablet.appendChild(dropdown);
	} else {
		header.appendChild(dropdown)

	}

}

deplacement();
window.addEventListener("resize", deplacement);

//------------------------------



// Constantes tableau pour les infos des restaurants.
const restaurants = [
	{
		name: "Le Petit Bistro",
		type: "français",
		price: 25,
		id: "LePetitBistro",
		src: "/images/top-view-grilled-chicken-fillet-served-with-bulgur-vegetables-white-wine.jpg",
		alt: "Photo du plat du bistro",
		description:
			"Un cadre intime pour savourer des plats traditionnels comme le bœuf bourguignon et la tarte tatin.",
	},
	{
		name: "Brasserie Saint-Germain",
		type: "français",
		price: 30,
		id: "BrasserieSaint-Germain",
		src: "/images/mashed-potatoes-with-fried-eggplants-pickles-cream-sauce-plate.jpg",
		alt: "Photo du plat de la Brasserie",
		description:
			"Une cuisine raffinée avec des produits du terroir et des vins soigneusement sélectionnés.",
	},
	{
		name: "Sakura Sushi",
		type: "japonais",
		price: 20,
		id: "SakuraSushi",
		src: "/images/top-view-nigiri-sushi-with-tuna-bamboo-leaf-served-with-pickled-ginger-slices-wasabi-plate.jpg",
		alt: "Photo du plat du Sakura Sushi",
		description:
			"Un bar à sushi où poissons frais et présentation élégante se rencontrent pour une expérience gastronomique unique.",
	},
	{
		name: "Ramen Ichiban",
		type: "japonais",
		price: 18,
		id: "RamenIchiban",
		src: "/images/asian-rolls-with-herbs-spices.jpg",
		alt: "Photo de plat du Ramen Ichiban",
		description:
			"Savourez de délicieux bols de ramen aux bouillons parfumés et aux nouilles faites maison.",
	},
	{
		name: "Burger Haven",
		type: "americain",
		price: 15,
		id: "BurgerHaven",
		src: "/images/flat-lay-american-food-with-america-flag.jpg",
		alt: "Photo de plat du Burger Haven",
		description:
			"Savourez des burgers juteux, des frites croustillantes et des milkshakes onctueux dans une ambiance rétro typiquement américaine.",
	},
	{
		name: "Smokey BBQ House",
		type: "americain",
		price: 22,
		id: "SmokeyBBQHouse",
		src: "/images/meat-slices-sauce-with-mashed-potato.jpg",
		alt: "Photo de plat du Smokey BBQ",
		description:
			"Dégustez des viandes fumées lentement, nappées de sauce barbecue maison, dans un cadre chaleureux et convivial.",
	},
	{
		name: "El Rancho Grill",
		type: "mexicain",
		price: 17,
		id: "ElRanchoGrill",
		src: "/images/mexican-food-blue-background.jpg",
		alt: "Photo de plat du El Rancho Grill",
		description:
			"Un mélange explosif de saveurs avec des tacos épicés, des fajitas grillées et des margaritas rafraîchissantes.",
	},
	{
		name: "MexiFusion",
		type: "mexicain",
		price: 19,
		id: "Mexi-Fusion",
		src: "/images/mexican-menu.jpg",
		alt: "Photo de plat du Mexifusion",
		description:
			"Découvrez une cuisine tex-mex revisitée avec des ingrédients frais et une touche moderne.",
	},
	{
		name: "Lahore Palace",
		type: "pakistanais",
		price: 23,
		id: "LahorePalace",
		src: "/images/duc-van-pWYRJOSPMcY-unsplash.jpg",
		alt: "Photo de plat du Lahore Palace",
		description:
			"Un voyage culinaire avec des currys épicés, des grillades tandoori et des pains naan moelleux.",
	},
	{
		name: "Karachi Delight",
		type: "pakistanais",
		price: 21,
		id: "KarachiDelight",
		src: "/images/magic-mary-nEOzmjguwO0-unsplash.jpg",
		alt: "Photo de plat du Karachi Delight",
		description:
			"Une explosion de saveurs authentiques avec des plats mijotés et des épices traditionnelles du Pakistan.",
	},
	{
		name: "Trattoria Bella",
		type: "italien",
		price: 26,
		id: "TrattoriaBella",
		src: "/images/tomatoes-raw-pasta-near-italian-food.jpg",
		alt: "Photo de plat du Trattoria Bella",
		description:
			"Plongez dans l'Italie avec des pâtes fraîches, des pizzas au feu de bois et des tiramisus maison.",
	},
	{
		name: "Osteria Napoli",
		type: "italien",
		price: 28,
		id: "OsteriaNapoli",
		src: "/images/homemade-spaghetti-pasta-with-grated-cheese-cherry-tomatoes-container.jpg",
		alt: "Photo de plat du Osteria Napoli",
		description:
			"Un restaurant authentique où les saveurs méditerranéennes se marient à une ambiance familiale et chaleureuse.",
	},
	{
		name: "Green Delights",
		type: "vegan",
		price: 20,
		id: "GreenDelights",
		src: "/images/assortment-delicious-food-ingredients.jpg",
		alt: "Photo de plat du Green Delights",
		description:
			"Cuisine végane créative et gourmande, avec des ingrédients frais et locaux pour un plaisir 100% naturel.",
	},
	{
		name: "Végét'Horizon",
		type: "vegan",
		price: 22,
		id: "Végét'-Horizon",
		src: "/images/flat-lay-vegan-burgers-wooden-board-with-copy-space.jpg",
		alt: "Photo de plat du Végét'Horizon",
		description:
			"Une expérience culinaire végane savoureuse, alliant fraîcheur, éthique et créativité.",
	},
];

// ------------------------------


// Je sélectione le conteneur où afficher mes restaurants.
const restaurantContainer = document.getElementById("restaurant-container");

// ---------------------------


// Fonction pour afficher les restaurants en dynamique.
function renderRestaurants(restaurantsList) {
	restaurantContainer.innerHTML = "";

	restaurantsList.forEach((restaurant) => {
		const restaurantDiv = document.createElement("div");
		restaurantDiv.classList.add("restaurant", restaurant.type);
		restaurantDiv.id = restaurant.id;

		// Je génére le contenu de mes restaurants.
		restaurantDiv.innerHTML = `
            <h2>${restaurant.name}</h2>
            <img class="restaurant image" src="${restaurant.src}" alt="${restaurant.alt}" />
            <p> <b>${restaurant.name}</b> - ${restaurant.description}</p>
            <p class="price">Prix : ${restaurant.price}€</p>
        `;

		restaurantContainer.appendChild(restaurantDiv);
	});
}

// ---------------------------


// Fonction pour filtré et trié les prix.
function applyFilter() {
	const isVegan = document.getElementById("vegan").checked;
	const foodType = document.getElementById("foodType").value;
	const sortOrder = document.getElementById("sortOrder").value;

	console.log("Filtre sélectionné:", { isVegan, foodType, sortOrder });

	// Filtre suivant la séléction.
	let filteredRestaurants = restaurants.filter((restaurant) => {
		if (isVegan) return restaurant.type === "vegan";
		return foodType === "" || restaurant.type === foodType;
	});

	// Tri selon les prix.
	if (sortOrder === "price_asc") {
		filteredRestaurants.sort((a, b) => a.price - b.price);
	} else if (sortOrder === "price_desc") {
		filteredRestaurants.sort((a, b) => b.price - a.price);
	}

	// Pour mettre à jour l'affichage avec les restaurants filtrés et triés.
	renderRestaurants(filteredRestaurants);
	dropdown.classList.remove("show");
}

// ---------------------------

// J'affiche tous les restaurants au chargement de ma page.
document.addEventListener("DOMContentLoaded", () => {
	renderRestaurants(restaurants);
});


// ------------------------