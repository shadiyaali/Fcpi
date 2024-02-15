import React, { useState, useEffect } from "react";
import Logo3 from "../../../src/assets/images/logo.png";
import SliderImage from "../../../src/assets/images/slider.png";
import { Carousel } from "flowbite-react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo25 from "../../../src/assets/images/Frame 10.svg";
import Logo26 from "../../../src/assets/images/Frame 82.svg";
 import "./eg.css"

const Card4444 = () => {
 

  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 pb-6 gap-6">
          <div className="grid grid-col">
            
           <div className="mt-6">
           <div className="position-r">
            <Carousel>
                <div className="item">
                  <img src={Logo3} alt="Slide 1"  />
              
                </div>
                <div className="item">
                  <img src={SliderImage} alt="Slide 2"  />
                </div>
              </Carousel>
              </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card4444;
