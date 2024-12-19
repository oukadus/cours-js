// console.log(selectClass[0].innerHTML);
// console.log(selectClass[1].textContent); // .innerHTML et .textContent donnent la même chose

// .innerHTML permet de définir le contenu de la balise ou l'élément HTML et le sélectionner dans le but de l'identifier, de le modifier ou de le manipuler autrement.

// Mini exo : modifier le contenu du h2 qui a la classe "aChanger" : 'Je change le titre, youhou !'

// let aChanger = document.getElementsByClassName("aChanger");

// console.log(aChanger[0].innerHTML);

// aChanger[0].innerHTML = "Je change le titre, youhou !";

// console.log(aChanger[0].innerHTML);

// Sélectionner les éléments via le nom de balise :

// let lesP = document.getElementsByTagName("p"); // On cherche tous les paragraphes de notre page et on les récupère dans un tableau (array) via la méthode "getElementsByTagName("p")"
// console.log(lesP);
// // Pour changer le CSS d'un élément HTML
// lesP[0].style.backgroundColor = "pink";

// // Mini exo : Sélectionner le premier paragraphe et lui donner le style suivant :
// // border-radius (20px), color (#fff), padding (10px)

// lesP[0].style.borderRadius = "20px";
// lesP[0].style.color = "#fff";
// lesP[0].style.padding = "10px";

// // Je sélectionne tous les paragraphes dans la page et je change le texte en majuscule (1ère méthode)

// // for (let i = 0; i < lesP.length; i++) {
// //     lesP[i].style.textTransform = "uppercase";
// // }

// // 2ème méthode :

// for (let p of lesP) {
//   p.style.textTransform = "uppercase";
// }

// Méthode querySelector

// let div = document.querySelector("div");
// console.log(div);
// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètre
// L'avantage de querySelector est qu'il utilise la même synthaxe de sélection en CSS
// document.querySelector("#monId"), document.querySelector(".maClasse"), document.querySelector("maBalise");
// div.style.border = "1px solid red";

// Méthode querySelectorAll()
// sélectionne toutes les balises div et retourne un tableau (array) d'éléments
let queryPara = document.querySelectorAll(".selectClass");
// On a 2 paragraphes qui ont la classe "selectClass"
console.log(queryPara);
console.log(queryPara[1].innerHTML);

let rajout = document.querySelector("div.col-4 > p.selectClass");

rajout.innerHTML = "<span>je suis là</span>"; // Avec la propriété innerHTML, on peut inclure les balises html, permet d'insérer du HTML dynamique mais peut poser des risques de sécurité si des données non sécurisées sont insérées (on parle de risque d'attaque XSS)
rajout.textContent = "<span>je suis là</span>"; // "textContent" permet uniquement de lire ou de modifier le contenu texte d'un élément. Il ignore et échappe les balises HTML
console.log(rajout);

// Création d'un nouvel element HTML à la fin de la section.
let section = document.querySelector("section");
console.log(section);

// Pour créer un élément, nous utilisons la méthode "creatElement()" puis après nous l'intégrons dans le noeud souhaité
// exemple ajouter un élément à Section

let nouveauParaFin = document.createElement("p");
// console.log(nouveauParaFin);
nouveauParaFin.innerText =
  "Coucou ceci est un nouveau <strong>paragraphe</strong> à la fin de la section";

console.log(nouveauParaFin);

section.append(nouveauParaFin); // append() -> insérer du contenu à la fin de la section // apend() accepte tous les éléments (balises ou string)

// appendChild() : cette méthode ajoute un élément HTML enfant à la fin d'un élément parent // n'accepte que les éléments de types balise.

// Création d'un nouvel element HTML au début de la section.
let nouveauParaDebut = document.createElement("p");
nouveauParaDebut.innerText =
  "Coucou, je suis ton paragraphe au début de la section";
section.prepend(nouveauParaDebut); // La méthode "prepend()" va insérer l'élément et son contenu au début d'un élément parent

// Déplacer un élément
// Pour déplacer un élément, il nous faut 3 paramètres.

/* 
-> Le premier paramètre : Le parent
-> Le second paramètre :  L'élément qui vient apprès
-> Le troisième paramètre : L'élément à déplacer
*/

// Le parent
let parent = document.querySelector("main");

// L'élément qui vient après
let sousTitre = document.querySelector("h2");

// L'éléement à déplacer
let toMove = document.querySelector("h4");

parent.insertBefore(toMove, sousTitre);

// la méthode setAttribute() pour ajouter un nouvel attribut et sa valeur à un élément.

// Supprimer un élément
// Pour supprimer un élément, il nous faut 2 paramètres :

// -> le parent
// -> l'élément à supprimer

// le parent
let liste = document.querySelector("ul");
console.log(liste);

// l'élément à supprimer
let li = document.getElementsByTagName("li")[1];
console.log(li);
// let li = document.getElementsByTagName("li");
// console.log(li[1]);

// pour supprimer, on utilise la fonction .removeChild()
// liste.removeChild(li);

// Créer un attribut et sa valeur :
// La méthode setAttribute() -> pour ajouter un nouvel attribut ou changer la valeur existante d'un attribut pour un élément

let lien1 = document.querySelector("a"); // va récupérer le 1er des "a"
lien1.setAttribute("href", "01_introduction.html"); // changer la valeur de l'attribut
console.log(lien1);

let lesA = document.querySelectorAll("a");
console.log(lesA);
// on va récupérer l'attribut du 3ème a de la liste ul. Il faut indiquer l'index

let valeurA2 = lesA[1].getAttribute("href");

// grâce à votre script, créer une balise "a" dans la balise "h1" avec un lien vers la documentation JS. Ce lien est de couleur green et non souligné.

// déclaration du parent et de l'ajout d'élément avec son contenu
const TITRE1 = document.getElementById("titreNiveau1");
let jsLink = document.createElement("a");
let br = document.createElement("br");
jsLink.innerText = "Documentation Js";
TITRE1.innerText = "";

// ajout des attributs
jsLink.setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
);
jsLink.setAttribute("target", "_blank");
// 2ème méthode
// jsLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
// jsLink.target = "_blank";

// ajout du style
jsLink.style.color = "green";
jsLink.style.textDecoration = "none";

// Ajout de l'élément jsLink au parent "TITRE1"
TITRE1.appendChild(jsLink);
