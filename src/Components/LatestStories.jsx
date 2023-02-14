import React from 'react'
import './LatestStories.css'

const LatestStories = (props) => {
    console.log("Props  ",props);
  return (
    <>
        <h2>Latest {props.Heading} Stories</h2>       
        <div className='flex-containerLatestStories'>
            {
                props.data.map((ele,index)=>{
                    return (
                        <div className="flex-items" key={index}>
                            <img width="200px" src={ele.Link} style={{borderRadius:"10px"}}></img> 
                            <h3 style={{color:"#808080"}}>{ele.Title}</h3>
                    </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default LatestStories