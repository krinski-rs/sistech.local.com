import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Tbody from "./Tbody";
import Modal from "../modal/Modal";

class Table extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			fade: false
		}
		this.updateState = this.updateState.bind(this);
	}	
	
	updateState(){
		this.setState(prevState => ({
			fade: !prevState.fade
		}));
	}
	
	render() {
		return (
			<div className={ this.props.classColumns }>
                <div className="panel panel-default">
                    <div className="panel-heading">
                    	{ this.props.title }
                    </div>
                    <div className="panel-body">
                        <table width="100%" className="table table-striped table-bordered table-hover" id={ this.props.id }>
	            			<Header list={ this.props.list.header } actions={ this.props.list.actions } />
	            			<Tbody  list={ this.props.list.body } actions={ this.props.list.actions } updateParent={this.updateState} />
                        </table>
                    </div>
                </div>
				<Modal fade={ this.state.fade } updateParent={this.updateState} />
            </div>
		);
	}
}

Table.propTypes = {
	title: PropTypes.string.isRequired,
	classColumns: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	list: PropTypes.object.isRequired
};

Table.defaultProps = {
	title: "Pontos de Venda",
	classColumns: "col-lg-12",
	id: "dataTables-example",
	list: {}
};

export default Table;
