import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles/MaterialClasses/CardContainer';

interface Props {
    comp: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    text?: string
    children?: React.ReactChild
}

const CardContainer = (props: Props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" color="primary" component={props.comp}>
                    {props.text}
                </Typography>
            </CardContent>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default CardContainer
