import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebase/config'
import { useForm } from 'react-hook-form'

export default function EditForm() {

    //useParams captura los parametros que mandamos en las rutas

    const { id } = useParams();     

    //montando el producto seleccionado
    useEffect(() => {
        
        const getProductById = async () => {
            const productDoc = await getDoc(doc(db, "products", id));
            console.log(productDoc);

            //validamos si el documento existe
            if(productDoc.exists()){
                const productData = productDoc.data()
                console.log(productData);
                
            }else{
                console.log("No existe el producto");
            }
        }

        getProductById()
    }, [])
    
    console.log("HOLA");
    
    return (
        <div>
            <h2>Holaa</h2>
        </div>
    )
}
