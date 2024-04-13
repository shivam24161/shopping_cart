import React,{useState} from 'react'
export const UserContext = React.createContext();
const MyContext = (props) => {
    const [color,setColor]=useState();
    const [bgColor,setbgColor]=useState();
    const [navcolor,setnavcolor]=useState();
    const [displaylight,setDisplaylight]=useState("none");
    const [displaydark,setDisplaydark]=useState();

  return (
    <UserContext.Provider value={{color,setColor,bgColor,setbgColor,navcolor,setnavcolor,displaylight,setDisplaylight,displaydark,setDisplaydark}}>
    {props.children}
</UserContext.Provider>
  )
}
export default MyContext;