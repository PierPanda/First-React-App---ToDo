import "./Container.css"
import { useState, useRef } from "react"

export default function Container() {

  // pour set correctement le data-binding, il faut passer une string vide a useState (sinon, le state sera undefined)
  const [nameState, setNameState] = useState("")

  const emailRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(emailRef.current.value)
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <div className="controlled">
        <h2>Controlled input</h2>
        <br />
        <form>
          <label htmlFor="pseudo">Votre pseudo<span className="validation">{!nameState && ' Veuillez remplir ce champs'}</span></label>
          <input
            type="text"
            //Data binding : Permet de lier le nameState à l'input et inverssement
            // 1st way data binding : Lie l'input au state
            onChange={(e) => setNameState(e.target.value)}
            // 2nd way data binding : Lie le state à l'input
            value={nameState}
            id="name"
            name="name" />
          <button>Envoyer</button>
        </form>
        <p> Votre pseudo : <span className="validation">{!nameState && "Vous n'avez pas de pseudo"}</span> {nameState}</p>
      </div>

      <br />
      <br />

      <div className="uncontrolled">
        <h2>Uncontrolled input</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            ref={emailRef}
            id="email"
            name="email" />
          <button>Envoyer</button>
        </form>
      </div>

    </div>
  )
}
