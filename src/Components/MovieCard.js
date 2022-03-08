import {React} from 'react'


function MovieCard ({movie, onCardClick}) {
    return (
        <div>
        <img key={movie.id} src={movie.image} alt="" /> 
       <button onClick={() =>  onCardClick(movie)} >AddToWatchList</button>
        </div>
// function MovieCard (){
//     return (
//         <div>
//        <img src="" alt="cover art" className="show-art"/>
        
//             </div>
    
     )
 }


export default MovieCard;