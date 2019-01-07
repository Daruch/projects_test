import React from 'react'; 

const Input = props => {
  return (
    <div className = 'form-group'>
      <label for = {props.name}>
         {props.name}
      </label>
      <input 
            value = {props.value}/>
    </div>
  )
}


export default Input;