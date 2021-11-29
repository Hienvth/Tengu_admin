import React, {useState} from 'react'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from 'react-router-dom'

import './login.css'
import { render } from '@testing-library/react';
export default function Login() {

    let history = useHistory()
    let [username, setUsername]  = useState("")
    let [password, setPassword]  = useState("")
    // let [isLogin, setLogin] = useState(localStorage.getItem("accessToken") != null)


    let setParams = (event) => {
        if ( event.target.name == 'username') {
            setUsername(event.target.value)
        }
        if ( event.target.name == 'password') {
            setPassword(event.target.value)
        }

    }

    let login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        var requestoption = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect:'follow'
        };

        fetch("", requestoption)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }

                throw new Error(response.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem("accessToken", result.accessToken)
                //setLogin(true)
                history.replace("/admin")
            })
            .catch(error => {
                console.log('error', error)
                alert("Username, Password are wrong")
            });

    }
    



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
    
                        <TextField label='UserName' placeholder="Enter UserName"  
                        onChange={setParams} fullWidth required/>
                        
                        <br/>
                        <TextField label='PassWord' placeholder="Enter Password" type="password" onChange={setParams} fullWidth required />
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
    
                        <Button type='submit' color='primary' variant="contained" className="btnStyle" onClick={login} fullWidth >
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



