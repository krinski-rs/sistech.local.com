import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class LinkTask extends React.Component {
	render() {
		return (
			<li>
				<Link to={ this.props.linkTo }>
                    <div>
                        <p>
                            <strong>{ this.props.title }</strong>
                            <span className="pull-right text-muted">{ this.props.subject }</span>
                        </p>
                        <div className="progress progress-striped active">
                            <div className={ "progress-bar " + this.props.className } role="progressbar" aria-valuenow={ this.props.value } aria-valuemin={ this.props.min } aria-valuemax={ this.props.max } style={{ width: this.props.value + "%" }}>
                                <span className="sr-only">{ this.props.message }</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
		);
	}
}

LinkTask.propTypes = {
	linkTo: PropTypes.string,
	title: PropTypes.string,
	subject: PropTypes.string,
	message: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number
};

export default LinkTask;

