import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { UserContext } from "./Mycontext";
import {useContext} from "react";

export function Login(props) {
  const obj = useContext(UserContext);
  return (
    <>
    {props.checkLoggedIn && (<Navigate to="/" replace="true"/>)}
    <div style={{backgroundColor:obj.bgColor,height:"100vh",paddingTop:"5vh"}} >
    <div className='cartDiv' style={{backgroundColor:obj.bgColor}}>
    <div>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        align:"center",
        padding:"3%",
        backgroundColor:"white"
      }}
    >
      <TextField
        helperText="Please enter your email"
        className="demo-helper-text-aligned"
        id="email"
        label="Email"
        />
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        paddingLeft:"3%",
        backgroundColor:"white"
      }}
    >
      <TextField
        helperText="Please enter your password"
        className="demo-helper-text-aligned"
        id="password"
        type="password"
        label="Password"
        />
    </Box>
    <Button variant='contained' sx={{width:"35vh",marginLeft:"4%",marginTop:"2vh"}} onClick={props.login}>Login</Button>
    <p style={{color:"white"}}>Not have an account ? <Link to="/signup">Create account</Link></p>
    </div>
    <div>
    <img src="https://images.squarespace-cdn.com/content/v1/55e06d0ee4b0718764fcc921/1507805805238-M8XG4RMCMWITZ7LJGEEF/slidebank+login.gif" alt="gif" style={{marginLeft:"10vh"}}/>
    </div>

    </div>
    </div>
    </>
  );
}
