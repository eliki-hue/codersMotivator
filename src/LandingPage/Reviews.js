import React from "react"
import Card from "./Cardimage"
import images1 from "../images/video.jpeg"
import images2 from "../images/podcast.jpeg"
import images3 from "../images/news.jpeg"


function Reviews(){
    return(
        <>
        <h1>We have everything you need to support your journey</h1>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",justifyContent:"center"}}>
        <Card imagesource={require ("../images/video.jpeg")} note ="Videos"/>
        <Card imagesource={require("../images/podcast.jpeg")} note ="Podcast"/>
        <Card imagesource={require ("../images/news.jpeg")} note="Blogs"/>
        </div>

        </>

    )
}
export default Reviews;