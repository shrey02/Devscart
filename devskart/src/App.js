import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Web from './Web';
import Car from './Car';
import Landing from './Landing';
import Template from './Template';
import Home from './Home';
import StoryReel from './StoryReel'; 
import { useSelector} from 'react-redux';
import {selectUserName } from './features/userSlice'; 
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Android from './Android';
// import { Carousel } from 'bootstrap';
function App() {
  const username = useSelector(selectUserName);
  return (
    <div className="App">
     {
        username ? (<>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              {/* <Car/> */}
          <StoryReel/><Home/><Template/>
          </Route>
          <Route path="/web">
             <Web/>
          </Route>
          <Route path="/and">
             <Android/>
          </Route>
          </Switch>
          <Footer/>
          </>):
       (<div className="back"><Landing/></div>)
     }
    </div>
  );
}

export default App;
