import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class NavBarTopLinks extends Component {
	render() {
		return (
			<ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                        <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-messages">
                        <li>
                            <Link to="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#" className="text-center">
                                <strong>Read All Messages</strong>
                                <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                	<Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-tasks">
                        <li>
                            <Link to="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span className="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                            <span className="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span className="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                            <span className="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                            <span className="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span className="pull-right text-muted">80% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                            <span className="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#" className="text-center">
                                <strong>See All Tasks</strong>
                                <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                	<Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-alerts">
                        <li>
                            <Link to="#">
                                <div>
                                    <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link to="#">
                                <div>
                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                        	<Link to="#" className="text-center">
                                <strong>See All Alerts</strong>
                                <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                	<Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-user">
                        <li><Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                        </li>
                        <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link>
                        </li>
                        <li className="divider"></li>
                        <li><Link to="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                        </li>
                    </ul>
                </li>
            </ul>
		);
	}
}

NavBarTopLinks.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

NavBarTopLinks.defaultProps = {
	title: "RK Admin",
	href: "#"
};

export default NavBarTopLinks;
