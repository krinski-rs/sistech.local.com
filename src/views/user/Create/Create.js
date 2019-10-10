import React, { useState } from 'react';
import clsx from 'clsx';
import { useDispatch, connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Divider,
    Switch,
    TextField,
    Typography,
    colors
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { Page } from '../../../components';
import { userCreate } from '../../../actions';

import SuccessSnackbar from './SuccessSnackbar';
import Header from './Header';
const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    tabs: {
        marginTop: theme.spacing(3)
    },
    divider: {
        backgroundColor: colors.grey[300]
    },
    content: {
        marginTop: theme.spacing(3)
    },
    saveButton: {
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    }
}));

const Create = props => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { className, rest } = props;
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const initialValues = {
        name: '',
        expirationDate: null,
        email: '',
        password: '',
        confirm: '',
        isActive: true
      };
    const [values, setValues] = useState({ ...initialValues });

    const [calendarTrigger, setCalendarTrigger] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        var valid = values.password && values.password === values.confirm;
        if(!valid){
            return false;
        }
        console.log(props);
        dispatch(userCreate(values));
        console.log(props);

        // setOpenSnackbar(true);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleCalendarOpen = trigger => {
        setCalendarTrigger(trigger);
    };
    
    const handleCalendarChange = () => {};
    
    const handleChange = event => {
        event.persist();
        setValues({
            ...values,
            [event.target.name]:
            event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
        });
    };

      const handleCalendarAccept = date => {
        setValues(values => ({
          ...values,
          [calendarTrigger]: date
        }));
      };
    
      const handleCalendarClose = () => {
        setCalendarTrigger(false);
      };
      const calendarOpen = Boolean(calendarTrigger);
      const calendarMinDate =
        calendarTrigger === 'expirationDate'
          ? moment()
          : (values.expirationDate ? moment(values.expirationDate).add(1, 'day') : null);
      const calendarValue = values[calendarTrigger];
      return (
        <Page
            className={classes.root}
            title="User Create"
        >
            <Header />
            <Divider className={classes.divider} />
            <div className={classes.content}>
                <Card
                    {...rest}
                    className={clsx(classes.root, className)}
                >
                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Novo Usuário" />
                        <Divider />
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        value={values.name}
                                        fullWidth
                                        helperText="Informe o nome do usuário"
                                        label="Nome"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        value={values.email}
                                        helperText="Email é um campo obrigatório e único"
                                        label="Email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Senha"
                                        value={values.password}
                                        name="password"
                                        type="password"
                                        required
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Confirme a senha"
                                        value={values.confirm}
                                        name="confirm"
                                        type="password"
                                        required
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <Typography variant="h6">Usuário ativo?</Typography>
                                    <Typography variant="body2">
                                        Se você alternar isso, o usuário será criado inativo.
                                    </Typography>
                                    <Switch
                                        checked={values.isActive}
                                        color="secondary"
                                        edge="start"
                                        name="isActive"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        className={classes.dateField}
                                        label="Expira"
                                        name="expirationDate"
                                        helperText="Data que coloca o usuário como inativo"
                                        onClick={() => handleCalendarOpen('expirationDate')}
                                        value={ values.expirationDate ? moment(values.expirationDate).format('DD/MM/YYYY') : '' }
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <DatePicker
                            minDate={calendarMinDate}
                            onAccept={handleCalendarAccept}
                            onChange={handleCalendarChange}
                            onClose={handleCalendarClose}
                            open={calendarOpen}
                            style={{ display: 'none' }} // Temporal fix to hide the input element
                            value={calendarValue}
                            variant="dialog"
                        />
                        <Divider />
                        <CardActions>
                                <Button
                                    className={classes.saveButton}
                                    type="submit"
                                    variant="contained"
                                >
                                    Salvar
                            </Button>
                        </CardActions>
                    </form>
                    <SuccessSnackbar
                        onClose={handleSnackbarClose}
                        open={openSnackbar}
                    />
                </Card>
            </div>
        </Page>
    );
};

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.user
    }
}

Create.propTypes = {
    user: PropTypes.object
};

Create.defaultProps = {
    user: {}
};

export default connect(mapStateToProps)(Create);