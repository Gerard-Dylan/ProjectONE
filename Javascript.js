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


function applyFilter() {
    const isVegan = document.getElementById('vegan').checked;
    const foodType = document.getElementById('foodType').value;
    const sortOrder = document.getElementById('sortOrder').value;


    if (isVegan && foodType !== "amazonie") {
        console.log("Repas vegan Amazonien seulement.");
        return;

    }

    const filterData = { isVegan, foodType, sortOrder };
    console.log("Filtre sélectionné:", filterData);
    dropdown.classList.remove("show");

}

<<<<<<< HEAD
/* Menu burger*/
const navigationLateral = document.getElementById("jsNavigationLateral");
const ouvertureDuMenu = document.getElementById("jsOuvertureDuMenu");
const fermetureLateral = document.getElementById("jsFermetureLateral");


function ouvreMenu() {
    navigationLateral.classList.add("active");
}

function fermeMenu() {
    navigationLateral.classList.remove("active");
}

/ Cliquez pour ouvrir ou fermer le menu. */
ouvertureDuMenu.onclick = ouvreMenu;
fermetureLateral.onclick = fermeMenu;
=======
/* Navigation Menu burger */

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

/
>>>>>>> 076c7f8ca895a1e000d2d69775e17ce815a69718
