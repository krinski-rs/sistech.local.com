


class SnackbarContentWrapper extends Component
{

    render() {
        const classes = useStyles1();
        const { className, message, onClose, variant, ...other } = props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className={clsx(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                ]}
                {...other}
            />
        );
    }
}
export default withStyles(useStyles)(UserCreate);
