
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

button.addEventListener("click", () => {
	dropdown.classList.toggle("show");
});

document.addEventListener("click", (event) => {
	if (!dropdown.contains(event.target)) {
		dropdown.classList.remove("show");
	}
});

// ---------------------------

// Constantes tableau pour les infos des restaurants.
const restaurants = [
	{
		name: "Le Petit Bistro",
		type: "Français",
		price: 25,
		id: "LePetitBistro",
		src: "./images/top-view-grilled-chicken-fillet-served-with-bulgur-vegetables-white-wine.jpg",
		alt: "Photo du plat du bistro",
		description:
			"Un cadre intime pour savourer des plats traditionnels comme le bœuf bourguignon et la tarte tatin.",
	},
	{
		name: "Brasserie Saint-Germain",
		type: "Français",
		price: 30,
		id: "BrasserieSaint-Germain",
		src: "./images/mashed-potatoes-with-fried-eggplants-pickles-cream-sauce-plate.jpg",
		alt: "Photo du plat de la Brasserie",
		description:
			"Une cuisine raffinée avec des produits du terroir et des vins soigneusement sélectionnés.",
	},
	{
		name: "Sakura Sushi",
		type: "Japonais",
		price: 20,
		id: "SakuraSushi",
		src: "./images/top-view-nigiri-sushi-with-tuna-bamboo-leaf-served-with-pickled-ginger-slices-wasabi-plate.jpg",
		alt: "Photo du plat du Sakura Sushi",
		description:
			"Un bar à sushi où poissons frais et présentation élégante se rencontrent pour une expérience gastronomique unique.",
	},
	{
		name: "Ramen Ichiban",
		type: "Japonais",
		price: 18,
		id: "RamenIchiban",
		src: "./images/asian-rolls-with-herbs-spices.jpg",
		alt: "Photo de plat du Ramen Ichiban",
		description:
			"Savourez de délicieux bols de ramen aux bouillons parfumés et aux nouilles faites maison.",
	},
	{
		name: "Burger Haven",
		type: "Americain",
		price: 15,
		id: "BurgerHaven",
		src: "./images/flat-lay-american-food-with-america-flag.jpg",
		alt: "Photo de plat du Burger Haven",
		description:
			"Savourez des burgers juteux, des frites croustillantes et des milkshakes onctueux dans une ambiance rétro typiquement américaine.",
	},
	{
		name: "Smokey BBQ House",
		type: "Americain",
		price: 22,
		id: "SmokeyBBQHouse",
		src: "./images/meat-slices-sauce-with-mashed-potato.jpg",
		alt: "Photo de plat du Smokey BBQ",
		description:
			"Dégustez des viandes fumées lentement, nappées de sauce barbecue maison, dans un cadre chaleureux et convivial.",
	},
	{
		name: "El Rancho Grill",
		type: "Mexicain",
		price: 17,
		id: "ElRanchoGrill",
		src: "./images/mexican-food-blue-background.jpg",
		alt: "Photo de plat du El Rancho Grill",
		description:
			"Un mélange explosif de saveurs avec des tacos épicés, des fajitas grillées et des margaritas rafraîchissantes.",
	},
	{
		name: "MexiFusion",
		type: "Mexicain",
		price: 19,
		id: "Mexi-Fusion",
		src: "./images/mexican-menu.jpg",
		alt: "Photo de plat du Mexifusion",
		description:
			"Découvrez une cuisine tex-mex revisitée avec des ingrédients frais et une touche moderne.",
	},
	{
		name: "Lahore Palace",
		type: "Pakistanais",
		price: 23,
		id: "LahorePalace",
		src: "./images/duc-van-pWYRJOSPMcY-unsplash.jpg",
		alt: "Photo de plat du Lahore Palace",
		description:
			"Un voyage culinaire avec des currys épicés, des grillades tandoori et des pains naan moelleux.",
	},
	{
		name: "Karachi Delight",
		type: "Pakistanais",
		price: 21,
		id: "KarachiDelight",
		src: "./images/magic-mary-nEOzmjguwO0-unsplash.jpg",
		alt: "Photo de plat du Karachi Delight",
		description:
			"Une explosion de saveurs authentiques avec des plats mijotés et des épices traditionnelles du Pakistan.",
	},
	{
		name: "Trattoria Bella",
		type: "Italien",
		price: 26,
		id: "TrattoriaBella",
		src: "./images/tomatoes-raw-pasta-near-italian-food.jpg",
		alt: "Photo de plat du Trattoria Bella",
		description:
			"Plongez dans l'Italie avec des pâtes fraîches, des pizzas au feu de bois et des tiramisus maison.",
	},
	{
		name: "Osteria Napoli",
		type: "Italien",
		price: 28,
		id: "OsteriaNapoli",
		src: "./images/homemade-spaghetti-pasta-with-grated-cheese-cherry-tomatoes-container.jpg",
		alt: "Photo de plat du Osteria Napoli",
		description:
			"Un restaurant authentique où les saveurs méditerranéennes se marient à une ambiance familiale et chaleureuse.",
	},
	{
		name: "Green Delights",
		type: "Vegan",
		price: 20,
		id: "GreenDelights",
		src: "./images/assortment-delicious-food-ingredients.jpg",
		alt: "Photo de plat du Green Delights",
		description:
			"Cuisine végane créative et gourmande, avec des ingrédients frais et locaux pour un plaisir 100% naturel.",
	},
	{
		name: "Végét'Horizon",
		type: "Vegan",
		price: 22,
		id: "Végét'-Horizon",
		src: "./images/flat-lay-vegan-burgers-wooden-board-with-copy-space.jpg",
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

	// Regrouper les restaurants par type de cuisine.
	const restaurantsByType = restaurantsList.reduce((acc, restaurant) => {
		if (!acc[restaurant.type]) {
			acc[restaurant.type] = [];
		}
		acc[restaurant.type].push(restaurant);
		return acc;
	}, {});

	// Créer un conteneur pour chaque type de cuisine.
	for (const type in restaurantsByType) {
		const typeContainer = document.createElement("div");
		typeContainer.classList.add("type-container");

		// Créer un titre pour le type de cuisine.
		const typeTitle = document.createElement("h2");
		typeTitle.textContent = type;
		typeContainer.appendChild(typeTitle);

		// Créer des paires de restaurants.
		const restaurantPairs = [];
		for (let i = 0; i < restaurantsByType[type].length; i += 2) {
			restaurantPairs.push(restaurantsByType[type].slice(i, i + 2));
		}

		// Créer un conteneur pour chaque paire de restaurants.
		restaurantPairs.forEach((pair) => {
			const pairContainer = document.createElement("div");
			pairContainer.classList.add("pair-container");

			// Ajouter chaque restaurant de la paire au conteneur.
			pair.forEach((restaurant) => {
				const restaurantDiv = document.createElement("div");
				restaurantDiv.classList.add("restaurant", restaurant.type);
				restaurantDiv.id = restaurant.id;

				restaurantDiv.innerHTML = `
                    <img class="restaurant image" src="${restaurant.src}" alt="${restaurant.alt}" />
                    <button class="descriptif-btn">Descriptif</button>
                    <div class="descriptif-content">
                        <p><b>${restaurant.name}</b> - ${restaurant.description}</p>
                        <p class="price">Prix : ${restaurant.price}€</p>
                    </div>
                `;
				pairContainer.appendChild(restaurantDiv);

				// Ajout de l'écouteur d'événement pour le bouton "Descriptif".
				const descriptifBtn = restaurantDiv.querySelector(".descriptif-btn");
				const descriptifContent = restaurantDiv.querySelector(".descriptif-content");

				descriptifBtn.addEventListener("click", () => {
					descriptifContent.classList.toggle("show");
				});
			});
			typeContainer.appendChild(pairContainer);
		});
		restaurantContainer.appendChild(typeContainer);
	}

	// Gestion de la fermeture du menu déroulant au clique en dehors.
	document.addEventListener("click", (event) => {
		const descriptifContents = document.querySelectorAll(".descriptif-content");
		descriptifContents.forEach((content) => {
			if (!content.parentElement.contains(event.target)) {
				content.classList.remove("show");
			}
		});
	});
}

// ---------------------------


// Fonction pour filtré et trié les prix.
function applyFilter() {
	const isVegan = document.getElementById("vegan").checked;
	const foodType = document.getElementById("foodType").value.toLowerCase();
	const sortOrder = document.getElementById("sortOrder").value;

	console.log("Filtre sélectionné:", { isVegan, foodType, sortOrder });

	// Filtre suivant la séléction.
	let filteredRestaurants = restaurants.filter((restaurant) => {
		const restaurantType = restaurant.type.toLowerCase();

		// Si je coche vegan je ne garde QUE les restaurants Vegan.
		if (isVegan) return restaurantType === "vegan";

		// Sinon, je filtre par type de nourriture sélectionné.
		if (foodType && restaurantType !== foodType) return false;

		return true;
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


	// Je remet mes filtres à zéro après l'application.
	document.getElementById("vegan").checked = false;
	document.getElementById("foodType").value = "";
	document.getElementById("sortOrder").value = "";

}

// ---------------------------

// J'affiche tous les restaurants au chargement de ma page.
document.addEventListener("DOMContentLoaded", () => {
	renderRestaurants(restaurants);
});


// ------------------------
