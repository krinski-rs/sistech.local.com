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
            selectedService: [],
            page: 0,
            rowsPerPage: 10
        };
    }

    handleSelectOne = (event, id) => {
        const selectedIndex = this.state.selectedService.indexOf(id);
        let newSelectedOrders = [];

        if (selectedIndex === -1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedService, id);
        } else if (selectedIndex === 0) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedService.slice(1));
        } else if (selectedIndex === this.state.selectedService.length - 1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedService.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedOrders = newSelectedOrders.concat(
                this.state.selectedService.slice(0, selectedIndex),
                this.state.selectedService.slice(selectedIndex + 1)
            );
        }
        this.setState({
            selectedService: newSelectedOrders
        });
    }

    handleSelectAll = event => {
        const selectedService = event.target.checked
            ? this.props.services.data.map(service => service.id)
            : [];

        this.setState({
            selectedService: selectedService
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
        const data = this.props.services.data ? this.props.services.data : [];
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
                    {this.props.services.total} Records found. Page {this.state.page + 1} of{' '}
                    {Math.ceil(this.props.services.total / this.state.rowsPerPage)}
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
                                                    checked={this.state.selectedService.length === data.length}
                                                    color="primary"
                                                    indeterminate={
                                                        this.state.selectedService.length > 0 &&
                                                        this.state.selectedService.length < data.length
                                                    }
                                                    onChange={this.handleSelectAll}
                                                />
                                            </TableCell>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Nickname</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Date Record</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.map(service => (
                                                <TableRow
                                                    key={service.id}
                                                    selected={this.state.selectedService.indexOf(service.id) !== -1}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={this.state.selectedService.indexOf(service.id) !== -1}
                                                            color="primary"
                                                            onChange={event => this.handleSelectOne(event, service.id)}
                                                            value={this.state.selectedService.indexOf(service.id) !== -1}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {service.id}
                                                    </TableCell>

                                                    <TableCell>{service.name}</TableCell>
                                                    <TableCell>{service.nickname}</TableCell>
                                                    <TableCell>
                                                        {service.isActive ? <Label
                                                            color={activeStatusColors['completed']}
                                                            variant="outlined"
                                                        >Activated</Label> : <Label
                                                            color={activeStatusColors['canceled']}
                                                            variant="outlined"
                                                        >deactivated</Label>}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            new Date(Date.parse(service.recordingDate)).toLocaleString()
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
                            count={(this.props.services.total ? this.props.services.total : 0)}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25]}
                        />
                    </CardActions>
                </Card>
                <TableEditBar selected={this.state.selectedService} />
            </div>
        );
    }
}

Results.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired,
    services: PropTypes.object.isRequired
};

Results.defaultProps = {
    users: []
};

export default withStyles(useStyles)(Results);
