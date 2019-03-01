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
import './css/metisMenu/metisMenu.css';
import './css/sb-admin-2.css';
import './css/morris/morris.css';
import './css/font-awesome/css/font-awesome.css';

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
		return (
			<Router>
				<Switch>
					<Route exact={true} path='/' render={()=><Login {...state} update={this.props.setAppState} />} />
					<Route exact={true} path='/login' render={()=><Login {...state} update={this.props.setAppState} />} />
					<PrivateRoute path="/home" component={Home} update={this.props.setAppState} {...state}  />
					<PrivateRoute path="/pdv" component={Home} update={this.props.setAppState} {...state}  />
					<PrivateRoute path="/pessoa" component={Home} update={this.props.setAppState} {...state}  />
				</Switch>
			</Router>
		);
	}
}

export default App;
