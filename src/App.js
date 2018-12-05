import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './screens/login/Login';
import './css/bootstrap/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact={true} path='/login' component={ Login } />
				</Switch>
			</Router>
		);
	}
}

export default App;