import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid, Typography, Container } from '@material-ui/core';
import TimeTable from '../components/TimeTable/TimeTable';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_EVENTS } from '../utils/queries';

const Home = () => {
  const [value, onChange, month] = useState(new Date());

  const data = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
          <Container maxWidth="xs">
            {loggedIn && (
              <Grid container spacing={4} justify="center">
              </Grid>
            )}
            {loggedIn && (    
              <Calendar
                onChange={onChange}
                value={value}
                view={month}
              />
            )}
            {loggedIn && (
              <Grid item>
                <Typography>{value.toDateString()}</Typography>
              </Grid>
            )}
          </Container>
          {loggedIn && (
            <TimeTable events={events}/>
          )}
        </div>
    </main>
  );
}

export default Home;
