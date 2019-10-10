import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from '../../../components';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    container: {
        marginTop: theme.spacing(3)
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Page
            className={classes.root}
            title="Dashboard"
        >
            Dashboard
        </Page>
    );
};

export default Dashboard;