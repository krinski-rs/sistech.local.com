import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		return (
			<thead>
				<tr>
				{
	    			this.props.list.map(function(obj, idx){
	            		return <th key={ idx }>{ obj.text }</th>
	            	})
				}
				{
	            	this.props.actions ? <th key={ this.props.list.length }>Ações</th> : null
				}
				</tr>
			</thead>
		);
	}
}

Header.propTypes = {
		list: PropTypes.array.isRequired,
		actions: PropTypes.bool.isRequired
};

Header.defaultProps = {
	list: [],
	actions: false
};

export default Header;
