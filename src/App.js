import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/Dishes';
import {PROMOTIONS} from './shared/Promotions';
import {LEADERS} from './shared/Leaders';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Home from './components/HomeComponent';
import Contact from './components/ContactComponent';
import {BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';


class App extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {
		 dishes: DISHES,
		 promotions: PROMOTIONS,
		 leaders: LEADERS,
	  };
	};

	render(){

		const HomePage = () => {
			return(
				<Home dish={this.state.dishes.filter((dishe) => dishe.featured)[0]}
					promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
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
					<Redirect to='/home'/>
				</Switch>
				<Footer/>
				</div>
			</BrowserRouter>
		);
	}
	
}

export default App;
