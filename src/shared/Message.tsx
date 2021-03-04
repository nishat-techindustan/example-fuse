import React, { memo, useState } from 'react'
import MailIcon from '@material-ui/icons/Mail'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

import DrawerProvider from './CommonDrawer'
import Message from '../components/Chat/Message'

const MailBox = () => {
    const [drawerState, setDrawerState] = useState<boolean>(false)

    function onCloseDrawer() {
        setDrawerState(false)
    }

    function onOpenDrawer() {
        setDrawerState(!drawerState)
    }

    return (
        <React.Fragment>
            <IconButton onClick={onOpenDrawer} aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
            <DrawerProvider anchor='right' drawerState={drawerState} onCloseDrawer={onCloseDrawer}>
                <Message />
            </DrawerProvider>
        </React.Fragment>
    )
}

export default memo(MailBox)
