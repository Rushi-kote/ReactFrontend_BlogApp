import React from 'react'
import { useState,useEffect } from 'react';
import Stories from '../Components/Stories';

const Technology = () => {
  const [Technology,setTechnology] = useState([{}]);

  useEffect(()=>{
   fetch("http://localhost:3001/technology").then(res=>res.json()).then((data)=>{
     setTechnology(data);
   });
  },[]);
  return (
    <div>Fitness
      <Stories Data={Technology} Heading={"Technology"}/>
    </div>
  )
}

export default Technology