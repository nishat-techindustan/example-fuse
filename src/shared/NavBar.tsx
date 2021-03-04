import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import useStyles from '../styles/MaterialClasses/NavBar'
import NavBarMenu from './NavBarMenu'
import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop'

interface Props {
    onClick: () => void,
    window?: () => Window;
}

export default function NavBar(props: Props): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="static">
                    <Toolbar id="back-to-top-anchor">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.onClick}>
                            <MenuIcon />
                        </IconButton>
                        <NavBarMenu />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <ScrollTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    );
}
