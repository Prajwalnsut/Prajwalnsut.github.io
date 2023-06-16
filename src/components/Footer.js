import React from "react";
import {MdHouse, MdOutlineEmail, MdCall, MdFacebook} from "react-icons/md"
import {FaInstagram, FaTwitter, FaGithub} from "react-icons/fa";
import './Footer.css';

const Footer = ()  => {

  return (
    
    <div className="footer">

     <div className="icons">
      <MdHouse size={35} style={{color: "#fff"}}/>
      <br/>
      <MdOutlineEmail size={35} style={{color: "#fff"}}/>
      <br/>
      <MdCall size={35} style={{color: "#fff"}}/>
     </div>

     <div className="txts">
      <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
      <br/>
      <p>prajwalnegi454@gmail.com</p>
      <br/>
      <p>+91 72868 66086, +91 72868 66086</p>
     </div>
      <div className="social">
      <MdFacebook size={35} style={{color: "#fff"}}/>
      <FaInstagram size={35} style={{color: "#fff"}}/>
      <FaTwitter size={35} style={{color: "#fff"}}/>
      <FaGithub size={35} style={{color: "#fff"}}/>
      </div>

    </div>

  );
}

export default Footer;