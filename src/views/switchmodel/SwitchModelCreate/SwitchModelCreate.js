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
import * as switchmodelActions from '../../../actions/switchmodelActions';

import Header from './components/Header';
import useStyles from './style';
import SwitchModelApi from '../../../api/SwitchModelApi';

class SwitchModelCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                isActive: true,
                port10Ge: '',
                portGe: '',
                portFe: '',
                brand: ''
            },
            openSnackbar: true,
            arrayBrand: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
		this.updateBrand = this.updateBrand.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }

	componentDidMount() {
	    this.getBrands();
	}


    UNSAFE_componentWillUnmount(){
        this.setState({
            values: {
                name: '',
                isActive: true,
                port10Ge: '',
                portGe: '',
                portFe: ''
            },
            openSnackbar: true,
            arrayBrand: []
        });
        this.props.actions.resetSwitchModel();
    }

    UNSAFE_componentWillUpdate(){
        if(!this.props.send && this.props.switchmodel){
            this.setState({
                values: {
                    ...this.state.values,
                    name: '',
                    isActive: true,
                    port10Ge: '',
                    portGe: '',
                    portFe: ''
                },
                openSnackbar: true
            });
            this.props.actions.resetSwitchModel();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createSwitchModel(this.state.values);
        this.setState({
            ...this.state,
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
            ...this.state,
            openSnackbar: false
        });
    }

    async getBrands(){
        let arrayBrand = await SwitchModelApi.getBrands();
        if(arrayBrand.ok){
            arrayBrand.brands.then(brands=>{
                this.updateBrand(brands);
            });
        }
    }

	updateBrand(arrayBrand){
		this.setState(prevState => ({
            ...this.state,
            arrayBrand: arrayBrand
		}));
	}

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        const openSnack = !this.props.send && this.props.switchmodel ? true : this.props.error && this.props.error.message ? true : false;

        return (
            <Page
                className={classes.root}
                title="SwitchModel Create"
            >
                <Header />
                <Divider className={classes.divider} />
                <div className={classes.content}>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        <form onSubmit={this.handleSubmit}>
                            <CardHeader title="Novo Modelo" />
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
											id="brand"
											name="brand"
											margin="dense"
											select
											fullWidth
								            required
											label="Marca"
                                            onChange={this.handleChange}
											variant="outlined"
											SelectProps={{
												native: true
											}}
										>
                                                <option key={"brand_"} value=""></option>
				        	        	{
				        	    			this.state.arrayBrand.map(function(obj, idx){
				        	            		return (
				        	            			<option key={"brand_"+idx} value={obj}>{ obj }</option>
						        	        	)
				        	            	})
				        	        	}
							    		</TextField>
                                    </Grid>
                                    <Grid
                                        item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <TextField
                                            value={this.state.values.port10Ge}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas 10GE"
                                            label="10GE"
                                            name="port10Ge"
                                            onChange={this.handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <TextField
                                            value={this.state.values.portGe}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas GE"
                                            label="GE"
                                            name="portGe"
                                            onChange={this.handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <TextField
                                            value={this.state.values.portFe}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas FE"
                                            label="FE"
                                            name="portFe"
                                            onChange={this.handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <Typography variant="h6">Modelo ativo?</Typography>
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
                                    variant={ !this.props.send && this.props.switchmodel ? "success" : "error" }
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
        switchmodel: state.switchmodel.switchmodel,
        error: state.switchmodel.error || {},
        send: state.switchmodel.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchmodelActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchModelCreate));
