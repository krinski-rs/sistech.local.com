import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from "@material-ui/core/styles/withStyles";

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

    handleLogout = () => {
        // history.push('/auth/login');
        // dispatch(logout());
    }

    handlePricingOpen = () => {
        // setPricingModalOpen(true);
    }

    handlePricingClose = () => {
        // setPricingModalOpen(false);
    }

    handleNotificationsOpen = () => {
        // setOpenNotifications(true);
    }

    handleNotificationsClose = () => {
        // setOpenNotifications(false);
    }

    handleSearchChange = event => {
        // setSearchValue(event.target.value);

        // if (event.target.value) {
        //     if (!openSearchPopover) {
        //         setOpenSearchPopover(true);
        //     }
        // } else {
        //     setOpenSearchPopover(false);
        // }
    };

    handleSearchPopverClose = () => {
        // setOpenSearchPopover(false);
    };


    render() {
        const { onOpenNavBarMobile, className, classes, ...rest } = this.props;
        const popularSearches = [
            'Devias React Dashboard',
            'Devias',
            'Admin Pannel',
            'Project',
            'Pages'
        ];

        return (
            <AppBar
                {...rest}
                className={clsx(classes.root, className)}
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
                                onChange={this.handleSearchChange}
                                placeholder="Search people &amp; places"
                                value={""}
                            />
                        </div>
                        <Popper
                            anchorEl={this.searchRef.current}
                            className={classes.searchPopper}
                            open={false}
                            transition
                        >
                            <ClickAwayListener onClickAway={this.handleSearchPopverClose}>
                                <Paper
                                    className={classes.searchPopperContent}
                                    elevation={3}
                                >
                                    <List>
                                        {popularSearches.map(search => (
                                            <ListItem
                                                button
                                                key={search}
                                                onClick={this.handleSearchPopverClose}
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
                    </Hidden>
                    <Hidden mdDown>
                        <IconButton
                            className={classes.notificationsButton}
                            color="inherit"
                            onClick={this.handleNotificationsOpen}
                            ref={this.notificationsRef}
                        >
                            <Badge
                                badgeContent={4}
                                classes={{ badge: classes.notificationsBadge }}
                                variant="dot"
                            >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            className={classes.logoutButton}
                            color="inherit"
                            onClick={this.handleLogout}
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
}

TopBar.propTypes = {
    className: PropTypes.string,
    onOpenNavBarMobile: PropTypes.func.isRequired
};
export default withStyles(useStyles)(TopBar);
