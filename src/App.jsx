import { useState } from 'react'
import './App.css'

function App() {
  const name = 'Bruninho'

  const newName = name.toUpperCase();


  function sum(a, b) {
    return a + b;
  }


  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro app</p>
      <p>Olá, {newName}</p>
      <p>Soma {5 + 5}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Imagem com 150px por 150px" />
    </div>
  )
}

export default App
