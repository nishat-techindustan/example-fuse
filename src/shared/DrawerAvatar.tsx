import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import clsx from 'clsx'
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    loggedInUser: {
      color: theme.palette.getContrastText(deepOrange[500]),
      position: 'absolute',
      bottom: '25%',
      left: '30%',
    },
    avatarFigure: {
      position: 'absolute',
      top: '70%',
      left: '30%',
      width: theme.spacing(10),
      height: theme.spacing(10),
      border: '5px solid #3f51b5'
    },
  }),
);

interface Props {
  username?: string
  image?: string
}

export default function DrawerAvatar(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5' className={clsx(classes.loggedInUser)} component='h5'>ADMIN</Typography>
      <Avatar className={clsx(classes.avatarFigure)} src="/images/avatar/avatar.jpeg" />
    </div>
  );
}
