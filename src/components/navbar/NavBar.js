import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import NavBarTopLinks from "./NavBarTopLinks";
import NavBarMenu from "./NavBarMenu";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
				<Header />
				<NavBarTopLinks update={ this.props.update } />
				<NavBarMenu update={ this.props.update } />
	        </nav>
		);
	}
}

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

NavBar.defaultProps = {
	title: "RK Admin",
	href: "#"
};

export default NavBar;
