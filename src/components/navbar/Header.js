import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to={ this.props.href }>{ this.props.title }</Link>
            </div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

Header.defaultProps = {
	title: "RK Admin",
	href: "#"
};

export default Header;
