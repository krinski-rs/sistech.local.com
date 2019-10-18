import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import useStyles from './style';
class TopBar extends React.Component {
    render() {
        const { className, ...rest } = this.props;
        return (
            <AppBar
                {...rest}
                className={clsx(this.props.classes.root, className)}
                color="primary"
            >
                <Toolbar>
                    <RouterLink to="/">
                        <img
                            alt="Logo"
                            src="/images/logos/logo--white.svg"
                        />
                    </RouterLink>
                </Toolbar>
            </AppBar>
        );
    }
}

TopBar.propTypes = {
    className: PropTypes.string
};

export default withStyles(useStyles)(TopBar);
