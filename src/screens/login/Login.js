import React from 'react';
import './css/login.css';

class Login extends React.Component {
	render() {
		return (
			<form className="form-signin center-block text-center" noValidate>
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