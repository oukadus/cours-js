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

// -----------------------------------------------------------------------------
// VALIDATION FORMULAIRE
// -----------------------------------------------------------------------------

let prenom = document.getElementById("prenom");
let submit = document.getElementById("submit");
let form = document.querySelector("form");

// console.log(submit);

// En JS pour accéder à la valeur d'une zone de texte dans un formulaire, on utilise la propriété value

submit.addEventListener("click", (event) => {
  event.preventDefault();
  // je récupère la valeur de l'élément input prenom
  // let prenomValue = prenom.value;
  // console.log(prenomValue);
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target.langage);
// });

prenom.addEventListener("focus", (e) => {
  prenom.style.width = "300px";
  prenom.style.border = "4px solid red";
  console.log(prenom.style.width);
});

prenom.addEventListener("blur", (e) => {
  // l'utilisateur sort du champs
  prenom.style.width = "500px";
  prenom.style.border = "1px solid black";
  console.log(prenom.style.width);
});

// Méthode 1

// const HTML = document.getElementById("html");
// const CSS = document.getElementById("css");
// const JS = document.getElementById("js");

// HTML.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     e.target.nextElementSibling.style.color = "red";
//   } else {
//     document.querySelector("label[for='html']").style.color = "blue";
//   }
// });

// CSS.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     e.target.nextElementSibling.style.color = "red";
//   } else {
//     document.querySelector("label[for='css']").style.color = "blue";
//   }
// });

// JS.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     e.target.nextElementSibling.style.color = "red";
//   } else {
//     document.querySelector("label[for='js']").style.color = "blue";
//   }
// });

// Méthode 2

let checks = document.querySelectorAll("input[name='langage']");
// let checks = document.getElementsByName("langage");
console.log(checks);

for (let button of checks) {
  button.addEventListener("change", (e) => {
    if (button.checked) {
      e.target.labels[0].style.color = "red";
    } else {
      e.target.labels[0].style.color = "blue";
    }
  });
}

// Fonction pour réinitialiser les couleurs des labels
function resetLabelColors() {
  for (let btn of radios) {
    btn.labels[0].style.color = ""; // Remettre la couleur par défaut
  }
}

let radios = document.getElementsByName("acquisition");
console.log(radios);

for (let button of radios) {
  button.addEventListener("change", (e) => {
    resetLabelColors();
    if (button.checked) {
      switch (e.target.value) {
        case "Non Acquis":
          e.target.labels[0].style.color = "red";
          break;
        case "En cours d'acquisition":
          e.target.labels[0].style.color = "orange";
          break;
        case "Acquis":
          e.target.labels[0].style.color = "green";
          break;
        default:
          e.target.labels[0].style.color = "green";
      }
    }
  });
}

// for (let button of radios) {
//   button.addEventListener("change", (e) => {
//     if (button.checked) {
//       e.target.labels[0].style.color = "red";
//     } else {
//       e.target.labels[0].style.color = "blue";
//     }
//   });
// }
