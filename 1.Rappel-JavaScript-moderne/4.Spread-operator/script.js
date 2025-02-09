/*
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/
const array = [1, 2, 3, 4, 5];
const arrayCopy = [...array, 6, 7, 8];

console.log(...array);
console.log(array);

console.log(...arrayCopy);
console.log(arrayCopy);




// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.



// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
