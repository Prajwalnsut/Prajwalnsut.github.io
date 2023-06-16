import React from 'react';
import './index.css';

import { Routes, Route } from 'react-router-dom';

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Projects from "./routes/Projects"

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>
    
  );
}


export default App;
