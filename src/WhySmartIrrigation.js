import React from 'react';

import Grid from '@material-ui/core/Grid';
import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png';
import Icon3 from './images/icon3.png';



function WhySmartIrrigation() {

    return(
        <div className="whysmartirrigation-area">
           
              <Grid container item spacing={5}>
                    <Grid xs={1} sm={1}></Grid>
                  <Grid xs={10} sm={2}>
                        <h1>Why Smart Irrigation</h1>
                   </Grid>

                  <Grid item xs={10} sm={3}>
                      <img src={Icon3} alt="icon for time"></img>
                    <h3>Time Saving</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </Grid>
                  <Grid item xs={10} sm={3}>
                    <img src={Icon1} alt="icon for effort"></img>
                    <h3>Less Effort</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </Grid>
                  <Grid item xs={10} sm={3}>
                    <img src={Icon2} alt="icon for revenue"></img>
                    <h3>More Revenue</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </Grid>
                  <Grid xs={1} sm={1} ></Grid>       
            </Grid>
        </div>
    )
}
export default WhySmartIrrigation;