import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CurrentDate from '../components/CurrentDate';
import { useState } from 'react';
import TimeTable from '../components/TimeTable/TimeTable';



const Home = () => {
  const [value, onChange, month] = useState(new Date());
  return (
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
  );
}

export default Home;
