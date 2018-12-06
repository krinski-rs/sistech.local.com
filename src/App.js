import React, { Component } from 'react';
import Teste1 from './Teste1';
import Teste2 from './Teste2';
import Teste3 from './Teste3';

class App extends Component {

	render() {
		const state = this.props.appState;
		console.log(state);
		return (
			<div>
				<Teste1 update={this.props.setAppState} />
				<Teste2 update={this.props.setAppState} />
				<Teste3 chitos={state.clicked?state.header.text:''} />
			</div>
		);
	}
}

export default App;
