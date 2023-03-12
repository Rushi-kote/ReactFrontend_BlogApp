import React, { useEffect, useState } from 'react'
import LatestStories from '../Components/LatestStories'
import LatestStoriesVer from '../Components/LatestStoriesVer';
import './Home.css'


const Home = () => {

  const [bollywood,setBollywood] = useState([{}]);
  const [fitness,setFitness] = useState([{}]);
  const [technology,setTechnology] = useState([{}]);
  const [hollywood,setHollywood] = useState([{}]);
  const [food,setFood] = useState([{}]);

  useEffect(()=>{
    fetch("https://blogapp-backend-z6hh.onrender.com/").then(res => res.json()).then(data=>{
      setBollywood(data.Bollywood);
      setHollywood(data.Hollywood);
      setTechnology(data.Technology);
      setFitness(data.Fitness);
      setFood(data.Food);
    });
  },[]);
  return (
    <div>
      <div className='grid-containerHome'>
        <div className='grid-item1'></div>
        <div className='grid-item2'></div>
        <div className='grid-item3'></div>
      </div>
      <LatestStories data={fitness} Heading="Sport"/>
      <LatestStories data={technology} Heading="Technology"/>
      <LatestStoriesVer data={bollywood} Heading="Bollywood"/>
      <LatestStoriesVer data={hollywood} Heading="Hollywood"/>
      <LatestStories data={food} Heading="Food"/>
    </div>
  )
}

export default Home



