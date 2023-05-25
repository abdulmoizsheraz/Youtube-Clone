import React from 'react'
import NullThumbnail from '../img/blankthumnail.png'
const loading = () => {
  return (
    <div className='videochild' style ={{marginBottom:"50px",display:"flex",flexDirection:"column",borderRadius:"12px",justifyContent:"center",alignItems:"center" ,width:"19vw",height:"40vh",margin:"12px",padding:"12px",boxShadow: "0 0 10px rgba(0,0,0,0.5)",background:"rgb(31, 31, 20)"}}>
    <img src={NullThumbnail}style ={{height:"200px",width:"300px",borderRadius:"12px",marginBottom:"12px"}}alt="" />
    <h4 className='videotitle' style={{fontSize:"25px",fontweight: "900" ,background:"black"}}>          </h4>
    <p className='channeltitle' style={{color:"grey",background:"black"}}>        </p>
    </div>
  )
}

export default loading