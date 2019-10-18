import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
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

import { Label, GenericMoreButton, TableEditBar } from '../../../../../components';
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
            ? this.props.orders.map(order => order.id)
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
        const { className, orders, classes, ...rest } = this.props;

        // const [selectedOrders, setSelectedOrders] = useState([]);
        // const [page, setPage] = useState(0);
        // const [rowsPerPage, setRowsPerPage] = useState(10);

        const paymentStatusColors = {
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
                    {orders.length} Records found. Page {this.state.page + 1} of{' '}
                    {Math.ceil(orders.length / this.state.rowsPerPage)}
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
                                                    checked={this.state.selectedOrders.length === orders.length}
                                                    color="primary"
                                                    indeterminate={
                                                        this.state.selectedOrders.length > 0 &&
                                                        this.state.selectedOrders.length < orders.length
                                                    }
                                                    onChange={this.handleSelectAll}
                                                />
                                            </TableCell>
                                            <TableCell>Ref</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell>Method</TableCell>
                                            <TableCell>Total</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.slice(0, this.state.rowsPerPage).map(order => (
                                            <TableRow
                                                key={order.id}
                                                selected={this.state.selectedOrders.indexOf(order.id) !== -1}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={this.state.selectedOrders.indexOf(order.id) !== -1}
                                                        color="primary"
                                                        onChange={event => this.handleSelectOne(event, order.id)}
                                                        value={this.state.selectedOrders.indexOf(order.id) !== -1}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {order.payment.ref}
                                                    <Typography variant="body2">
                                                        {moment(order.created_at).format(
                                                            'DD MMM YYYY | hh:mm'
                                                        )}
                                                    </Typography>
                                                </TableCell>

                                                <TableCell>{order.customer.name}</TableCell>
                                                <TableCell>{order.payment.method}</TableCell>
                                                <TableCell>
                                                    {order.payment.currency}
                                                    {order.payment.total}
                                                </TableCell>
                                                <TableCell>
                                                    <Label
                                                        color={paymentStatusColors[order.payment.status]}
                                                        variant="outlined"
                                                    >
                                                        {order.payment.status}
                                                    </Label>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                        color="primary"
                                                        component={RouterLink}
                                                        size="small"
                                                        to={'/management/orders/1'}
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
                            count={orders.length}
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
    orders: PropTypes.array.isRequired
};

Results.defaultProps = {
    orders: []
};

export default withStyles(useStyles)(Results);
