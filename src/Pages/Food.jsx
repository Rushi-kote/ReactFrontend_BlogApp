import React from 'react'
import { useState,useEffect } from 'react';
// import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Food = () => {
  // const Data =useContext(ContextData);
  // console.log(Data);

  const [Food,setFood] = useState([{}]);

  useEffect(()=>{
   fetch("https://blogapp-backend-z6hh.onrender.com/food").then(res=>res.json()).then((data)=>{
     setFood(data);
   });
  },[]);

  return (
    <div>Food
      <Stories Data={Food} Heading={"Food"}/>
    </div>
  )
}

export default Food