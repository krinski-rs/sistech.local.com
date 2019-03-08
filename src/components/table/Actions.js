import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Actions extends Component {
	render() {
		return (
				<a href={ this.props.href } style={{marginRight: "10px"}}>
					<i className={ this.props.className } title={ this.props.title }></i>
				</a>
		);
	}
}

Actions.propTypes = {
		className: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
};

Actions.defaultProps = {
	className: "fa fa-sitemap fa-fw",
	href: "#",
	title: ""
};

export default Actions;
