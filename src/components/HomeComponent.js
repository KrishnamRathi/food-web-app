import React from 'react';
import {Card, CardTitle, CardBody, CardText, CardImg, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

function RenderCard({item, isLoading, errMess}){
  if(isLoading){
    return (
      <div>
        <Loading/>
      </div>
      
    )
  }else if(errMess){
    return(
      <h4>{errMess}</h4>
    )
  }
  else{
    return(
      <FadeTransform 
            in 
            transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
        <Card width="100%"></Card>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name} </CardTitle>
                {item.designation ? <CardSubtitle>{item.designation} </CardSubtitle> : null} 
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
      </FadeTransform>  
    )
  } 
}

function HomeComponent(props) {
    return (
        <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} 
                  isLoading={props.dishesLoading}
                  errMess={props.dishesErrMess} />
              </div>
              <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}
                  errMess={props.promoErrMess}
                  isLoading={props.promoLoading}
                />
              </div>
              <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}
                  isLoading={props.leaderLoading}
                  errMess={props.leaderErrMess}
                />
              </div>
          </div>
      </div>
    )
}

export default HomeComponent;
