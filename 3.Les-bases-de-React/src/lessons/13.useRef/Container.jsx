import { useRef, useState } from 'react';

// useRef permet de :
// - Isoler une valeure parmis les mise à jour du composant
// - Selectionner un élément (du DOM) pour le manipuler

export default function Container() {

  const [state, setState] = useState(0);
  const countRef = useRef(0);

  function handleCountRef() {
    countRef.current++;
    console.log('countRef.current : ', countRef.current);
  }

  function incrementeState() {
    setState(state + 1);
  }

  console.log('mise à jour');

  // useRef renvoie un objet avec une propriété current
  // current est mutable et peut être utilisée pour stocker des valeurs qui ne changeront pas entre les rendus.
  // useRef est utile pour accéder à des éléments du DOM, à des valeurs de formulaire, à des valeurs de timer, etc.

  // C'est la propriété current dans l'objet renvoyé qui permet d'isole l'élément du DOM

  const txtRef = useRef();
  console.log(txtRef);
  console.log(txtRef.current);

  const texte = txtRef.current;



  function changeColor() {
    if(texte.style.color === "red") {
      texte.style.color = "white";
    } else {
      texte.style.color = "red";
    }
  }

  function txtToUpperCase() {
    if(texte.style.textTransform === "uppercase") {
      texte.style.textTransform = "none";
    } else {
      texte.style.textTransform = "uppercase";
    }
  }

  return (
    <div>
      <h1>Le Hook useRef</h1>
      <h2>useRef pour isoler</h2>
      <p>Valeur de la ref : {countRef.current}</p>
      {/* On met à jour la ref, mais pas le composant (visuellement) */}
      <button onClick={handleCountRef}>Incrémenter la référence</button>
      <br />
      {/* Ici on met à jour le composant qui prend directement la valeur à jour de la ref */}
      <p>Valeur du state : {state}</p>
      <button onClick={incrementeState}>Incrémenter le State</button>

      {/* ATTENTION : Le composant peut etre mis a jour à chaque clique sur le bouton "Incrémenter le State" mais la valeur de la ref ne changera pas.
      La ref isole la valeur de la mise à jour du composant et celle ci est mise à jour par le State.
      Le state met à jour le composant mais n'a pas d'incidence sur la ref. */}

      <br />
      <br />

      <h2>useRef pour selectionner un element du DOM</h2>
      <p ref={txtRef}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, explicabo beatae? Veritatis eum libero aperiam adipisci? Voluptatum perferendis sint commodi illo suscipit voluptas fugiat, voluptatibus facere iste inventore saepe animi!</p>
      <button onClick={changeColor}>Changer la couleur</button>
      <button onClick={txtToUpperCase}>To uppercase</button>
    </div>
  )
}
