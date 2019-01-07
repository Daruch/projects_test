import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return(
    <nav> 
        <NavLink to = './home'>Home</NavLink>
        <NavLink to = './about'>About</NavLink>
       
        <NavLink to = './admin'>Admin</NavLink>
    </nav>    
  )
}


export default NavLinks;