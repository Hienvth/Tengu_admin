import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
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

export default function Views(props) {
    const {title, children, openFormR, setOpenFormR} = props;
    const classes = useStyles();
    return (
        
        <Dialog open={openFormR} maxWidth="lg" >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display:'flex'}}>
                    <Typography variant="h4" component="div" style={{flexGrow :1}}>
                         <div>Create New Product</div>
                
                    </Typography>
                    
                    <Controls.ActionButton
                        color= "secondary"
                        onClick= {() => setOpenFormR(false)}>
                        
                        <CloseIcon/>
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>

    )
}
