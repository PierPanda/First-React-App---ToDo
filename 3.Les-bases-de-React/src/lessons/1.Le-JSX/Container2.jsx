function Container2() {

  const test = "First JSX test"
  function click() {
    alert("Bonjour")
    console.log("Click !")
  }
  // const click = () => {
  //   alert("Bonjour")
  //   console.log("Click !")
  // }


  return (
    <div className="list-container">
        <h2>Ma list</h2>
        <ul className="list">
          <li className="item">1</li>
          <li className="item">2</li>
          <li className="item">3</li>
        </ul>
        <br />
        <p>{10 + 10}</p>
        <br />
        <p>{test}</p>

        <button>Click me</button>

        {/* les éléments autofermants doivent etre fermé  */}
        <input type="text" />
        <img src="" alt="" />
        <hr />

        {/* Les classes sont reservés à JS, en CSS on adaptera avec "className" */}
        <h3 className="titre"></h3>

        {/* Pour les labels, on utilise l'attribut le htmlFor et non "for"*/}
        <label htmlFor="input-test"></label>

        <br />
        <button className="btn" onClick={click}>Click me</button>
    </div>
  )
}

export default Container2
