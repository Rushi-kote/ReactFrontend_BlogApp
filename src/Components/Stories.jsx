import React, { Fragment} from "react";
// import Article from "./Article";
import './Stories.css';
import StoriesVertical from "./StoriesVertical";

const Stories = (props) => {
  // console.log("inside Stories  ",props.Data);
  // 

  return (
    <>
      <StoriesVertical data={props}/>
      <div className="flex-container">
        {
          
          props.Data[props.Heading] && props.Data[props.Heading].map((ele,index)=>{
            return(
              <Fragment key={index}>
                <div ><img src={ele.Link} width="150" height="150" alt='Img' ></img></div>
                {}
                <div >
                  <h6>Title :{ele.Title}</h6>
                  {ele.Production_comp == null ?" ": <p>World Wide Gross Income: {ele.WorldWideGross}</p>}
                  
                </div>
              </Fragment>
            )
          })
          // console.log("Props.data.map  ",props.Data{props.Heading})
          // console.log(`Props.data ${props}`)
        
          // console.log("props.Data[props.Heading]",props.Data[props.Heading]," Props",props.Data)
         
        }
      </div>
    </>

  );
};

export default Stories;
