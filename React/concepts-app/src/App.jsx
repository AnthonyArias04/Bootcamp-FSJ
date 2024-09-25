
import './App.css'
import { Saludo } from './components/Saludo'
import { Saludo as Saludito } from './components/Saludo'

function App() {
 

  return (

      <div>
      {/* SOY UN COMENTARIO EN JS DENTRO DE EL HTML RETORNADO*/ }
      <h1>Holiwis desde el app</h1>
      <h2>jejeje</h2>

      {/* LLAMADA A UN COMPONENTE */}
      <Saludo/>
      <Saludito/>
      </div>
  )
}

export default App


