import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from '../../../components';
import { Header, Results, SearchBar } from './components';
import useStyles from './style';
import * as serviceActions from '../../../actions/serviceActions';
class ServiceList extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            values: {
                search: ''
            }
        }
    }

    componentDidMount() {
        this.props.actions.searchService();
    }

    render() {
        return (
            <Page
                className={this.props.classes.root}
                title="Service Management List"
            >
                <Header />
                <SearchBar onSearch={this.props.actions.searchUser} onFilter={this.props.actions.searchUser}/>
                <Results
                    className={this.props.classes.results}
                    services={ this.props.services }
                />
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        services: state.service.services || [],
        error: state.service.error || {},
        send: state.service.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(serviceActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ServiceList));
