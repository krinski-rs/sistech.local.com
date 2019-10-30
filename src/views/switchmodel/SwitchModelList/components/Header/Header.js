import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
                <Grid
                    alignItems="flex-end"
                    container
                    justify="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            component="h2"
                            gutterBottom
                            variant="overline"
                        >
                            Management
                    </Typography>
                        <Typography
                            component="h1"
                            variant="h3"
                        >
                            Switch Model
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="contained"
                            to={this.props.href}
                            component={Link}
                        >
                            Add Switch Model
                    </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string
};

export default withStyles(useStyles)(Header);
