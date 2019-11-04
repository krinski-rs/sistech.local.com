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
import { Page, SnackbarContentWrapper, HeaderDetails } from '../../../components';
import * as switchsActions from '../../../actions/switchsActions';

import useStyles from './style';
import SwitchsApi from '../../../api/SwitchsApi';

class SwitchsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                isActive: true,
                pop: '',
                username: '',
                password: '',
                addressIpv4: '',
                addressIpv6: '',
                switchModel: ''
            },
            openSnackbar: true,
            arrayPop: [],
            arraySwitchModel: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
		this.updatePops = this.updatePops.bind(this);
		this.updateSwitchModel = this.updateSwitchModel.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }

	componentDidMount() {
	    this.getPops();
	    this.getSwitchModel();
	}


    UNSAFE_componentWillUnmount(){
        this.setState({
            values: {
                name: '',
                isActive: true,
                pop: '',
                username: '',
                password: '',
                addressIpv4: '',
                addressIpv6: '',
                switchModel: ''
            },
            openSnackbar: true,
            arrayPop: [],
            arraySwitchModel: []
        });
        this.props.actions.resetSwitchs();
    }

    UNSAFE_componentWillUpdate(){
        if(!this.props.send && this.props.switchs){
            this.setState({
                values: {
                    name: '',
                    isActive: true,
                    pop: '',
                    username: '',
                    password: '',
                    addressIpv4: '',
                    addressIpv6: '',
                    switchModel: ''
                },
                openSnackbar: true,
            });
            this.props.actions.resetSwitchs();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createSwitchs(this.state.values);
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

    async getPops(){
        let arrayPop = await SwitchsApi.getPops();
        if(arrayPop.ok){
            arrayPop.pops.then(pops=>{
                this.updatePops(pops);
            });
        }
    }

    async getSwitchModel(){
        let arraySwitchModel = await SwitchsApi.getSwitchModel();
        if(arraySwitchModel.ok){
            arraySwitchModel.switchmodel.then(switchModel=>{
                this.updateSwitchModel(switchModel);
            });
        }
    }

	updatePops(arrayPop){
		this.setState(prevState => ({
            ...this.state,
            arrayPop: arrayPop
		}));
	}

	updateSwitchModel(arraySwitchModel){
		this.setState(prevState => ({
            ...this.state,
            arraySwitchModel: arraySwitchModel
		}));
	}

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        const openSnack = !this.props.send && this.props.switchs ? true : this.props.error && this.props.error.message ? true : false;
        return (
            <Page
                className={classes.root}
                title="Switch Management"
            >
                <HeaderDetails title="Managemente" text="Form to add switch" />
                <Divider className={classes.divider} />
                <div className={classes.content}>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        <form onSubmit={this.handleSubmit}>
                            <CardHeader title="Novo Switch" />
                            <Divider />
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid
                                        item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <TextField
                                            value={this.state.values.name}
                                            fullWidth
                                            helperText="Switch name"
                                            label="Nome"
                                            name="name"
                                            onChange={this.handleChange}
                                            required
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
											id="switchModel"
                                            value={this.state.values.switchModel}
											name="switchModel"
                                            helperText="Switch model"
											select
											fullWidth
								            required
                                            onChange={this.handleChange}
											label="Switch Model"
											variant="outlined"
											SelectProps={{
												native: true,
											}}
										>
                                            <option key={"switchModel_"} value=" " defaultValue>-- Selecione --</option>    
				        	        	{
				        	    			this.state.arraySwitchModel.data ? this.state.arraySwitchModel.data.map(function(obj, idx){
				        	            		return (
				        	            			<option key={"switchModel_"+obj.id} value={obj.id}>{ obj.brand + " - " + obj.name }</option>
						        	        	)
                                            }) : null
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
											id="pop"
											name="pop"
											select
                                            helperText="POP where is the switch"
                                            value={this.state.values.pop}
											fullWidth
								            required
											label="Pop"
                                            onChange={this.handleChange}
											variant="outlined"
											SelectProps={{
												native: true
											}}
										>
                                        <option key={"pop_"} value=" " defaultValue>-- Selecione --</option>    
				        	        	{
				        	    			this.state.arrayPop.data ? this.state.arrayPop.data.map(function(obj, idx){
				        	            		return (
				        	            			<option key={"pop_"+obj.id} value={obj.id}>{ obj.name }</option>
						        	        	)
                                            }) : null
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
								            id="username"
								            name="username"
                                            helperText="Will be used to login to the switch"
                                            onChange={this.handleChange}
                                            value={this.state.values.username}
								            label="Username"
								            type="text"
								            fullWidth
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
								            id="password"
								            name="password"
                                            helperText="Will be used to login to the switch"
                                            onChange={this.handleChange}
                                            value={this.state.values.password}
								            label="Password"
								            type="password"
								            fullWidth
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
								            id="addressIpv4"
								            name="addressIpv4"
                                            helperText="Management IPv4 Address"
                                            onChange={this.handleChange}
                                            value={this.state.values.addressIpv4}
								            label="IPV4 Address"
								            type="text"
								            fullWidth
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
								            id="addressIpv6"
								            name="addressIpv6"
                                            onChange={this.handleChange}
                                            helperText="Management IPv6 Address"
                                            value={this.state.values.addressIpv6}
								            label="IPV6 Address"
								            type="text"
								            fullWidth
							    			variant="outlined"
								        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <Typography variant="h6">Active model?</Typography>
                                        <Typography variant="body2">
                                            If you toggle this, the switch will be created as inactive.
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
                                    variant={ !this.props.send && this.props.switchs ? "success" : "error" }
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
        switchs: state.switchs.switchs,
        error: state.switchs.error || {},
        send: state.switchs.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchsActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchsCreate));
