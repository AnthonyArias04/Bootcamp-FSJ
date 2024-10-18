import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "../firebase/config"
import { Link } from "react-router-dom"

export default function ListProduct() {

  //DECLARAMOS UN ESTADO PARA LA LISTA DE PRODUCTOS
  const [productos, setProdcutos] = useState([])
  //Montando la informacion de los productos que hay en FIREBASE
  useEffect(()=>{
    //TENEMOS QUE CONECTARNOS A LA BASE DE DATOS AQUI CON LA FUNCION QUE NOS PERMITE VISUALIZAR LA INFO DE LA DB EN TIEMPO REAL
    onSnapshot(
      //OBTENENMOS LA CONEXION DE LA BASE DE DATOS Y EL NOMBRE DE LA COLECCION
      collection(db, "products"),
      (snapshot) => {
        //OBJETO DE FIREBASE
        console.log(snapshot);
        //TESTEANDO EL PRIMER DOCUMENTO DE LA COLECCION
        console.log(snapshot.docs[0].data());
        
        /**MAPEANDO O ITERANDO LOS DOCUMENTOS DE LA COLECCION */
        const array_products = snapshot.docs.map((doc) =>{
          //COPIAMOS LA DATA DE CADA DOCUMENTO DE LA COLECCION PRODUCTOS Y LA MANDAMOS AL array_products
          return{...doc.data(), id:doc.id}
        })
        //TESTEANDO
        console.log(array_products);
        
        //ACTUALIZAMOS EL ESTADO CON EL ARREGL DE PRODUCTOS
        setProdcutos(array_products)
      }
    )
  },[])
  return (
    <div>
      <h1>Lista de productos</h1>
      <div>
        {
          productos.length > 0?
          productos.map((productos) =>{
            return(
              <div key={productos.id}>
                <div>
                  <h3>{productos.name}</h3>
                  <p>{productos.description}</p>
                  <Link to={`/editar/${productos.id}`}>Editar</Link>
                  
                  <button>Eliminar</button>
                </div>
              </div>
            )
          }) :<p>No hay productos</p>
        }
      </div>
    </div>
  )
}
