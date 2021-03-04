import React, { memo, useState } from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

import DrawerProvider from './CommonDrawer'
import NotificationBox from '../components/Chat/Notification'

const Notification = () => {
    const [drawerState, setDrawerState] = useState<boolean>(false)

    function onCloseDrawer() {
        setDrawerState(false)
    }

    function onOpenDrawer() {
        setDrawerState(!drawerState)
    }

    return (
        <React.Fragment>
            <IconButton onClick={onOpenDrawer} aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <DrawerProvider anchor='top' drawerState={drawerState} onCloseDrawer={onCloseDrawer}>
                <NotificationBox />
            </DrawerProvider>
        </React.Fragment>
    )
}

export default memo(Notification)
