import React, { useEffect, useState } from 'react'

import Stories from '../Components/Stories';

const Hollywood = () => {
  // const Data =useContext(ContextData);
  const [Hollywood,setHollywood] = useState([{}])
  // console.log(Data.BollEntries);
 useEffect(()=>{

  fetch("https://blogapp-backend-z6hh.onrender.com/hollywood").then(res=>res.json()).then((data)=>{
    setHollywood(data);
  });

  // console.log(Hollywood);
 },[]);
 
  return (
    <div>Hollywood
      <Stories Data={Hollywood} Heading={"Hollywood"}/>
    </div>
  )
}

export default Hollywood