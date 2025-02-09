import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false)

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Accéptez-vous ?</label>
        <input type="checkbox" id="consent" onChange={() => setValidation(!validation)} />
        <p
          // style={{color: `${validation? "lightgreen" : "red"}`}} htmlFor=""
          className= {validation ? "valid" : "invalid"}
          >
            {validation ? "Vous avez accépté" : "Vous n'avez pas accépté"}
        </p>
      </form>
    </div>
  )
}
