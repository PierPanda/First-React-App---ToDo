/*
    1. Les méthodes des tableaux.

    Les méthodes associées à tous les tableaux via leur prototype font partie des raisons de leur existence.

    Elles sont très pratiques et il est très important de les connaître.
    On peut les apercevoir dans le prototype des tableaux, en affichant un tableau dans la console.

    Découvrons ensemble les principales méthodes des tableaux.
*/

/*
    1. Array.prototype.forEach(callback(element, index, array))

    Définition: Exécute une fonction callback sur chaque élément d'un tableau.

    La callback est TOUJOURS appelée avec TOUS les éléments qui correspondent aux paramètres d'entrée.
    C'est au dev de choisir celui ou ceux qu'il veut utiliser.

    Valeur de retour : undefined

*/

const numbers = [1,2,3,4,5,6]
// console.log(numbers);
//Ici on peut parcourir le tableau avec une boucle forEach et on peut utiliser les paramètres d'entrée number qui correspond à l'élément courant du tableau. Et le retourner.
// numbers.forEach((number) => console.log(number));

// Ici on peut utiliser les paramètres d'entrée number, index et array qui correspondent à l'élément courant du tableau. Et les retourner.
// numbers.forEach((number, index) => console.log("l'élément :",number, "index : ", index, "dans le tableau : ", numbers));

/*
    2. Array.prototype.map(callback(element, index, array))

    Définition: Permet de retourner un nouveau tableau contenant les résultats du retour d'une fonction callback appelée sur chaque élément d'un tableau.


    Valeur de retour : un nouveau tableau contenant le retour de chaque appel de la fonction callback.

*/

const people = [
  {
    name: "Pedro",
    age: 25
  },
  {
    name: "Sara",
    age: 26
  },
  {
    name: "Maria",
    age: 27
  }
]
//On veut créer un nouveau tableau contenant le nom des personnes du tableau people et leur âge.
// const names = people.map(person => person.name);
// console.log(names);
// console.log(names.join(" et "));


/*
    3. Array.prototype.filter(callback(el, index, array))

    Valeur de retour : Un tableau contenant les éléments ayant passés le test de la retour de la fonction callback.
    Si la fonction retourne true, on garde l'élément dans le tableau retourné, sinon on l'ignore.

    Permet de filtrer les éléments d'un tableau.
*/

const teamSizes = [170,185,198,162,187,155,178,207,201,189];

// const lessThan180 = teamSizes.filter(height => height < 180);
// console.log(lessThan180);
// console.log(typeof(lessThan180));



/*
    4. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), valeurInitiale)

    Définition: Accumule chaque valeur d'un tableau à une valeur initiale.
    Si une valeur initiale n'est pas fournie, le premier élément du tableau est utilisé.

    Exemples : Permet de faire des moyennes, d'accumuler des valeurs et de résoudre toutes sortes de problèmes.


    Valeur de retour: l'accumulateur après toutes les opérations.

*/
// const notes = [18,5,17,12,20,16,14];
// const average = notes.reduce((accumulator, currentValue) => accumulator + currentValue) / notes.length;
// console.log(average);


const students = [
  {
    name: "Pierre",
    age: 14,
    notes: [18,5,17,12,20,16,14]
  },
  {
    name: "Sara",
    age: 16,
    notes: [18,5,17,12,20,16,14]
  },
  {
    name: "Maria",
    age: 18,
    notes: [18,5,17,12,20,16,14]
  },
  {
    name: "Paul",
    age: 20,
    notes: [18,5,17,12,20,16,14]
  },
  {
    name: "Jean",
    age: 22,
    notes: [18,5,17,12,20,16,14]
  }
];
// On peut aussi utiliser la fonction reduce sur un tableau d'objets
function classAverage(array) {
  array.forEach(element =>
    element.average = element.notes.reduce((accumulator, currentValue) => accumulator + currentValue) / element.notes.length
  );
  return array;
}
console.log(classAverage(students));



/*
    5. Array.prototype.sort(callback(firstEl, secondEl))

    Définition: Permet de trier des chaînes de caractères, des nombres, des objets, etc...

    Valeur de retour : Le même tableau trié.

    Utilise un algo d'insertion implémenté différemment suivant chaque navigateur.

    Exemple :

    base
    [10,4,12]

    étape 1
    |partie triée|
    [|4,10|,12]

    étape 2
    Si 12 est plus grand que 10 il est à sa place, fin du tri.
    [|4,10,12|]
*/

const letters = ["z","b","a","d","e"];
// letters.sort();
// console.log(letters);


// const numbers2 = [10,55,2,250,500,85]
// numbers2.sort((a,b) => a - b);
// console.log("trié du plus petit au plus grand : ", numbers2);
// numbers2.sort((a,b) => b - a);
// console.log("trié du plus grand au plus petit : ", numbers2);

// On peut aussi trier des tableaux d'objets
const store = [
    {
        item: "Cahier",
        price: 20
    },
    {
        item: "Sac",
        price: 60
    },
    {
        item: "Stylo",
        price: 2
    },
]

// store.sort((a,b) => a.price - b.price);
// console.log("trié par prix croissant : ", store);

// const store2 = store.sort((a,b) => a.price - b.price);
// console.log(store2);
