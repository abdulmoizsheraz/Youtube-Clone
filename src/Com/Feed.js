import React,{useState,useEffect} from 'react'
import Slider from './Slider'
import Videos from './Videos'
// import fetchDataFromAPI from '../utl/fetchdata';

function Feed() {
  const[selectedCategory,setselectedCategory]=useState('New')
  const[videos,setVideos]=useState([])
  const[loading,setloading]=useState(true)
 
 // Fetching viddeos from Api 

 const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const fetchdata= async ()=>{
  setloading(true)
const response= await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${selectedCategory}&part=snippet%2Cid&regionCode=pk&maxResults=50&order=date`,options)
const data= await response.json();

const items = data.items;
setVideos(items)
setloading(false)
}

    useEffect(() => {
fetchdata();
    }, [selectedCategory])
    
    // Ending fetching videos from Ay
  return (
    <>
    <div className='feed-parent' >
      <div>
<Slider  setselectedCategory={setselectedCategory} selectedCategory={selectedCategory}/>
      </div>
<div>
<div className='NewVideos' style={{
  marginLeft:"50px"
}}>

 <h3 style={{
   "color":"black",
   "margin-left":"40px",
   "margin-top":"20px",
   "font-size":"50px"
  }}><span style={{
    "color":"white",
    "font-size":"40px"
  }}>{selectedCategory}</span> Videos</h3>
  </div>
<div className='fetchVideos'>
<Videos videos={videos} setVideos={setVideos} loading={loading} setloading={setloading}/>
</div>
</div>
    </div>

    </>
  )
}

export default Feed
