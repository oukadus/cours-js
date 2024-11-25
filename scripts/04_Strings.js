const PRENOM = "Alexandre";
const NOM = "Cavet";
// document.write(PRENOM + " " + NOM + "<br>");
// document.write(`${PRENOM} ${NOM} <br>`);
const PRENOM2 = "Ouarda";
const NOM2 = "Chied";
// document.write(`${PRENOM2} ${NOM2} <br>`);

let a = 10;
let b = 5;
let c = "5";

// document.write(a + b + "<br>");
// document.write(a + " " + c + "<br>");
// document.write(a + c);
// document.write(`${a + c}`);

// Exercice
// Réaliser un prompt demandant l'âge de l'utilisateur, puis récprer cette donnée et l'afficher de cette façon : "Vous avez xx ans"

// let age;
// age = prompt("Quel est vôtre âge ?");

// document.write(
//   `<h1 style="color:red; text-align:center;">Vous avez ${age} ans !</h1>`
// );

// document.write("Dans cinq ans vous aurez " + Number(age + b) + " ans");

// document.write("<hr>");
let quelqueChose;
// console.log(autreChose);

// Lorsque la variable n'existe pas, le console.log affiche l'erreuyr "not defined"

// String => vers nuber
let unNombre = "24.5";
console.log(unNombre, typeof unNombre);
// Pour convertir un string vers un nombre.
unNombre = Number(unNombre);
console.log(unNombre, typeof unNombre);

let valor;
valor = prompt("votre valeur ? :");
valor = parseFloat(valor.replace(",", "."));
document.write(`votre valeur est ${valor}`);
