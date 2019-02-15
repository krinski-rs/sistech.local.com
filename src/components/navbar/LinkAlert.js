import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class LinkAlert extends React.Component {
	render() {
		return (
            <li>
                <Link to={ this.props.linkTo }>
                    <div>
                        <i className={ "fa "+this.props.className+" fa-fw" }></i>&nbsp;{ this.props.title }
                        <span className="pull-right text-muted small">{ this.props.subject }</span>
                    </div>
                </Link>
            </li>
		);
	}
}

LinkAlert.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	subject: PropTypes.string,
	className: PropTypes.string
};

export default LinkAlert;

