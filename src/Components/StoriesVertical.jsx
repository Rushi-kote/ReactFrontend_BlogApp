import React, { Fragment } from 'react'
import './Stories.css';

const StoriesVertical = (props) => {
  return (
    <div className="grid-container">
        {
          props.data.Data.map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div className="grid-item"><img src={ele.Link} width="250" height="200"></img></div>
                <div className="grid-item">
                  
                  {
                    ele.Production_comp == null ? <h4 style={{color:"grey"}}>Title :{ele.Title}</h4> :(
                      <>
                        <h6>Title :{ele.Title}</h6>
                        <p>Production House : {ele.Production_comp}</p>
                        <p>Distributor : {ele.Distributor}</p>
                        <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                      </>
                    )
                  }

                </div>
              </Fragment>
            )
          })
          // console.log(props)
        }
      </div>
  )
}

export default StoriesVertical