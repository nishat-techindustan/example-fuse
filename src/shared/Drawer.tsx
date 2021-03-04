import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { useHistory, useLocation } from "react-router-dom"

import '../styles/Drawer.scss'
import ListUI from './List'
import NavBar from './NavBar'
import routes, { RoutesInterface } from '../routes/routes.config'

interface SideDrawerState {
    open: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        active: {
            backgroundColor: 'red',
        },
    }),
);

export default function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = useState<SideDrawerState>({ open: false });
    const [routeList, setRouteList] = useState<RoutesInterface[]>(routes)
    const history = useHistory()
    const location = useLocation()

    const toggleDrawer = () => {
        setState({ open: true })
    };


    useEffect(() => {
        let newRouteList = [...routeList]
        newRouteList = newRouteList.map((list) => {
            return (location.pathname === list.path) ? { ...list, selected: true } : { ...list, selected: false }
        })
        setRouteList(newRouteList)
    }, [location.pathname])

    function routeNavigate(route: RoutesInterface, index: number) {
        let newRouteList = [...routeList]
        newRouteList = newRouteList.map((list, idx) => {
            return (index === idx) ? { ...list, selected: true } : { ...list, selected: false }
        })
        setRouteList(newRouteList)
        history.replace(route.path)
    }

    return (
        <div>
            <NavBar onClick={toggleDrawer} />
            <Drawer open={state.open} onClose={() => setState({ open: false })}>
                <ListUI routeList={routeList} routeNavigate={routeNavigate} />
            </Drawer>
        </div>
    );
}
