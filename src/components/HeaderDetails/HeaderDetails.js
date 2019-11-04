import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from '@material-ui/core';

import useStyles from './style';
class HeaderDetails extends Component
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
                   { this.props.title }
                </Typography>
                <Typography
                    component="h1"
                    variant="h3"
                >
                   { this.props.text }
                </Typography>
            </div>
        );
    }
}

HeaderDetails.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
export default withStyles(useStyles)(HeaderDetails);
