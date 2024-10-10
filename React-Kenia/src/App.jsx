
import './App.css'
import Header from './assets/Header'
import Form from './components/Form'
import Notes from './components/Notes'

function App() {
  

  return (
    <>
      <Header fullname="Anthony Arias"/>

      <div>

        <Form/>
        <Notes
          title="Aprendiendo props"
          description="Las props las podemos heredar"
        />
        <Notes
          title="Introduccion al estado"
          description="Los estados de react"
        />
      </div>
    </>
  )
}

export default App
