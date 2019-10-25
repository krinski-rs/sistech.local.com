import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    colors
} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";

import { Label, TableEditBar } from '../../../../../components';
import GenericMoreButton from '../GenericMoreButton';
import useStyles from './style';
class Results extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            selectedPop: [],
            page: 0,
            rowsPerPage: 10
        };
    }

    handleSelectOne = (event, id) => {
        const selectedIndex = this.state.selectedPop.indexOf(id);
        let newSelectedOrders = [];

        if (selectedIndex === -1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedPop, id);
        } else if (selectedIndex === 0) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedPop.slice(1));
        } else if (selectedIndex === this.state.selectedPop.length - 1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedPop.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedOrders = newSelectedOrders.concat(
                this.state.selectedPop.slice(0, selectedIndex),
                this.state.selectedPop.slice(selectedIndex + 1)
            );
        }
        this.setState({
            selectedPop: newSelectedOrders
        });
    }

    handleSelectAll = event => {
        const selectedPop = event.target.checked
            ? this.props.pops.data.map(pop => pop.id)
            : [];

        this.setState({
            selectedPop: selectedPop
        });
    }

    handleChangePage = (event, page) => {
        this.setState({
            page: page
        });
    }

    handleChangeRowsPerPage = event => {
        this.setState({
            rowsPerPage: event.target.value
        });
    }

    render() {
        const { className, users, classes, ...rest } = this.props;
        const activeStatusColors = {
            canceled: colors.grey[600],
            pending: colors.orange[600],
            completed: colors.green[600],
            rejected: colors.red[600]
        };
        const data = this.props.pops.data ? this.props.pops.data : [];
        return (
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    {this.props.pops.total} Records found. Page {this.state.page + 1} of{' '}
                    {Math.ceil(this.props.pops.total / this.state.rowsPerPage)}
                </Typography>
                <Card>
                    <CardHeader
                        action={<GenericMoreButton />}
                        title="Orders"
                    />
                    <Divider />
                    <CardContent className={classes.content}>
                        <PerfectScrollbar>
                            <div className={classes.inner}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={this.state.selectedPop.length === data.length}
                                                    color="primary"
                                                    indeterminate={
                                                        this.state.selectedPop.length > 0 &&
                                                        this.state.selectedPop.length < data.length
                                                    }
                                                    onChange={this.handleSelectAll}
                                                />
                                            </TableCell>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Date Record</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.map(pop => (
                                                <TableRow
                                                    key={pop.id}
                                                    selected={this.state.selectedPop.indexOf(pop.id) !== -1}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={this.state.selectedPop.indexOf(pop.id) !== -1}
                                                            color="primary"
                                                            onChange={event => this.handleSelectOne(event, pop.id)}
                                                            value={this.state.selectedPop.indexOf(pop.id) !== -1}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {pop.id}
                                                    </TableCell>

                                                    <TableCell>{pop.name}</TableCell>
                                                    <TableCell>
                                                        {pop.isActive ? <Label
                                                            color={activeStatusColors['completed']}
                                                            variant="outlined"
                                                        >Activated</Label> : <Label
                                                            color={activeStatusColors['canceled']}
                                                            variant="outlined"
                                                        >deactivated</Label>}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            new Date(Date.parse(pop.recordingDate)).toLocaleString()
                                                        }
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button
                                                            color="primary"
                                                            component={RouterLink}
                                                            size="small"
                                                            to={'/management/users/1'}
                                                            variant="outlined"
                                                        >
                                                            View
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </PerfectScrollbar>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <TablePagination
                            component="div"
                            count={(this.props.pops.total ? this.props.pops.total : 0)}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25]}
                        />
                    </CardActions>
                </Card>
                <TableEditBar selected={this.state.selectedPop} />
            </div>
        );
    }
}

Results.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired,
    pops: PropTypes.object.isRequired
};

Results.defaultProps = {
    users: []
};

export default withStyles(useStyles)(Results);
