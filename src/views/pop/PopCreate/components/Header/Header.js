import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from '@material-ui/core';

import useStyles from './style';
class Header extends Component
{
    render() {
        const { className, classes, ...rest } = this.props;
        return (
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <Typography
                    component="h2"
                    gutterBottom
                    variant="overline"
                >
                    Pop
                </Typography>
                <Typography
                    component="h1"
                    variant="h3"
                >
                    Formulário para criar um pop
                </Typography>
            </div>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string
};
export default withStyles(useStyles)(Header);
