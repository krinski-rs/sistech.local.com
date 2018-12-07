import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import './css/bootstrap/css/bootstrap.css';

//import Teste1 from './Teste1';
//import Teste2 from './Teste2';
//import Teste3 from './Teste3';

class App extends Component {

	render() {
		const state = this.props.appState;
		console.log("App");
		console.log(state);
		return (
			<Router>
				<Switch>
					<Route exact={true} path='/login' render={()=><Login {...this.props.appState} />} />
					<Route exact={true} path='/home' render={()=><Home {...this.props.appState} />} />
				</Switch>
			</Router>
		);
	}
}

export default App;
