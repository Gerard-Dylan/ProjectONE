



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
