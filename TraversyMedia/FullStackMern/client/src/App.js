import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
