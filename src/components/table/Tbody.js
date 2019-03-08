import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';

class Tbody extends Component {
	render() {
		return (
			<tbody>
				{
	    			this.props.list.map(function(obj, idx){
	            		return <tr key={ idx }>{obj.map(function(o, i){
		    				return !o.actions ? 
		    						<td key={ i }>{ o.text }</td> : 
		    						<td key={ i+"A" }>
		    								{o.actions.icons.map(function(icon, idx){
			    								return <Actions key={idx} className={ icon.className } title={ icon.title } href={ o.actions.path } />
		    									
		    								})}
		    						</td>
		    			})}
	            		</tr>
	            	})
				}
			</tbody>
		);
	}
}

Tbody.propTypes = {
	list: PropTypes.array.isRequired,
	actions: PropTypes.bool.isRequired
};

Tbody.defaultProps = {
	list: [],
	actions: false
};

export default Tbody;

