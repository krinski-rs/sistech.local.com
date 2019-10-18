import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { Provider as StoreProvider } from 'react-redux';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';

import theme from './themes';
import { configureStore } from './store';
import routes from './routes';

import './assets/scss/index.scss?v=1.7.0';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Router history={history}>
                        { renderRoutes(routes) }
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
