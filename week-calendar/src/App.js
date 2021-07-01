import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';



function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default App;
