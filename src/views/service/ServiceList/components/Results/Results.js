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
            selectedOrders: [],
            page: 0,
            rowsPerPage: 10
        };
    }

    handleSelectOne = (event, id) => {
        const selectedIndex = this.state.selectedOrders.indexOf(id);
        let newSelectedOrders = [];

        if (selectedIndex === -1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedOrders, id);
        } else if (selectedIndex === 0) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedOrders.slice(1));
        } else if (selectedIndex === this.state.selectedOrders.length - 1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedOrders.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedOrders = newSelectedOrders.concat(
                this.state.selectedOrders.slice(0, selectedIndex),
                this.state.selectedOrders.slice(selectedIndex + 1)
            );
        }
        this.setState({
            selectedOrders: newSelectedOrders
        });
    }

    handleSelectAll = event => {
        const selectedOrders = event.target.checked
            ? this.props.users.map(user => user.id)
            : [];

        this.setState({
            selectedOrders: selectedOrders
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
                    {this.props.users.length} Records found. Page {this.state.page + 1} of{' '}
                    {Math.ceil(this.props.users.length / this.state.rowsPerPage)}
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
                                                    checked={this.state.selectedOrders.length === users.length}
                                                    color="primary"
                                                    indeterminate={
                                                        this.state.selectedOrders.length > 0 &&
                                                        this.state.selectedOrders.length < users.length
                                                    }
                                                    onChange={this.handleSelectAll}
                                                />
                                            </TableCell>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Usename</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Date Record</TableCell>
                                            <TableCell>Expiration Date</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.props.users.map(user => (
                                            <TableRow
                                                key={user.id}
                                                selected={this.state.selectedOrders.indexOf(user.id) !== -1}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={this.state.selectedOrders.indexOf(user.id) !== -1}
                                                        color="primary"
                                                        onChange={event => this.handleSelectOne(event, user.id)}
                                                        value={this.state.selectedOrders.indexOf(user.id) !== -1}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {user.id}
                                                </TableCell>

                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.username}</TableCell>
                                                <TableCell>
                                                    {user.isActive ? <Label
                                                        color={activeStatusColors['completed']}
                                                        variant="outlined"
                                                    >Activated</Label> : <Label
                                                        color={activeStatusColors['canceled']}
                                                        variant="outlined"
                                                    >deactivated</Label>}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        new Date(Date.parse(user.recordingDate)).toLocaleString()
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        user.expirationDate ? new Date(Date.parse(user.expirationDate)).toLocaleString() : null
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
                                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </PerfectScrollbar>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <TablePagination
                            component="div"
                            count={users.length}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25]}
                        />
                    </CardActions>
                </Card>
                <TableEditBar selected={this.state.selectedOrders} />
            </div>
        );
    }
}

Results.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired
};

Results.defaultProps = {
    users: []
};

export default withStyles(useStyles)(Results);
