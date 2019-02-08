import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "./MenuItem";
import MenuItens from "./MenuItens";

class NavBarMenu extends React.Component {
	render() {
		return (
			<div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
                        <MenuItem linkTo={ "/home" } title={ "Dashboard" } className={ "fa-dashboard" } />
                        <MenuItens 
                        	linkTo={ "#" } 
                        	title={ "Charts" }
                        	className={ "fa-bar-chart-o" }
                        	levelClass={ "nav-second-level" }
                        	itens={
                        		[
                        			{
                        				linkTo: "#",
                        				title: "Flot Charts",
                        				className: "",
                        				onclick: null
                        			},
                        			{
                        				linkTo: "#",
                        				title: "Morris.js Charts",
                        				className: "",
                        				onclick: null
                        			}
                        		]
                        	} 
                        />
                        <MenuItem linkTo={ "#" } title={ "Tables" } className={ "fa-table" } />
                        <MenuItem linkTo={ "#" } title={ "Forms" } className={ "fa-edit" } />
                        <MenuItens 
                        	linkTo={ "#" } 
                        	title={ "UI Elements" }
                        	className={ "fa-wrench" }
                        	levelClass={ "nav-second-level" }
                        	itens={
                        		[
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
                        	} 
                        />
                        <MenuItens 
	                    	linkTo={ "#" } 
	                    	title={ "Multi-Level Dropdown" }
	                    	className={ "fa-sitemap" }
	                    	levelClass={ "nav-second-level" }
	                    	itens={
	                    		[
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
	                    	} 
	                    />
                        <MenuItens 
	                    	linkTo={ "#" } 
	                    	title={ "Sample Pages" }
	                    	className={ "fa-files-o" }
	                    	levelClass={ "nav-second-level" }
	                    	itens={
	                    		[
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
	                    />
                    </ul>
                </div>
            </div>
		);
	}
}

NavBarMenu.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
	onclick: PropTypes.func
};

export default NavBarMenu;

