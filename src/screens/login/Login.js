import React from 'react';
import { Redirect } from 'react-router-dom'
//import cookie from 'react-cookies';
import Alert from '../alert/Alert';
import { login, me, getCookie } from '../../components/util/auth';
import './css/login.css';

class Login extends React.Component {
	constructor(props){
		super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		if(this.props.user && this.props.user.logged && (this.props.user.cookie === getCookie())){
			this.renderRedirect();
		}else if(getCookie()){
			me(this.props.update);
		}
	}
	
	renderRedirect = () => {
		if (this.props.user.logged) {
			return <Redirect to='/home' />
		}
	}

	handleSubmit(event) {
		login(event, this.props.update);
		this.renderRedirect();
	}
	
	render() {
		const state = this.props;
		return (
			<form className="form-signin center-block text-center" noValidate onSubmit={this.handleSubmit}>
			{
				state.error ? <Alert text={ state.msg } /> : this.renderRedirect()
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
