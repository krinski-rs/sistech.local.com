import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class LinkMessage extends React.Component {
	render() {
		return (
			<li>
				<Link to={ this.props.linkTo }>
					<div>
						<strong>{ this.props.title }</strong>
						<span className="pull-right text-muted">
							<em>{ this.props.subject }</em>
						</span>
					</div>
					<div>{ this.props.message }</div>
				</Link>
			</li>
		);
	}
}

LinkMessage.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	subject: PropTypes.string,
	message: PropTypes.string
};

export default LinkMessage;

