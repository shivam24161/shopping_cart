import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from "./Mycontext";
import {useContext} from "react";

const Signup = (props) => {
  const obj = useContext(UserContext);
  return (
    <>
    <div style={{backgroundColor:obj.bgColor,height:"100vh"}}>
    <div className="signupDiv1">
        <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="gif"/>
      </div>
      <div className='signupDiv2'>
     <div>
     <TextField
        label="Name"
        variant="filled"
        id="name"
        sx={{margin:"2%",width:"30%",backgroundColor:"white"}} 
        required/>
      </div>
      <div>
      <TextField
        label="Email"
        variant="filled"
        id="email"
        sx={{margin:"2%",width:"30%",backgroundColor:"white"}} 
        required/>
      </div>
      <div>
      <TextField
        label="Password" 
        variant="filled"
        id="password"
        type="password"
        sx={{margin:"2%",width:"30%",backgroundColor:"white"}}
        required/>
      </div>
      <div>
      <TextField
        label="Mobile" 
        variant="filled"
        id="mobile"
        sx={{margin:"2%",width:"30%",backgroundColor:"white"}}
        required/>
      </div>
      <div>
      <Button type="submit" variant="contained" color="primary" sx={{margin:"2%",width:"15%"}} onClick={props.signup}>
          Create account
        </Button>
        <p style={{color:obj.color,margin:"2%"}}>Already have an account ? <Link to="/login">Login</Link></p>
      </div>
      </div>
      </div>
  </>);
};
export default Signup;