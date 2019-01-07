import React, { Component } from 'react';
import './App.css';
import Item from "./component/Item";
import NavBar from "./component/NavBar";
import NavBarCategory from './component/Category';
import Loader from "./component/Loader";
  

const URL = `http://m.it.ua/ws/WebService.asmx/ExecuteEx`;




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      productCategory:{
         id:'',
         caption:''
       },
      product:
      [ 
        {
          id:"",
          groupId:"",
          caption:"",
          img:""
        }
      ]
      
    }
    this.getData = this.getData.bind(this);   
    this.getProduct = this.getProduct.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }
 
componentDidMount(){
  setTimeout(() => this.setState({ isLoading: false }), 1500);
  this.getData();
  this.getProduct();
}
 
getData(){
   fetch(URL, {
    method: "POST",
    headers: {
       "Accept": "application/json, text/plain, */*",
       "Content-Type": "application/json"
    },
    body: JSON.stringify({
      calcId: '_MOCK.GET_GROUPS',
      args: null,
      ticket: null
      })
  })
    .then(res => res.json())
    .then(d => { 
      const data = JSON.parse(d.d);
       console.log(data);
      	this.setState({
            productCategory:{
              id:data[0].Id,
              caption:data[0].Caption
            }
      });
    });
  }


getProduct(){
    fetch(URL, {
      method: "POST",
      headers: {
         "Accept": "application/json, text/plain, */*",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
        calcId: '_MOCK.GET_PRODUCTS',
        args: null,
        ticket: null
        })
    })
      .then(res => res.json())
      .then(d => { 
        const data = JSON.parse(d.d);
        console.log(data);
        this.setState({
          product:data
      });      
    }); 
  } 


renderItems(){
    const { product} = this.state;
    return product.map(prodItem => {
         return <Item 
                   id = {prodItem.Id}
                   caption = {prodItem.Caption}
                   groupId = {prodItem.groupId}
                   img = {prodItem.Img}
                 />
      })
  }





render(){
  const { loading } = this.state;
   
  if(loading){
      return null;
   }
    return ( 
      <div className = "Container"> 
       <NavBar />
         <NavBarCategory 
                  text = {this.state.productCategory.caption} 
                  id = {this.state.productCategory.id}
                  />
           {this.renderItems() }
       </div>
      )
    
  }
}


export default App;
