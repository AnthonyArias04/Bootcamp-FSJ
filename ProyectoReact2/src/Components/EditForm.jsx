import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '../firebase/config'
import { useForm } from 'react-hook-form'

export default function EditForm() {
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    //useParams captura los parametros que mandamos en las rutas

    const { id } = useParams();     

    const navigate = useNavigate();
    //montando el producto seleccionado
    useEffect(() => {
        
        const getProductById = async () => {
            const productDoc = await getDoc(doc(db, "products", id));
            console.log(productDoc);

            //validamos si el documento existe
            if(productDoc.exists()){
                const productData = productDoc.data()
                console.log(productData);
                
                //SI EXISTE MANDAREMOS LA INFO DE EL PRODUCTO
                setValue('name', productData.name )
                setValue('description', productData.description)
            }else{
                console.log("No existe el producto");
            }
        }

        getProductById()
    }, [])
    
        const editProduct = async (data) => {
            try {
                updateDoc(doc(db, "products", id),{
                name: data.name,
                description: data.description
                })
                navigate("/Productos")
            } catch (error) {
                console.error('ERROR AL ACTUALIZAR EL PRODUCTO', error)
            }
        }    

    return (
        <div>
        <h2>Editar productos</h2>
        <form action="" onSubmit={handleSubmit(editProduct)}>
          <div>
            <label htmlFor="">Ingresar Productos</label>
            <input type="text" {...register('name')}/>
          </div>
  
          <div>
            <label htmlFor="">description</label>
            <input type="text" {...register('description')}/>
          </div>
  
          <div>
            <input type="submit" value="Editar"></input>
          </div>
        </form>
      </div>
    )
}
