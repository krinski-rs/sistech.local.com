import theme from '../../../../../themes';
const useStyles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    search: {
        flexGrow: 1,
        maxWidth: 480,
        flexBasis: 480
    },
    filterButton: {
        marginLeft: 'auto'
    },
    filterIcon: {
        marginRight: theme.spacing(1)
    }
};
export default useStyles;
