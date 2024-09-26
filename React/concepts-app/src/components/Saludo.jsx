import { useState } from "react"

//DECLARACION DE UN COMPONENTE
export const Saludo = ()=>{
  //let nombre = "Anthony"

  //Prime HOOk -> useState
  //HOOK -> Es una funcion prehecha para realizar x accion.
  const [nombre,cambiarNombre] = useState("Anthony")
    return(
      <>
        <h3>Yo en realidad estoy en el componente saludo</h3>
        <h4>Hola {nombre} como estas?</h4>
        <button onClick={()=> {cambiarNombre("Julio")}}>MAGIA</button>
      </>
    )
  }
  