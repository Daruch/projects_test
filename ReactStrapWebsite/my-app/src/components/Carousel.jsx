import React, { Component } from "react";
import { Carousel } from "react-bootstrap";




export default class CatShow extends Component{
  render(){
    return(
    <Carousel interval = {400} pauseOnHover = {true}>
     <Carousel.Item>
        <img width={200} height={200}  src="assets/Cat.jpg" />
       </Carousel.Item>
     <Carousel.Item>
       <img width={200} height={200}  src="assets/Cat.jpg" />
     </Carousel.Item> 
     </Carousel>
    )
  }
}


