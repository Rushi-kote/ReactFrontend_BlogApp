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
  let [Data, SetData] = useState([
    {
      Title:"Brahmāstra: Part One – Shiva",
      Link:"https://en.wikipedia.org/wiki/File:Brahmastra_Teaser.jpeg",
      Production_comp : "Dharma Productions ,Star Studios,Prime Focus, Starlight Pictures",
      Distributor : "Walt Disney Studios Motion Pictures",
      WorldWideGross: "₹431 crore (US$54 million)"
    },
    {
      Title:"Drishyam 2",
      Link:"https://en.wikipedia.org/wiki/File:Drishyam_2_2022_film_poster.jpg",
      Production_comp : "Panorama Studios, Viacom18 Studios, T-Series Films",
      Distributor : "Panorama Studios",
      WorldWideGross: "₹343.42 crore (US$43 million)"
    },
    {
      Title:"	The Kashmir Files",
      Link:"https://en.wikipedia.org/wiki/File:Drishyam_2_2022_film_poster.jpg",
      Production_comp : "Zee Studios, Abhishek Agarwal Arts",
      Distributor : "Zee Studios",
      WorldWideGross: "₹340.92 crore (US$43 million)"
    },
    {
      Title:"Bhool Bhulaiyaa 2",
      Link:"https://www.bing.com/ck/a?!&&p=f424dbf6d9fecac6JmltdHM9MTY3NjE2MDAwMCZpZ3VpZD0wYzk0ODliYS03OWJlLTY3OGYtMjNiMi05YmZjNzgwYzY2ZmUmaW5zaWQ9NTUyMQ&ptn=3&hsh=3&fclid=0c9489ba-79be-678f-23b2-9bfc780c66fe&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZSZGT1JNPUlRRlJCQSZpZD1BQUQ3OUM3Q0MyRjZENzgxNTQ3M0RDMzI3RUI1RDY5NDFFNTlDRTNF&ntb=1",
      Production_comp : "T-Series Films, Cine1 Studios",
      Distributor : "AA Films",
      WorldWideGross: "	₹266.88 crore (US$33 million)"
    }
  ]);
  return (
    <ContextData.Provider value={{entries: Data,UpdateFunction:SetData}}>
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