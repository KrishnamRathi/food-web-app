import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Media, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form'; 
import {Link} from 'react-router-dom';


function RenderDish({dish}){
    return(
        <Card width="100%">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comment}){
    return(
        <Media tag="li">
            <Media body>
                <p>
                {comment.comment}
                <p className="my-3">-- {comment.name}, {comment.date}</p>
                </p>
            </Media>
        </Media>
    )
}

function RenderModal({isModalOpen, toggleModal}){
    return(
        <div>

        </div>
    )
}

class DishDetails extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         isModalOpen: false,
      };
      this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    

    render(){
        const required = (val) => val && val.length;
        const minLength = (len) => (val) => val && val.length >= len;
        const maxLength = (len) => (val) => val && val.length <=len;


        return (
            <div className="container">
              <div className="row ">
                  <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
                  </Breadcrumb>
              </div>
              <div className="row">
              <h2>{this.props.dish.name}</h2>
              </div>
              <hr/>
              <div className="row row-content">
                  <div className="col-12 col-md-5">
                       <RenderDish dish={this.props.dish}/>
                  </div>
                  <div className="col-12 col-md-5">
                       <Media list>
                           <Media heading> Comments </Media>
                            {this.props.comments.map((comment) => <RenderComments comment={comment}/>)}
                       </Media>
                       <Button outline color="primary" onClick={this.toggleModal} >
                           <span className="fa fa-edit fa-lg m-1"></span> 
                           Submit Comment 
                       </Button>
                  </div>
                  <div>
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm className="pl-3">
                                 <Row className="form-group">
                                     <Label htmlFor="select">Rating</Label>
                                     <Control.select model=".select" 
                                        id="select" 
                                        name="select" 
                                        className="form-control">
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                     </Control.select>    
                                 </Row>
                                 <Row className="form-group">
                                     <Label htmlFor="name">Your Name</Label>
                                     <Control.text model=".name" 
                                        id="name" name="name" 
                                        placeholder="Your Name" 
                                        className="form-control"
                                        validators={{
                                            required: required,
                                            minlength: minLength(3),
                                            maxlength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minlength: "Length must be greater than 2",
                                            maxlength: "Length must be less than 15"
                                        }}
                                    />
                                 </Row>
                                 <Row className="form-group">
                                     <Label htmlFor="comment">Comment</Label>
                                     <Control.textarea model=".comment" 
                                        id="comment" 
                                        name="comment" 
                                        rows="6" 
                                        className="form-control"/>
                                 </Row>
                                 <Row className="form-group">
                                    <Button color="primary" >Submit</Button>
                                 </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                  </div>

              </div>
            </div>
          );
    }
}


export default DishDetails;
