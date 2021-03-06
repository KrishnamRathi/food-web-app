import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutUsComponent';
import DishDetails from './DishDetails';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, 
		fetchDishes, 
		fetchComments, 
		fetchPromos, 
		fetchLeaders, 
		submitFeedback } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
	return {
	  dishes: state.dishes,
	  comments: state.comments,
	  promotions: state.promotions,
	  leaders: state.leaders
	}
  }

  const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, name, comment) => dispatch(postComment(dishId, rating, name, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => dispatch(actions.reset('feedback')),
	fetchComments: () => dispatch(fetchComments()),
  	fetchPromos: () => dispatch(fetchPromos()),
	fetchLeaders: () => dispatch(fetchLeaders()),
	submitFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(submitFeedback(firstname, lastname, telnum, email, agree, contactType, message))
  });

class Main extends Component{

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
		this.props.fetchLeaders();
	}

	render(){

		const HomePage = () => {
			return(
				<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errmsg}
					promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
					promoLoading={this.props.promotions.isLoading}
  					promoErrMess={this.props.promotions.errMess}
					leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
					leaderLoading={this.props.leaders.isLoading}
					leaderErrMess={this.props.leaders.errmess}
				/>
			)
		}

		const DishWithId = ({match}) => {
			return(
				<DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errmsg}
					comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
					commentsErrMess={this.props.comments.errMess}
					postComment={this.props.postComment}
				/>
			)
		}
		return(
            <div>
            <Header/>
			<TransitionGroup>
			<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />}/>
                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} submitFeedback={this.props.submitFeedback} />
                <Route path='/menu/:dishId' component={DishWithId}/>
                <Route path= '/aboutus' component={() => <AboutUs leaders={this.props.leaders} />}/>
                <Redirect to='/home'/>
            </Switch>
			</CSSTransition>
			</TransitionGroup>
            <Footer/>
            </div>
		);
	}
	
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
