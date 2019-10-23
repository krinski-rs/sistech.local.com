import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from '../../../components';
import { Header, Results, SearchBar } from './components';
import useStyles from './style';
import * as userActions from '../../../actions/userActions';
class UserList extends Component
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
        this.props.actions.searchUser();
    }

    render() {
        return (
            <Page
                className={this.props.classes.root}
                title="User Management List"
            >
                <Header />
                <SearchBar onSearch={this.props.actions.searchUser} onFilter={this.props.actions.searchUser}/>
                <Results
                    className={this.props.classes.results}
                    users={ this.props.users }
                />
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users.users || [],
        error: state.users.error || {},
        send: state.users.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(UserList));
