import {React, useEffect, useState} from 'react'
import MovieCollectionSlider from './MovieCollectionSlider';
import WatchLater from './WatchLater';
import '../App.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";




function App() {

  const [movies, setMovies] = useState([])
  const [watchList , setWatchList] = useState([])

  function addToWatchList (addMovie) {
    if(movies.every(movie => addMovie.id !== movie.id)){
      setWatchList([...watchList, addMovie])
    }
  }

  useEffect(()=> {
    fetch(`http://localhost:8001/movies`)
    .then(resp => resp.json())
    .then(data => setMovies(data))
  },[])

 

  return (
    <>
    <MovieCollectionSlider movies={movies} onCardClick={addToWatchList}/>
    <WatchLater movies={watchList} />
    </>
  );
  
}

export default App;
