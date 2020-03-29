import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


class DishDetails extends Component { 
    renderDish(dish, comments) {
            return (
                <div className="row m-1"  >
                    <div className="col-12 col-sm-5">
                        <Card width="100%">
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-5">
                    <Media list >
                        <Media heading>Comments</Media>
                        {comments.map((comment) => {
                        return(
                            <Media tag="li">
                                <Media body>
                                    <p>
                                    {comment.comment}
                                    <p className="my-3">-- {comment.name}, {comments.date}</p>
                                    </p>
                                </Media>
                            </Media>
                        )})
                        }
                    </Media>
                    </div>
                </div>
            )
    }


  render() {
    return (
      <div className="container">
          <div className="row ">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
            <h2>{this.props.name}</h2>
            </div>
            <hr/>
          <div className="row m-5">
            {this.renderDish(this.props.dish, this.props.comments)}
          </div>
      </div>
    );
  }
}


export default DishDetails;
