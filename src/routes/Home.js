
import React from 'react';
import Navbar from '../components/Navbar';
import BgImage from '../components/BgImage';
import Footer from '../components/Footer';

import ProjectsList from '../components/ProjectsList';

function App() {
  return (

    <div>
        <Navbar/>
        <BgImage/>

      <h2 id="home-h2">Some projects made by me!</h2>

        <ProjectsList/>
        <Footer/>
    </div>
    
  );
}

export default App;