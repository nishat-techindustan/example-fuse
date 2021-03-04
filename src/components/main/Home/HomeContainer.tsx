import React, { useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'

import LineChart from '../../Chart/LineChart'
import BarChart from '../../Chart/BarChart'
import Map from '../../Mapbox/Mapbox'
import DataTable from '../../Table/DataTable'
import { locationData } from '../../../Data/Data'

const HomeContainer = () => {
    const columns = useMemo(() => Object.keys(locationData[0]).map(head => ({ accessor: head, Header: head.toUpperCase() })), [])
    const rows = useMemo(() => locationData.map(head => ({ ...head, ['location(lng/lat)']: head['location(lng/lat)'].join(',') })), [])
    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box my={4}>
                    <Paper elevation={4}>
                        <Map />
                    </Paper >
                </Box>
                <Box my={4}>
                    <Paper elevation={4}>
                        <DataTable heading='Users table' columns={columns} rows={rows} />
                    </Paper >
                </Box>
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
                <Box my={2}>
                    {[...new Array(100)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default HomeContainer
