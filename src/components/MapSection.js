import React from 'react';
import map1 from '../images/map1.jpg'; // Adjust the path as needed
import map2 from '../images/map2.jpg'; // Adjust the path as needed
import '../css/MapSection.css'; // Import the CSS file for styles

const MapSection = () => {
  return (
    <div className="map-section">
      <h3>Maps Section</h3>
      <div className="map-images">
        <img src={map1} alt="Map 1" className="map-image" />
        <img src={map2} alt="Map 2" className="map-image" />
      </div>
    </div>
  );
};

export default MapSection;
