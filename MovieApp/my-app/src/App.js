import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import NavLinks from './components/NavigationRouter/NavigationRouter';
import MovieList from './containers/MovieList/MovieList';
import Favourite from './components/Favourite';
import Watchlist from './components/WatchList';



class App extends Component {

  render () {   
    return(  
     <Router> 
        <div>
         <header className = "Header">
           <NavLinks />
         </header>
         
       <Switch>
         <Route path = '/' exact component={ MovieList } />
         <Route path = "/favourite" component={ Favourite } />
         <Route path = "/watchlist" component={ Watchlist } />
       </Switch> 

       </div>
     </Router> 
    ) 
  
 }
  

  
  
 


  

   
  
}
   

export default App;
