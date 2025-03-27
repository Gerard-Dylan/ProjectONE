
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


    if (isVegan && foodType !== "vegan") {
        console.log("Repas vegan seulement.");
        return;

    }

    const filterData = { isVegan, foodType, sortOrder };
    console.log("Filtre sélectionné:", filterData);
    dropdown.classList.remove("show");

}

const button1 = document.querySelector(".button_1");
const navImage = document.querySelector(".nav_image");
const header = document.querySelector("header");
const tablet = window.matchMedia("(min-width: 768px)");
const mobile = window.matchMedia("(max-width: 768px)");

window.onload = function () {

    window.addEventListener('resize', function () {

        if (tablet.matches) {
            navImage.appendChild(button1);
            button1.style.marginTop = "50px";
            button1.style.marginLeft = "70px";
            navImage.style.height = "200px";
        }
        else if (mobile.matches) {
            header.appendChild(button1);
            button1.style.marginLeft = "0px";
            button1.style.marginTop = "15px";
            button1.style.marginBottom = "15px";
        }

    });
}