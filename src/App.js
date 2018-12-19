import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import './css/bootstrap/css/bootstrap.css';

//import Teste1 from './Teste1';
//import Teste2 from './Teste2';
//import Teste3 from './Teste3';


function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest}
			render={ props =>
				rest.user.logged ? 
					( <Component {...rest} /> ) : 
					( <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> )
			}
		/>
	);
}

class App extends Component {
	render() {
		const state = this.props.appState;
		console.log(state);
		return (
			<Router>
				<Switch>
					<Route exact={true} path='/' render={()=><Login {...state} update={this.props.setAppState} />} />
					<Route exact={true} path='/login' render={()=><Login {...state} update={this.props.setAppState} />} />
					<PrivateRoute path="/home" component={Home} {...state}  />
				</Switch>
			</Router>
		);
	}
}

export default App;
