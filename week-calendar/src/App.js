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
import TimeTable from './components/TimeTables';

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
          <Container maxWidth="xs">
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <CurrentDate/>
                </Grid>
              </Grid>
                <Calendar
                  onChance={onChange}
                  value={value}
                  view={month}
                />
          </Container>
          <TimeTable/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
