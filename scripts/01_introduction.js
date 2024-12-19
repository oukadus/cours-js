// Pour tester le lien entre le fichier html et js on utilise alert()
// alert("Hello World !");

// const D = (content, balise) => {
//   if (balise === 1) {
//     document.write(`<h2>${content}</h2>`);
//   } else {
//     document.write(`<p>${content}</p>`);
//   }
// };
// const BR = "<br>";
// const HR = "<hr>";

/* 

-------------- Objectif du cours : ----------------------
1- Comprendre ce qu'est le DOM 
2- Manipuler le DOM avec JavaScript  pour créer, séléctionner, modifier et supprimer des éléments
3- Gérer des évènements utilisateurs sur des éléments du DOM (AddEventListener)

--------------------------------------------------------

1 - Définition du DOM : 
Le DOM (Document Object Model) est une interface de programmation qui représente un document HTML ou XML sous forme d'une arborescence d'objets. Chaque élément HTML devient un noeud que l'on peut manipuler avec le langage JavaScript. 

Avec le DOM, nous allons pouvoir intéragir avec les utilisateurs (afin de reprérer des cliques sur un élément ou encore de récupérer leur nom dans un formulaire)

**************************************
Structure du code : 
**************************************

<!doctype html> 
<html> 
    <head> 
        <title>Exemple DOM</title> 
    </head>
    <body>
        <p class="text">Ceci est un paragraphe.</p>
        <button id="btn">Cliquez-moi</button> 
    </body>

*****************************************
La structure du DOM de ce document peut être représentée ainsi : 

document
└─ html
    ├─ head
    │  └─ title
    └─ body
        ├─ h1 (id="titre")
        ├─ p (class="texte")
        └─ button (id="btn")

***********************************************
Il faut voir le DOM comme un arbre où chaque élément peut avoir zéro ou plusieurs enfants qui peuvent avoir eux-même zéro ou plusieurs enfants.

Dans le DOM, on commence toujours par un élément racine qui est le point de départ du document : la balise <html>

* "Window" est un objet qui correspond à la fenêtre dans laquelle s'affiche une page web. 
* Il est le parent de chaque objet qui compose la page web, il contient doncv : 
* > L'objet "document":  La page en elle-même 
* > L'objet "location": le lieu de stockage de la page
* > L'objet "history" : Les pages visités précédement 

*/

// console.log(window); // on retrouve plein de méthodes disponibles sur l'objet window.
// l'objet "window" posséde des méthodes relatives à l'ouverture et la fermeture des fenêtres.

// -> Les méthodes : alert(), confirm() et prompt()

// console.log(window.document.title);

// L'évènement "window.onLoad()" permet de lancer la fonction seulement une fois que toute la page est chargée. Ce qui fait que cette fonction, peu import où elle est placée dans la page, sera lue seulement lorsque toute la page a été chargée.

// console.log(document.location);
