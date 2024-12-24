/*
    Un évenement correspond à une action spécifique, comme par exemple le clic sur un bouton, ou la frappe d'un clavier. Ainsi, la programmation evénementielle consiste à réagir à ces événements et exécuter du code au moment où ces événements se produisent.
    
    Les événements vont nous permettre de déclencher une fonction, c'est à dire une série d'instructions, suite à une action de mon utilisateur.

    pour implémenter cela, nous devons d'abord dire à JavaScript de les écouter grâce à un "eventListener", littéralement un "écouteur d'événement", en français. Puis, nous devons lier l'événement à un bloc de code.

    Ecouter un événement avec addEventListener :
    addEventListener est une méthode fournie par JavaScript, qui peut être appelée directement depuis les éléments HTML. Cette méthode prend deux paramètres :
    -> le nom de l'événement, comme click, par exemple;
    -> une fonction

    la fonction peut s'écrire de deux manières différentes :
    -> les fonctions classiques avec le mot-clé "function";
    -> les fonctions fléchées.

    Syntaxe :

    selecteur.addEventListener("événement", fonction);

    etape 1 -> selectionner les éléments
    étape 2 -> créer les fonctions qui seront executé par l'événement
    étape 3 -> poser l'écouteur d'événement pour l'intéraction


*/

// 1- div #rouge
let divRouge = document.querySelector("#rouge"); // je selectionne ma div par son id, ensuite lui rajoute un écouteur d'événement
console.log(divRouge);
//  Avec une fonction anonyme :
// divRouge.addEventListener("click", function(){
//     divRouge.style.backgroundColor = "gold";
//     divRouge.style.borderRadius = "50%";
//     divRouge.textContent = "GOLD";
// });
function fDivRouge() {
  divRouge.style.backgroundColor = "gold";
  divRouge.style.borderRadius = "50%";
  divRouge.textContent = "GOLD";
}
// -> l'action ici : le click
// -> le nom de la fonction ici : fDivRouge()
divRouge.addEventListener("click", fDivRouge);

// 2- #p1
// On place la fonction JavaScript qu'on veut exécuter à l'interieur de la balise ouvrante <p>

function fp1() {
  alert("L'élément est cliqué !");
}

// 3- div #orange
//  avec la fonction anonyme
let divOrange = document.querySelector("#orange");
divOrange.addEventListener("dblclick", function () {
  divOrange.style.backgroundColor = "gold";
  divOrange.style.borderRadius = "50%";
  divOrange.textContent = "GOLD";
});

// 4- div #info
//  avec la fonction anonyme
let divInfo = document.querySelector("#info");
divInfo.addEventListener("mouseover", function () {
  divInfo.style.backgroundColor = "gold";
  divInfo.style.borderRadius = "50%";
  divInfo.textContent = "GOLD";
});

// 5- div #primary
//  avec la fonction anonyme
let divPrimary = document.querySelector("#primary");
divPrimary.addEventListener("mouseout" /*mouseleave*/, function () {
  divPrimary.style.backgroundColor = "gold";
  divPrimary.style.borderRadius = "50%";
  divPrimary.textContent = "GOLD";
  // comme je peux intéragir sur un autre élément grâce à la même fonction
  document.querySelector("h1").style.color = "green";
});

// 6- div #success : click et reclick

let divChangeCouleur = document.querySelector("#success");
divChangeCouleur.addEventListener("click", () => {
  if (divChangeCouleur.classList.contains("vert")) {
    // je vérifie si la div contient la classe "vert" dans la liste de classes
    // si true
    divChangeCouleur.classList.remove("vert"); // je supprime la classe vert
    divChangeCouleur.classList.add("gold"); // je rajoute la classe gold
    divChangeCouleur.textContent = "GOLD";
  } else {
    // si non si false -> la div ne contient pas la classe vert => elle contient la classe gold
    divChangeCouleur.classList.add("vert"); // je rajoute la classe vert
    divChangeCouleur.classList.remove("gold"); // je supprime la classe gold
    divChangeCouleur.textContent = "VERT";
  }
});

// image chat
let imageChat = document.querySelector("img");
imageChat.style.width = "300px";

let lesP = document.querySelectorAll(".toggle p");
console.log(lesP);

// lesP[0].style.textDecoration = 'underline';
// lesP[1].style.textDecoration = 'underline';
// lesP[2].style.textDecoration = 'underline';

for (let paragraphe of lesP) {
  paragraphe.style.textDecoration = "underline";
  paragraphe.style.color = "#ee3366";
  paragraphe.style.fontWeight = "bolder";
}

// ---------------------
lesP[0].addEventListener("click", () => {
  imageChat.classList.add("hide");
});

lesP[1].addEventListener("click", () => {
  imageChat.classList.remove("hide");
});

lesP[2].addEventListener("click", () => {
  imageChat.classList.toggle("hide");
});

// ------------------KADER---------
// const ROUGE = document.getElementById("rouge");
// const ORANGE = document.getElementById("orange");
// const BLEU = document.querySelector("#bleu");
// const PRIMARY = document.querySelector("#primary");
// const SUCCESS = document.querySelector("#success");

// let colors = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
// let colours = [ROUGE, ORANGE, BLEU, PRIMARY, SUCCESS];

// function colorsEvent(myColour, myColor) {
//   myColour.classList.toggle("cercle");
//   if (myColour.textContent === "GOLD") {
//     myColour.textContent = myColor;
//   } else {
//     myColour.textContent = "GOLD";
//   }
// }

// for (let i = 0; i < colours.length; i++) {
//   colours[i].addEventListener("click", () =>
//     colorsEvent(colours[i], colors[i])
//   );
// }

// -----------------------------------
// l'objet event (e) est un objet javascript, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétés et méthodes

// Définir le event en tant que paramétre de votre fonction est facultatif mais , parfois, il est utile que la fonction de gestionnaire connaisse l'évenement qui s'est produit

//  Il set possible d'annuler ce comportement par défaut en appelant la méthode "preventDefault()" sur l'objet "event"
document.querySelector("#interdit").addEventListener("click", (event) => {
  event.preventDefault(); // la méthode "preventDefault()" est particulierement utile pour éviter que la soumission d'un formulaire recharge la page
  console.log("Continuer plutôt à lire le cours !!!");

  console.log(event);
});
