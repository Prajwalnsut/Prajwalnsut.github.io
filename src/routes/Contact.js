import './Contact.css';

import React from 'react';
import {  Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import Footer from '../components/Footer';

function Contact() {
  
  return (

    <div>
        <Navbar/>
        <BgImage2 heading="CONTACT" txt="Let us contact through mails, calls or texts!"/>

<br/>
        <div className='form' id='form' name='form'>


          <label>Enter your name</label>
          <input id='name' name='name' type="text"/>
          <label>Enter your Email Address</label>
          <input id='email' name='email' type="email"/>
          <label>Enter your Message</label>
          <textarea id='msg' name='msg' rows={7} placeholder='Feel free to message me...'/>

          <Link to="" className="submit-btn">Submit</Link>

        </div>

        <Footer/>
    </div>
    
  );
}

export default Contact;