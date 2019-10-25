import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from '../../../components';
import { Header, Results, SearchBar } from './components';
import useStyles from './style';
import * as popActions from '../../../actions/popActions';

class PopList extends Component
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
        this.props.actions.searchPop();
    }

    render() {
        return (
            <Page
                className={this.props.classes.root}
                title="Pop Management List"
            >
                <Header href={"/pop/create"} />
                <SearchBar onSearch={this.props.actions.searchPop} onFilter={this.props.actions.searchPop}/>
                <Results
                    className={this.props.classes.results}
                    pops={ this.props.pops }
                />
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        pops: state.pop.pops || {},
        error: state.pop.error || {},
        send: state.pop.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(popActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(PopList));
