import { Dialog, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
})) 

export default function FormRegister(props) {
    const {title, children, openFormR, setOpenFormR} = props;
    const classes = useStyles();
    return (
        
        <Dialog open={openFormR} maxWidth="md" className={classes.dialogWrapper}>
            <DialogTitle>
                <div>Create New Product</div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>

    )
}
