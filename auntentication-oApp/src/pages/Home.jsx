//import React from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import auth_user from "../app-config/firebase-config"
import Login from "./session/Login"
import {signOut} from "firebase/auth"

export default function Home() {
    //ESTADO DONDE VAMOS A VERIFICAR SI EL USUARIO ESTA AUTENTICADO
    const [user, setUser] = useState(null)
  
  //VERFICAMOS SI EL USUARIO ESTA EN FIREBASE
  //USERFIREBASE = DEVUELVE SI UN OBJETO SI LA PERSONA EXISTE
  onAuthStateChanged(auth_user, (userFirebase) =>{
    if(userFirebase){
        //SI EL USUARIO EXISTE
        console.log(userFirebase);
        
        setUser(userFirebase)
    }else{
        setUser(null)
    }
  })


  //METODO PARA CERRAR SESION 

  const logout = () => {
    signOut(auth_user).then(()=>{
        alert("Has cerrado sesion")
    }).catch((error)=> {
        console.error("Error al cerrar sesion", error)
    })

  }
    return (
    <div>
        {
            
            //SI EL USUARIO EXISTE SE LE DA LA BIENVENIDA SI NO SE TENDRA QUE IR A LOGIN PARA INICAR SESION.

            user ? 
            <>
            <h1>Bienvenido a la Aplicacion</h1>
            <p>Has iniciado la sesion</p>
            <button onClick={logout}>Cerrar Sesion</button>
            </>
            : <Login/>
        }
        
    </div>
  )
}
