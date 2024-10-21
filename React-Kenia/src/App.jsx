
import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import Form from './components/Form'
import ListNotes from './components/ListNotes'
import Notes from './components/Notes'

function App() {
  
  const [listNotes, setListNotes] = useState([])
  return (
    
    <>
      <Header fullname="Anthony Arias"/>
      {/*Estado para guardar Notas*/}
  
      

      <div className='container'>
      <section>
      <h2>Registrando Notas</h2>
      {/**En el formulario le pasamos dos propiedades para que puedan dar funcion en el documento ListNotes */}
      <Form listNotes={listNotes} SetListNotes= {setListNotes}/>
      </section>

      <section>
      <h2>Notas...</h2>
       {/*Pasando el arreglo de notas al otro componente*/}
   <ListNotes listNotes={listNotes}/>
      </section>
       
        {/*<Notes
          title="Aprendiendo props"
          description="Las props las podemos heredar"
        />
        <Notes
          title="Introduccion al estado"
          description="Los estados de react"
        />*/}
      </div>
    </>
  )
}

export default App
