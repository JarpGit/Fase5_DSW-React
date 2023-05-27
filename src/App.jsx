import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5: Operar</h1>
      <div className="card">
{/*         <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
 {/*        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <h2>Equipo de trabajo</h2>
        <h3>Daniel Pérez Arango</h3>
        <h3>Gueynen Jhoan Maestra Florez</h3>
        <h3>Julián Ruiz Piedrahíta</h3>
        <h3>Marlon Gamboa Leudo</h3>
        <br />
        <h2>Enlace al proyecto</h2>
        <a href="inicio.html">Da click para desplegar el proyecto</a>

      </div>
 {/*      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
