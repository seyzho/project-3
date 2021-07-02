import { format } from 'date-fns';
import { Grid, Typography } from '@material-ui/core';

const CurrentDate = () => {
    const showDay = format(new Date(), 'cccc');
    const showDate = format(new Date(), "LLLL d, yyyy");
    let dayDisplay = JSON.stringify(showDay);
    let dateDisplay = JSON.stringify(showDate);

    return (
        <Grid container 
        direction="row"
        justify="center"
        alignItems="center">
            <Grid container>
                <Typography>{dayDisplay}</Typography>
            </Grid>
            <Grid container>
                <Typography>{dateDisplay}</Typography>
            </Grid>
            <Grid container>
            </Grid>
        </Grid>
    )
}

export default CurrentDate;
