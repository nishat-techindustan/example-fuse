import React, { useMemo } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { nanoid } from 'nanoid'

import { RoutesInterface } from '../routes/routes.config'
import Avatar from './DrawerAvatar'
import '../styles/Drawer.scss'

interface Props {
    routeList: RoutesInterface[],
    routeNavigate: (route: RoutesInterface, index: number) => void
}

const ListUI = (props: Props, context: any): JSX.Element => {

    const id = useMemo(() => nanoid(), [])

    return (
        <React.Fragment>
            <div className='avatar-block'>
                <Avatar />
            </div>
            <div style={{ width: '270px', marginTop: '3rem' }}>
                {props.routeList.map((route, index) => (
                    <div key={id + index}>
                        {route.for === 'user' ? <List
                            onClick={() => props.routeNavigate(route, index)}
                            className={route.selected ? 'drawer-list' : ''}
                            key={index}>
                            <ListItem button>
                                <ListItemIcon style={{ color: route.selected ? 'white' : 'gray' }}>{route.icon}</ListItemIcon>
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </List> : null}
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default ListUI
