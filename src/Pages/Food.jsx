import React from 'react'
import { useContext } from 'react';
import ContextData from '../Components/ContextApi';
import Stories from '../Components/Stories';

const Food = () => {
  const Data =useContext(ContextData);
  console.log(Data.BollEntries);
  return (
    <div>Food
      <Stories Data={Data.HollEntries}/>
    </div>
  )
}

export default Food