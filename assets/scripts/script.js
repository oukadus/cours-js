// SELECTEURS
// Une fonction (methode) déjà codé en js
// document.querySelector("h4").style.background = "yellow";
// document.querySelector(".box").style.background = "red";
// la couleur de fond du H4 est changée en yellow

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event");
const questionbtn1 = document.getElementById("btn-1");
const questionbtn2 = document.getElementById("btn-2");
const answer = document.querySelector(".answer");

// questionContainer.addEventListener("click", () => {
//   console.log("click !");
//   questionContainer.style.border = "3px solid red";
// });

questionContainer.addEventListener("click", () => {
  console.log("click !");
  questionContainer.classList.toggle("question-click");
});

questionbtn1.addEventListener("click", () => {
  console.log("bouton 1");
  answer.classList.add("showAnswer");
  answer.style.background = "green";
});

questionbtn2.addEventListener("click", () => {
  console.log("bouton 2");
  answer.classList.add("showAnswer");
  answer.style.background = "red";
});

// Priorités des Selecteurs Style -> #Id -> .Class -> htmlElement

//----------------------------------------------------------
//  Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
