import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import autoBind from "auto-bind";



class FormContainer extends Component{

  constructor(){
    super();

    this.state = {
      newUser:{
        name: "Sash",
        age: "27",
        email:'dish@gmail.com',
        gender:""
      },
      option:["male", "female"]
    }

    autoBind(this);

  }



  handleFormSubmit = (e) => {
     e.preventDefault();
     let userData = this.state.newUser;

  }
  

   handleInput = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      this.setState({ 
           newUser: {
              ...this.state.newUser, [name]: value
           }
        })
   }

  


render() { 
  return(
   <form onSubmit = {this.handleFormSubmit}>
    <Input 
          name = {'name'}
          placeholder = "Please enter name"
          value = {this.state.newUser.name}
          title = {'Full Name'}
          handleName = {this.handleInput}
      />
    <Input 
        name = {"age"}
        placeholder = "Enter enter age"
        value = {this.state.newUser.age}
        title = {'Age'}
        handleAge = {this.handleInput}
    />

    <Input 
        name = {"email"}
        placeholder = "Enter your email"
        value = {this.state.newUser.email}
        title = {'email'}
        handleEmail = {this.handleInput}
    />
    <Select 
          options = {this.state.option}
    />
    <Button />
   </form>  
  )
}



}



export default FormContainer;