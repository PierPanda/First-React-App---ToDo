import "./Container.css"
import { useState } from 'react'

export default function Container() {

  const [darkmode, setDarkmode] = useState(false)

  return (
    <div>
      <h1>Toggle une classe</h1>
      <div className={`full-container ${darkmode && 'dark-mode'}`}>
        <h3>Bienvenue sur React</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima nemo eos ratione, placeat vero quo explicabo quas reprehenderit ullam possimus autem, ducimus dolores dolorem fuga. Qui iste sed iusto!</p>
        <button
        onClick={() => setDarkmode(!darkmode)}
        // onMouseEnter={() => setDarkmode(!darkmode)}
        // onMouseLeave={() => setDarkmode(!darkmode)}
      >{darkmode ? 'Lightmode' : 'Darkmode'}</button>
      </div>
    </div>
  )
}
