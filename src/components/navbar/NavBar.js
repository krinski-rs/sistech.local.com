import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Header from "./Header";
import NavBarTopLinks from "./NavBarTopLinks";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
				<Header />
				<NavBarTopLinks />
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
	                        <li>
	                            <Link to="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
	                        </li>
	                        <li>
	                            <Link to="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></Link>
	                            <ul className="nav nav-second-level">
	                                <li>
	                                    <Link to="flot.html">Flot Charts</Link>
	                                </li>
	                                <li>
	                                    <Link to="morris.html">Morris.js Charts</Link>
	                                </li>
	                            </ul>
	                        </li>
	                        <li>
	                            <Link to="tables.html"><i className="fa fa-table fa-fw"></i> Tables</Link>
	                        </li>
	                        <li>
	                            <Link to="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</Link>
	                        </li>
	                        <li>
	                            <Link to="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></Link>
	                            <ul className="nav nav-second-level">
	                                <li>
	                                    <Link to="panels-wells.html">Panels and Wells</Link>
	                                </li>
	                                <li>
	                                    <Link to="buttons.html">Buttons</Link>
	                                </li>
	                                <li>
	                                    <Link to="notifications.html">Notifications</Link>
	                                </li>
	                                <li>
	                                    <Link to="typography.html">Typography</Link>
	                                </li>
	                                <li>
	                                    <Link to="icons.html"> Icons</Link>
	                                </li>
	                                <li>
	                                    <Link to="grid.html">Grid</Link>
	                                </li>
	                            </ul>
	                        </li>
	                        <li>
	                            <Link to="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></Link>
	                            <ul className="nav nav-second-level">
	                                <li>
	                                    <Link to="#">Second Level Item</Link>
	                                </li>
	                                <li>
	                                    <Link to="#">Second Level Item</Link>
	                                </li>
	                                <li>
	                                    <Link to="#">Third Level <span className="fa arrow"></span></Link>
	                                    <ul className="nav nav-third-level">
	                                        <li>
	                                            <Link to="#">Third Level Item</Link>
	                                        </li>
	                                        <li>
	                                            <Link to="#">Third Level Item</Link>
	                                        </li>
	                                        <li>
	                                            <Link to="#">Third Level Item</Link>
	                                        </li>
	                                        <li>
	                                            <Link to="#">Third Level Item</Link>
	                                        </li>
	                                    </ul>
	                                </li>
	                            </ul>
	                        </li>
	                        <li>
	                            <Link to="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></Link>
	                            <ul className="nav nav-second-level">
	                                <li>
	                                    <Link to="blank.html">Blank Page</Link>
	                                </li>
	                                <li>
	                                    <Link to="login.html">Login Page</Link>
	                                </li>
	                            </ul>
	                        </li>
	                    </ul>
	                </div>
	            </div>
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
