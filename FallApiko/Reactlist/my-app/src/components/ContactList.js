import React from "react";
import ContactItem from "./ContactItem";
/*dd to app js >
            <h1>Contacts:</h1>
            <ContactList contacts={this.props.contacts} />*/


class ContactList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search: '',
            contacts: props.contacts
        };
    }

    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)})
    }


    addContact(event){
        event.preventDefault();
        let name = this.refs.name.value;
        let phone = this.refs.phone.value;
        let id = Math.floor((Math.random()*100)+1);
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
        })
          this.refs.name.value = "";
          this.refs.phone.value = "";
    }

    render(){
      let filteredContacts = this.state.contacts.filter(
          (contact)=> {
              return (contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
       }
    ); 

      return(
        <div className = "container">
           <input 
                   className = 'searchinput'
                   type = "text" 
                   placeholder = "Search"  
                   value = {this.state.search}
                   onChange = {this.updateSearch.bind(this)}/>

            <form
                className = "inputform"  
                onSubmit={this.addContact.bind(this)}>
              <input
                  type = "text" 
                  ref = "name"/ >
              <input 
                  type = "text" 
                  ref = "phone" /><br/>
              <button type = "submit"> Add new Contact </button>
            </form>       
         
            <ul>
              {filteredContacts.map((contact)=>{
                  return <ContactItem contact = {contact} key = {contact.id}
                   />
              })}
          </ul>
        </div>  
      )
    }
  }  




export  default ContactList;