import {useState} from 'react';
// Le State représente des données que l'on va afficher dans un composant et qu'on peut mettre à jour dynamiquement.


export default function Container() {
  // useState est une fonction qui permet de créer un etat dans un composant
  // useState retourne un tableau avec 2 éléments : la valeur de l'état et une fonction pour mettre à jour cet état
  // useState prend en paramètre > la valeur initiale de l'état
  const countState = useState(0);

  // countState est un tableau qui contient 2 éléments
  // On préfère l'initialiser en faisant du destructuring :
  // count est la valeur de l'état
  // setCount est la fonction pour mettre à jour l'état
  const [count, setCount] = useState(0);
  const [countBy3, setCountBy3] = useState(0);
  const [fibonacci, setFibonacci] = useState(1);

  // Fonction qui va incrémenter la valeur de l'état
  function handleClik() {
    // On lui odnne une directive strict
    setCount(count + 1);
  }

  function handleCountBy3() {
    // On peut aussi passer une fonction CallBack à setCount pour effectuer plusieurs opérations en même temps
    // Ici on va incrémenter 3 par 3 (Mais on peut faire d'autre calculs si besoin en fonction de condition ou de cas)
    setCountBy3(count => count + 1);
    setCountBy3(count => count + 1);
    setCountBy3(count => count + 1);
  }


  function fibonacciSuite() {
    setFibonacci(fibonacci => fibonacci + fibonacci);
  }
  function fibonacciReset() {
    setFibonacci(1);
  }



  // Fonction pour donner la position de la souris en X et Y à l'ecran
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  function handleMouseMove(e) {
    // setMousePosition({x: e.clientX, y: e.clientY});
    // C'est une fonction il faut donc passer dans la fonction pour attribuer les valeures
    setMousePosition({
    x : e.clientX,
    y : e.clientY
    });
  }

  // Fonction pour afficher le scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  function handleScroll() {
    setScrollPosition(
      window.scrollY
    );
  }


  return (
    <div>
      <h1>Le state</h1>
      {/* si je veux utiliser countState dans mon composant, je dois le faire comme ça : countState[0] */}
      {/* <p>{countState[0]}</p> */}
      <p>Count : {count}</p>
      <button onClick={handleClik}>Incrémenter</button>
      <br />
      <br />
      <p>Count by 3 : {countBy3}</p>
      <button onClick={handleCountBy3}>Incrémenter</button>
      <br />
      <br />
      <p>Fibonacci suite : {fibonacci}</p>
      <button onClick={fibonacciSuite}>Next Fibonacci number</button>     <button onClick={fibonacciReset}>Reset suite</button>
      <br />
      <br />
      {/* On peut passer une fonction à un évènement */}
      <div onMouseMove={handleMouseMove}>
        <p>X : {mousePosition.x}</p>
        <p>Y : {mousePosition.y}</p>
      </div>
    </div>
  )
}
