import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/Dishes';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Home from './components/HomeComponent';
import {BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';


class App extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {
		 dishes: DISHES,
	  };
	};

	render(){

		return(
			<BrowserRouter>
				<div className="App">
				<Header/>
				<Switch>
					<Route path='/home' component={Home}/>
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />}/>
					<Redirect to='/home'/>
				</Switch>
				<Footer/>
				</div>
			</BrowserRouter>
		);
	}
	
}

export default App;
