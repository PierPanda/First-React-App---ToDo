export default function Container() {

  const islogged = false;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>
      {/* Retourne l'element si islogged est truthy (&& : Et logique) */}
      {/* Retourne le deuxieme element si le premier element (avant &&) est truthy */}
      {islogged && <button>Afficher votre collection</button>}
    </div>
  )
}
