import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isNavOpen: false,
      };

       this.onToogleNav = this.onToogleNav.bind(this)


    };

    onToogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
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
                        <NavLink className="nav-link" to="/home">
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
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-address-card fa-lg"></span> Contact
                        </NavLink>
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
    </React.Fragment>
    );
  }
}

export default Header;