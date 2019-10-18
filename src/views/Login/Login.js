import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import withStyles from "@material-ui/core/styles/withStyles";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Link,
    Avatar
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import { Page } from '../../components';
import { LoginForm } from './components';
import useStyles from './style';

class Login extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Page
                className={classes.root}
                title="Login"
            >
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <LockIcon className={classes.icon} />
                        <Typography
                            gutterBottom
                            variant="h3"
                        >
                            Login
                        </Typography>
                        <Typography variant="subtitle2">
                            Faça login na plataforma
                        </Typography>
                        <LoginForm className={classes.loginForm} history={this.props.history}/>
                        <Divider className={classes.divider} />
                        <Link
                            align="center"
                            color="secondary"
                            component={RouterLink}
                            to="/auth/register"
                            underline="always"
                            variant="subtitle2"
                        >
                            Não possui uma conta?
                        </Link>
                    </CardContent>
                    <CardMedia
                        className={classes.media}
                        image="/images/auth.png"
                        title="Cover"
                    >
                        <Typography
                            color="inherit"
                            variant="subtitle1"
                        >
                            Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they
                            sold out High Life.
                        </Typography>
                        <div className={classes.person}>
                            <Avatar
                                alt="Person"
                                className={classes.avatar}
                                src="/images/avatars/avatar_2.png"
                            />
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="body1"
                                >
                                    Ekaterina Tankova
                                </Typography>
                                <Typography
                                    color="inherit"
                                    variant="body2"
                                >
                                    Manager at inVision
                                </Typography>
                            </div>
                        </div>
                    </CardMedia>
                </Card>
            </Page>
        );
    }
}

export default withStyles(useStyles)(Login);
