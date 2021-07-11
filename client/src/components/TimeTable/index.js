import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

    const [text, setState] = useState({
        nineAM: "",
        tenAM: "",
        elevenAM: "",
        twelvePM: "",
        onePM: "",
        twoPM: "",
        threePM: "",
        fourPM: "",
        fivePM: "",
    })
    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...text,
            [e.target.name]: value
        });
    }
    
    let times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

    times.forEach(getLocalStorage);

    function getLocalStorage(item, index) {
        const value = localStorage.getItem(item);
        if (value) {
            text[item] = value;
        }
    }

    const onClick = (e) => {
        const value = e.target.value;
        localStorage.setItem(value, text[value])
    }
    
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
                return (<Grid container key={time._id}>
                <Grid item xs={4} className="hour">
                    <Paper className={classes.paper}>{time}</Paper>
                </Grid>
                <Grid item xs={4}>
                    <form className='add-form'>
                        <textarea name={time} placeholder='Add event...' value={text.time} onChange={handleChange}></textarea>
                    </form>
                </Grid>
                <Grid item xs={4}>
                    <Button value={time} color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Grid>
            </Grid>)
            }
                ))}
        </Container>
    )
}

export default TimeTable;
