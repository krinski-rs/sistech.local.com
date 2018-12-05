import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";
import Public from './Public';
import Chuchu from './Chuchu';

class Home extends React.Component {
	render() {
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
	title: PropTypes.string
};

Home.defaultProps = {
		title: "Home"
};

export default Home;