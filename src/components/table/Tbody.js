import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';

class Tbody extends Component {
	render() {
		let updateParent = this.props.updateParent;
		return (
			<tbody>
				{
	    			this.props.list.map(function(obj, idx){
	            		return <tr key={ idx }>{obj.map(function(o, i){
		    				return !o.actions ? 
		    						<td key={ i }>{ o.text }</td> : 
		    						<td key={ i+"A" }>
		    								{o.actions.icons.map(function(icon, idx){
			    								return <Actions key={idx+"B"} 
			    												className={ icon.className } 
			    												title={ icon.title } 
																href={ o.actions.path }
			    												updateParent={updateParent}
			    								/>
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
	actions: PropTypes.bool.isRequired,
	updateParent: PropTypes.func
	
};

Tbody.defaultProps = {
	list: [],
	actions: false,
	updateParent: null
};

export default Tbody;

