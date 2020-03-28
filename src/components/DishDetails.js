import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, Media } from 'reactstrap';
import {COMMENTS} from '../shared/Comments';


class DishDetails extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        comments: COMMENTS,
      };
    };
    
    renderDish(dish) {
        if (dish) {
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
                            <Media heading>comments</Media>
                            {this.state.comments.map((comments) => {
                                return(
                                <Media tag="li">
                                    <Media body>
                                        <p>
                                            {comments.comment}
                                            <p className="my-3">-- {comments.name}, {comments.date}</p>
                                        </p>
                                    </Media>
                                </Media>
                                )
                            })}
                        </Media>
                    </div>
                </div>
            )
        }else{
            return(<div></div>)
        }
        
    }


  render() {
    return (
      <div>
          {this.renderDish(this.props.selectedDish)}
      </div>
    );
  }
}


export default DishDetails;
