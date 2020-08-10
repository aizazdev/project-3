import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FullDialog from './Dialog';
import useWebAnimations,{fadeInDown,flipInX

} from "@wellyshen/use-web-animations";
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
  const { ref} = useWebAnimations({...fadeInDown});
  const { ref2 } = useWebAnimations({...flipInX});
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
                      <h1 ref={ref} style={
                        {fontFamily: 'Roboto, sans-serif',
                          fontSize: "60px",
                          marginBottom: "-20px",
                          background: "black"
                      }
                      }>Wifi Based Irrigation System</h1>
                      <h3 ref={ref} style={
                        {fontFamily: 'Roboto, sans-serif',
                        fontSize: "25px",
                          fontWeight: "200",
                          marginTop: "-20",
                          background: "black",
                        }
                      }>Using Soil Moisture And Light Intesity Sensor</h3>
                      <FullDialog ref={ref2} type="moisture" btn="moisture Level"/>
                      <FullDialog type="light" btn="Intensity Level"/>
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
