import React, { Component } from 'react';

class Teste2 extends Component {
	
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(event) {
		this.props.update({
			clicked: true
		});
	}

	render() {
		return (
			<div onClick={this.onClick}>
				click!!!!
			</div>
		);
	}
}
export default Teste2;
