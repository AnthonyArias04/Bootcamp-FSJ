import React, { useState } from 'react'

import ListNotes from './ListNotes'


export default function Form({listNotes, setListNotes}) {

  //Para manejar los estados utilizaremos los HOOKS utilizando UseState -> maneja el estado de tu componente

  //DECLARANDO UN ESTADO
  /**
   * Manejo dos valores: 
   * [0] -> Se guarda como se inicializa el estado.
   * [1] -> Se encarga de actualizar el estado.
   */
  const [titleNote, setTitleNote] = useState ("")
  const [descriptionNote, setDescriptionNote] = useState ("")
  
 

  //Funcion para capturar el titulo de la nota:

  const handleTitle = (e) =>{
    
    //Cuando encontres la etiqueta captura su valor
    //console.log(e.target.value);
    //Actualizamos el estado
    setTitleNote(e.target.value)
  }
  const handleDescription = (e) =>{
    
    //Cuando encontres la etiqueta captura su valor
    //console.log(e.target.value);
    //Actualizamos el estado
    setDescriptionNote(e.target.value)
  }
  
  //metodo para guardar Notas
  const handleSubmit = (e) => {
    e.preventDefault()
    //Necesitamos guardar la nota

    //spread operate (...) hacemos una copia del arreglo y guardamos la nueva nota
    setListNotes([...ListNotes,{
      title: titleNote,
      description: descriptionNote
    }])
  }

  console.log(listNotes);
  

  return (
    <div>
    <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='Ingresa titulo' onChange={(e) => handleTitle(e)}/>

        <textarea placeholder='descripcion' onChange={(e) => handleDescription(e)}></textarea>

        <input type='submit' value="Guardar nota"/>
    </form>
  
    </div>
  )
}
