import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/Dishes';
import {PROMOTIONS} from './shared/Promotions';
import {LEADERS} from './shared/Leaders';
import { COMMENTS } from './shared/Comments';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Home from './components/HomeComponent';
import Contact from './components/ContactComponent';
import {BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import DishDetails from './components/DishDetails';


class App extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {
		 dishes: DISHES,
		 promotions: PROMOTIONS,
		 leaders: LEADERS,
		 comments: COMMENTS,
	  };
	};

	render(){

		const HomePage = () => {
			return(
				<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			)
		}

		const DishWithId = ({match}) => {
			return(
				<DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
				/>
			)
		}
		return(
			<BrowserRouter>
				<div className="App">
				<Header/>
				<Switch>
					<Route path='/home' component={HomePage}/>
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />}/>
					<Route exact path='/contactus' component={Contact} />
					<Route path='/menu/:dishId' component={DishWithId}/>
					<Redirect to='/home'/>
				</Switch>
				<Footer/>
				</div>
			</BrowserRouter>
		);
	}
	
}

export default App;
