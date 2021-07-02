import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from './Button';
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
    
    let times = ['nineAM', 'tenAM', 'elevenAM', 'twelvePM', 'onePM', 'twoPM', 'threePM', 'fourPM', 'fivePM']

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
            <Grid container>
                <Grid item xs={4} className="hour">
                    <Paper className={classes.paper}>9:00 AM</Paper>
                </Grid>
                <Grid item xs={4}>
                    <form className='add-form'>
                        <textarea name="nineAM" placeholder='Add event...' value={text.nineAM} onChange={handleChange}></textarea>
                    </form>
                </Grid>
                <Grid item xs={4}>
                    <Button value='nineAM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Grid>
            </Grid>
            {/* <Row>
                <Col className="hour">
                    <p>10:00 AM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="tenAM" placeholder='Add event...' value={text.tenAM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='tenAM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>11:00 AM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="elevenAM" placeholder='Add event...' value={text.elevenAM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='elevenAM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>12:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="twelvePM" placeholder='Add event...' value={text.twelvePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='twelvePM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>1:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="onePM" placeholder='Add event...' value={text.onePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='onePM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>2:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="twoPM" placeholder='Add event...' value={text.twoPM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='twoPM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>3:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="threePM" placeholder='Add event...' value={text.threePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='threePM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>4:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="fourPM" placeholder='Add event...' value={text.fourPM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='fourPM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>5:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="fivePM" placeholder='Add event...' value={text.fivePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button value='fivePM' color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row> */}
        </Container>
    )
}

export default TimeTable;
