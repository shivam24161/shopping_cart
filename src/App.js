import './App.css';
import React, { useState,useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import products from './Products';
import { Cart } from './Cart';
import Navbar from './Navbar';
import { Login } from './Login';
import Signup from './Signup';

function App() {

  const [storeProducts,setstoreProducts]=useState([]);
  const [userDetail,setuserDetail]=useState([]);
  const [loggedin,setloggedin]=useState(false);
  const [userEmail,setuserEmail]=useState('');
  const [flag,setflag]=useState("none");
  const [searchProduct,setsearchProduct]=useState([]);
  const [product,setProducts]=useState([]);

  // Adding to cart
  const addToCart=(event)=>{
    let id=event.target.id;
    let img=event.target.parentElement.parentElement.firstChild.firstChild.src;
    let name=event.target.parentElement.parentElement.firstChild.firstChild.nextSibling.firstChild.innerHTML;
    let price=parseInt(event.target.parentElement.parentElement.firstChild.firstChild.nextSibling.firstChild.nextSibling.innerHTML.slice(8));
    const prodArr={"id":id,"image":img,"name":name,"price":price,"quantity":1,"total":price}
    // Checking if product exists in cart or not
    var flag=0
    storeProducts.map((i)=>{
      if(i.id === id){
        flag=1;
      }
    })
    if(flag === 1){
      alert("Product already exist in your cart!");
    }
    else{
      setstoreProducts([...storeProducts,prodArr]);
    }
  }
  
  // Signup
  const userSignup=()=>{
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let mobile=document.querySelector("#mobile").value;

    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if(name === "" || email === "" || mobile === "" || password === ""){
      alert("Please provide the input");
    }
    else if(!filter.test(email)){
      alert('Please provide a valid email address!');
    }

    else if(!isNaN(name)){
      alert("Please provide valid name!");
    }
    else if(isNaN(mobile)){
      alert("Please provide valid mobile number!");
    }
    else{
    let userArr={"name":name,"email":email,"password":password,"mobile":mobile};
    // Checking if user already exist
    const isFound=userDetail.some(value =>{
      if(value.email === email){
        return true
      }
      return false
    })
    // if exist
    if(isFound){
      alert("Email-id already exist! , Please do login or use another email-id");
    }
    // if not exist
    else{
    setuserDetail([...userDetail,userArr]);
    alert("Account created successfully . Please proceed to login!");
    }
  }
  }

  // Login
  const userLogin=()=>{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    if(email === "" || password === ""){
      alert("Please provide input")
    }
    else{
    const isFound=userDetail.some(value=>{
      if(value.email === email && value.password === password){
        return true;
      }
      return false;
    })
    if(isFound){
      setuserEmail(email);
      setloggedin(true);
    }
    else{
      alert("Details not matched. Please try again!");
    }
  }
  }

  // Increase Quantity
  const Increase=(event)=>{
    let id=event.target.id;
    storeProducts.map((i)=>{
      if(i.id === id){
        i.quantity = i.quantity + 1;
        i.total = i.quantity * i.price;
        setstoreProducts([...storeProducts]);
      }
    })
  }

  // Decrease Quantity
  const Decrease=(event)=>{
    let id=event.target.id;
    storeProducts.map((i)=>{
      if(i.id === id){
        if(i.quantity > 1){
        i.quantity = i.quantity - 1;
        i.total = i.quantity * i.price;
        setstoreProducts([...storeProducts]);
      }
    }
    })
  }

  // Deleting the items
  const deleteItems=(event)=>{
    let id=event.target.parentElement.id;
    const store=storeProducts.filter((i)=>i.id !== id)
    setstoreProducts([...store]);
  }

  // logout
  const userLogout=()=>{
    setuserEmail(0);
    setloggedin(false);
  }

  // Checkout
  const checkout=()=>{
    setflag("none");
    setstoreProducts([]);
    alert("Thank You , Your order has been placed!");
  }
  // Generate Bll
  const generateBill=()=>{
    if(loggedin === false){
      alert("Please login first!")
    }
    else{
      setflag("block");
    }
}
//  Search product
const search=(event)=>{
  let txt=event.target.value.toLowerCase();
  var temp=[];
  products.map((i)=>{
    var name=i.name.toLowerCase();
    if(name.includes(txt)){
      temp.push(i);
      setProducts(temp);
    }
  })
}

// Sorting the products 
const select=(event)=>{
  let selectprice=event.target.value;
  if(selectprice === "lowtohigh"){
  var sortedlow=products.sort(function(a,b){return a.price - b.price});
  setProducts([...sortedlow]);
  }
  else if(selectprice === "hightolow")
  {
    var sortedhigh=products.sort(function(a,b){return b.price - a.price});
    setProducts([...sortedhigh]);
  }
}

useEffect(()=>{
  setProducts([...products])
},[])

  return (
    <>
    <Navbar userName={userEmail} cartLen={storeProducts} logout={userLogout} search={search} select={select}/>
      <Routes>
          <Route path="/" element={<Home data={product} add={addToCart} search={searchProduct} />}/>
          <Route path='/cart' element={<Cart cartArray={storeProducts} increase={Increase} decrease={Decrease} del={deleteItems} userCheckout={checkout} flag1={flag} generate={generateBill}/>}/>
          <Route path="/login" element={<Login login={userLogin} checkLoggedIn={loggedin}/>}/>
          <Route path="/signup" element={<Signup signup={userSignup}/>}/>
      </Routes>
    </>
  );
}
export default App;
