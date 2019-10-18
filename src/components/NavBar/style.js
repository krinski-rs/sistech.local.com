import theme from '../../themes';
const useStyles = {
    root: {
        height: '100%',
        overflowY: 'auto'
    },
    content: {
        padding: theme.spacing(2)
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    }
};
export default useStyles;
