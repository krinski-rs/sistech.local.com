import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import NavBar from '../../components/navbar/NavBar';
import Dashboard from './Dashboard';
import CadastroPJ from '../pessoa/juridica/Cadastro';
import CadastroPDV from '../pdv/Cadastro';
import ListagemPDV from '../pdv/Listagem';
import { getCookie } from '../../components/util/auth';


class Home extends React.Component {
	
	renderRedirect = () => {
		return <Redirect to='/login' />
	}
	
	componentDidMount() {
		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
			this.renderRedirect();
		}
	}
	
	render() {
		return (
			<div id="wrapper">
				<NavBar update={ this.props.update }/>
				<Route exact={true} path="/home" component={Dashboard} />
				<Route exact={true} path="/pessoa/cadastro/pj" component={CadastroPJ} />
				<Route exact={true} path="/pdv/cadastro" component={CadastroPDV} />
				<Route exact={true} path="/pdv/lista" component={ListagemPDV} />
		    </div>
    	);
	}
}

Home.propTypes = {
	title: PropTypes.string,
	user: PropTypes.object
};

Home.defaultProps = {
		title: "Home"
};

export default Home;
