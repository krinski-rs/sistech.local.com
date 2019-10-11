import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import withStyles from "@material-ui/core/styles/withStyles";
import { LinearProgress } from '@material-ui/core';

import { TopBar, NavBar } from '../../components';
import navigationConfig from './navigationConfig';
import useStyles from './style';

class Home extends React.Component
{
    /*constructor(props) {
        super(props);
    }*/
    
    render(){
        const route = this.props.route;
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <TopBar
                    className={classes.topBar}
                />
                <div className={classes.container}>
                    <NavBar
                        className={classes.navBar}
                        // onMobileClose={handleNavBarMobileClose}
                        // openMobile={openNavBarMobile}
                        navigationConfig={navigationConfig}
                    />
                    <main className={classes.content}>
                        <Suspense fallback={<LinearProgress />}>
                            {renderRoutes(route.routes)}
                        </Suspense>
                    </main>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    route: PropTypes.object
};

export default withStyles(useStyles)(Home);