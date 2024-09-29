import { Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
   <nav className='navbar'>
    <Link to='/login' className='nav-log'>Login</Link>
    <Link to='/register' className='nav-reg'>Register</Link>
   </nav>
  )
}

export default Navbar
