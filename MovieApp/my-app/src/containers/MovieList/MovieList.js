import React, { Component } from 'react';
import autoBind from 'react-autobind';
import MovieItem from '../MovieItem/MovieItem';
import Pagination from 'react-js-pagination';



class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      searchInput:"",
      activePage: 5
    }
    autoBind(this);
  }


  componentDidMount() {
    fetch("https://api.themoviedb.org/3/search/movie?query=marvel&api_key=450cac9dcd61eb5390a63fdbefda2666")
      .then(response => response.json())
      .then(data => this.setState({data: data.results}));
  }


  handleChange = (e) => this.setState( {searchInput: e.target.value} )


  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


  render() { 
    const { data, searchInput } = this.state;
    const filteredMovies = data.filter(
      (movie) => {
        return movie.title.toLowerCase().includes(searchInput.toLowerCase());
      }
    );

   
    return (
      <div className="App">
        <header className="App-header">
          <img src="catio.jpg" className="App-logo" alt="logo" />
        </header>
        <input 
              placeholder = "Enter movie name" 
              className = "Input-search"
              onChange = {this.handleChange}
              value = {searchInput}
              />
         <ul className = "movie_list">
          {filteredMovies.map(movie => (
               <MovieItem key = {movie.id} movie = {movie} />
          ))}
         </ul>   
         <Pagination 
                activePage={this.state.activePage}
                itemsCountPerPage={3}
                totalItemsCount={10}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
         />
      </div>
    );
          
  }
}



export default MovieList;