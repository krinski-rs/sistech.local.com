import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
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
    Snackbar
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { Page, SnackbarContentWrapper } from '../../../components';
import * as userActions from '../../../actions/userActions';

import Header from './components/Header';
import useStyles from './style';

class UserCreate extends React.Component {
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
            openSnackbar: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount(){
        this.setState({
            values: {
                name: '',
                expirationDate: null,
                email: '',
                password: '',
                confirm: '',
                isActive: true
            },
            calendarOpen: false,
            openSnackbar: true
        });
        this.props.actions.resetUser();
    }

    UNSAFE_componentWillUpdate(){
        if(!this.props.send && this.props.user){
            this.setState({
                values: {
                    name: '',
                    expirationDate: null,
                    email: '',
                    password: '',
                    confirm: '',
                    isActive: true
                },
                calendarOpen: false,
                openSnackbar: true
            });
            this.props.actions.resetUser();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createUser(this.state.values);
        this.setState({
            openSnackbar: true
        });
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

    handleChangeCalendar = () => { }

    handleCloseCalendar = () => {
        this.setState({
            calendarOpen: false,
        });
    }

    handleSnackbarClose = () => {
        this.setState({
            openSnackbar: false
        });
    }

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        const calendarValue = this.state.values.expirationDate;
        const openSnack = (!this.props.send && this.props.user) ? true : this.props.error && this.props.error.message ? true : false;

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
                        {
                            openSnack ?
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center'
                                }}
                                open={this.state.openSnackbar}
                                autoHideDuration={6000}
                                onClose={this.handleSnackbarClose}
                            >
                                <SnackbarContentWrapper
                                    variant={ !this.props.send && this.props.user ? "success" : "error" }
                                    className={classes.leftIcon}
                                    message={ this.props.error && this.props.error.message ? this.props.error.message : "User saved successfully."}
                                    onClose={this.handleSnackbarClose}
                                />
                            </Snackbar>
                            : null
                        }
                    </Card>
                </div>
            </Page>
        );
    }
}



function mapStateToProps(state, ownProps) {
    return {
        user: state.users.user,
        error: state.users.error || {},
        send: state.users.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(UserCreate));
