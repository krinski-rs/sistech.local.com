import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {

	render() {
		return (
			<div className={ this.props.className } role={ this.props.role }>
			{ this.props.text }
			</div>
    	);
	}
}

Alert.propTypes = {
		className: PropTypes.string,
		role: PropTypes.string,
		text: PropTypes.string
};

Alert.defaultProps = {
	className: "alert alert-info",
	role: "alert",
	text: ""
};

export default Alert;
