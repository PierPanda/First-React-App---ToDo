export default function Container() {

  const isLogged = false;
  let content;

  //Il vaut mieux gérer la logique en ddehors du return
  if (isLogged) content = 'Vous êtes connecté'
  else content = 'Vous êtes déconnecté'

  return (
    <div>
      <h1>Rendu conditionnel</h1>
      <div className="if">
        <h3>Rendu conditionnel dans la function</h3>
        <p>{content}</p>
      </div>
    </div>
  )

  // Methode 1
  // if (isLogged) {
  //   return (
  //     <div>
  //       <h1>Rendu conditionnel</h1>
  //       <div className="if">
  //         <h3>Rendu conditionnel dans le return</h3>
  //         <p>Connecté</p>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h1>Rendu conditionnel</h1>
  //       <div className="if">
  //         <h3>Rendu conditionnel</h3>
  //         <p>Déconnecté</p>
  //       </div>
  //     </div>
  //   )
  // }
}
