import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
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
			<div className={ "modal fade " + ( this.props.fade ? "in" : "" ) } id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: ( this.props.fade ? "block" : "none" ), paddingRight: ( this.props.fade ? "15px" : "" ) }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={ this.handleClick }>×</button>
                            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={ this.handleClick }>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

Modal.propTypes = {
	fade: PropTypes.bool,
	updateParent: PropTypes.func
};

Modal.defaultProps = {
	updateParent: null
};

export default Modal;
