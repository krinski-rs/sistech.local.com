import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './style';
class HeaderList extends Component
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
                            { this.props.title }
                        </Typography>
                        <Typography
                            component="h1"
                            variant="h3"
                        >
                            { this.props.text }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="contained"
                            to={this.props.href}
                            component={Link}
                        >
                            { this.props.addtext }
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HeaderList.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    addtext: PropTypes.string.isRequired
};

export default withStyles(useStyles)(HeaderList);
