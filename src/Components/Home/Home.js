
import {React, useEffect, useState} from 'react'
import MovieCollectionSlider from '../MovieCollectionSlider/MovieCollectionSlider';
import WatchLater from '../WatchLater/WatchLater';
import NavBar from '../NavBar/NavBar';
import SideDrawer from '../SideDrawer/SideDrawer';
// import '../App.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles.css";
import Backdrop from '../Backdrop/Backdrop';
import AddMovieForm from '../Add Movie Form/AddMovieForm';
import MostPopular from "../MostPopular";
import StaffPics from '../StaffPics';

function Home () {

  const [movies, setMovies] = useState([])
  const [watchList , setWatchList] = useState([])
  const [toggle, setToggle] = useState (false)
  const [page, setPage] = useState("/")

  function getCurrentPage(){
    switch(page){
      case "/": 
        return <Home /> 
      case "/addmovieform":
        return <AddMovieForm />
      default:
        return <h1>404 not found</h1>
    }
  }

  function handleDrawerToggle () {
    console.log('clicked')
    if(toggle){
      setToggle(false)
    }
    else {
      setToggle(true)
    }
  }

  
  function addToWatchList (addmovie) {
    if(watchList.every(movie => movie.id !== addmovie.id)){
      setWatchList([...watchList, addmovie])
    }
    console.log(watchList)
  }

  function removeMovie (movie) {
    setWatchList(watchList.filter(movieShow => movieShow.id !== movie.id))
}

  useEffect(()=> {
    fetch(`http://localhost:8001/movies`)
    .then(resp => resp.json())
    .then(data => setMovies(data))
  },[])
    
 

  return (
    <div style={{height: '100%'}} >
    <NavBar toggle={toggle} onClick={handleDrawerToggle}/>
    {toggle ? <SideDrawer/> : null}
    {toggle ? <Backdrop onClick={handleDrawerToggle} toggle={toggle}/> : null}
    <main style={{marginTop: '64px'}}>
    </main>
    <h1>Movie Collection</h1>
    <MovieCollectionSlider movies={movies} onCardClick={addToWatchList}/>
    <h2>Watch Later</h2>
    <WatchLater movies={watchList} onCardClick={removeMovie} />
    <MostPopular movies={movies}/>
    

  </div>
  );
  
}

export default Home;