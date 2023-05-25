import React from 'react'
import ChannelCard from './ChannelCard';
import Loading from './loading'
import VideoCard from './VideoCard';
function Videos({videos,loading,setloading}) {
  console.log(videos)
  return (
<div class=""style={{display:"flex", flexWrap: 'wrap',margin:"34px",padding:"23px",alignItems:"center",color:"white"}}>
  {videos.map(({id:{videoId,channelId},snippet:{title,description,thumbnails:{high:{url}},channelTitle,publishTime}})=>(
    <div style={{display:"flex",justifyContent:"center"}}>

      {loading? <Loading/>:videoId? <VideoCard title={title} key={title} description={description}  channeltitle={channelTitle} videoId={videoId} time={publishTime} imageurl={url}/>:<ChannelCard/>}
     
    </div>
  ))}
</div>


  )
}

export default Videos