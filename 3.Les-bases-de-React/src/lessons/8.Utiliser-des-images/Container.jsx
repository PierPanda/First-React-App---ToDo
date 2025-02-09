import Fuji from './assets/fuji.jpg';
import Triangle from './assets/triangle.svg';
import './Style.css'

export default function Container() {
  const id = 3;

  const images = [
    { id: 1, src: '/assets/forest-1.jpg', alt: 'Foret 1' },
    { id: 2, src: '/assets/forest-2.jpg', alt: 'Foret 2' },
    { id: 3, src: '/assets/forest-3.jpg', alt: 'Foret 3' }
  ]

  return (
    <div className="container">
      <h1>Utiliser des images</h1>

      <div >
        <div className="container">
          <p>image jpg/png/webp/...</p>
          <img src={Fuji} alt="Mont Fuji" />
        </div>

        <div className="container">
          {/* Utilisation seulement si on veut référencer dynamiquement l'image */}
          <p>Image du dossier public</p>
          <img src={`/assets/forest-${id}.jpg`} alt="Mont Fuji" />
        </div>

        <div className="container">
          <p>Liste d'image</p>
          <div className="container-flex">
            <br />
            {images.map((image) => (
              <div key={image.id}>
                <p>{image.alt}</p>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="container-flex">
          <div>
            <p>Image en SVG brut</p>
            <img src={Triangle} alt="Triangle" />
          </div>
          <div>
            <p>Image en SVG TO JSX</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Capa_1"
              x="0"
              y="0"
              fill="Orange"
              width={250}
              version="1.1"
              viewBox="0 0 486.273 486.273">
              <path d="M484.844 438.908 252.311 36.775c-2.905-5.125-9.414-6.925-14.539-4.021a10.67 10.67 0 0 0-4.021 4.021L1.431 438.908c-2.946 5.102-1.198 11.625 3.904 14.571a10.67 10.67 0 0 0 5.269 1.429h465.067c5.891-.035 10.638-4.84 10.602-10.731a10.66 10.66 0 0 0-1.429-5.269m-455.04-5.12L243.138 63.441l213.333 370.347z"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
