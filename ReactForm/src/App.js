import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';



class App extends Component { 
   render() {
    return (
      <div className = "Form">
        <h2>Register form</h2>
        <FormContainer />
      </div>
     
    );
  }
}

export default App;
