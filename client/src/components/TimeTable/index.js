import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import EventForm from '../EventForm';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const TimeTable = () => {
    const classes = useStyles();

    let times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
    
    return (
        <Container className="time-block">
            <Grid container>
                <Grid item xs={4}>
                    <Paper  className={classes.paper}>Time</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper  className={classes.paper}>Event</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper  className={classes.paper}>Save Your Event</Paper>
                </Grid>
            </Grid>

            {
            
            times.map((time => {
                return (<Grid container key={time}>
                <Grid item xs={4} className="hour">
                    <Paper className={classes.paper}><Link to="/eventlist">{time}</Link></Paper>
                </Grid>
                <Grid item xs={8}>
                    <EventForm/>
                </Grid>
                
            </Grid>)
            }
                ))}
        </Container>
    )
}

export default TimeTable;
