import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from '../Components/Home'
import ListProduct from '../Components/ListProduct'
import AgregarProductos from '../Components/AgregarProductos'
import EditForm from '../Components/editForm'
import Editar from '../Components/Editar'


export default function Menu() {
  
  
    return (
    <>
    <BrowserRouter>
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Productos">Productos</Link>
                </li>
                <li><Link to="/AgregarProductos">
                    Registros
                </Link></li>
            </ul>
        </nav>
    </header>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<ListProduct/>}/>
        <Route path='/AgregarProductos' element={<AgregarProductos/>}/>
        {/**CREANDO RUTA CON PARAMETRO */}
        <Route path='/editar/:id' element={<Editar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
