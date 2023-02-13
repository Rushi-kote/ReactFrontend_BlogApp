import React, { Fragment } from "react";
import './Stories.css';

const Stories = (props) => {
  console.log(props.Data.entries[0].Link);
  const link = (links)=>{
    return links.Link;
  }
  return (
    <>
      <div className="grid-container">
        {
          props.Data.entries.map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div className="grid-item"><img src={ele.Link}></img></div>
                <div className="grid-item">
                  <h6>Title :{ele.Title}</h6>
                  <p>Production House : {ele.Production_comp}</p>
                  <p>Distributor : {ele.Distributor}</p>
                  <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                </div>
              </Fragment>
            )
          })
        }
      </div>
      <div className="grid-container-side">
        {
          props.Data.entries.map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div ><img src={link(ele)}></img></div>
                <div >
                  <h6>Title :{ele.Title}</h6>
                  <p>Production House : {ele.Production_comp}</p>
                  <p>Distributor : {ele.Distributor}</p>
                  <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </>

  );
};

export default Stories;
