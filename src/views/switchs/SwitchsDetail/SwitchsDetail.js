import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/styles';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Divider,
    Switch,
    TextField,
    Typography,
} from '@material-ui/core';
import { Page, HeaderDetails } from '../../../components';
import * as switchsActions from '../../../actions/switchsActions';

import useStyles from './style';

class SwitchsDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.actions.findSwitchs(this.props.match.params.id);
    }

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        return (
            <Page
                className={classes.root}
                title="Switch Management"
            >
                <HeaderDetails title="Managemente" text="Switch Details" />
                <Divider className={classes.divider} />
                <div className={classes.content}>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                            <CardHeader title="Switch" />
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
                                            value={ this.props.switchs.name ? this.props.switchs.name : "" }
                                            fullWidth
                                            label="Nome"
                                            name="name"
                                            disabled
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
											name="switchModel"
											select
											fullWidth
								            disabled
											label="Switch Model"
											variant="outlined"
											SelectProps={{
												native: true,
											}}
										>
                                            <option key={"switchModel_"} value={this.props.switchs.switchModel ?  this.props.switchs.switchModel.id : "0"} defaultValue>
                                            {
                                                this.props.switchs.switchModel ?
                                                ( this.props.switchs.switchModel.brand + " - " + this.props.switchs.switchModel.name ) : 
                                                ""
                                            }
                                            </option>    
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
											fullWidth
								            disabled
											label="Pop"
											variant="outlined"
											SelectProps={{
												native: true
											}}
										>
                                            <option key={"pop_"} value={this.props.switchs.pop ? this.props.switchs.pop.id : "0"} defaultValue>
                                            {
                                                this.props.switchs.pop ? this.props.switchs.pop.name : ""
                                            }
                                            </option>    
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
                                            value={ this.props.switchs.username ? this.props.switchs.username : "" }
								            disabled
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
                                            value={ this.props.switchs.password ? this.props.switchs.password : "" }
								            disabled
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
                                            value={ this.props.switchs.addressIpv4 ? this.props.switchs.addressIpv4 : "" }
								            disabled
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
                                            value={ this.props.switchs.addressIpv6 ? this.props.switchs.addressIpv6 : "" }
								            disabled
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
                                        <Typography variant="h6">Modelo ativo?</Typography>
                                        <Typography variant="body2">
                                            Se você alternar isso, o switch será criado inativo.
                                    </Typography>
                                        <Switch
                                            checked={ this.props.switchs.isActive ? this.props.switchs.isActive : false }
                                            color="secondary"
                                            edge="start"
                                            name="isActive"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                    </Card>
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        switchs: state.switchs.switchs || {},
        error: state.switchs.error || {},
        send: state.switchs.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchsActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchsDetail));
