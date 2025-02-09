export default function Card({id, state}) {
  // Pour passer une/des props à un composant (qui est une fonction), on doit les passer en paramètre de la fonction
  // props = Objet contenant toutes les props passées au composant
  // On peut ensuite les utiliser dans le composant
  // Ces proops peuvent etre initialisées dans le composant parent (qui appel ce composant)
  return (
    <h1>
      Ma carte Destructured
      <p>id : {id}</p>
      <p>state : {state}</p>
    </h1>
  )
}
