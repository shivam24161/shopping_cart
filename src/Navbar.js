import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserContext } from "./Mycontext";
import {useContext} from "react";

export default function Navbar(props) {
  const obj = useContext(UserContext);
// Dark Mode
const darkMode=()=>{
  obj.setColor("whitesmoke");
  obj.setbgColor("black");
  obj.setnavcolor("black");
  obj.setDisplaydark("none");
  obj.setDisplaylight("block");
}
// Light Mode
const lightMode=()=>{
  obj.setColor("black");
  obj.setbgColor("whitesmoke");
  obj.setnavcolor("#1976D2");
  obj.setDisplaydark("block");
  obj.setDisplaylight("none");
}
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:obj.navcolor}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <div className='inputBox'><input type="text" placeholder='Search by product name' onChange={props.search}/></div>
          <Button variant="contained" sx={{fontWeight:"bold",margin:"5px",display:obj.displaydark}} onClick={darkMode}>Enable Dark Mode</Button>
            <Button variant="contained" sx={{fontWeight:"bold",display:obj.displaylight}} onClick={lightMode}>Enable Light Mode</Button>
          <Link to="/"><Button sx={{color:"white",fontSize:"20px"}}><i className="fa fa-home" aria-hidden="true"></i></Button></Link>
          
          <Link to="/Cart" style={{textDecoration:"none"}}><Button sx={{color:"white",fontSize:"20px"}}><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="badge">{props.cartLen.length}</span></Button></Link>
          
          {props.userName.length > 0 ? <><p>{props.userName}</p><Button sx={{color:"white"}} onClick={props.logout}><i class="fa fa-sign-out" aria-hidden="true"></i></Button></>:
          <>
          <Link to="/login" style={{textDecoration:"none"}}><Button sx={{color:"white"}} >Login</Button></Link>
          <Link to="/signup" style={{textDecoration:"none"}}><Button sx={{color:"white"}} >SignUp</Button></Link>
          </>
          }

        </Toolbar>
      </AppBar>
    </Box>
    <div className='selectDiv' style={{backgroundColor:obj.bgColor,color:obj.color}}>
    <label>Sort By: </label>
      <select onChange={props.select}>
        <option value="lowtohigh">Price: Low to high</option>
        <option  value="hightolow">Price: high to low</option>
      </select>
    </div>
    </>
  );
}
