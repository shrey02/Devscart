import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Web from './Web';
import Landing from './Landing';
import Template from './Template';
import Home from './Home';
import StoryReel from './StoryReel'; 
import { useSelector} from 'react-redux';
import {selectUserName } from './features/userSlice'; 
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const username = useSelector(selectUserName);
  return (
    <div className="App">
     {
        "yes" ? (<>
          <Navbar/>
          <Switch>
            <Route exact path="/">
          <StoryReel/><Home/><Template/><Web/>
          </Route>
          <Route path="/web">
             <Web/>
          </Route>
          <Footer/>
          </Switch>
          </>):
       (<div className="back"><Landing/></div>)
     }
    </div>
  );
}

export default App;
