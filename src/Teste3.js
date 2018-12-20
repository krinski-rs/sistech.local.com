import React, { Component } from 'react';

class Teste3 extends Component {
	render() {
		return (
			<div>
				{this.props.chitos ? this.props.chitos : " ola "}
			</div>
		);
	}
}
export default Teste3;
