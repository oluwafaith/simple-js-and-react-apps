import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

function CarouselStyle() {
    return (
        <Carousel
            autoPlay
            interval="2000"
            infiniteLoop
            stopOnHover
            useKeyboardArrows
            transitionTime="500"
            style={{ height:"50px" }}
        >
          <div >
            <img src="https://res.cloudinary.com/dhtxiw89g/image/upload/v1591814459/deluxe-balcony_2.png" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dhtxiw89g/image/upload/v1591814458/garden-loft_1.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dhtxiw89g/image/upload/v1591814458/garden-loft_2.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
    
    );
}

export default CarouselStyle;
