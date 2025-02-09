/*
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a, b) {
  return a + b;
}


// Fonction impure
// let TVA = 20; // valeur mutable
// function getFinalPrice(price) {
//   return price * (100 + TVA) / 100;
// }
// console.log(getFinalPrice(100));

// Fonction pure
const frenchTVA = 20;
const ukTVA = 17;
const TVA = 17.4;

function getFinalPrice(price, TVA) {
  return price * (100 + TVA) / 100;
}
console.log(getFinalPrice(100, frenchTVA));
console.log(getFinalPrice(100, ukTVA));
console.log(getFinalPrice(100, TVA));
