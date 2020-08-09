import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeroImg from './images/hero-2.jpg';
import Logo from './images/logo-2.png';
import {Link} from 'react-router-dom';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:"center"
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.heroArea}>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={8}>
                  <div style={{
                    textAlign: "center",
                    fontFamily: 'Montserrat, sans-serif',
                    color: "white",
                    marginTop: "120px"
                  }}>
                      <h1 style={
                        {fontFamily: 'Roboto, sans-serif',
                          fontSize: "60px",
                          marginBottom: "-20px",
                          background: "black"
                      }
                      }>Wifi Based Irrigation System</h1>
                      <h3 style={
                        {fontFamily: 'Roboto, sans-serif',
                        fontSize: "25px",
                          fontWeight: "200",
                          marginTop: "-20",
                          background: "black",
                        }
                      }>Using Soil Moisture And Light Intesity Sensor</h3>
                      <Button variant="contained" color="secondary">
                        <Link to="/moisture" className="btnLink">Moisture Level</Link>
                    </Button>
                    <Button variant="contained" color="secondary">
                       <Link to="/intensity" className="btnLink">Intensity Level</Link>
                    </Button>
                  </div>
                 </Grid>
                <Grid item xs={2}>
                </Grid>
              </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
