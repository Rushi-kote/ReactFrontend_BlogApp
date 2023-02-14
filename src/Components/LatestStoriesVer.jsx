import React,{Fragment} from 'react'
import "./LatestStoreisVer.css"

const LatestStoriesVer = (props) => {
  return (
    <div>
        <h2>Latest {props.Heading} Stories</h2> 
        <div className="flex-containerLSV">
            <div className="grid-container">
                {
                props.data.map((ele,index)=>{
                    return(
                    <Fragment key={index}>
                        <div className="grid-item"><img src={ele.Link} width="250" height="200"></img></div>
                        <div className="grid-item">
                        <h6>Title :{ele.Title}</h6>
                        <p>Production House : {ele.Production_comp}</p>
                        <p>Distributor : {ele.Distributor}</p>
                        <p>World Wide Gross Income: {ele.WorldWideGross}</p>
                        </div>
                    </Fragment>
                    )
                })
                // console.log(props)
                }
            </div>
        <div className='advertisement'>advertisement</div>
      </div>
    </div>
  )
}

export default LatestStoriesVer