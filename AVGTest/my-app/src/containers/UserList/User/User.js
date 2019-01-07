import React from 'react';



const User = ({
  user,
  key
}) => {
  return (
    <li key = {key}>
      {user}
    </li>
  )
}


export default User;