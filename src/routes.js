import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import Dashboard from './views/home/Dashboard';
const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        route: '*',
        component: Home,
        routes: [
            {
                path: '/home',
                exact: true,
                component: Dashboard
            },
            {
                path: '/user/create',
                exact: true,
                component: lazy(() => import('./views/user/Create'))
            },
        ]
    }
];

export default routes;