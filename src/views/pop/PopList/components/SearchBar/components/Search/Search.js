import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
class Search extends Component
{
    render() {
        const { onSearch, className, classes, ...rest } = this.props;
        return (
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <Paper
                    className={classes.search}
                    elevation={1}
                >
                    <SearchIcon className={classes.searchIcon} />
                    <Input
                        className={classes.searchInput}
                        disableUnderline
                        placeholder="Search"
                    />
                </Paper>
                <Button
                    className={classes.searchButton}
                    onClick={onSearch}
                    size="large"
                    variant="contained"
                >
                    Search
                </Button>
            </div>
        );
    }
}

Search.propTypes = {
    className: PropTypes.string,
    onSearch: PropTypes.func
};

export default withStyles(useStyles)(Search);
