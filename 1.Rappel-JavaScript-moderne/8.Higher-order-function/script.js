/*
    1. Fonction d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir une fonction callback en argument soit retourner une fonction, ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.
*/




function customFilter(array, callback) {
  // Initialisation d'un tableau vide pour les éléments filtrés
  const filteredArray = [];

  // Boucle sur les éléments de l'array passé en argument
  for (let i = 0; i < array.length; i++) {
    // Si la condition (passée en argument) est vraie, on ajoute l'élément au tableau filtré puis on passe à l'élément suivante
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  //On retourne le tableau filtré
  return filteredArray;
}
const salaries = [1200,5000,4000,2500,3450,1800];
console.log(customFilter(salaries, salary => salary > 3000));
console.log(customFilter(salaries, salary => salary < 3000));
console.log(customFilter(salaries, salary => salary > 3000 && salary < 4000));


const countries = [
  {
      name: "Japan",
      gdp: 4941
  },
  {
      name: "Germany",
      gdp: 4260
  },
  {
      name: "South Korea",
      gdp: 1811
  },
  {
      name: "India",
      gdp: 3176
  },
  {
      name: "Canada",
      gdp: 1988
  },
]
// On peut réutiliser la fonction customFilter pour filtrer un autre tableau ou tableau d'objets
console.log(customFilter(countries, country => country.gdp > 3000));
