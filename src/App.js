import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import NavbarComponent from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import TextSection from './components/TextSection';
import MapSection from './components/MapSection';
import Instruments from './components/Instruments';
import FooterComponent from './components/FooterComponent'; // Import the Footer
import './App.css'; // Optional for custom styling

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional settings
  }, []);

  return (
    <div className="App">
      <NavbarComponent />
      <div className="container">
        <CarouselComponent data-aos="fade-in" />
        <TextSection data-aos="fade-up" />
        <MapSection data-aos="fade-left" />
        <Instruments data-aos="fade-right" />
      </div>
      <FooterComponent /> {/* Add the FooterComponent here */}
    </div>
  );
}

export default App;
