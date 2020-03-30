
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({dish}){
    return (
        <Link to={`/menu/${dish.id}`}>
        <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    )
}


function Menu(props){

    const menu = props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1" >
                <RenderDish dish={dish}/>
            </div>
        )
    })

    return (
        <div className="contaier m-5 " >
           <div className="row ">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <h2>Menu</h2>
            </div>
            <hr/>
            <div className="row m-5">
                {menu}
            </div>
        </div>
    );
}

export default Menu;
