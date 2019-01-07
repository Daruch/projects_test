import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import TopImage from '../../components/TopImage/TopImage';

const Header = ({
  userPic,
}) => {

  return (
  
       <header>
         <TopNav userPhoto = {userPic} />
         <TopImage />
       </header>

  )
}


export default Header;