import theme from '../../themes';
const useStyles ={
    content: {
        height: '100%',
        paddingTop: 56,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    }
}
export default useStyles;
