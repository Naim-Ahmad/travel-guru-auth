import { Button, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Frame.png';

export default function MyNavbar() {
 
  return (
    <Navbar
      fluid
      rounded
      className='bg-transparent text-white'
    >
      
    <Link to='/'>
        <img
        alt="Travel Guru Logo"
        className="mr-3 h-6 sm:h-9"
        src={logo}
        />
    </Link>
     
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={<div>Hell</div>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          
          <Dropdown.DropdownItem>
            Dashboard
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            Settings
          </Dropdown.DropdownItem>
          <Dropdown.Divider />
          <Dropdown.DropdownItem>
            Sign out
          </Dropdown.DropdownItem>
        </Dropdown> */}
            <Button color='warning'>
                <Link to='/login'>Login</Link>
            </Button>
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
