import React from 'react'
import { Link } from 'react-router-dom';

export default function VideoCard({title,description,imageurl,channeltitle,videoId}) {

    const demourl="google.com"
  return (
    <div>

<Link  style={{textDecoration:"none"}} to={videoId?`/video/${videoId}`:demourl}>
<div className='videochild' style ={{ textDecoration:"none",marginBottom:"50px",display:"flex",flexDirection:"column",borderRadius:"12px",justifyContent:"center",alignItems:"center" ,width:"19vw",height:"40vh",margin:"12px",padding:"12px",boxShadow: "0 0 10px rgba(0,0,0,0.5)",background:"rgb(31, 31, 40)",}}>
  <img src={imageurl} style ={{height:"200px",width:"300px",borderRadius:"12px",marginBottom:"12px"}} alt="" />
<h4 className='videotitle' style={{textDecoration:"none!important",  fontSize:"25px",fontweight: "bold",color:"white"}}>{title.slice(0,50)}...</h4>
<p className='channeltitle' style={{color:"grey",textDecoration:"none"}}>{channeltitle}</p>
</div>
</Link>
    </div>
  )
}
 