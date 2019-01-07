import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component { 
  constructor(props){
    super(props);
      this.state = {
         priceDollars:null,
         priceEuros:null,
         pricePounds:null,
         startDate:null,
         history:null

         
      }
    };
  
  showRate = () => {
       axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
       .then((res) => {
         console.log(res);

        return this.setState({
          priceDollars:res.data.bpi.USD.rate,
          priceEuros:res.data.bpi.EUR.rate,
          pricePounds:res.data.bpi.GBP.rate
        })
       })
       .catch((err) => {
         return err;
       });
      };
  
    showHistoryRate = () => {
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday`)
          .then((res) => {
            console.log(res);

            return this.setState({
              history:Object.entries(res.data.bpi),                 
            })
          });        
        }

    

  

  render(){
    return (
      <div className="App">
       <div style = {{width:"300px", color:"blue", mrgin: "0 auto"}}>
        <p>Bitcoin price now Dollars:{this.state.priceDollars}</p>
        <p>Bitcoin price now euros:{this.state.priceEuros}</p>
        <p>Bitcoin price now ponds:{this.state.pricePounds}</p>
        <button onClick = {this.showRate}>Press me to learn the price</button>
        <button onClick = {this.showHistoryRate}>Show history</button>
        <p>{this.state.history}</p>
      </div> 
      </div>
    );
   }
  }



export default App;
