import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler, Collapse, Modal, ModalBody, ModalHeader, FormGroup, Input, Button, Form, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isNavOpen: false,
         isModalOpen: false,
      };

       this.onToogleNav = this.onToogleNav.bind(this)
       this.onToogleModal = this.onToogleModal.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this); 

    };

    onToogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    onToogleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(event){
        this.onToogleModal();
        console.log("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }


  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.onToogleNav} />
            <NavbarBrand href="/" className="mr-auto">
                <img src="assets/images/logo.png" height="30" width="41" alt="Food is Life"></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"></span> About Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg"></span> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <Button outline onClick={this.onToogleModal} color='primary' >
                            <span className="fa fa-sign-in fa-lg"></span> Login
                        </Button>
                    </NavItem>
                </Nav>

            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>

       <Modal isOpen={this.state.isModalOpen}>
        <ModalHeader toggle={this.onToogleModal}> Login </ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username:</Label>
                    <Input type='text'
                        id='username'
                        name='username'
                        innerRef={(input) => this.username = input}
                        />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Pasword:</Label>
                    <Input type='password'
                        id='password'
                        name='password'
                        innerRef={(input) => this.password = input}
                        />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' 
                        name='remember'
                        innerRef={(input) => this.remember = input}/>
                        Remember me
                    </Label>
                </FormGroup>
                <FormGroup>
                <Button type='submit' value='submit' color='primary'>
                    Login
                </Button>
                </FormGroup>
            </Form>
        </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;