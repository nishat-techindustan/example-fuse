import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { nanoid } from 'nanoid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/Drawer.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

interface Props {
    parent: React.ReactChild
    child?: any
}

export default function RouteListBar(props: any) {
    const classes = useStyles();
    console.log(props, 'here is teh props')
    return (
        <div className={classes.root}>
            {props.children ? <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="routes-content"
                    id="routes-header"
                >
                    <List
                    // onClick={() => props.routeNavigate(route, index)}
                    // className={route.selected ? 'drawer-list' : ''}
                    >
                        <ListItem button>
                            <ListItemIcon
                            // style={{ color: route.selected ? 'white' : 'gray' }}
                            >{props.icon}
                            </ListItemIcon>
                            <ListItemText primary={props.name}
                            />
                        </ListItem>
                    </List>
                </AccordionSummary>
                {props.children.map((nestedRoute: any, idx: number) => {
                    return (
                        <AccordionDetails key={idx}>
                            {nestedRoute.name}
                        </AccordionDetails>
                    )
                })}
            </Accordion> :
                <List
                // onClick={() => props.routeNavigate(route, index)}
                // className={route.selected ? 'drawer-list' : ''}
                >
                    <ListItem button>
                        <ListItemIcon
                        // style={{ color: route.selected ? 'white' : 'gray' }}
                        >{props.icon}
                        </ListItemIcon>
                        <ListItemText primary={props.name}
                        />
                    </ListItem>
                </List>
            }
        </div>
    );
}
