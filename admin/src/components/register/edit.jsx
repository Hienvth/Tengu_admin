import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import FormProduct from './formProductEdit';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles ,Typography} from '@material-ui/core';

import Controls from "../control/Controls"


const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
       
    },
    dialogTitle: {
        paddingRight:'25px',
    }
})) 



export default function EditR() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon fontSize="small"/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
       
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
           
           <div style={{display:"flex"}}>
           <Typography variant="h4" component="div" style={{flexGrow :1}}>
           <div>Edit</div>
                
                    </Typography>
           <Controls.ActionButton
                color= "secondary"
                onClick= {() => setOpen(false)}>
                
                <CloseIcon/>
            </Controls.ActionButton>
           </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        <FormProduct/>
      </Dialog>
    </div>
  );
}
