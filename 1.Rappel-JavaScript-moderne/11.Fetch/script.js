const url = "https://jsonplaceholder.typicode.com/users";

const usersList = []
const users = fetch(url)
//Traiter la promesse renvoyée par fetch et la transformer en objet JSON
  .then(
    response => {
      //Si la réponse n'est pas ok, on lève une erreur
      if(!response.ok) throw new Error(response.status)
      //On récupère le corps de la réponse et on la parse en json
      return response.json();
    }
  )
  //Traiter le résultat de la promesse renvoyée par le premier traitement (then) et la log
  .then(
    data => {
      const users = data;
      usersList.push(...users);
      usersList.forEach(user => console.log(user.name, ":" ,user.email));
      return users;
    }
  )
  .catch(error => console.log(error.message));

//On peut aussi utiliser le fetch() avec une fonction asynchrone
// async function getUsers() {
//   return fetch(url)
//     .then(
//       response => {
//         if(!response.ok) throw new Error(response.status)
//         return response.json();
//       }
//     )
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));
// }
// getUsers();
