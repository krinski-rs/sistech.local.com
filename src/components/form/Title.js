import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
	
	
	
	render() {
		return (
			<div className="row">
                <div className={ this.props.className }>
                    <h1 className="page-header">{ this.props.title }</h1>
                </div>
            </div>
        );
	}
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default Title;
