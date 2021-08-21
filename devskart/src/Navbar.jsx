import React from 'react';
import "./Navbar.css";
import { auth} from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import {setUserLogoutState,selectUserName } from './features/userSlice';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const handleSignOut = ()=>{
    auth.signOut().then(()=>{
      dispatch(setUserLogoutState());
    }).catch((err)=>alert(err.message))
  }
    return (
        <div>
            <nav className="header">
                <div className="title">
                    <h2><span className="num">D</span>evskart <AllInclusiveIcon style={{fontSize: "35"}} /></h2>   
                </div>

                <div className="categories">
                    <div><span className="item">Categories</span></div>
                    <div><span className="item">Business Categories</span></div>
                    
                </div>
                
                <div className='header__center'>
                    <input type="text" placeholder="Search for anything"/>
                    <SearchIcon />
                </div>
                <div className='header__right'>
                <div>
                        <Button><AddShoppingCartIcon style={{fontSize: "30px"}} /></Button>
                        <Button><FavoriteIcon style={{fontSize: "30px", color: "red"}} /></Button>
                    </div>
                    <div>
                        <Button style={{marginLeft: '10px', backgroundColor: "black", border: '0.5px solid black', fontWeight: '600'}} size="small" variant="contained" color="primary" onClick={handleSignOut}>LogOut</Button>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
