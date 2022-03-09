import {React, useEffect, useState} from 'react'
import MovieCollectionSlider from './MovieCollectionSlider';
import WatchLater from './WatchLater';
import NavBar from '../Components/NavBar/NavBar';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import '../App.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import Backdrop from '../Components/Backdrop/Backdrop';




function App() {

  const [movies, setMovies] = useState([])
  const [watchList , setWatchList] = useState([])
  const [toggle, setToggle] = useState (false)

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

  useEffect(()=> {
    fetch(`http://localhost:8001/movies`)
    .then(resp => resp.json())
    .then(data => setMovies(data))
  },[])
    
 

  return (
    
    <div style={{height: '100%'}} >
    <NavBar toggle={toggle} onClick={handleDrawerToggle}/>
    {toggle ? <SideDrawer /> : null}
    {toggle ? <Backdrop onClick={handleDrawerToggle} toggle={toggle}/> : null}
    <main style={{marginTop: '64px'}}>
      <p> This is the page content</p>
    </main>
    <h1>Movie Collection</h1>
    <MovieCollectionSlider movies={movies} onCardClick={addToWatchList}/>
    <h2>Watch Later</h2>
    <WatchLater movies={watchList} />
    </div>
  );
  
}

export default App;
