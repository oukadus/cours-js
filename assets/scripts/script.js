// SELECTEURS
// Une fonction (methode) déjà codé en js
// document.querySelector("h4").style.background = "yellow";
// document.querySelector(".box").style.color = "red";
// la couleur de fond du H4 est changée en yellow

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event");

// questionContainer.addEventListener("click", () => {
//   console.log("click !");
//   questionContainer.style.border = "3px solid red";
// });

questionContainer.addEventListener("click", () => {
  console.log("click !");
  questionContainer.classList.toggle("question-click");
});
