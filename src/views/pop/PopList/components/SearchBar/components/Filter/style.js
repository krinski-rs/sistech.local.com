import theme from '../../../../../../../themes';
const useStyles = {
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    drawer: {
        width: 420,
        maxWidth: '100%'
    },
    header: {
        padding: theme.spacing(2, 1),
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonIcon: {
        marginRight: theme.spacing(1)
    },
    content: {
        padding: theme.spacing(0, 3),
        flexGrow: 1
    },
    contentSection: {
        padding: theme.spacing(2, 0)
    },
    contentSectionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    contentSectionContent: {},
    formGroup: {
        padding: theme.spacing(2, 0)
    },
    fieldGroup: {
        display: 'flex',
        alignItems: 'center'
    },
    field: {
        marginTop: 0,
        marginBottom: 0
    },
    flexGrow: {
        flexGrow: 1
    },
    addButton: {
        marginLeft: theme.spacing(1)
    },
    minAmount: {
        marginRight: theme.spacing(3)
    },
    maxAmount: {
        marginLeft: theme.spacing(3)
    },
    radioGroup: {},
    actions: {
        padding: theme.spacing(3),
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
};
export default useStyles;
