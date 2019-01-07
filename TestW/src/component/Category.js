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
  Dropdown,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
 


  export default class NavBarCategory  extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  
   render() {
      return (
       <Navbar color="lightgreen" light expand="lg" >
         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret>
             Category
            </DropdownToggle>
            <DropdownMenu center className = {DropdownMenu} >
              <DropdownItem>{this.props.text}</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>{this.props.id}</DropdownItem>
            </DropdownMenu>
          </Dropdown>  
        </Navbar>   
      );
    }
  }

/*const NavBarCategory = (props) => {
    return( 
      <Navbar color="lightgreen" light expand="sm" >
        <NavbarBrand href="/">Category</NavbarBrand>
      </Navbar>  
     ) 
  }*/




