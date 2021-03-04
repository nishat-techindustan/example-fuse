import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Map from '../../Mapbox/Mapbox'
import LineChart from '../../Chart/LineChart'
import BarChart from '../../Chart/BarChart'
import RadarChart from '../../Chart/RadarChart'
import PieChart from '../../Chart/PieChart'
import Table from '../../Table/Table'

export default function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Paper elevation={4}>
                            <Table />
                        </Paper >
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={6} >
                        <Paper elevation={4}>
                            <LineChart />
                        </Paper >
                    </Grid>
                    <Grid item md={6} >
                        <Paper elevation={4}>
                            <BarChart />
                        </Paper >
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={6} >
                        <Paper elevation={4}>
                            <RadarChart />
                        </Paper >
                    </Grid>
                    <Grid item md={6} >
                        <Paper elevation={4}>
                            <PieChart />
                        </Paper >
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}