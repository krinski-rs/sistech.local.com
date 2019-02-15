import React from 'react';
import PropTypes from 'prop-types';

class TopLinksHeader extends React.Component {
	render() {
		return (
			<a className="dropdown-toggle" data-toggle="dropdown" href={ this.props.href } aria-expanded={this.props.toggle}>
				<i className={ "fa "+this.props.className+" fa-fw" }></i>&nbsp;
				<i className={ "fa fa-caret-" + ( this.props.toggle ? "down" : "up" ) } ></i>
			</a>
		 );
	}
}

TopLinksHeader.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	toggle: PropTypes.bool
};

TopLinksHeader.defaultProps = {
	href: "#",
	toggle: false
};

export default TopLinksHeader;

