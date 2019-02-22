import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

class MenuItens extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
	render() {
		return (
			<li className={this.state.toggle ? "active" : ""}>
                <Link to={ this.props.linkTo } onClick={ this.handleClick }>
                	<i className={ this.props.className }></i>
                	&nbsp;{ this.props.title }
                	<span className="fa arrow"></span>
                </Link>
                <ul className={ "nav " + this.props.levelClass + " collapse" + (this.state.toggle ? " in" : "") } aria-expanded={this.state.toggle} style={this.state.toggle ? {} : {height: "0px"}}>
                {
                	this.props.itens.length ?
	                	this.props.itens.map(function(obj, idx){
	                		return (!obj.itens || obj.itens.length < 1) ? 
	                				<MenuItem key={ idx } {...obj} /> : 
	                				<MenuItens key={ idx }  {...obj} />
	                	})
                	: null
                }
                </ul>
            </li>
		);
	}
}

MenuItens.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
	levelClass: PropTypes.string,
	onclick: PropTypes.func,
	itens: PropTypes.array
};

export default MenuItens;

