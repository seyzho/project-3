import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid, Typography, Container } from '@material-ui/core';
import TimeTable from '../components/TimeTable/TimeTable';



const Home = () => {
  const [value, onChange, month] = useState(new Date());
  return (
      <div>
          <Container maxWidth="xs">
              <Grid container spacing={4} justify="center">
                <Calendar
                  onChange={onChange}
                  value={value}
                  view={month}
                />
              </Grid>
              <Grid item>
                <Typography>{value.toDateString()}</Typography>
              </Grid>
          </Container>
          <TimeTable/>
        </div>
  );
}

export default Home;
