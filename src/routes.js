
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Auth from './screens/Auth';
const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        path: '/auth',
        component: Auth,
        routes: [
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('./views/Login'))
            },
            // {
            //     path: '/auth/register',
            //     exact: true,
            //     component: lazy(() => import('views/Register'))
            // },
            // {
            //     component: () => <Redirect to="/errors/error-404" />
            // }
        ]
    },
    {
        route: '*',
        component: Home,
        routes: [
            {
                path: '/user',
                exact: true,
                component: lazy(() => import('./views/user/UserList'))
            }
        ]
    }
];

export default routes;
