import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import namor from 'namor'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center'
        }
    }),
);

const notificationBox = [
    { message: namor.generate({ words: 4, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
]

export default function Notification() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <List className={classes.root}>
                {notificationBox.map(({ message, from }, index) => {
                    return (
                        <React.Fragment key={nanoid(10) + index}>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {from}
                                            </Typography>
                                            {message}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    )
                })}
            </List>
            <Button color={'primary'}>Read All</Button>
        </React.Fragment >
    );
}


