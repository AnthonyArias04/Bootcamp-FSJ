import { addDoc, collection } from "firebase/firestore";
import React from "react"
import { useForm } from "react-hook-form"
import db from "../firebase/config";
import { useNavigate } from "react-router-dom";


export default function AgregarProductos() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm()
  //console.log(watch ('name'));

  //CREANDO UNA CONSTANTE PARA REDIRIGIR A UNA RUTA
  const navigate = useNavigate()
  const saveProduc= async(data) =>{
    console.log("Se ha guardado");
    
    
    //CONECTARNOS A LA BASE DE DATOS Y GUARDAR UN DOCUMENTO.
  try{
    await addDoc(collection(db, "products"),{
      name: data.name,
      description: data.description
    })
  }catch (error){
    console.log("Error al registrar el producto", error);
    

  }
  //REDIRECCIONAMOS A LA LISTA DE PRODUCTOS 
  navigate('/Productos')
  }
  
  //EL WATCH PERMITE ESTAR OBSERVANDO UNA ENTRADA DE DATOS
  //HANDLESUBMIT ES LA ACCION DE LO QUE VOY A HACER CON LOS DATOS
  /**re */

  return (
    <div>
      <h2>Registro de productos</h2>
      <form action="" onSubmit={handleSubmit(saveProduc)}>
        <div>
          <label htmlFor="">Ingresar Productos</label>
          <input type="text" {...register('name')}/>
        </div>

        <div>
          <label htmlFor="">description</label>
          <input type="text" {...register('description')}/>
        </div>

        <div>
          <input type="submit" value="Guardar"></input>
        </div>
      </form>
    </div>
  )
}
