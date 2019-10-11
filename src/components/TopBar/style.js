
import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});


const useStyles = {
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    search: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 4,
        flexBasis: 300,
        height: 36,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: 'inherit'
    },
    searchInput: {
        flexGrow: 1,
        color: 'inherit',
        '& input::placeholder': {
            opacity: 1,
            color: 'inherit'
        }
    },
    searchPopper: {
        zIndex: theme.zIndex.appBar + 100
    },
    searchPopperContent: {
        marginTop: theme.spacing(1)
    },
    trialButton: {
        marginLeft: theme.spacing(2),
        color: "#FFFFFF",
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    },
    trialIcon: {
        marginRight: theme.spacing(1),
        color: "#FFFFFF"
    },
    notificationsButton: {
        marginLeft: theme.spacing(1)
    },
    notificationsBadge: {
        backgroundColor: colors.orange[600]
    },
    logoutButton: {
        marginLeft: theme.spacing(1)
    },
    logoutIcon: {
        marginRight: theme.spacing(1)
    }
};
export default useStyles;
