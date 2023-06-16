import React, { useState } from "react";
import {  Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import './Navbar.css';

const Navbar = ()  => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeBg = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  
  

  return (
    
    <div className={color ? "navbar navbar-bg" : "navbar"}>

      <Link className="name-link" to="/"><h2 className="name">Prajwal</h2></Link>

      <ul className={click ? "nav-items active" : "nav-items"}>

        <li className="nav-item">
          <Link to="/"><h2 className="nav-text">Home</h2></Link>
        </li>
        <li className="nav-item">
          <Link to="/about"><h2 className="nav-text">About</h2></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact"><h2 className="nav-text">Contact</h2></Link>
        </li>
        <li className="nav-item">
          <Link to="/projects"><h2 className="nav-text">Projects</h2></Link>
        </li>

      </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{color: "#fff"}}/> : <FaBars size={20} style={{color: "#fff"}}/>}
        </div>

    </div>


  );
}

export default Navbar;