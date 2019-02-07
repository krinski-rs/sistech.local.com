import React from 'react';
import PropTypes from 'prop-types';
import TopLinksHeader from './TopLinksHeader';
import LinkUser from './LinkUser';
import { logout } from '../../components/util/auth';

class TopLinkUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "",
			toggle: false,
		};
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		event.preventDefault();
		this.setState(prevState => ({
			toggle: !prevState.toggle
		}));
	}
	
	logOut(event, update) {
		event.preventDefault();
		console.log('123');
		logout(update);
	}

	render() {
		return (
			<li className={ "dropdown " +  (this.state.toggle === true ? "open" : "" ) } onClick={ this.handleClick }>
				<TopLinksHeader className={ this.props.className } toggle={ this.state.toggle } />
				<ul className={"dropdown-menu " + this.props.classNameList }>
	        		<LinkUser key={ 1 } linkTo={ "#" } title={ "User Profile" } className={ "fa-user" } />
	                <LinkUser key={ 2 } linkTo={ "#" } title={ "Settings" } className={ "fa-gear" } />
	                <li className="divider"></li>
	                <LinkUser key={ 3 } linkTo={ "#" } title={ "Logout" } className={ "fa-sign-out" } onclick={ e => this.logOut(e, this.props.update) } />
				</ul>
			</li>
		);
	}
}

TopLinkUser.propTypes = {
	className: PropTypes.string,
	classNameList: PropTypes.string,
	toggle: PropTypes.bool,
	itens: PropTypes.array
};

export default TopLinkUser;

