import React from 'react';
import './TopNav.css';


const TopNav = ({
  userPhoto,

}) => {
  return (
     <nav className = "Menu">
       <div className = "Logo">
       <img alt = "logo"/>
       </div>
        <ul className = "Nav_menu">
          <li>About me</li>
          <li>Relationships</li>
          <li>Requirements</li>
          <li>Users</li>
          <li>Sign up</li>
       </ul>
       <div className = "Login">
          <span class = "name">Superstar</span>
          <span className = "email">Email@com.com</span>
          <img class = "userpic" src = { userPhoto } alt = "userpic" />
          <img class = "exit" src = "" alt = "exit" />
       </div>
    </nav>

  );
}


export default TopNav;