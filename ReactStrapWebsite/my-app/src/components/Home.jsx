import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from "react-bootstrap";


export default class Home extends Component{
  render(){
    return(
      <Grid>
         <Jumbotron>
           <h1>Hello there</h1>
           <p>Ma cat's page. But the pic is not his)</p>
           <Link to="/about">
             <Button bsStyle = "primary">About</Button>
           </Link>
         </Jumbotron>
         <Row className="show-grid text-center">
          <Col xs={12} sm = {4} className = "person-wrapper">
           <Image width="300px" src = "assets/Cat.jpg" alt = "cat" circle className = "profile-pic" />
             <h3>Sam</h3>
             <p>Hey you in he drakkkHey you in he drakkk
             Hey you in he drakkkHey you in he drakkkHey you in he drakkk
             Hey you in he drakkkHey you in he drakkkHey you in he drakkk</p>
          </Col>   
          <Col xs={12} sm = {4} className = "person-wrapper">
          <Image width="300px" src = "assets/Cat.jpg" alt = "cat" circle className = "profile-pic" />
            <h3>Sam</h3>
            <p>Lorem lorem lorem lorem</p>
         </Col>    
         <Col xs={12} sm = {4} className = "person-wrapper">
         <Image width="300px" src = "assets/Cat.jpg" alt = "cat" circle className = "profile-pic" />
           <h3>Sam</h3>
           <p>Lorem lorem lorem lorem</p>
        </Col>      
          </Row>
      </Grid>
    )
  }
}