import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Collapse,
    Divider,
    Drawer,
    TextField,
    Typography
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

import useStyles from './style';

class Filter extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            expandUser: true,
            values: {
                name: '',
                isActive: true,
                username: ''
            }
        }
    }

    handleClear = () => {
        this.setState({
            values: {
                name: '',
                isActive: true,
                username: ''
            }
        });
    }

    handleFieldChange = (event, field, value) => {
        event.persist && event.persist();
        this.setState({
            values: {
                ...this.state.values,
                [field]: value
            }
        });
    }

    handleToggleUser = () => {
        this.setState({
            expandUser: !this.state.expandUser
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onFilter && this.props.onFilter(this.state.values);
    }

    render() {
        const { open, onClose, onFilter, className, classes, ...rest } = this.props;
        return (
            <Drawer
                anchor="right"
                classes={{ paper: classes.drawer }}
                onClose={onClose}
                open={open}
                variant="temporary"
            >
                <form
                    {...rest}
                    className={clsx(classes.root, className)}
                    onSubmit={this.handleSubmit}
                >
                    <div className={classes.header}>
                        <Button
                            onClick={onClose}
                            size="small"
                        >
                            <CloseIcon className={classes.buttonIcon} />
                            Close
                        </Button>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.contentSection}>
                            <div
                                className={classes.contentSectionHeader}
                                onClick={this.handleToggleUser}
                            >
                                <Typography variant="h5">User</Typography>
                                {this.state.expandUser ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </div>
                            <Divider />
                            <Collapse in={this.state.expandUser}>
                                <div className={classes.contentSectionContent}>
                                    <div className={classes.contentSectionContent}>
                                        <div className={classes.formGroup}>
                                            <TextField
                                                className={classes.field}
                                                fullWidth
                                                label="Name"
                                                margin="dense"
                                                name="name"
                                                onChange={event =>
                                                    this.handleFieldChange(
                                                        event,
                                                        'name',
                                                        event.target.value
                                                    )
                                                }
                                                value={this.state.values.name}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className={classes.formGroup}>
                                            <TextField
                                                className={classes.field}
                                                fullWidth
                                                label="Usename"
                                                margin="dense"
                                                name="username"
                                                onChange={event =>
                                                    this.handleFieldChange(
                                                        event,
                                                        'username',
                                                        event.target.value
                                                    )
                                                }
                                                value={this.state.values.username}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className={classes.formGroup}>
                                            <ToggleButtonGroup
                                                exclusive
                                                onChange={(event, value) => this.handleFieldChange(event, 'isActive', value)}
                                                size="small"
                                                value={this.state.values.isActive}
                                                variant="outlined"
                                            >
                                                <ToggleButton
                                                    color="primary"
                                                    value={true}
                                                >
                                                    ACTIVATED
                                                </ToggleButton>
                                                <ToggleButton value={false}>DEACTIVATED</ToggleButton>
                                            </ToggleButtonGroup>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <Button
                            fullWidth
                            onClick={this.handleClear}
                            variant="contained"
                        >
                            <DeleteIcon className={classes.buttonIcon} />
                            Clear
                        </Button>
                        <Button
                            color="primary"
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Apply filters
                        </Button>
                    </div>
                </form>
            </Drawer>
        );
    }
}

Filter.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    onFilter: PropTypes.func,
    open: PropTypes.bool.isRequired
};
export default withStyles(useStyles)(Filter);
