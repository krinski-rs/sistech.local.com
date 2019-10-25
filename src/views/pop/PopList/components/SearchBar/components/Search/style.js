import theme from '../../../../../../../themes';
const useStyles = {
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        flexGrow: 1,
        height: 42,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: theme.palette.icon
    },
    searchInput: {
        flexGrow: 1
    },
    searchButton: {
        marginLeft: theme.spacing(2)
    }
};
export default useStyles;
