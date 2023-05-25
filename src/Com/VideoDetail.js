import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail,setVideoDetail] = useState({})
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(res => res.json())
    .then(data => setVideoDetail(data.items[0]))
  },[id])
  
  const {snippet:{title}}=videoDetail;
  
  return (
 
    <div class="container1">
   <div class="video-container" style={{ width: "60vw", height: "70vh" ,marginLeft:"80px",marginTop:"50px"}}>
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${id}`}
    className="react-player"
    controls
    width="100%"
    height="100%"
  />
<div className="videodetail">
  {title}
</div>

</div>

      <div class="suggested-videos">
        {/* <!-- Suggested videos code goes here --> */}
      </div>
    <div class="comments">
      {/* <!-- Comments section code goes here --> */}
    </div>
  </div>
  
 
 

  )
}

export default VideoDetail