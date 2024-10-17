import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';



//CREANDO REGLAS PARA VALIDAR EL CORREO Y EL PASSWORD
const schema = yup.object().shape({
  //ASIGNAMOS LAS REGLAS QUE SE VAN A VALIDAR
  email: yup.string().required("El correo es obligatorio").email("Correo Invalido, ejemplo: usuario@fominio"),
  password: yup.string().required("Campo Obligatorio").min(8, "La contraseña debe contener al menos 8 caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null])
  
})



export default function Register() {
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <div>
      <h1>Registrar Usuarios</h1>

      <form>
        <div>
          <label htmlFor="">Correo Electronico</label>
          <input type="email" placeholder="Ingrese su correo" {...register('email', {required: true})}/>
          <span style={{color: "red"}}>
            {errors.email && errors.email.message}
            </span>
        </div>

        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" placeholder="Ingrese su contraseña" {...register('password')}/>
          <span style={{color: "red"}}>
            {errors.password && errors.password.message}
          </span>       

        </div>

        <div>
          <label htmlFor="">Confirmar Contraseña</label>
          <input type="confirmPassword"  {...register('confirmPassword')}/>
          <span style={{color: "red"}}>
            {errors.confirmPassword && errors.confirmPassword.message}
            </span>
        </div>
        <button type="submit">Registrarse</button>
      </form>

    </div>
  )
}
