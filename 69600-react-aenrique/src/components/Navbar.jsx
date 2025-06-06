import '../styles/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  
    return(
        <nav className='nav-container'>
           <NavLink to='/'>
           <img src='../libro-abierto.svg' alt='logo' className='logo'/>
            </NavLink> 
            <div className='a-container'>
                <NavLink to='/category/nuevos'>Nuevos</NavLink>
                <NavLink to='/category/ofertas'>Ofertas</NavLink>
                <NavLink to='/category/mas vendidos'>Mas vendidos</NavLink>
            </div>
           <CartWidget/>
        </nav>
    )
}

export default Navbar