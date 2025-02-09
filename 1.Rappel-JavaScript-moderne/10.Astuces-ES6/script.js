/*
    Quelques fonctionnalités syntaxiques ont été rajoutées aux objets à partir de 2015.
*/

//  Rajouter une fonction classique
const obj = {
  // fonction classique (le nom de la fonction correspondra à la clé)
  sayHello() {
    console.log("Hello");
  },
  // fonction fléchée (ne pas oublié les : apres la clé)
  sayGoodbye: () => {
    console.log("Goodbye");
  }
}
console.log(obj.sayHello(), obj.sayGoodbye());



// Rajouter des propriétés facilement.

const userName = "Lucie";
const age = 24;

// création de propriété pour un objet a partir de constante déja existante
const user = {
  userName,
  age
}
console.log(user);


const users = {
  userNames: ["Lucie", "Pierre", "Sara"],
  ages: [24, 25, 26]
}

const users2 = users.userNames.map((userName, index) => {
  return {
    userName,
    age: users.ages[index]
  }
})
console.log(users2);

// Utiliser une expression pour créer une prop
let category = "industry";
const plant = {
  id: 547,
  [category]: "Microship"
}
console.log(plant);
