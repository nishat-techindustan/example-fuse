import React from 'react'
import Drawer from '@material-ui/core/Drawer'


interface Props {
    drawerState: boolean
    onCloseDrawer: () => void
    anchor: 'left' | 'right' | 'top' | 'bottom'
    children: React.ReactChild
}

const DrawerProvider = (props: Props) => {
    const { drawerState, anchor, onCloseDrawer, children } = props
    return (
        <Drawer anchor={anchor} open={drawerState} onClose={onCloseDrawer}>
            {children}
        </Drawer>
    )
}

export default DrawerProvider
