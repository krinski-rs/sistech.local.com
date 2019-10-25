import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from '../../../components';
import { Header, Results, SearchBar } from './components';
import useStyles from './style';
import * as switchmodelActions from '../../../actions/switchmodelActions';

class SwitchModelList extends Component
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
        this.props.actions.searchSwitchModel();
    }

    render() {
        return (
            <Page
                className={this.props.classes.root}
                title="SwitchModel Management List"
            >
                <Header href={"/switchmodel/create"} />
                <SearchBar onSearch={this.props.actions.searchSwitchModel} onFilter={this.props.actions.searchSwitchModel}/>
                <Results
                    className={this.props.classes.results}
                    switchmodels={ this.props.switchmodels }
                />
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        switchmodels: state.switchmodel.switchmodels || {},
        error: state.switchmodel.error || {},
        send: state.switchmodel.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchmodelActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchModelList));
