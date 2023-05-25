import React,{useState} from 'react'
import Categories from './Category'
function Slider({selectedCategory,setselectedCategory}) {

  return (
    
  <div className='feed' style={{background:"black"}}>

    {Categories.map((category)=>(
    <div key={category.name}>

 <button className=''  style={{
   padding: "7px 25px",
   width:"13vw",
       margin: "14px",
       "border-radius": "24px",
       background: category.name===selectedCategory?"red":"black",
       color: "white",

 }} onClick={()=>{setselectedCategory(category.name)}}>
  <span style={{margin:"3px"}}>{category.icon}</span>
  <span style={{margin:"3px"}}>{category.name}</span>
</button>
</div>
))}
  </div>
  )
}

export default Slider