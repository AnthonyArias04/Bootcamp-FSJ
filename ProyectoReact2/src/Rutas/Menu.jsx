import { BrowserRouter, Link, Route, Routes} from 'react-router-dom' //ELEMENTOS QUE USA LA LIBRERIA.
import Home from '../Components/Home'
import ListProduct from '../Components/ListProduct'
import AgregarProductos from '../Components/AgregarProductos'
import EditForm from '../Components/EditForm'
//import  Login  from '../Components/Login'


export default function Menu() {
  
  
    return (
    <>
    <BrowserRouter>
    <header>
        <nav>
            <ul>
                
                    <Link to="/">Home</Link>
                
                
                <Link to="/Productos">Productos</Link>
                
                <Link to="/AgregarProductos">
                    Registros
                </Link>
            </ul>
        </nav>
    </header>

    {/*CONTENEDOR QUE ENVUELVE A LAS RUTAS> ROUTES*/ }
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<ListProduct/>}/>
        <Route path='/AgregarProductos' element={<AgregarProductos/>}/>
        {/**CREANDO RUTA CON PARAMETRO */}
        <Route path='/editar/:id' element={<EditForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
