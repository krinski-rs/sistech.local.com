import React, { Fragment, Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { Drawer, Divider, Paper, Avatar, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import { Navigation } from '../../components';
import useStyles from './style';

class NavBar extends Component
{
    render() {
        const { openMobile, onMobileClose, classes, className, rest } = this.props;

        const navbarContent = (
            <div className={classes.content}>
                <div className={classes.profile}>
                    <Avatar
                        alt="Person"
                        className={classes.avatar}
                        component={RouterLink}
                        src={this.props.session.user.avatar}
                        to={"/user/" + this.props.session.user.id + "/timeline"}
                    />
                    <Typography
                        className={classes.name}
                        variant="h4"
                    >
                        {this.props.session.user.name}
                    </Typography>
                    <Typography variant="body2">{this.props.session.user.bio}</Typography>
                </div>
                <Divider className={classes.divider} />
                <nav className={classes.navigation}>
                    {this.props.navigationConfig.map(list => (
                        <Navigation
                            component="div"
                            key={list.title}
                            pages={list.pages}
                            title={list.title}
                        />
                    ))}
                </nav>
            </div>
        );

        return (
            <Fragment>
                <Hidden lgUp>
                    <Drawer
                        anchor="left"
                        onClose={onMobileClose}
                        open={openMobile}
                        variant="temporary"
                    >
                        <div
                            {...rest}
                            className={clsx(classes.root, className)}
                        >
                            {navbarContent}
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden mdDown>
                    <Paper
                        {...rest}
                        className={clsx(classes.root, className)}
                        elevation={1}
                        square
                    >
                        {navbarContent}
                    </Paper>
                </Hidden>
            </Fragment>
        );
    }
}


NavBar.propTypes = {
    className: PropTypes.string,
    onMobileClose: PropTypes.func.isRequired,
    openMobile: PropTypes.bool.isRequired,
    navigationConfig: PropTypes.array.isRequired,
    session: PropTypes.object.isRequired
};
export default withStyles(useStyles)(NavBar);
