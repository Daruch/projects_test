 import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody, Container } from 'reactstrap';


const Item = (props) => {
  console.log(props);
  return (
    <Container>
      <Row>
       <Col sm = {3}>
          <Card body key = {props.id}>
            <CardImg top width="50%" src={props.img} alt="Card image cap" />
              <CardTitle>{props.category}</CardTitle>
              <CardText>{props.caption}</CardText>
              
            </Card>
        </Col>
        <Col sm = {3}>
        <Card body key = {props.id}>
          <CardImg top width="50%" src={props.img} alt="Card image cap" />
            <CardTitle>{props.category}</CardTitle>
            <CardText>{props.caption}</CardText>
          
          </Card>
      </Col>
     
      <Col sm = {3}>
      <Card body key = {props.id}>
        <CardImg top width="40%" src={props.img} alt="Card image cap" />
          <CardTitle>{props.category}</CardTitle>
          <CardText>{props.caption}</CardText>
         
        </Card>
    </Col>
     <Col sm = {3}>
    <Card body key = {props.id}>
      <CardImg top width="40%" src={props.img} alt="Card image cap" />
        <CardTitle>{props.category}</CardTitle>
        <CardText>{props.caption}</CardText>
        
      </Card>
  </Col>
  </Row>
     
</Container>
  );
};

export default Item;
