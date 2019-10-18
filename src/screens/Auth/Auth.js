import React, { Fragment, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { LinearProgress } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";

import { TopBar } from './components';
import useStyles from './style';
import  * as loginActions from '../../actions/loginActions';

class Auth extends React.Component {
    
    componentDidUpdate() {
        if(this.props.user.id){
            this.props.history.push('/home');
        }
    }
    
    render() {
        const { route, classes } = this.props;
        
        return (
            <Fragment>
                <TopBar />
                <main className={classes.content}>
                    <Suspense fallback={<LinearProgress />}>
                        {renderRoutes(route.routes, this.props)}
                    </Suspense>
                </main>
            </Fragment>
        );
    }
}

Auth.propTypes = {
    route: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.login.user || {},
        error: state.login.error || {},
        send: state.login.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Auth));
