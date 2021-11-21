import React from 'react'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './changePass.css'
const ChangePass = () => {
    //const paperStyle = {padding: 20, height:'70vh', width: 300, margin: "20px auto"}
    //const btnSC = {}
    return (
        <Grid>
            <Paper elevation = {10} className="paperStyle" >
                    <Grid align='center'>
                        <Avatar><LockOutlinedIcon/></Avatar>
                        <br/>
                        <h2>Change Password</h2>
                    </Grid>

                    <br/>
                    <TextField label='PassWord' placeholder="Enter Password" type="password" fullWidth required />
                    <br/>
                    
                    <TextField label='New PassWord' placeholder="Enter New Password" type="password" fullWidth required />
                    <br/>
                    <TextField label='PassWord Confirm' placeholder="" type="Enter New Password" fullWidth required />

{/* 
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="CheckdB"
                                color="primary"
                            />
                        
                        } 
                        label ="Remember me"
                    
                    
                    /> */}

                    <br/>
                    <br/>
                    <br/>
                    
                    <Grid className="btnSC">
                            
                        <Button className="bt" type='submit' color='primary' variant="contained"  >
                            Save
                        </Button>
                        {/* <Button className="bt" type='submit' color='green' variant="contained"  >
                            Cancel
                        </Button> */}
                    </Grid>
                    
                    
            </Paper>

        </Grid>
    )
}

export default ChangePass
