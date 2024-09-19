import React from 'react';
import instrument1Img from '../images/instrument1.jpg'; // Adjust the path as needed
import instrument2Img from '../images/instrument2.jpg'; // Adjust the path as needed
import instrument3Img from '../images/instrument3.jpg'; // Adjust the path as needed
import '../css/Instruments.css';

const Instruments = () => {
  return (
    <div className="instruments-section">
      <h3>Instruments</h3>
      <div className="instrument" data-aos="fade-right">
        <img src={instrument1Img} alt="Instrument 1" className="instrument-image" />
        <div className="instrument-text">
          <h5>Instrument 1</h5>
          <p>Details about Instrument 1. This description can be up to 100 words. It provides comprehensive information about the instrument, its features, and its applications. This section allows for a detailed explanation of the instrument's significance and uses.</p>
        </div>
      </div>
      <div className="instrument reverse" data-aos="fade-left">
        <div className="instrument-text">
          <h5>Instrument 2</h5>
          <p>Details about Instrument 2. This description can be up to 100 words. It covers the instrument's key aspects, benefits, and usage scenarios, offering a clear and informative summary about what makes this instrument unique and valuable.</p>
        </div>
        <img src={instrument2Img} alt="Instrument 2" className="instrument-image" />
      </div>
      <div className="instrument" data-aos="fade-right">
        <img src={instrument3Img} alt="Instrument 3" className="instrument-image" />
        <div className="instrument-text">
          <h5>Instrument 3</h5>
          <p>Details about Instrument 3. This description can be up to 100 words. It elaborates on the instrument's characteristics, usage, and significance, providing a detailed overview of its functions and advantages.</p>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
