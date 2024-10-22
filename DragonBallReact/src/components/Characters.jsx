import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Characters() {
  //[]
  //Se utilizara un estado para guardar los personajes de Dragon Ball
  const [characters, setCharacters] =  useState([])

  useEffect(()=>{
    /**
     * useEffect tenemos el efecto que se va a realizar 
     * arreglo de dependencia 
     */
    
  //Metodo para obtener la informacion de la api
  const getPersonajes = async () => {
    try{
        const response = await axios.get ('https://dragonball-api.com/api/characters')
        
        // OBTENIENDO DE LA API LA DATA DE LOS PERSONAJE QUE MANDA AXIOS OBTENIENDO SOLAMENTE LOS ITEMS.
        //console.log(response.data.items);

        //OTRA FORMA SE PUEDE ES DESTRUCTURANDO LA DATA Y ES:
        // const { items } = response.data

        //ACTUALIZANDO EL ESTADO DE LOS PERSONAJES
        setCharacters(response.data.items)     
    }catch{(error)
        console.log(error.message);
        
      
        
    }
  }
 
    //llamando a la funcion para que hagaun efecto  
  getPersonajes()

  
    //EL ARREGLO VACIO AL FINAL DE EL useEffect REPRESENTA QUE ESA FUNCION SE VA A RENDERIZAR SOLAMENTE UNA VEZ
  },[])

  console.log(characters);
  
 

    return (
    <div>Characters</div>
  )
}
