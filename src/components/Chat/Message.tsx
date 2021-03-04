import React, { useState, useCallback, useEffect, useRef } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Badge from '@material-ui/core/Badge';
import MessageUtilButton from './MessageUtil'
import namor from 'namor'
import clsx from 'clsx'

import { nanoid } from 'nanoid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '21rem',
            backgroundColor: theme.palette.background.paper,
            padding: 0
        },
        inline: {
            display: 'inline',
        },
        usertext: {
            color: '#1f285a',
            fontWeight: 700,
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center'
        },
        userBlock: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#1f285a',
        },
        userBlockActive: {
            background: '#a5a5a585',
            boxShadow: '0px 1px 2px 0 #1f285a',
        },
        messageSend: {
            height: '66px',
            width: '100%',
            resize: 'none',
            padding: '1rem',
            border: '2px solid #bdbcbc',
        },
        messageUl: {
            listStyleType: 'none',
        },
        messageListLi: {
            background: '#1f3789',
            height: '5rem',
            padding: '1rem',
            color: 'white',
            borderRadius: '10px',
            margin: '8px',
            width: '20rem'
        },
        localMessageBox: {
            color: '#1f3789',
            background: '#bbbaba',
        }
    }),
);


interface notification {
    message: string
    from: string,
    selected?: boolean
}

const notificationBox: notification[] = [
    { message: namor.generate({ words: 4, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
    { message: namor.generate({ words: 3, saltLength: 0 }), from: namor.generate({ words: 3, saltLength: 0 }) },
]

const messageBox = [
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
    { message: namor.generate({ words: 3 }) },
]

export default function Message() {
    const classes = useStyles();
    const [notificationList, setNotificationList] = useState<notification[]>(notificationBox)
    const listRefs = useRef<(notification)[]>([...notificationBox])
    const widthRef = useRef<HTMLDivElement | null>(null)

    function onUserBlockClick(index: number) {
        const newNotificationList = listRefs.current.map((item, idx) => {
            return idx === index ? { ...item, selected: true } : { ...item, selected: false }
        })
        setNotificationList(newNotificationList)
    }

    // const onUserBlockClick = useCallback((index: number) => {
    //     const newNotificationList = listRefs.current.map((item, idx) => {
    //         return idx === index ? { ...item, selected: true } : { ...item, selected: false }
    //     })
    //     listRefs.current = [...newNotificationList]
    // }, [listRefs.current])

    return (
        <React.Fragment>
            <section>
                <article style={{ display: 'flex', height: '99%' }}>
                    <div ref={() => listRefs.current = [...notificationBox.map(item => ({ ...item, selected: false }))]}>
                        <List className={classes.root}>
                            {notificationList.map(({ message, from, selected }, index) => {
                                return (
                                    <React.Fragment key={nanoid(10) + index}>
                                        <div
                                            className={selected ? classes.userBlockActive : ''}
                                            onClick={() => onUserBlockClick(index)}>
                                            <ListItem button className={clsx(classes.userBlock)} alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Badge color="primary" overlap="circle" badgeContent=" " variant="dot">
                                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                                    </Badge>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={from}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={clsx(classes.inline, classes.usertext)}
                                                            >

                                                                {message}
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                                <div className={clsx(classes.flexCenter)}>
                                                </div>
                                            </ListItem>
                                            <Divider variant="fullWidth" />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </List>
                    </div>
                    <div style={{ background: '#eee', width: '32rem' }}>
                        <ul className={clsx(classes.messageUl)}>
                            {messageBox.map((msg, index) => {
                                return (
                                    <li
                                        style={{ transform: index % 2 === 0 ? 'translateX(-10%)' : 'translateX(40%)' }}
                                        className={clsx({
                                            [classes.messageListLi]: true,
                                            [classes.localMessageBox]: index % 2 === 0,
                                        })}
                                        key={nanoid(5) + index}
                                    >{msg.message
                                        }</li>
                                )
                            })}
                        </ul>
                    </div>
                </article>
                <article style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <MessageUtilButton /> */}
                    <TextareaAutosize
                        className={clsx(classes.messageSend)}
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Type something..."
                    />
                </article>
            </section>
        </React.Fragment >
    );
}
