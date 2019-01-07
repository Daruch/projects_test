import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import UserList from './containers/UserList/UserList';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       userPic: null,
    }
  }

  
  componentDidMount(){
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
     .then(response => response.json())
     .then(data => {
         this.setState({userPic:data.user.photo}) 
        })
     .catch(error => console.error(error))
  }


  render() {
    const { userPic } = this.state;
    return (
      <div className="App">
        <Header userPic = { userPic } />
        <Main />
        <UserList />
        <RegistrationForm />
        <Footer />
      </div>
    );
  }
}

export default App; 
