import React from "react";
import {  Link } from "react-router-dom";
import UserImg from "../images/user.png"
import './BgImage.css';

const BgImage = ()  => {

  return (
    
    <div className="bg">
      <div className="mask">
      </div>

      <div className="content">
          <h2>HEY!</h2>
          <h4>I am a FRESHIEE</h4>
          <h5>from</h5>
          <h3>NSUT!</h3>

          <div className="btns">
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn">Contact me</Link>
          </div>

      </div>

      <div>
        <img className="user-img" src={UserImg}/>
      </div>

    </div>

  );
}

export default BgImage;