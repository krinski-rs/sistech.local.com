import React from 'react';
import PropTypes from 'prop-types';
import TopLinksHeader from './TopLinksHeader';

class TopLinks extends React.Component {
	render() {
		return (
			<li className="dropdown">
				<TopLinksHeader className={ "fa-envelope" } />
				<ul className="dropdown-menu dropdown-messages">
				</ul>
			</li>
		);
	}
}

TopLinks.propTypes = {
	className: PropTypes.string
};

export default TopLinks;

