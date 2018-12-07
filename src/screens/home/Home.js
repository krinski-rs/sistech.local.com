import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import Public from './Public';
import Chuchu from './Chuchu';
import Login from '../login/Login';

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const state = this.props;
		console.log("Home");
		console.log(state);


		return (
		    <Router>
		      <div>
		        <ul>
		          <li>
		            <Link to="/public">Public Page</Link>
		          </li>
		          <li>
		            <Link to="/chuchu">Chuchu Page</Link>
		          </li>
		        </ul>
		        <Route path="/public" component={Public} />
		        <Route path="/chuchu" component={Chuchu} />
		      </div>
		    </Router>
    	);
	}
}

Home.propTypes = {
	title: PropTypes.string,
	user: PropTypes.object
};

Home.defaultProps = {
		title: "Home"
};

export default Home;
