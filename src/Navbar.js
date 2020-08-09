import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    justifyContent: "center",
    borderBottom: "1px solid white",
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginLeft: "25px",
    fontFamily: 'Montserrat, sans-serif',
    fontSize: "16px",
    fontWeight: "500",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: "25px",
    fontFamily: 'Montserrat, sans-serif',
    fontSize: "16px",
    fontWeight: "500",
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const back = {
    background: "none",
    color: "white",
    boxShadow: "none" 
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={
        back
      }>
        <Toolbar className={classes.nav}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.link}>Home</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
             <Link to="/vegetable" className={classes.link}>About</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.link}>Info</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.link}>Random</Link> 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
