import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const scrollTopStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);

export default scrollTopStyles