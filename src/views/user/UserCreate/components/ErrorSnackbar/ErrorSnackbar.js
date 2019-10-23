import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Snackbar, SnackbarContent, colors } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';

const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: colors.red[600]
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginRight: theme.spacing(2)
    }
}));

const ErrorSnackbar = props => {
    const { open, onClose } = props;

    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            autoHideDuration={6000}
            onClose={onClose}
            open={open}
        >
            <SnackbarContent
                className={classes.content}
                message={
                    <span className={classes.message}>
                        <CheckCircleIcon className={classes.icon} />
                        {props.text}
                    </span>
                }
                variant="h6"
            />
        </Snackbar>
    );
};

ErrorSnackbar.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

ErrorSnackbar.defaultProps = {
    open: true,
    onClose: () => { }
};

export default ErrorSnackbar;