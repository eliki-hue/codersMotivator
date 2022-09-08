import React from 'react'
import Cardimage from "./Cardimage"
import review1 from "../images/laptopvideo.jpeg";
import review2 from "../images/podcast.jpeg";
import review3 from "../images/scroll.jpeg";

function Reviews() {
  return (
  <>
  <h2 style={{marginTop:"5rem"}}>We have everything you need to support your journey</h2>
    <div style={{display:"flex", justifyContent:"space-around", border:"none"}}>
        
        <Cardimage imgsource={require("../images/laptopvideo.jpeg")} note="Video"/> 
        <Cardimage imgsource={require("../images/podcast.jpeg")} note="Podcast" n="rtyujk" />
         <Cardimage imgsource={require("../images/scroll.jpeg")} note="Blog"/> 
    </div>
   </>
  )
}

export default Reviews;