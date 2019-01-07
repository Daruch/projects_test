import React, { Component } from 'react';
import './MovieItem.css';
import ActionsNavbar from '../../components/ActionsNavbar/ActionsNavbar';

class MovieItem extends Component {
  constructor(props){
    super(props)
     this.state = { 
       favs:['bems', "fems"],
       watchlist:[],
       toggleFav: false
     }


  }
  viewMovie(){
   const url = "https://www.themoviedb.org/movie/"+ this.props.movie.id;
   window.location.href = url;
  }

  addToFavs = () => {
    const FavMovie = {
      id: this.props.movie.id,
      title: this.props.movie.title
    }
    const favourites = [... this.state.favs, FavMovie]
    console.log(favourites);

    this.setState({
      favs: favourites
    })
     
  }

  removeFromFavs = (favIndex) => {
    const favs = [...this.state.favs];
    favs.splice(favIndex, 1);
    this.setState({favs: favs})
  }


  render(){
    const { movie } = this.props;


    return (
      <li key = {movie.id} className = "item">
        <img src = {"http://image.tmdb.org/t/p/w185//"+movie.poster_path}
             alt = "poster" className = "poster"
             onClick = {this.viewMovie.bind(this)}
             />
         <div className = "content"> 
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
          <span>{movie.popularity}</span>
          <button onClick = {this.addToFavs}>Add</button>
          <button onClick = {this.removeFromFavs}>Delete</button>
          <ActionsNavbar 
                   favs = {this.state.favs}
                   click = {this.addToFavs}
                     />
         </div> 
       </li>
    )
  }  
}
 
  

export default MovieItem;