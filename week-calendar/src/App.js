import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import 'react-calendar/dist/Calendar.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import CurrentDate from './components/CurrentDate';
import { useState } from 'react';
import TimeTable from './components/TimeTables';

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
      
      </main>
    </React.Fragment>
  );
}

export default App;
