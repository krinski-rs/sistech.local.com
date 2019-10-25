import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Search, Filter } from './components';
import useStyles from './style';
class SearchBar extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false
        }
    }

    handleFilterOpen = () => {
        this.setState({
            openFilter: true
        });
    }

    handleFilterClose = () => {
        this.setState({
            openFilter: false
        });
    }

    render() {
        const { onFilter, onSearch, className, classes, ...rest } = this.props;

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            <Grid item>
                <Search
                    className={classes.search}
                    onSearch={onSearch}
                />
            </Grid>
            <Grid item>
                <Button
                    className={classes.filterButton}
                    color="primary"
                    onClick={this.handleFilterOpen}
                    size="small"
                    variant="outlined"
                >
                    <FilterListIcon className={classes.filterIcon} /> Show filters
                </Button>
            </Grid>
            <Filter
                onClose={this.handleFilterClose}
                onFilter={onFilter}
                open={this.state.openFilter}
            />
        </Grid>
        );
    }
}

SearchBar.propTypes = {
    className: PropTypes.string,
    onFilter: PropTypes.func,
    onSearch: PropTypes.func
};

export default withStyles(useStyles)(SearchBar);
