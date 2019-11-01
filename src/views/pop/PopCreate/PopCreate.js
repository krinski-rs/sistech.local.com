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
import * as popActions from '../../../actions/popActions';

import Header from './components/Header';
import useStyles from './style';

class PopCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
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
                isActive: true
            },
            openSnackbar: true
        });
        this.props.actions.resetPop();
    }

    UNSAFE_componentWillUpdate(){
        if(!this.props.send && this.props.pop){
            this.setState({
                values: {
                    name: '',
                    isActive: true
                },
                openSnackbar: true
            });
            this.props.actions.resetPop();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createPop(this.state.values);
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

    handleSnackbarClose = () => {
        this.setState({
            openSnackbar: false
        });
    }

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        const openSnack = !this.props.send && this.props.pop ? true : this.props.error && this.props.error.message ? true : false;

        return (
            <Page
                className={classes.root}
                title="Pop Create"
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
                                            helperText="Informe o nome do pop"
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
                                        xs={12}
                                    >
                                        <Typography variant="h6">POP ativo?</Typography>
                                        <Typography variant="body2">
                                            Se você alternar isso, o pop será criado inativo.
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
                                    variant={ !this.props.send && this.props.pop ? "success" : "error" }
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
        pop: state.pop.pop,
        error: state.pop.error || {},
        send: state.pop.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(popActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(PopCreate));
