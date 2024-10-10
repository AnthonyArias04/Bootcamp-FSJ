import React from 'react'

export default function Form() {
  return (
    <form action=''>
        <input type='text' placeholder='Ingresa titulo'/>

        <textarea placeholder='descripcion'></textarea>

        <input type='submit' value="Guardar nota"/>
    </form>
  )
}
