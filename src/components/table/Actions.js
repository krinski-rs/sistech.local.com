import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Actions extends Component {
	constructor(props) {
		super(props);
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		event.preventDefault();
		if(this.props.updateParent){
			this.props.updateParent();
		}
	}

	render() {
		return (
				<a href={ this.props.href } style={{marginRight: "10px"}} onClick={ this.handleClick }>
					<i className={ this.props.className } title={ this.props.title }></i>
				</a>
		);
	}
}

Actions.propTypes = {
		className: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		updateParent: PropTypes.func
};

Actions.defaultProps = {
	className: "fa fa-sitemap fa-fw",
	href: "#",
	title: "",
	updateParent: null
};

export default Actions;
