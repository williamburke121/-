
import {React, useEffect, useState} from 'react'
import MovieCollectionSlider from '../MovieCollectionSlider/MovieCollectionSlider';
import WatchLater from '../WatchLater/WatchLater';
import NavBar from '../NavBar/NavBar';
import SideDrawer from '../SideDrawer/SideDrawer';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles.css";
import Backdrop from '../Backdrop/Backdrop';
import MostPopular from "../MostPopular";
import { IoContractSharp } from 'react-icons/io5';


function Home () {

  const [movies, setMovies] = useState([])
  const [toggle, setToggle] = useState (false)
  const [watchList , setWatchList] = useState([])



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
      fetch(`http://localhost:8001/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addmovie),
  });
  }
  }
  

  function removeMovie (movie) {
    if(setWatchList(watchList.filter(movieShow => movieShow.id !== movie.id))){
      fetch(`http://localhost:8001/favorites`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
}

  useEffect(()=> {
    fetch(`http://localhost:8001/movies`)
    .then(resp => resp.json())
    .then(data => {setMovies(data)
    console.log(data)}) 
  },[])


  useEffect(()=> {
    fetch(`http://localhost:8001/favorites`)
    .then(resp => resp.json())
    .then(data => {setWatchList(data) 
      console.log(data)})
  },[])





    
 

  return (
    <div style={{height: '100%'}} >
    <NavBar toggle={toggle} onClick={handleDrawerToggle} />
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