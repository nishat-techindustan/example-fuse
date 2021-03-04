import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'

import LineChart from '../components/Chart/LineChart'
import BarChart from '../components/Chart/BarChart'
import Map from '../components/Mapbox/Mapbox'

import HomeContainer from '../components/main/Home/HomeContainer'

const Home = () => {
    return (
        <React.Fragment>
            <HomeContainer />
        </React.Fragment>

    )
}

export default Home
