/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link as RouterLink } from 'react-router-dom';

import {
    AppBar,
    Badge,
    Button,
    IconButton,
    Toolbar,
    Hidden,
    Input,
    Popper,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ClickAwayListener
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';
class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSearchPopover: false
        }
        this.searchRef = React.createRef();
        this.notificationsRef = React.createRef();
    }

    setOpenSearchPopover(state){
        this.setState({
            openSearchPopover: !state.openSearchPopover
        })
    }

    render() {
        const { onOpenNavBarMobile } = this.props;
        const classes = this.props.classes;
        // const searchRef = React.createRef();
        // const notificationsRef = React.createRef();
        // const [pricingModalOpen, setPricingModalOpen] = useState(false);
        // const [openSearchPopover, setOpenSearchPopover] = useState(false);
        // const [searchValue, setSearchValue] = useState('');
        // const [notifications, setNotifications] = useState([]);
        // const [openNotifications, setOpenNotifications] = useState(false);
    
        // const handleSearchChange = event => {
        //     setSearchValue(event.target.value);
    
        //     if (event.target.value) {
        //         if (!openSearchPopover) {
        //             setOpenSearchPopover(true);
        //         }
        //     } else {
        //         setOpenSearchPopover(false);
        //     }
        // };

        // const handleSearchPopverClose = () => {
        //     setOpenSearchPopover(false);
        // };

        // const handlePricingOpen = () => {
        //     setPricingModalOpen(true);
        // };

        // const handleNotificationsOpen = () => {
        //     setOpenNotifications(true);
        // };

        // const handleLogout = () => {
        //     // history.push('/auth/login');
        //     // dispatch(logout());
        // };
            
        const handleSearchPopverClose = () => {
            this.setOpenSearchPopover(false);
        };

        const popularSearches = [
            'Devias React Dashboard',
            'Devias',
            'Admin Pannel',
            'Project',
            'Pages'
        ];

        return (
            <AppBar
                className={clsx(classes.root, this.props.className)}
                color="primary"
            >
                <Toolbar>
                    <RouterLink to="/">
                        <img
                            alt="Logo"
                            src="/images/logos/logo--white.svg"
                        />
                    </RouterLink>
                    <div className={classes.flexGrow} />
                    <Hidden smDown>
                        <div
                            className={classes.search}
                            ref={this.searchRef}
                        >
                            <SearchIcon className={classes.searchIcon} />
                            <Input
                                className={classes.searchInput}
                                disableUnderline
                                placeholder="Search people &amp; places"
                            />
                        </div>
                        <Popper
                            anchorEl={this.searchRef.current}
                            className={classes.searchPopper}
                            open={this.state.openSearchPopover}

                            transition
                        >
                            <ClickAwayListener onClickAway={handleSearchPopverClose}>
                                <Paper
                                    className={classes.searchPopperContent}
                                    elevation={3}
                                >
                                    <List>
                                        {popularSearches.map(search => (
                                            <ListItem
                                                button
                                                key={search}
                                            >
                                                <ListItemIcon>
                                                    <SearchIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={search} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </ClickAwayListener>
                        </Popper>
                        <Button
                            className={classes.trialButton}
                            variant="contained"
                        >
                            <LockIcon className={classes.trialIcon} />
                            Trial expired
                    </Button>
                    </Hidden>
                    <Hidden mdDown>
                        <IconButton
                            className={classes.notificationsButton}
                            color="inherit"
                            ref={this.notificationsRef}
                        >
                            <Badge
                                badgeContent={1}
                                classes={{ badge: classes.notificationsBadge }}
                                variant="dot"
                            >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            className={classes.logoutButton}
                            color="inherit"
                        >
                            <InputIcon className={classes.logoutIcon} />
                            Sign out
                    </Button>
                    </Hidden>
                    <Hidden lgUp>
                        <IconButton
                            color="inherit"
                            onClick={onOpenNavBarMobile}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
};

TopBar.propTypes = {
    className: PropTypes.string,
    onOpenNavBarMobile: PropTypes.func,
};

export default withStyles(useStyles)(TopBar);