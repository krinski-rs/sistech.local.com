import React from 'react';
import {
	Route,
	Redirect
} from "react-router-dom";

function logar(props, rest){
	console.log(props.location);
	console.log(rest);
	return false;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (false || logar(props, rest)) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;