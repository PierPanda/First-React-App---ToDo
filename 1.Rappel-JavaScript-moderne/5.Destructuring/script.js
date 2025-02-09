/*
    1. Destructuring.

    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

// const userObj = {
//   userName: "Pierre",
//   age: 44,
//   country: "France",
// }
// C'est la clef de l'objet qui compte pour modifier la valeur liée
// const { userName, age, country } = userObj;

// console.log(userName, age, country);


// Donner un nom différent aux constantes
// const{ userName: prenom, country: pays } = userObj;
// console.log(prenom, age, pays);



// Créer des constantes par défaut, au cas où les props n'existent pas.
// const{sport = "BasketBall", beverage = "Water"} = userObj;
// console.log(prenom, age, pays, sport, beverage);
// console.log(userObj);



// Combiner un nom différent et des valeurs par défaut.




// Affecter les props d'un objet attendu en paramètre
// const numbers = {
//   num1: 50,
//   num2: 100
// }
// function foo(numbers){
//   console.log(numbers);
//   return numbers.num1 + numbers.num2;
// }
// console.log(foo(numbers));

//Destructuring avec un objet contenant les noms de variables de l'objet passée en paramètre
// function foo({num1, num2}){
//   console.log(numbers);
//   return num1 + num2;
// }
// console.log(foo(numbers));



/* B. Affecter les valeurs d'un tableau. */

// const animals = ["cat","dog","mouse","lion"];

// const [cat, dog] = animals;
// console.log(cat, dog);

// let [animal1, animal2] = animals;
// console.log(animal1, animal2);


// valeur par défaut et ignorer des valeurs
// const fruits = ["strawberry", "grape","banana", "apple"];
// const [strawberry, grape,,apple] = fruits;
// console.log(strawberry, grape, apple);
// const fruits = [];
// const [strawberry="red fruit"] = fruits;
// console.log(strawberry);


// affecter le reste d'un tableau
const [student, ...notes] = ["Pierre", 14, 15, 16, 17, 18, 19, 20];
console.log(student, notes);

// Fonctionne aussi avec les strings
const str = "ABC";
const [firstLetter, secondLetter, thirdLetter] = str;
console.log(firstLetter, secondLetter, thirdLetter);
