import React from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UserContext } from "./Mycontext";
import {useContext} from "react";

export const Cart = (props) => {
  const obj = useContext(UserContext);
    // Showing total bill
    var temp=0; 
    props.cartArray.map((data)=> temp+=(data.total)) 
  return (
    <>
    {props.cartArray.length === 0 ? 
    <div style={{paddingLeft:"40vh",paddingTop:"15vh",backgroundColor:obj.bgColor,height:"100vh"}}><img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="gif"/>
    <h2 style={{paddingLeft:"10vh",color:obj.color}}><i>ooh ,Your cart is empty!</i></h2></div> :<>
    <h1 className='heading' style={{backgroundColor:obj.bgColor,color:obj.color}}>Your Cart Items:</h1>
    <TableContainer sx={{backgroundColor:obj.bgColor,color:obj.color}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Id</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Name</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Image</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Price</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Quantity</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Total Price</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cartArray.map((row,index) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" sx={{backgroundColor:obj.bgColor,color:obj.color}}>
                {index + 1}
              </TableCell>
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>{row.name}</TableCell>
              <TableCell><img src={row.image} alt="img" style={{width:"20%",height:"20%"}}/></TableCell>
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>{row.price}</TableCell>
              
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}><span><button onClick={props.decrease} id={row.id}>-</button> </span>{row.quantity} <button onClick={props.increase} id={row.id}>+</button></TableCell>
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>{row.total}</TableCell>
              <TableCell><button id={row.id} onClick={props.del} ><i className="fa fa-trash" aria-hidden="true"></i></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>}
    {/* Generating Bill */}
    {props.cartArray.length > 0 ? 
    <Button variant='contained' sx={{marginLeft:"4%",marginTop:"2%"}} onClick={props.generate}>Generate Bill</Button> : ""}
    <TableContainer style={{display:props.flag1}} sx={{backgroundColor:obj.bgColor,color:obj.color}}  >
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Name</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Price</TableCell>
            <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cartArray.map((row,index) => (
            <TableRow
              key={row.name}
            >
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}><span>{index + 1}. </span>{row.name}</TableCell>
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>{row.price}</TableCell>
              <TableCell sx={{backgroundColor:obj.bgColor,color:obj.color}}>{row.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow >
            <TableCell style={{fontWeight:"bold"}} sx={{backgroundColor:obj.bgColor,color:obj.color}}>Total amount to pay : {temp}</TableCell>
            <TableCell><button onClick={props.userCheckout} className='checkoutbtn'>Proceed to checkout</button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
