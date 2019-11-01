import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from '../../../components';
import { Header, Results, SearchBar } from './components';
import useStyles from './style';
import * as switchsActions from '../../../actions/switchsActions';

class SwitchsList extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            values: {
                search: ''
            }
        };
    }

    componentDidMount() {
        this.props.actions.searchSwitchs();
    }

    render() {
        return (
            <Page
                className={this.props.classes.root}
                title="Switch Management List"
            >
                <Header href={"/switchs/create"} />
                <SearchBar onSearch={this.props.actions.searchSwitchModel} onFilter={this.props.actions.searchSwitchModel}/>
                <Results
                    className={this.props.classes.results}
                    switchs={ this.props.switchss }
                />
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        switchss: state.switchs.switchss || {},
        error: state.switchs.error || {},
        send: state.switchs.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchsActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchsList));
