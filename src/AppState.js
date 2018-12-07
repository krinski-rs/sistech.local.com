import React, { Component } from 'react';

class AppState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				logged: false,
				cookie: null,
				name: null,
				userName: null
			}
		};
		
		this.setAppState = this.setAppState.bind(this);
	}
	
	setAppState(updater, callback) {
		// newState can be object or function!
		this.setState(updater, () => {
			if (this.props.debug) {
				console.log('setAppState', JSON.stringify(this.state));
			}
			
			if (callback) {
				callback();
			}
		});
	}
	
	render() {
		return (
			<div className="AppState">
				{
					React.Children.map(this.props.children, child => {
						return React.cloneElement(child, {
							appState: this.state,
							setAppState: this.setAppState
						});
					})
				}
			</div>
		);
	}
}

export default AppState;

