import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import ContactInfo from './ContactInfo';



const Contact = (props) => {
  return (
    <div>
       <h1>Contacts</h1>
          <ul>
            <NavLink to = {`${props.match.url}/ukraine`}>Contact Ukraine</NavLink>
            <NavLink to  = {`${props.match.url}/us`}>Contact US</NavLink>
          </ul>
        <Switch>
          <Route exact path = {props.match.url} 
                    render = { () => <h4>PLease select an office</h4>} />
          <Route path = {`${props.match.url}/:location}`} 
                 component = { ContactInfo } />
          <Route render = { ()=> <h2>No office found</h2>} />     
        </Switch>  
    </div>
  )
 
}

export default Contact;


<Router> 
      <div className="Blog">
          <header>
               <NavLinks />
          </header>
        <Switch>  
            <Route  path = '/home' exact component = {Home} />
            <Route  path = '/about' exact component = {About} />
            <Route  path = '/admin' exact component = {Admin} />
            <Route  render = { () => <h1>404 error</h1> } />
        </Switch>
        </div>
      </Router>  