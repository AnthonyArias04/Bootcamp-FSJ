import React from 'react'
import Notes from './Notes'

export default function ListNotes({listNotes}) {

  return (
    <div>
         <h2>Iterando las notas</h2>
    {
      listNotes.map((note) =>{
        return(
            <>
         {/**Pasando la informacion a otro componente */}
         <Notes nota={note.title} description={note.description}/>
         </>
        )
      })
    }
    </div>
  )
}   
