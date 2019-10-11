import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = {
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    tabs: {
        marginTop: theme.spacing(3)
    },
    divider: {
        backgroundColor: colors.grey[300]
    },
    content: {
        marginTop: theme.spacing(3)
    },
    saveButton: {
        color: "#FFFFFF",
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    }
};
export default useStyles;
