
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';




  const NavBar = (props) => {
    return( 
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Catalogue</NavbarBrand>
      </Navbar>
   )
   
  }


  export default NavBar;