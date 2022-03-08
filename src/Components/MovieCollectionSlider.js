import  { React, useState} from "react"
import {SliderData} from "./SliderData"
import {mostPopular} from "./MostPopular"

function MovieCollectionSlider (){

const loadSlider = SliderData.map((slide, id) => {
    return <img class = "poster" key={slide.id} src={slide.image} alt="" /> 

})

return (

   
   <div class="topContainer">
       
       {loadSlider}
   </div>



)



}




export default MovieCollectionSlider; 