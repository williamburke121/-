import {React} from 'react'


function MovieCard ({movie, onCardClick}) {
    return (
        <div>
        <img key={movie.id} src={movie.image} alt="" /> 
       <button onClick={() =>  onCardClick(movie)} >AddToWatchList</button>
        </div>
    )
}


export default MovieCard;