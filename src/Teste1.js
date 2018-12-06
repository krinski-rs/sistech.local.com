import React, { Component } from 'react';

class Teste1 extends Component {
	
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(event) {
		this.props.update({
			updatedYet: true,
			header: Object.assign({}, this.props.header, { text: event.target.value })
		});
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.onChange} />
			</div>
		);
	}
}
export default Teste1;
