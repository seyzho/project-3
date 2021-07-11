import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid, Typography, Container } from '@material-ui/core';
import TimeTable from '../components/TimeTable/TimeTable';
import AssociatesList from '../components/AssociatesList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_EVENTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const [value, onChange, month] = useState(new Date());

  const data = useQuery(QUERY_EVENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
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
          {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <AssociatesList
              username={userData.me.username}
              associateCount={userData.me.associateCount}
              associates={userData.me.associates}
            />
          </div>
        ) : null}
        </div>
    </main>
  );
}

export default Home;
