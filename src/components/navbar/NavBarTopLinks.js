import React, { Component } from 'react';
import TopLinkMessage from './TopLinkMessage';
import TopLinkTask from './TopLinkTask';
import TopLinkAlert from './TopLinkAlert';
import TopLinkUser from './TopLinkUser';

class NavBarTopLinks extends Component {
	render() {
		return (
			<ul className="nav navbar-top-links navbar-right">
	            <TopLinkMessage className={ "fa-envelope" } classNameList={ "dropdown-messages" } itens={ [1] } />
	            <TopLinkTask className={ "fa-tasks" } classNameList={ "dropdown-tasks" } itens={ [1] } />
	            <TopLinkAlert className={ "fa-bell" } classNameList={ "dropdown-alerts" } itens={ [1] } />
	            <TopLinkUser className={ "fa-user" } classNameList={ "dropdown-user" } itens={ [1] } update={ this.props.update }/>
            </ul>
		);
	}
}

export default NavBarTopLinks;
