import {useState} from 'react';
import Card from "./Card";
import CardDestructuredProps from "./CardDestructuredProps";

export default function Container() {
  // Les props sont des données qu'on défini et que le composant parent passe à un composant enfant
  const [state, setState] = useState('Hello World');
  //Le composant Card prend en paramètre une prop id : on peut donc definir un id ici
  const id = 600432;

  return (
    <div>
      <h1>Les props</h1>
      <br />
      <p>State du container : {state}</p>
      <br />
      <Card id={id}/>
      <br />
      <br />
      <CardDestructuredProps id={id} state={state}/>
    </div>
  )
}
