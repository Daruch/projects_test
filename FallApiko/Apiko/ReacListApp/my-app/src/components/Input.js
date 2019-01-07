import React from "react";




const Search  = ({
  textInput,
  inputChange
}) => {
      return(
           <input 
              style = {inputSearch}
              type = "text"
              placeholder = "search"
              value={textInput} 
              onChange={inputChange}
           />   
      )
}

const inputSearch = {
         marginTop:'5px',
         padding:"15px",
         width:"650px",
         background:"white"         
    }

export default Search;
