import React from "react";
import Logo from './assets/icon.png'
import user from './assets/profile.png'
import './Header.css';
const Header =() =>{
    return (
        <header>
            <div className="HeaderDiv">
                <div className="NavDiv">
          <img src={Logo} alt="logo" className="LogoDiv"></img> 
          <h5> D'mora</h5> 
          </div>
          <input placeholder="Search Restaurants" type="text" className="InputClass"></input>
          <img src={user} className="users"></img>
          </div>
        </header>
    )
}
export default Header