import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel default styling
import 'animate.css'; // For animations
import background from '../images/background.jpg';
import background1 from '../images/background1.jpg';
import background2 from '../images/background2.jpg';
import background3 from '../images/background3.jpg';
import background4 from '../images/background4.jpg';
import '../css/CustomCarousel.css'; // Custom CSS for styling

const ImageCarousel = () => {
    const images = [background, background1, background2, background3, background4];

    return (
        <div className="carousel-wrapper">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                centerMode
                centerSlidePercentage={40} // Give more focus to the central image
                autoPlay
                interval={2000}
                stopOnHover
                transitionTime={600}
                dynamicHeight={false}
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="carousel-image animate__animated animate__zoomIn" // Animation for image entrance
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
