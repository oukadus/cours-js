/*
// rectangleBtn.addEventListener("click", () =>
//   rectangle.classList.toggle("hidden")
// );

// rectangle.addEventListener("mouseover", () => {
//   rectangle.classList.add("red");
// });

// rectangle.addEventListener("mouseout", () => {
//   rectangle.classList.remove("red");
// });

// rectangle.addEventListener("dblclick", () => {
//   rectangle.classList.toggle("green");
// });

*/

// Déclaration des éléments
const rectangleBtn = document.querySelector("#toggle-rectangle");
const rectangle = document.querySelector(".rectangle");

// Déclaration des fonctions
const toHide = () => rectangle.classList.toggle("hidden");
const addColorChangeRed = () => rectangle.classList.add("red");
const RemoveColorChangeRed = () => rectangle.classList.remove("red");
const addColorChangeGreen = () => rectangle.classList.add("green");
const removeColorChangeGreen = () => rectangle.classList.remove("green");

// Ajout des écouteurs d'évènement
rectangleBtn.addEventListener("click", toHide);
rectangle.addEventListener("mouseover", addColorChangeRed);
rectangle.addEventListener("mouseout", RemoveColorChangeRed);
rectangle.addEventListener("dblclick", addColorChangeGreen);
rectangle.addEventListener("mouseout", removeColorChangeGreen);
