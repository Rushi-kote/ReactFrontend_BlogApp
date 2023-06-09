import React from 'react'
import { useState,useEffect } from 'react';
// import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Fitness = () => {
  // const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  
  const [Fitness,setFitness] = useState([{}]);

  useEffect(()=>{
   fetch("https://blogapp-backend-z6hh.onrender.com/fitness").then(res=>res.json()).then((data)=>{
     setFitness(data);
   });
  },[]);
  return (
    <div>Fitness
      <Stories Data={Fitness} Heading={"Fitness"}/>
    </div>
  )
}

export default Fitness