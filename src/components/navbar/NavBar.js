import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import NavBarTopLinks from "./NavBarTopLinks";
import NavBarMenu from "./NavBarMenu";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
				<Header />
				<NavBarTopLinks update={ this.props.update } />
				<NavBarMenu update={ this.props.update } itens={
					[
						{
							linkTo: "/home",
							title: "Dashboard",
							className: "fa fa-dashboard fa-fw"
						},
						{
                        	linkTo: "#",
                        	title: "Pessoas",
                        	className: "glyphicon glyphicon-user",
                        	levelClass: "nav-second-level",
                        	itens: [
                        			{
                        				linkTo: "#",
                        				title: "Jurídica",
    			                    	levelClass: "nav-third-level",
                        				onclick: null,
                        				itens: [
                        					{
        	                    				linkTo: "/home/pessoa/cadastro/pj",
        	                    				title: "Cadastro",
        	                    				className: "",
        	                    				onclick: null
                        					},
                        					{
        	                    				linkTo: "#",
        	                    				title: "Listagem",
        	                    				className: "",
        	                    				onclick: null
                        					}
                        				]
                        			},
                        			{
                        				linkTo: "#",
                        				title: "Física",
    			                    	levelClass: "nav-third-level",
                        				onclick: null,
                        				itens: [
                        					{
        	                    				linkTo: "#",
        	                    				title: "Cadastro",
        	                    				className: "",
        	                    				onclick: null
                        					},
                        					{
        	                    				linkTo: "#",
        	                    				title: "Listagem",
        	                    				className: "",
        	                    				onclick: null
                        					}
                        				]
                        			}
                        		]
						},
						{
							linkTo: "#",
							title: "Tables",
							className: "fa fa-table fa-fw"
						},
						{
							linkTo: "#",
							title: "Forms",
							className: "fa fa-edit fa-fw"
						},
						{
							linkTo: "#",
                        	title: "UI Elements",
                        	className: " fa fa-wrench fa-fw",
                        	levelClass: "nav-second-level",
                        	itens: [
                    			{
                    				linkTo: "#",
                    				title: "Panels and Wells",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Buttons",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Notifications",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Typography",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Icons",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Grid",
                    				className: "",
                    				onclick: null
                    			}
                    		]
						},
						{
							linkTo: "#",
                        	title: "Multi-Level Dropdown",
                        	className: "fa fa-sitemap fa-fw",
                        	levelClass: "nav-second-level",
                        	itens: [
                    			{
                    				linkTo: "#",
                    				title: "Second Level Item 1",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Second Level Item 2",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Third Level",
                    				className: "",
			                    	levelClass: "nav-third-level",
                    				onclick: null,
                    				itens: [
                    					{
    	                    				linkTo: "#",
    	                    				title: "Third Level Item 1",
    	                    				className: "",
    	                    				onclick: null
                    					},
                    					{
    	                    				linkTo: "#",
    	                    				title: "Third Level Item 2",
    	                    				className: "",
    	                    				onclick: null
                    					},
                    					{
    	                    				linkTo: "#",
    	                    				title: "Third Level Item 3",
    	                    				className: "",
    	                    				onclick: null
                    					},
                    					{
    	                    				linkTo: "#",
    	                    				title: "Third Level Item 4",
    	                    				className: "",
    	                    				onclick: null
                    					}
                    				]
                    			}
                    		]
						},
						{
                        	linkTo: "#",
                        	title: "Sample Pages",
                        	className: "fa fa-files-o fa-fw",
                        	levelClass: "nav-second-level",
                        	itens: [
                    			{
                    				linkTo: "#",
                    				title: "Blank Page",
                    				className: "",
                    				onclick: null
                    			},
                    			{
                    				linkTo: "#",
                    				title: "Login Page",
                    				className: "",
                    				onclick: null
                    			}
                    		]
						}
					]
				}/>
	        </nav>
		);
	}
}

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

NavBar.defaultProps = {
	title: "RK Admin",
	href: "#"
};

export default NavBar;
