import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
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
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { Page } from '../../../components';
import { userCreate } from '../../../actions';

import SuccessSnackbar from './SuccessSnackbar';
import Header from './Header';
import useStyles from './style';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                expirationDate: null,
                email: '',
                password: '',
                confirm: '',
                isActive: true
            },
            calendarOpen: false,
            openSnackbar: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var valid = this.state.values.password && this.state.values.password === this.state.values.confirm;
        if (!valid) {
            return false;
        }
        // console.log(this.props);
        this.props.dispatch(userCreate(this.state.values));
        // setOpenSnackbar(true);
    }

    handleChange = (event) => {
        event.persist();
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            }
        });
    }

    handleOpenCalendar = trigger => {
        this.setState({
            calendarOpen: true,
        });
    }
    handleAcceptCalendar = date => {
        this.setState({
            values: {
                ...this.state.values,
                expirationDate: date
            }
        });
    }

    handleChangeCalendar = () => {

    }

    handleCloseCalendar = () => {
        this.setState({
            calendarOpen: false,
        });
    }

    handleCloseSnackbar = () => {
        this.setState({
            openSnackbar: false
        });
    }

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        const calendarValue = this.state.values.expirationDate;
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
                        <form onSubmit={this.handleSubmit}>
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
                                            value={this.state.values.name}
                                            fullWidth
                                            helperText="Informe o nome do usuário"
                                            label="Nome"
                                            name="name"
                                            onChange={this.handleChange}
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
                                            value={this.state.values.email}
                                            helperText="Email é um campo obrigatório e único"
                                            label="Email"
                                            name="email"
                                            onChange={this.handleChange}
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
                                            value={this.state.values.password}
                                            name="password"
                                            type="password"
                                            required
                                            variant="outlined"
                                            onChange={this.handleChange}
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
                                            value={this.state.values.confirm}
                                            name="confirm"
                                            type="password"
                                            required
                                            variant="outlined"
                                            onChange={this.handleChange}
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
                                            checked={this.state.values.isActive}
                                            color="secondary"
                                            edge="start"
                                            name="isActive"
                                            onChange={this.handleChange}
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
                                            onClick={() => this.handleOpenCalendar('expirationDate')}
                                            value={this.state.values.expirationDate ? moment(this.state.values.expirationDate).format('DD/MM/YYYY') : ''}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <DatePicker
                                onAccept={this.handleAcceptCalendar}
                                open={this.state.calendarOpen}
                                onChange={this.handleChangeCalendar}
                                onClose={this.handleCloseCalendar}
                                style={{ display: 'none' }} // Temporal fix to hide the input element
                                variant="dialog"
                                value={calendarValue}
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
                            onClose={this.handleSnackbarClose}
                            open={this.state.openSnackbar}
                        />
                    </Card>
                </div>
            </Page>
        );
    }
}


/*
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
        dispatch(userCreate(values));

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
            className={classes.ro                    <form onSubmit={handleSubmit}>
                        <CardHeader title="Novo Usuário" />
                        <Divider />
ot}
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
                                        value={values.email}                        <Divider />
                        <CardActions>
                                <Button
                                    className={classes.saveButton}
                                    type="submit"
                                    variant="contained"
                                >
                                    Salvar
                            </Button>
                        </CardActions>

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
                                        label="Expira"                        <Divider />
                        <CardActions>
                                <Button
                                    className={classes.saveButton}
                                    type="submit"
                                    variant="contained"
                                >
                                    Salvar
                            </Button>
                        </CardActions>

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
*/
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

Create.propTypes = {
    user: PropTypes.object,
};

Create.defaultProps = {
    user: {},
};

export default connect(mapStateToProps)(withStyles(useStyles)(Create));
