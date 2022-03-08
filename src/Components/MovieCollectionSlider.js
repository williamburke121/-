import  { React, useState} from "react"
import {SliderData} from "./SliderData"


function MovieCollectionSlider (){

const loadSlider = SliderData.map((slide, id) => {
    return <img src={slide.image} alt="" /> 

})

return (
   <div>
       {loadSlider}
   </div>

)



}




export default MovieCollectionSlider; 