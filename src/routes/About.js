import './About.css';

import React from 'react';
import {  Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import Footer from '../components/Footer';

function About() {
  return (

    <div>
        <Navbar/>
        <BgImage2 heading="ABOUT ME" txt="I am Prajwal Negi, persuing BTech from NSUT!"/>

        <div className='about'>
          <h2 className='heading'>Get to know me!</h2>
          <h5 className='txt'>I am a first year student in NSUT. I have learned Data Structures and Algorithms and Web Development, and I am currently learing App Development.</h5>
          <Link to="/contact" className="about-btn">Contact me</Link>
        </div>
    </div>
    
  );
}

export default About;