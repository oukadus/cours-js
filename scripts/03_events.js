/* 
Un évenement correspond à une action spécifique comme par exemple le clic sur un bouton, ou la frappe d'un clavier. Ainsi, la programmation évènementielle consiste à réagir à ces évènements et exécuter du code au moment où ces derniers se produisent. 

Les évènements vont nous permettre de déclencher une fonction, c'est à dire une série d'instructions suite à une action de l'utilisateur.

Pour implémenter cela, nous devvons d'abord dire à JavaScript de les écouter grâce à un "eventListener", littéralement un "écouteur d'évènement", en français. Puis nous devons lier l'évènement  à un bloc de code. 

Ecouter un évènement avec addEventListener() : 
addEventListener est une méthode qui peut être appelé directement depuis les éléments HTML. La méthode a deux arguments : 
-> Le nom de l'évènement, comme click, par exemple; 
-> une fonction

La fonction peut s'écrire de deux manières différentes. 
-> Les fonctions classiques avec le mot clé "function" 
-> Les fonctions fléchés

Syntaxe : 
selecteur.addEventListener('évènement', fonction)
*/

// Etape 1 : Sélectionner les éléments
const ROUGE = document.getElementById("rouge");
const CLICK = document.querySelector(".bouton");
const ORANGE = document.getElementById("orange");
const BLEU = document.querySelector("#bleu");
const PRIMARY = document.querySelector("#primary");
const SUCCESS = document.querySelector("#success");

// Etape 2 : créer les fonctions qui seront exécutés par l'évènement
// Etape 3 : Poser l'écouteur d'évènement pour l'intéraction.

ROUGE.addEventListener("click", () => {
  ROUGE.classList.toggle("cercle");
  if (ROUGE.textContent === "GOLD") {
    ROUGE.textContent = "ROUGE";
  } else {
    ROUGE.textContent = "GOLD";
  }
});

CLICK.addEventListener("click", () => {
  ROUGE.classList.toggle("cercle");
  if (ROUGE.textContent === "GOLD") {
    ROUGE.textContent = "ROUGE";
  } else {
    ROUGE.textContent = "GOLD";
  }
});

// callBack :
// CLICK.addEventListener("click", divFonction);

// function divFonction() {
//   ROUGE.classList.toggle("cercle");
//   if (ROUGE.textContent === "#rouge") {
//     ROUGE.textContent = "#gold";
//   } else {
//     ROUGE.textContent = "#rouge";
//   }
// };

// 3 - div #orange
// avec la fonction anonyme

ORANGE.addEventListener("dblclick", () => {
  ORANGE.classList.toggle("cercle");
  if (ORANGE.textContent === "GOLD") {
    ORANGE.textContent = "ORANGE";
  } else {
    ORANGE.textContent = "GOLD";
  }
});

BLEU.addEventListener("mouseover", () => {
  BLEU.classList.toggle("cercle");
  if (BLEU.textContent === "GOLD") {
    BLEU.textContent = "BLEU";
  } else {
    BLEU.textContent = "GOLD";
  }
});

PRIMARY.addEventListener("mouseleave", () => {
  PRIMARY.classList.toggle("cercle");
  document.querySelector("h1").style.color = "green";
  if (PRIMARY.textContent === "GOLD") {
    PRIMARY.textContent = "PRIMARY";
  } else {
    PRIMARY.textContent = "GOLD";
  }
});

SUCCESS.addEventListener("click", () => {
  if (SUCCESS.classList.contains("vert")) {
    SUCCESS.classList.remove("vert");
    SUCCESS.classList.add("cercle");
    SUCCESS.textContent = "GOLD";
  } else {
    SUCCESS.classList.add("vert");
    SUCCESS.classList.remove("cercle");
    SUCCESS.textContent = "SUCCESS";
  }
});
