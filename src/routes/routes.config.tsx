import React, { FC } from 'react'
import Icon from './Icons'
// import Home from '../components/Home'
import * as Components from './components'

export interface RoutesInterface {
    selected: boolean;
    name: string;
    exact: boolean;
    component?: any;
    path: string;
    icon?: any;
    for: string;
    render?: any;
}


const routes: RoutesInterface[] = [
    {
        selected: false,
        name: 'Home',
        exact: true,
        render: () => < Components.Home />,
        path: '/',
        for: 'user',
        icon: <Icon.HomeIcon />
    },
    {
        selected: false,
        name: 'Dashboard',
        exact: true,
        render: () => < Components.Dashboard />,
        path: '/dashboard',
        for: 'user',
        icon: <Icon.DashboardIcon />
    },
    {
        selected: false,
        name: 'Users',
        exact: true,
        render: () => < Components.Users />,
        path: '/users',
        for: 'user',
        icon: <Icon.GroupIcon />
    },
    {
        selected: false,
        name: 'About',
        exact: true,
        render: () => <Components.About />,
        path: '/about',
        for: 'user',
        icon: <Icon.ImageIcon />
    },
    {
        selected: false,
        name: 'Careers',
        exact: true,
        render: () => <Components.Careers />,
        path: '/careers',
        for: 'user',
        icon: <Icon.WorkIcon />
    },
    {
        selected: false,
        name: 'Contact',
        exact: true,
        render: () => <Components.ContactUs />,
        path: '/contact',
        for: 'user',
        icon: <Icon.BeachAccessIcon />
    },
]


export default routes;