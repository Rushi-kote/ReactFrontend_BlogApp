// import React, { useContext } from 'react'
import Stories from '../Components/Stories'
import { useState,useEffect } from 'react';
// import ContextData from '../Components/ContextApi'

const Bollywood = () => {
  // const Data =useContext(ContextData);
  // console.log(Data.BollEntries);
  const [Bollywood,setBollywood] = useState([{}]);

 useEffect(()=>{
  fetch("http://localhost:3001/bollywood").then(res=>res.json()).then((data)=>{
    setBollywood(data);
  });

  // console.log(Hollywood);
 },[]);
  return (
    <div>
      <h4>Movies</h4>
      <Stories Data={Bollywood} Heading={"Bollywood"}/>
    </div>
  )
}

export default Bollywood