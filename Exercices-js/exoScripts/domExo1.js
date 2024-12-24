// On veut insérer un élément "p" juste avant le p#reference

// Créer un élément
let monParagraph = document.createElement("p");
let reference = document.getElementById("reference");
let container = document.querySelector(".container");

monParagraph.innerText = "Je suis un nouveau paragraphe";

container.insertBefore(monParagraph, reference);

// 2ème façon

reference.insertAdjacentElement("beforebegin", nouveauParagraphe);
// reference.insertAdjacentElement("afterend", nouveauParagraphe);

// targetElement.insertAdjacentElement(position, element);

// - Les positions
// afterbegin : insère l'element à l'intérieur de la balise mais en avant
// beforeend : inère l'element à l'intérieur de la balise mais à la fin
// afterend: insère le parag après l'element reference
