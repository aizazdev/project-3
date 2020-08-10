import React, {useState, useEffect} from 'react';
import Firebase from 'firebase';
import fire from './Config';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    status: {
        textAlign: "center",
        fontSize: "70px",
        fontWeight: "900",
        fontFamily: 'Roboto, sans-serif',
        color: "silver" 
    }
}));

export default function FullDialog({type, btn}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const[value, setValue] = useState("");       
    
  useEffect(() => {
    const getUserData = async () => {
      let ref = Firebase.database().ref('/');
      ref.on('value', snapshot => {
        const state = snapshot.val();
        setValue(state);
      });
    }
    getUserData();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const style = {
      borderColor: "white",
      color: "white",
      fontFamily: 'Roboto, sans-serif'
  }
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={style}>
         {btn}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{(type === "moisture") ? "Soil Moisture" : "Light Intensity"} Level</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check your {(type === "moisture") ? "Soil Moisture" : "Light Intensity"} Level for better irrigation.
          </DialogContentText>
          <Typography className={classes.status}>
                {(type === "moisture") ? value.moisture : value.light}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
