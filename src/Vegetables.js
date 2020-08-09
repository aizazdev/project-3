import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent:"center"
    },
    vegetablearea: {
        color: "white",
        marginTop: "50px"
    }
  }));
  
function VegetableSection() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.vegetablearea}>
                <Grid container spacing={3}>
                  <Grid item xs={1}>
                  </Grid>
  
                  <Grid item xs={10} sm={6}>
                      <div className="vegetable-text">
                          <h1>Wellcome to<br /> smart and profitable irrigation</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                          <p>Sit amet consectetur adipisicing elit. Aliquid iste iusto reiciendis praesentium dolorem doloribus nisi architecto voluptatibus explicabo, possimus ullam quae illum maiores aperiam consequuntur.</p>

                         <p> Sit amet consectetur adipisicing elit. Aliquid iste iusto reiciendis praesentium dolorem doloribus nisi architecto voluptatibus explicabo, possimus ullam quae illum maiores aperiam consequuntur facere similique voluptatum.</p>             
                        <Button variant="contained" color="secondary">
                            Browse
                        </Button>
                        </div>
                  </Grid>
                  <Grid item xs={1}>
                  </Grid>
                </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    )
}

export default VegetableSection;