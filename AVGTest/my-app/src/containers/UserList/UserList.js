import React, { Component } from 'react';
import User from './User/User'



class UserList extends Component{
  constructor(props) {
    super(props)
    this.state = {
       users: [],
    }
  }


  componentDidMount() {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
     .catch(error => console.error(error))
  };


 render(){
   const { users } = this.state;
   console.log( users );
   return (
     <ul>
      { 
          users.map((user, i) =>
              <User key={i} user = {user} />
              )
      } 
    </ul>
  )
 }  
}


export default UserList;



  