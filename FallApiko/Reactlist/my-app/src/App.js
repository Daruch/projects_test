 import React, { Component } from 'react';
import ContactList from './components/ContactList';
import './App.css';
import contacts from './data';
import Arrow from "./components/Arrow";

const imgUrls = [
	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      currentImageIndex:0
    };
  }


  previousSlide = () =>{
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex:index
    })
  }


  nextSlide = () =>{
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index  = shouldResetIndex ? 0 : currentImageIndex+1;

    this.setState({
      currentImageIndex: index
    })
  }


  

  render() {
    return (
       <div style={{backgroundColor: "yellow", display:"flex", flexDirection:"column"}}>
       <h1>Playing with react lib</h1>
        <div style={{backgroundColor: "red", width:"10em", height:"15em"}}>
            <h3>Here the box goes</h3>
        </div>
        <div className="carousel">
        <Arrow 
           direction = "left"
           clickFunction = {this.previousSlide}
           glyph = "&#9664;" />
          
           <ImageSlide url = { imgUrls[this.state.currentImageIndex] } />
      
        <Arrow 
          direction = "right"
          clickFunction = {this.nextSlide}
          glyph="&#9654;"
        />  
        </div>
      </div>
       
    );
  }
}

function getRandomInt(q) {
 
        var randomnum = Math.floor(Math.random() * q.length);
        return q[randomnum];
       }

const ImageSlide = ({url}) =>{
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return(
    <div className="image-slide" style = {styles}>
    </div>
  );
}

export default App;
