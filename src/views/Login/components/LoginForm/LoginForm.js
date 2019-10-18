/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, TextField } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";

import  * as loginActions from '../../../../actions/loginActions';
import useStyles from './style';
const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' }
    }
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: {
                isValid: false,
                values: {},
                touched: {},
                errors: {}
            }
        };
    }

    handleChange = event => {
        event.persist();

        this.setState({
            formState: {
                ...this.state.formState,
                values: {
                    ...this.state.formState.values,
                    [event.target.name]:
                        event.target.type === 'checkbox'
                            ? event.target.checked
                            : event.target.value
                },
                touched: {
                    ...this.state.formState.touched,
                    [event.target.name]: true
                }
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const errors = validate(this.state.formState.values, schema);
        this.setState({
            formState: {
                ...this.state.formState,
                isValid: errors ? false : true,
                errors: errors || {}
            }
        });
        if (!errors) {
            this.props.actions.login(this.state.formState.values.email, this.state.formState.values.password);
        }
    }

    render() {
        const { className, classes } = this.props;

        const hasError = field =>
            this.state.formState.touched[field] && this.state.formState.errors[field] ? true : false;
        return (
            <form
                className={clsx(classes.root, className)}
                onSubmit={this.handleSubmit}
            >
                <div className={classes.fields}>
                    <TextField
                        error={hasError('email')}
                        fullWidth
                        helperText={hasError('email') ? this.state.formState.errors.email[0] : null}
                        label="Email address"
                        name="email"
                        required
                        onChange={this.handleChange}
                        value={this.state.formState.values.email || ''}
                        variant="outlined"
                    />
                    <TextField
                        error={hasError('password')}
                        fullWidth
                        helperText={
                            hasError('password') ? this.state.formState.errors.password[0] : null
                        }
                        required
                        label="Password"
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        value={this.state.formState.values.password || ''}
                        variant="outlined"
                    />
                </div>
                { /*disabled={!this.state.formState.isValid}*/}
                <Button
                    className={classes.submitButton}
                    color="secondary"
                    disabled={false}
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Sign in
                </Button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    className: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.login.user || {},
        error: state.login.error || {},
        send: state.login.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(LoginForm));
