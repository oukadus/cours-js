// Les Types de données

// String = "Kader"
// Boolean = flase / true -> 0 / 1 -> Oui / Non
// Number = 0 1 2 3 100 100000 10000000000000000000000
// null = "Il n'y a rien"
// undefuned = Pas définit
// ------ Oublier
// BigInt = 1205505055055505050506060606060606060606060
// Symbol = new symbol("a")

// 1. String
/*

    const mystring = "double quote";
    const mystring2 = "single quote";
    const mystring3 = `back-tick`;

    console.log(mystring, mystring2, mystring3);

    const myname = "Kader";
    const helloSentence = `Hello ${myname}`;
    console.log(helloSentence.toUpperCase());
    const firstChar = helloSentence[0];
    console.log(firstChar);
    console.log("Longueur", helloSentence.length);
    const lastChar = helloSentence[10];
    console.log(lastChar);

*/

// 2. Number

// let myBirthYear = 1984;
// let myAge = 2024 - myBirthYear;
// console.log(myAge);

// myAge = "40";
// console.log(Number(myAge) + 13);

// let videoJs = 55;
// console.log(`la video du cours est à ${videoJs} minutes`);

// 3. Boolean
// const myAge = 24;

// const isMajor = myAge > 18;

// console.log(`${myAge} est-il majeur ? ${isMajor}`);

// 4. Conditions
// if = si
// else = sinon

const MYAGE = 14;

if (MYAGE > 18) {
  console.log("IF TRUE");
} else {
  console.log("ELSE FALSE");
}
