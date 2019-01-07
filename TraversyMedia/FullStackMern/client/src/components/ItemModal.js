import React, { Component } from 'react';
import { 
  Button, 
  Modal,
  ModalHeader, 
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
 } from 'reactstrap';


 class ItemModal extends Component{
      state = {
        modal:false,
        name:''
      }

//how to add item without Redux
      toggle = ()=>{
         this.setState({
           modal: !this.state.modal
         });
      }


      onChange = (e)=>{
         this.setState({[e.target.name]:e.target.vlue});
      }

      onSubmit = e => {
         e.preventDefault();

         const newItem = {
           id: 1,
           name:this.state.name
         }
      }

      render(){
         return(
           <div>
            <Button
               color = "dark"
               style = {{marginBottom:'2rem'}}
               onClick = {this.toggle}
            >Add Item</Button>

            <Modal
                 isOpen={this.state.modal}
                 toggle = {this.toggle}
                 >
                <ModalHeader toggle = {this.toggle}>
                  Add to shopping List
                </ModalHeader>    
                <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                   <FormGroup>
                    <Label for="item">Item</Label>
                    <Input
                        type="text"
                        name="name"
                        id = "item"
                        onChange = {this.onChange}
                      />

                      <Button
                        color="dark"
                        style = {{marginTop:"2rem"}}
                        block 
                        >
                        AddItem
                      </Button>
                   </FormGroup>
                  </Form>
                </ModalBody>
            </Modal>
           </div>
         )
      }
 }




 export default ItemModal;







