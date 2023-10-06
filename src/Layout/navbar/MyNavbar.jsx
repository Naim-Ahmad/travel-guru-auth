/* eslint-disable react/prop-types */
import { Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink, useResolvedPath } from 'react-router-dom';
import darkLogo from '../../assets/Frame.png';
import lightLogo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';
import NavDropdown from './NavDropdown';

export default function MyNavbar({ classes }) {
  
  const { pathname } = useResolvedPath()
  const {user} = useContext(AuthContext)
  
 
  return (
    <Navbar
      fluid
      rounded
      className={`${classes && classes} `}
    >
      
    <Link to='/'>
        <img
        alt="Travel Guru Logo"
        className="mr-3 h-6 sm:h-9"
        src={pathname == '/' ? darkLogo : lightLogo}
        />
    </Link>
     
      <div className="flex md:order-2">
         {user ? <NavDropdown /> : <Button color='warning'>
            <Link to='/login'>Login</Link>
          </Button>}
        <Navbar.Toggle className='ml-4'/>
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
        >
          <p>
            Home
          </p>
        </NavLink>
        <NavLink to="/news">
          News
        </NavLink>
        <NavLink to="/destination">
          Destination
        </NavLink>
        <NavLink to="/blog">
          Blog
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}
