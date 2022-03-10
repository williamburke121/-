import {React} from 'react'


function MovieCard ({movie, onCardClick}) {
    return (
        <div>
        <button onClick={() => onCardClick(movie)()} >
        <img key={movie.id} src={movie.image} alt="" /> 
        </button>
        </div>
// function MovieCard (){
//     return (
//         <div>
//        <img src="" alt="cover art" className="show-art"/>
        
//             </div>
    
     )
 }


export default MovieCard;