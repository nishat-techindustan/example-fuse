import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        exampleWrapper: {
            position: 'absolute',
            marginTop: theme.spacing(3),
            height: 380,
        },
        radioGroup: {
            margin: theme.spacing(1, 0),
        },
        speedDial: {
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }),
);

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <FavoriteIcon />, name: 'Like' },
];

export default function MessageUtilButton() {
    const classes = useStyles();
    const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.root}>
            <div className={classes.exampleWrapper}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={classes.speedDial}
                    hidden={hidden}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction={'up'}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </div>
        </div>
    );
}
