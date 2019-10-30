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
import { Page } from '../../../components';
import * as switchmodelActions from '../../../actions/switchmodelActions';

import Header from './components/Header';
import useStyles from './style';
// import SwitchModelApi from '../../../api/SwitchModelApi';

class SwitchModelDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.actions.findSwitchModel(this.props.match.params.id);
    }

    render() {
        const classes = this.props.classes;
        const { className, rest } = this.props;
        console.log(this.props.switchmodel);
        return (
            <Page
                className={classes.root}
                title="SwitchModel View"
            >
                <Header />
                <Divider className={classes.divider} />
                <div className={classes.content}>
                    <Card
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                            <CardHeader title="Modelo" />
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
                                            value={this.props.switchmodel && this.props.switchmodel.name ? this.props.switchmodel.name : ""}
                                            fullWidth
                                            disabled
                                            helperText="Informe o nome do serviço"
                                            label="Nome"
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
                                            value={this.props.switchmodel && this.props.switchmodel.brand ? this.props.switchmodel.brand : ""}
                                            fullWidth
                                            disabled
											label="Marca"
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
                                            value={this.props.switchmodel.switchModelPort && this.props.switchmodel.switchModelPort.GE10 ? this.props.switchmodel.switchModelPort.GE10.quantities : "0"}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas 10GE"
                                            label="10GE"
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
                                            value={this.props.switchmodel.switchModelPort && this.props.switchmodel.switchModelPort.GE ? this.props.switchmodel.switchModelPort.GE.quantities : "0"}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas GE"
                                            label="GE"
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
                                            value={this.props.switchmodel.switchModelPort && this.props.switchmodel.switchModelPort.FE ? this.props.switchmodel.switchModelPort.FE.quantities : "0"}
                                            fullWidth
                                            helperText="Infrome a quantidade de portas FE"
                                            label="FE"
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
                                            checked={this.props.switchmodel && this.props.switchmodel.isActive ? this.props.switchmodel.isActive : false}
                                            color="secondary"
                                            edge="start"
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
        switchmodel: state.switchmodel.switchmodel || {},
        error: state.switchmodel.error || {},
        send: state.switchmodel.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(switchmodelActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SwitchModelDetail));
