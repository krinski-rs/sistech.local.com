import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import { Page, SnackbarContentWrapper } from '../../../components';
import * as serviceActions from '../../../actions/serviceActions';

import Header from './components/Header';
import useStyles from './style';

class ServiceCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                nickname: '',
                isActive: true
            },
            openSnackbar: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UNSAFE_componentWillUnmount(){
        this.setState({
            values: {
                name: '',
                nickname: '',
                isActive: true
            },
            openSnackbar: true
        });
        this.props.actions.resetService();
    }

    UNSAFE_componentWillUpdate(){
        if(!this.props.send && this.props.service){
            this.setState({
                values: {
                    name: '',
                    nickname: '',
                    isActive: true
                },
                openSnackbar: true
            });
            this.props.actions.resetService();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createService(this.state.values);
        this.setState({
            openSnackbar: true
        });
    }

    handleChange = (event) => {
        event.persist();
        console.log(event.target.type);
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            }
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
        const openSnack = !this.props.send && this.props.service ? true : this.props.error && this.props.error.message ? true : false;

        return (
            <Page
                className={classes.root}
                title="Service Create"
            >
                <Header />
                <Divider className={classes.divider} />
                <div className={classes.content}>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        <form onSubmit={this.handleSubmit}>
                            <CardHeader title="Novo Serviço" />
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
                                            helperText="Informe o nome do serviço"
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
                                            value={this.state.values.nickname}
                                            fullWidth
                                            helperText="Informe o apelido serviço"
                                            label="Apelido"
                                            name="nickname"
                                            onChange={this.handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <Typography variant="h6">Serviço ativo?</Typography>
                                        <Typography variant="body2">
                                            Se você alternar isso, o serviço será criado inativo.
                                    </Typography>
                                        <Switch
                                            checked={this.state.values.isActive}
                                            color="secondary"
                                            edge="start"
                                            name="isActive"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
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
                                    variant={ !this.props.send && this.props.service ? "success" : "error" }
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
        service: state.service.service,
        error: state.service.error || {},
        send: state.service.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(serviceActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ServiceCreate));
