import React from 'react';
import './ActionsNavbar.css';


const ActionsNavbar = (props) => {
 
  const favmoviesnew = Object.keys(props.favs)
  .map((item, id) => {
      return(
       <ul>
          <li key = {props.id}>
               {item.title}
               <span>{item.id}</span>
          </li>
       </ul>
      )           
})
   return (
     <div className = "Actions"> 
       <button>watchlistadd</button>
       <button onClick = {props.click} >favadd</button>
       {favmoviesnew}
     </div>
   )
}


export default ActionsNavbar;
