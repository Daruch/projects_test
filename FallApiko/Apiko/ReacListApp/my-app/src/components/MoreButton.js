import React from 'react';


const MoreButton = (props) => {
    return(
         <button onClick = {()=>props.loadMore()} style = {moreButton}>PressMore</button>
      )
  };
  

const moreButton = {
    width:'650px',  
    background: "#fff",
    color: "#7a6f7a",
    padding:"15px",
    margin:"7px"
}


export default MoreButton;
