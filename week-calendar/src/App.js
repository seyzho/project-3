import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
      <main>
      <div>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              7/1/2021
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Add New Event
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Edit Event
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
