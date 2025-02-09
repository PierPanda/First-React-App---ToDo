export default function Container() {
  // Pour afficher une liste d'élément a partir de données
  // on utilise la méthode map() sur le tableau de données (retourne un tableau d'éléments)
  // et on affiche chaque élément qu'on veut dans une balise <li>

  const data = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' },
    { id: 4, name: 'Element 4' },
    { id: 5, name: 'Element 5' },
  ]

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      {/* Retourne un tableau d'item à partir de date */}
      {/* Itere donc sur chaque elements de data */}
      {data.map((element) => (
        // Affiche chaque element.name dans une balise <li>
        // key est obligatoire pour React (chaque éléménet doit avoir une clé unique)
        <li key={element.id}>{element.name}</li>
      ))}
    </div>
  )
}
