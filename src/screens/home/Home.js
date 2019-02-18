import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import NavBar from '../../components/navbar/NavBar';
import Dashboard from './Dashboard';
import CadastroPJ from '../pessoa/juridica/Cadastro';
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
	
	getMenu(){
	    fetch('http://sso.local.com/auth/logout', {
	    	method: 'DELETE',
	    	credentials: 'include'
	    }).then((response) => {
	    	if(!response.ok){
	    		var retorno = response.json();
				return retorno;
	    	}
			return response.json();
	    }).then((data) => {
	    	if(data.logout){
//		    	update({
//					user: {
//						logged: false,
//						cookie: null,
//						name: null,
//						userName: null
//					}
//				});
//		    	cookie.remove('sso', { path: '/', domain: '.local.com', httpOnly: false });	    	
	    	}
	    }).catch((error) => {
	    	console.log('error: ' + error);
	    });

	}
	
	render() {
		return (
			<div id="wrapper">
				<NavBar update={ this.props.update }/>
				<Route exact={true} path="/home" component={Dashboard} />
				<Route exact={true} path="/home/pessoa/cadastro/pj" component={CadastroPJ} />
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
