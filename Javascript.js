/* const dropdown = document.querySelector(".dropdown");
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
 */
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


/* Récupération de l'élément Buttun */
let btnFrenchOne = document.getElementById("btn-french-one");
/* Réupération de l'icône */
let iconFrenchOne = document.getElementById("icon-french-one");
/* récupération du détail des textes */
let detailsTextFrenchOne = document.getElementById("details-text-french-one");

/* Condition d'affichage du texte */
const toggleDetailsFrench = () => {
    if (iconFrenchOne.name === "chevron-down") {
        iconFrenchOne.name = "chevron-up";
        detailsTextFrenchOne.style.height = "max-content";
    } else {
        iconFrenchOne.name = "chevron-down";
        detailsTextFrenchOne.style.height = 0;
    }
};

/* Evenvement clic */
btnFrenchOne; addEventListener("click", toggleDetailsFrench);



/* Récupération de l'élément Buttun */
let btnJapon = document.getElementById("btn-japan");
/* Réupération de l'icône */
let iconJapon = document.getElementById("icon-japan");
/* récupération du détail des textes */
let detailsTextJapon = document.getElementById("details-text-japan");

/* Condition d'affichage du texte */
const toggleDetailsJapan = () => {
    if (iconJapon.name === "chevron-down") {
        iconJapon.name = "chevron-up";
        detailsTextJapon.style.height = "max-content";
    } else {
        iconJapon.name = "chevron-down";
        detailsTextJapon.style.height = 0;
    }
};
/* Evenvement clic */
btnJapon; addEventListener("click", toggleDetailsJapan);




/* Récupération de l'élément Buttun */
let btnusa = document.getElementById("btn-usa");
/* Réupération de l'icône */
let iconUsa = document.getElementById("icon-Usa");
/* récupération du détail des textes */
let detailsTextUsa = document.getElementById("details-text-usa");

/* Condition d'affichage du texte */
const toggleDetailsUsa = () => {
    if (iconUsa.name === "chevron-down") {
        iconUsa.name = "chevron-up";
        detailsTextUsa.style.height = "max-content";
    } else {
        iconUsa.name = "chevron-down";
        detailsTextUsa.style.height = 0;
    }
};
/* Evenvement clic */
btnUsa; addEventListener("click", toggleDetailsUsa);

console.log(detailsTextUsa)


const popover = document.getElementById("mypopover");

//…

popover.addEventListener("toggle", (event) => {
    if (event.newState === "open") {
        console.log("Le popover a été affiché");
    } else {
        console.log("Le popover a été masqué");
    }
});
