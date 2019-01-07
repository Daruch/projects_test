import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from './data';
import Search from './components/Input';
import PostList from './components/PostList';
import Count from './components/Count';







class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0, 
        items: [],
        visible:10,
        searchTerm:" ",
        error: false
    }
   

    this.handleChange = this.handleChange.bind(this);

  }



componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
      res => res.json()
   )
    .then(res => {
      this.setState({
        items: res
    });
  })
   .catch(error => {
    console.error(error);
    this.setState({
      error: true
    });
   });
  }
}


handleChange = e => this.setState({ searchTerm: e.target.value });

 
  

render() {
    
  const {
      count, 
      searchTerm, 
      items,
      visible
    } = this.state;

      return(     
        <div style = {listWrapper}>         
            <Count count = {count} />
            <Search 
                  inputChange={this.handleChange} 
                  inputText = {searchTerm} 
            />
            <PostList  
                  items = {items} 
                  visible = {visible}
                  inputText = {searchTerm} 
                  loadMore = {()=>this.loadMore()}
            />        
        </div>
    );
}
  





const listWrapper ={
  minHeight:'100vh',
  backgroundColor:"#F2F3F5",
  width:"100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}

export default App;
