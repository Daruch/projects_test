import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MovieList from '../../containers/MovieList/MovieList';
import './NavigationRouter.css'






class NavLinks extends Component {
  render() {
    return (
        <nav className="NavLinks">
          <ul>
            <li><NavLink to = '/' exact component = {MovieList} >MovieList</NavLink></li>
            <li><NavLink to = '/favourite'>Favs</NavLink></li>
            <li><NavLink to = '/watchlist'>WatchList</NavLink></li>
          </ul>
        </nav>
    );
  }
}

export default NavLinks;
