import React from 'react'

export default function 
({title, description}) {
  return (
    <div className='card-note'>
        <h2 className='title-note'>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
