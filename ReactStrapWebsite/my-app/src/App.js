import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import CustomNavBar from "./components/CustomNavBar";
import CatShow from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar/>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/about" component = {About}/>
          <Route exact path="/news" component = {News}/>
          <CatShow />
        </div>
      </Router>
    );
  }
}

export default App;
