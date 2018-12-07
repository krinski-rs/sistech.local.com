import React from 'react';
import { Redirect } from 'react-router-dom'
import cookie from 'react-cookies';
import Alert from '../alert/Alert';
import Home from '../home/Home';
import './css/login.css';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			alert: {
				view: false,
				msg: ''
			},
			redirect: false,
			isLogged: false
		};

	    this.handleSubmit = this.handleSubmit.bind(this);
	    
	}
	
	isLoggedIn = () => {
		return this.props.user.logged;
	}
	
	setRedirect = () => {
		this.setState({
			redirect: this.props.user.logged
		})
	}
	
	renderRedirect = () => {
		if (this.props.user.logged) {
			return <Redirect to='/home' component={Home} />
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		if (!event.target.checkValidity()) {
			/*
			 * formulário é inválido! então não fazemos nada
			 */
			return;
		}
		
	    var current, entries, item, key, output, value;
	    output = {};
	    entries = new FormData( event.target ).entries();
	    /*
	     * Iterar sobre valores e atribuir ao item.
	     */
	    item = entries.next().value;
	    while( item ) {
	    	/*
	    	 * atribuir a variáveis para tornar o código mais legível.
	    	 */
	    	key = item[0];
	    	value = item[1];
	    	/*
	    	 * Verifique se a chave já existe
	    	 */
	    	if(Object.prototype.hasOwnProperty.call( output, key)){
	    		current = output[ key ];
	    		if( !Array.isArray( current ) ){
	    			/*
	    			 * Se não for um array, converta-o para um array.
	    			 */
	    			current = output[ key ] = [ current ];
	    		}
	    		/*
	    		 * Adicona o novo valor ao array.
	    		 */
	    		current.push( value );
	    	}else{
	    		output[ key ] = value;
	    	}
	    	
	    	item = entries.next().value;
	    }
	    
	    fetch('http://sso.local.com/auth/login', {
	    	method: 'POST',
	    	body: JSON.stringify(output),
	    	headers: {
	    		"Content-Type": "application/json",
	    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
	    	}
	    }).then((response) => {
	    	if(!response.ok){
	    		var retorno = response.json();
	    		this.setState({
	    			alert: {
	    				view: true
	    			}
	    		});
    			return retorno;
	    	}else{
	    		this.setState({
	    			alert: {
	    				view: false,
	    				msg: ""
	    			}
	    		});

	    	}
	    	
    		return response.json();
	    }).then((data) => {
	    	if(!this.state.alert.view){
		    	cookie.save('sso', data.AccessToken, { path: '/', domain: '.local.com', httpOnly: false });
		    	this.setRedirect();
	    	}else{
	    		this.setState({
	    			alert: {
	    				view: true,
	    				msg: data.mensagem
	    			}
	    		});
	    	}
	    }).catch((error) => {
	    	console.log('error: ' + error);
	    });
	}
	
	render() {
		const state = this.props;
		console.log("Login");
		console.log(state);

		return (
			<form className="form-signin center-block text-center" noValidate onSubmit={this.handleSubmit}>
			{
				this.state.alert.view ? <Alert text={ this.state.alert.msg } /> : this.renderRedirect()
			}
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="username" className="sr-only">Email address</label>
				<input type="email" id="username" name="username" className="form-control" placeholder="Email address" required autoFocus />
				<label htmlFor="password" className="sr-only">Password</label>
				<input type="password" id="password" name="password" className="form-control" placeholder="Password" required />
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" id="remember-me" name="remember-me" value="true" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
				<p className="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
			</form>
    	);
	}
}

export default Login;