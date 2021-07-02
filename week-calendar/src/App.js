import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import CurrentDate from './components/CurrentDate';
import { useState } from 'react';

function App() {
  const [value, onChange, month] = useState(new Date());
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
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <CurrentDate/>
                </Grid>
              </Grid>
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
            <Grid container>
              <Grid item>
                <Calendar
                  onChance={onChange}
                  value={value}
                  view={month}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
