import React from "react"
import { SliderData } from "./SliderData"

function StaffPics(){
    const movieList= SliderData.filter((movie) => {
        return(
            movie.id >= 25
        )
        
    })
    return(
            
        <div className="poster">
        <ul>
           <h1>Best Worst Movies</h1>
           
           {movieList} 
        </ul>
        </div>
        
        
            )
}
    
export default StaffPics;