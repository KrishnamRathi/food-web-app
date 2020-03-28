
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetails from './DishDetails';


class Menu extends Component {

constructor(props) {
    super(props)

    this.state = {
        selectedDish: null,
    }
};

onSelectDish(dish) {
    this.setState({
        selectedDish: dish,
    })
}

render() {

    const menu = this.props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1" >
                <Card onClick={() => { this.onSelectDish(dish) }}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    })

    return (
        <div className="contaier m-5" >
            <div className="row">
                {menu}
            </div>
            <div className="row">
                <DishDetails selectedDish={this.state.selectedDish}/>
            </div>
        </div>
    );
}
}

export default Menu;