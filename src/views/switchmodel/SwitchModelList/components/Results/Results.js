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
            selectedSwitchModel: [],
            page: 0,
            rowsPerPage: 10
        };
    }

    handleSelectOne = (event, id) => {
        const selectedIndex = this.state.selectedSwitchModel.indexOf(id);
        let newSelectedOrders = [];

        if (selectedIndex === -1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedSwitchModel, id);
        } else if (selectedIndex === 0) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedSwitchModel.slice(1));
        } else if (selectedIndex === this.state.selectedSwitchModel.length - 1) {
            newSelectedOrders = newSelectedOrders.concat(this.state.selectedSwitchModel.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedOrders = newSelectedOrders.concat(
                this.state.selectedSwitchModel.slice(0, selectedIndex),
                this.state.selectedSwitchModel.slice(selectedIndex + 1)
            );
        }
        this.setState({
            selectedSwitchModel: newSelectedOrders
        });
    }

    handleSelectAll = event => {
        const selectedSwitchModel = event.target.checked
            ? this.props.switchmodel.data.map(switchmodel => switchmodel.id)
            : [];

        this.setState({
            selectedSwitchModel: selectedSwitchModel
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
        const data = [];
        // const data = this.props.switchmodel.data ? this.props.switchmodel.data : [];
        console.log(this.props);
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
                                                    checked={this.state.selectedSwitchModel.length === data.length}
                                                    color="primary"
                                                    indeterminate={
                                                        this.state.selectedSwitchModel.length > 0 &&
                                                        this.state.selectedSwitchModel.length < data.length
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
                                            data.map(switchmodel => (
                                                <TableRow
                                                    key={switchmodel.id}
                                                    selected={this.state.selectedSwitchModel.indexOf(switchmodel.id) !== -1}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={this.state.selectedSwitchModel.indexOf(switchmodel.id) !== -1}
                                                            color="primary"
                                                            onChange={event => this.handleSelectOne(event, switchmodel.id)}
                                                            value={this.state.selectedSwitchModel.indexOf(switchmodel.id) !== -1}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {switchmodel.id}
                                                    </TableCell>

                                                    <TableCell>{switchmodel.name}</TableCell>
                                                    <TableCell>{switchmodel.nickname}</TableCell>
                                                    <TableCell>
                                                        {switchmodel.isActive ? <Label
                                                            color={activeStatusColors['completed']}
                                                            variant="outlined"
                                                        >Activated</Label> : <Label
                                                            color={activeStatusColors['canceled']}
                                                            variant="outlined"
                                                        >deactivated</Label>}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            new Date(Date.parse(switchmodel.recordingDate)).toLocaleString()
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
                            count={0}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25]}
                        />
                    </CardActions>
                </Card>
                <TableEditBar selected={this.state.selectedSwitchModel} />
            </div>
        );
    }
}

Results.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired,
    switchmodel: PropTypes.object.isRequired
};

Results.defaultProps = {
    users: []
};

export default withStyles(useStyles)(Results);
