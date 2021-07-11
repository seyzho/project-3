import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../../utils/mutations';
import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';

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

    const [eventText, setText] = useState({
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
    const [characterCount, setCharacterCount] = useState(0);

    
  const [addEvent, { error }] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { events } = cache.readQuery({ query: QUERY_EVENTS });
        cache.writeQuery({
          query: QUERY_EVENTS,
          data: { events: [addEvent, ...events] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, events: [...me.events, addEvent] } }
      });
    }
  });

    const handleChange = event => {
    if (event.target.value.length <= 280) {
        setText(event.target.value);
        setCharacterCount(event.target.value.length);
    }
    };
        
    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
        await addEvent({
            variables: { eventText }
        });
        // clear form value
        setText('');
        setCharacterCount(0);
        } catch (e) {
        console.error(e);
        }
    };

    let times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

    // times.forEach(getLocalStorage);

    // function getLocalStorage(item, index) {
    //     const value = localStorage.getItem(item);
    //     if (value) {
    //         text[item] = value;
    //     }
    // }

    // const onClick = (e) => {
    //     const value = e.target.value;
    //     localStorage.setItem(value, text[value])
    // }
    
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
                    <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                        Character Count: {characterCount}/280
                        {error && <span className="ml-2">Something went wrong...</span>}
                    </p>
                    <form className='add-form' onSubmit={handleFormSubmit}>
                        <textarea name={time} placeholder='Add event...' value={eventText.time} onChange={handleChange}></textarea>
                        <Button value={time} color='steelblue' text='Save' height='100px' type='submit'/>
                    </form>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>)
            }
                ))}
        </Container>
    )
}

export default TimeTable;
