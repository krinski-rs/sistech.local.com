import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class MenuItem extends React.Component {
	render() {
		return (
			<li>
                <Link to={ this.props.linkTo }>
                	<i className={ "fa " + this.props.className + " fa-fw" }></i>
                	&nbsp;{ this.props.title }
                </Link>
            </li>
		);
	}
}

MenuItem.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
	onclick: PropTypes.func
};

export default MenuItem;

