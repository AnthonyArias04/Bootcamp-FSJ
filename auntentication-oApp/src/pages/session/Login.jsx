//import React from 'react'
import { useForm } from "react-hook-form"
import {signInWithEmailAndPassword} from "firebase/auth"
import auth_user from "../../app-config/firebase-config"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
//IMPORTANDO OTRA FUNCION PARA INICIAR SESION (CORREO / PASSWORD)

export default function Login() {
  const { register, handleSubmit, formState: {errors}} = useForm()
  const loginForm = (data) => {
      
    signInWithEmailAndPassword(auth_user, data.email, data.password).then((userCredentiales) => {
      const user = userCredentiales.user
      console.log(user);
      
    }).catch((error) => {
      console.error(error.message)
    });Swal.fire({
      title: "Credenciales Invalidas",
      text: "Revisa tu informacion",
      icon: "warning"
  });
  }
  return (
    <div>

      <h1>Inicio de Sesion</h1>
      <form onSubmit={handleSubmit(loginForm)}>
        <div>
          <label htmlFor="">Correo Electronico</label>
          <input type="email" placeholder="Ingrese su correo" {...register('email', {required: true})}/>
          {errors.email && <span style={{color: "red"}}>Campo Obligatorio</span>}
        </div>

        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" placeholder="Ingrese su contraseña" {...register('password', {required: true})}/>
                    {errors.password && <span style={{color: "red"}}>Campo Obligatorio</span>}

        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>

      <section>
        <p>Si no tienes cuenta <Link to='/registrar'>Registrate Aqui</Link></p>
      </section>
    </div>
  )
}
