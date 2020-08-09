import React from 'react';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './images/logo.png';

const useStyles = makeStyles((theme) => ({
   
}));
function Intesity() {
    const classes = useStyles();
    return(
        <div className="intesity-area">
        <Navbar />
        <Grid container spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} sm={5}>
                <h3>Intesity Level</h3>
                <h1>45%</h1>
            </Grid>
            <Grid item xs={8} sm={3}>
                <img src={Logo} height="400px"></img>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    </div>
    )
}
export default Intesity;