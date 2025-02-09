import './Container.css'

export default function Container() {
  // On peut utiliser du css de plusieur manieres differentes :
  // - En Ligne : (Mais à éviter sauf utilisation de Tailwind ou Bootstrap)
  // // On va utiliser l'attribut style dans la balise HTML
  // // Dans l'attribut on passe un objet avec les propriétés CSS

  // - Dans un fichier CSS : (Recommandé)
  // // On va créer un fichier CSS et on va l'importer dans le fichier JS

  return (

    <div>
      {/* Style en ligne */}
      <h1 style={{color: 'blue', fontSize: '50px', textAlign: 'left'}}>Utiliser du CSS en ligne</h1>

      {/* Style dans un fichier CSS */}
      <h1 className="importStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit fuga iste deserunt illum in temporibus quidem? Voluptatem, itaque ipsa placeat dolorum totam atque veniam excepturi fugit omnis soluta culpa!</h1>
    </div>
  )
}
