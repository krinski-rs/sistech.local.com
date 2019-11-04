import React, { Component, Suspense } from 'react';
import { Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withStyles from "@material-ui/core/styles/withStyles";
import { LinearProgress } from '@material-ui/core';

import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RouterOutlinedIcon from '@material-ui/icons/RouterOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import BuildIcon from '@material-ui/icons/BuildOutlined';

import * as loginActions from '../../actions/loginActions';
import { TopBar, NavBar, Label } from '../../components';
import useStyles from './style';


const navigationConfig = [
    {
        title: 'Pages',
        pages: [
            {
                title: 'Switch',
                href: '/switchs',
                icon: RouterOutlinedIcon,
            },
            {
                title: 'Overview',
                href: '/overview',
                icon: HomeIcon
            },
            {
                title: 'Dashboards',
                href: '/dashboards',
                icon: DashboardIcon,
                children: [
                    {
                        title: 'Default',
                        href: '/dashboards/default'
                    },
                    {
                        title: 'Analytics',
                        href: '/dashboards/analytics'
                    }
                ]
            },
            {
                title: 'POP',
                href: '/pop',
                icon: SettingsInputAntennaIcon,
                children: [
                    {
                        title: 'List',
                        href: '/pop'
                    },
                    {
                        title: 'Create',
                        href: '/pop/create'
                    }
                ]
            },
            {
                title: 'Switch Model',
                href: '/switchmodel',
                icon: FileCopyOutlinedIcon,
                children: [
                    {
                        title: 'List',
                        href: '/switchmodel'
                    },
                    {
                        title: 'Create',
                        href: '/switchmodel/create'
                    }
                ]
            },
            {
                title: 'Switchs',
                href: '/switchs',
                icon: RouterOutlinedIcon,
                children: [
                    {
                        title: 'List',
                        href: '/switchs'
                    },
                    {
                        title: 'Create',
                        href: '/switchs/create'
                    }
                ]
            },
            {
                title: 'Service',
                href: '/service',
                icon: BuildIcon,
                children: [
                    {
                        title: 'List',
                        href: '/service'
                    },
                    {
                        title: 'Create',
                        href: '/service/create'
                    }
                ]
            },
            {
                title: 'Users',
                href: '/user',
                icon: PeopleIcon,
                children: [
                    {
                        title: 'List',
                        href: '/user'
                    },
                    {
                        title: 'Create',
                        href: '/user/create'
                    }
                ]
            },
            {
                title: 'Management',
                href: '/management',
                icon: BarChartIcon,
                children: [
                    {
                        title: 'Customers',
                        href: '/management/customers'
                    },
                    {
                        title: 'Customer Details',
                        href: '/management/customers/1/summary'
                    },
                    {
                        title: 'Projects',
                        href: '/management/projects'
                    },
                    {
                        title: 'Orders',
                        href: '/management/orders'
                    },
                    {
                        title: 'Order Details',
                        href: '/management/orders/1'
                    }
                ]
            },
            {
                title: 'Social Feed',
                href: '/social-feed',
                icon: PeopleIcon
            },
            {
                title: 'Profile',
                href: '/profile',
                icon: PersonIcon,
                children: [
                    {
                        title: 'Timeline',
                        href: '/profile/1/timeline'
                    },
                    {
                        title: 'Connections',
                        href: '/profile/1/connections'
                    },
                    {
                        title: 'Projects',
                        href: '/profile/1/projects'
                    },
                    {
                        title: 'Reviews',
                        href: '/profile/1/reviews'
                    }
                ]
            },
            {
                title: 'Project',
                href: '/projects',
                icon: FolderIcon,
                children: [
                    {
                        title: 'Browse',
                        href: '/projects'
                    },
                    {
                        title: 'Create',
                        href: '/projects/create'
                    },
                    {
                        title: 'Overview',
                        href: '/projects/1/overview'
                    },
                    {
                        title: 'Files',
                        href: '/projects/1/files'
                    },
                    {
                        title: 'Activity',
                        href: '/projects/1/activity'
                    },
                    {
                        title: 'Subscribers',
                        href: '/projects/1/subscribers'
                    }
                ]
            },
            {
                title: 'Invoice',
                href: '/invoices/1',
                icon: ReceiptIcon
            },
            {
                title: 'Kanban Board',
                href: '/kanban-board',
                icon: ListAltIcon
            },
            {
                title: 'Mail',
                href: '/mail',
                icon: MailIcon,
                label: () => (
                    <Label
                        color={colors.red[500]}
                        shape="rounded"
                    >
                        2
            </Label>
                )
            },
            {
                title: 'Chat',
                href: '/chat',
                icon: ChatIcon,
                label: () => (
                    <Label
                        color={colors.red[500]}
                        shape="rounded"
                    >
                        4
            </Label>
                )
            },
            {
                title: 'Calendar',
                href: '/calendar',
                icon: CalendarTodayIcon,
                label: () => <Label color={colors.green[500]}>New</Label>
            },
            {
                title: 'Settings',
                href: '/settings',
                icon: SettingsIcon,
                children: [
                    {
                        title: 'General',
                        href: '/settings/general'
                    },
                    {
                        title: 'Subscription',
                        href: '/settings/subscription'
                    },
                    {
                        title: 'Notifications',
                        href: '/settings/notifications'
                    },
                    {
                        title: 'Security',
                        href: '/settings/security'
                    }
                ]
            },
            {
                title: 'Authentication',
                href: '/auth',
                icon: LockOpenIcon,
                children: [
                    {
                        title: 'Login',
                        href: '/auth/login'
                    },
                    {
                        title: 'Register',
                        href: '/auth/register'
                    }
                ]
            },
            {
                title: 'Errors',
                href: '/errors',
                icon: ErrorIcon,
                children: [
                    {
                        title: 'Error 401',
                        href: '/errors/error-401'
                    },
                    {
                        title: 'Error 404',
                        href: '/errors/error-404'
                    },
                    {
                        title: 'Error 500',
                        href: '/errors/error-500'
                    }
                ]
            }
        ]
    },
    {
        title: 'Support',
        pages: [
            {
                title: 'Presentation',
                href: '/presentation',
                icon: PresentToAllIcon
            },
            {
                title: 'Getting started',
                href: '/getting-started',
                icon: CodeIcon
            },
            {
                title: 'Changelog',
                href: '/changelog',
                icon: ViewModuleIcon,
                label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
            }
        ]
    }
];

class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            openNavBarMobile: false
        }
    }

    handleNavBarMobileOpen = () => {
        this.setState({
            openNavBarMobile: true
        });
    };

    handleNavBarMobileClose = () => {
        this.setState({
            openNavBarMobile: false
        });
    };

    render() {
        if (!this.props.user || !this.props.user.id) {
            return <Redirect to='/auth/login' />
        }
        const { classes, route } = this.props;
        return (
            <div className={classes.root}>
                <TopBar
                    className={classes.topBar}
                    onOpenNavBarMobile={this.handleNavBarMobileOpen}
                />
                <div className={classes.container}>
                    <NavBar
                        className={classes.navBar}
                        onMobileClose={this.handleNavBarMobileClose}
                        openMobile={this.state.openNavBarMobile}
                        navigationConfig={navigationConfig}
                        session={ this.props.user }
                    />
                    <main className={classes.content}>
                        <Suspense fallback={<LinearProgress />}>
                            {renderRoutes(route.routes)}
                        </Suspense>
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.login.user || {},
        error: state.login.error || {},
        send: state.login.send || false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));
