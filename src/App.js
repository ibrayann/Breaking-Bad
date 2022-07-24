import React, { useState, useEffect } from "react";
import Frase from "./Comp/Frase";
import "./index.css"
import { Link } from "react-router-dom"
import Perso2 from "./Comp/Perso2";

const fraseInicial = {
  Texto: ` "" `,
  Autor: "",
  Serie: ""
}

function App() {

  const [frase, setfrase] = useState(fraseInicial);
  const [spinner, setspinner] = useState(false)

  const actualifrase = async () => {
    setspinner(true)
    const url = "https://www.breakingbadapi.com/api/quote/random"
    const res = await fetch(url);
    const [nuevafrase] = await res.json();
    console.log(nuevafrase)

    const {quote: Texto, author: Autor, series: Serie}=nuevafrase

    setfrase({
      Texto,
      Autor,
      Serie,
    })
    setspinner(false)
  }

  useEffect(() => {
    actualifrase();
  },[])

  return (
    <div>
      <div className="prueba">
        <Perso2/>
        <Link to="/Home"><button className="volver">Volver</button></Link>
      </div>
      <div className="app">
        {spinner ? <h1>Loading...</h1> : <Frase frase={frase} />}
        <button onClick={()=> actualifrase()}>Cargar otra</button>
      </div>
    </div>
  );
}

export default App;
