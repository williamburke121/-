import {React} from 'react'
import '../App.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import {Route, Switch} from 'react-router-dom';
import Home from '../Components/Home/Home'
import AddMovieForm from './Add Movie Form/AddMovieForm';
import ContactUs from './ContactUs/ContactUs';



function App() {

  return (
    <div style={{height: '100%'}}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route  exact path="/addMovieForm">
                    <AddMovieForm />
                </Route>
                <Route exact path="/contactus">
                  <ContactUs />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
  </div>  
  )
}

export default App;
