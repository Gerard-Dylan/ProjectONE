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

/* /* On isole notre html *const navigationLateral = document.getElementById("jsNavigationLateral");
const ouvertureDuMenu = document.getElementById("jsOuvertureDuMenu");
const fermetureLateral = document.getElementById("jsFermetureLateral");


function ouvreMenu() {
    navigationLateral.classList.add("active");
}

function fermeMenu() {
    navigationLateral.classList.remove("active");
}

/ Cliquez pour ouvrir ou fermer le menu.
ouvertureDuMenu.onclick = ouvreMenu;
fermetureLateral.onclick = fermeMenu;
 */


let btnFrenchOne = document.getElementById("btn-french-one");
let btnIconFrenchOne = document.getElementById("icon-french-one");
let detailsOne = document.getElementById("details-one");


const toggleDetails = () => {
    if (btnFrenchOne.name === "chevron-down") {
        btnIconFrenchOne.name = "chevron-up";
        detailsOne.style.height = "max - content";
    }
    else {
        btnIconFrenchOne.name = "chevron-down";
        detailsOne.style.height = 0;
    }
};
btnFrenchOne.addEventListener("click", toggleDetails);
