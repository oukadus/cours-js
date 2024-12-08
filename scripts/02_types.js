/* 
            Il existe plusieurs types de valeurs que l'ont peut assigner à nos variables 

            -> Les chaines de caractères (string) => phrase, entre guillemets simple ou double.
            -> Nombres ; 5, 10, 12, 14, 28
            -> Booléen (booleans) => true, false 
            -> Tableau (array) => ["Julien", 10] 
            -> null 
            -> classes 
            -> objets 
            -> fonctions

        */

// STRING (Chaîne de caractères)
// Nous pouvons initialiser une chaine de caractère de plusieurs façons.
// Avec des guillemets doubles (double quotes) :
let chaine1 = "test1";
// console.log(chaine1);
// Avec des guillemets simples (simple quote) :
let chaine2 = "test2";
// console.log(chaine2);
// console.log(typeof chaine2, chaine2);

// En JS, l'une des convention de nommage est le "camelCase" : chaquez nouveau mot de votre variable doit être en majuscule
let monTexte = "Voici une phrase écrite dans une double quote";
let monTexte2 = "Voici une phrase écrite dans une simple quote aujourd'hui";
// L'antislash permet d'échaper un caractère dans le string
// console.log(monTexte2);

// Avec backquotes `` (Alt Gr + 7)
let bienvenue = `Aujourd'hui c'est l'arrivée de Kader`;
// console.log(bienvenue);
const PRENOM = `Kader`;
bienvenue = `<h1>Aujourd'hui c'est l'arrivée de ${PRENOM}</h1>`;
console.log(bienvenue);

let monTexte3 = "Je sors avec " + PRENOM + " lorsqu'il fait beau";
// console.log(monTexte3);

// ******************* NUMBER *********************************

let chiffre = 55;
let negatif = -55;
let decimal = 5.5;

let somme = chiffre + negatif;
console.log(somme);

// ******************* BOOLEEN *********************************
// Le booléen ne peut prendre que deux valeurs : TRUE ou FALSE

let choix = true;

// -------------------------------------------------------------
// Afin de vérifier le type d'une variable, on utilise la fonction TYPEOF ()
console.log(choix, typeof choix);
console.log(decimal, typeof decimal);

//  ******************************** AFFICHAGE *******************
// Pour afficher le contenu d'une variable sur la page
// document.write("<p>bienvenue</p>");
// let titre = document.querySelector("h1")
// titre.classList.add("center");
let messageAlert = `Ceci est un message d'alert envoyé par ${PRENOM}`;

// alert(messageAlert);
// confirm("Vous confirmez ?"); // Confirmer une action (boite de dialogue)
// prompt("Ceci est un prompt"); // Récupérer une donnée de l'utilisateur

let monAge = prompt("Quel est votre âge ?");
console.log(monAge, typeof monAge);

document.write(Text("test"));
