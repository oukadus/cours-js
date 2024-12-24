const ROUGE = document.getElementById("rouge");
const ORANGE = document.getElementById("orange");
const BLEU = document.querySelector("#bleu");
const PRIMARY = document.querySelector("#primary");
const SUCCESS = document.querySelector("#success");

let colors = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
let myElements = [ROUGE, ORANGE, BLEU, PRIMARY, SUCCESS];

function colorsEvent(myElement, myColor) {
  myElement.classList.toggle("cercle");
  if (myElement.textContent === "GOLD") {
    myElement.textContent = myColor;
  } else {
    myElement.textContent = "GOLD";
  }
}

for (let i = 0; i < myElements.length; i++) {
  myElements[i].addEventListener("click", () =>
    colorsEvent(myElements[i], colors[i])
  );
}
// -------------------------------

document.getElementById("interdit").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});
