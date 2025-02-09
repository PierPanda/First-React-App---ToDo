/*
    1. Rest operator
    Les paramètres du reste permettent d'accepter un nombre indéfini d'arguments rendus disponibles sous forme d'un tableau.
*/

function concatenation(...strings){
  // string retourne un tableau des arguments fournis (peux importe le nombre d'arguments)
  console.log(strings);

  // return strings.reduce((argument1,argument2) => argument1 + argument2)
  return strings.join(" ");
}

console.log(concatenation("Je", "suis", "heureux."));



/*
    2. Les paramètres par défaut.

    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = "visiteur"){

  return `Bienvenue, ${userName}.`
}
// Argument non fourni
console.log(welcoming());

// Argument fourni
console.log(welcoming("Paul"));
console.log(welcoming("Sara"));
