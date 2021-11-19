import React from 'react'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './login.css'
const Login = () => {
    // const paperStyle = {padding: 20, height:'70vh', width: 300, margin: "20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    //const btnStyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation = {10} className="paperStyle" >
                    <Grid align='center'>
                        <Avatar style={avatarStyle} ><LockOutlinedIcon/></Avatar>
                        <br/>
                        <h2>Sign In</h2>
                    </Grid>
                    <br/>

                    <TextField label='UserName' placeholder="Enter UserName" fullWidth required/>
                    
                    <br/>
                    <TextField label='PassWord' placeholder="Enter Password" type="password" fullWidth required />
                    <br/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="CheckdB"
                                color="primary"
                            />
                        
                        } 
                        label ="Remember me"
                    
                    
                    />
                    <br/>

                    <Button type='submit' color='primary' variant="contained" className="btnStyle" fullWidth >
                        Sign in
                    </Button>
                    <Typography>
                        <Link href="#">
                            Forgot password
                        </Link>

                    </Typography>
                    
                    <Typography > Do you have an account ?
                        <Link href="#" >
                            Sign Up 
                        </Link>
                    </Typography>
                    
            </Paper>

        </Grid>
    )
}

export default Login
