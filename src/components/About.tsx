import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function About() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
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
    );
}