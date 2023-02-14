import React from 'react'
import {Routes , Route} from 'react-router-dom';
import { useState } from 'react';
import ContextData from './ContextApi';
import Bollywood from '.././Pages/Bollywood';
import Home from ".././Pages/Home";
import Hollywood from ".././Pages/Hollywood";
import Technology from ".././Pages/Technology";
import Food from ".././Pages/Food";
import Fitness from ".././Pages/Fitness";

const RouteLinks = () => {
  let bollywood = require('../JsonData/Bollywood.json');
  let hollywood = require('../JsonData/Hollywood.json');
  let fitness = require('../JsonData/Fitness.json');
  let technology = require('../JsonData/Technology.json');
  let [BollyData, SetBollyData] = useState(bollywood);
  let [HollyData, SetHollyData] = useState(hollywood);
  let [FitData, SetFitData] = useState(fitness);
  let [TechData, SetTechData] = useState(technology);
  return (
    <ContextData.Provider value={{BollEntries: BollyData,HollEntries:HollyData,FitEntries:FitData,TechEntries:TechData}}>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/bollywood" element={<Bollywood/>}> </Route>
        <Route path="/hollywood" element={<Hollywood/>}> </Route>
        <Route path="/technology" element={<Technology/>}> </Route>
        <Route path="/fitness" element={<Fitness/>}> </Route>
        <Route path="/food" element={<Food/>}> </Route>
      </Routes>
    </ContextData.Provider>
  )
}

export default RouteLinks