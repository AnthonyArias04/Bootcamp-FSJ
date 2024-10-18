import React from 'react'
import { useParams } from 'react-router-dom'

export default function Editar() {
    const {id} = useParams()
    return (
    <div>
        <h1>Probando {id}</h1>
    </div>
  )
}
