import React, { useState } from 'react';
import Logo5 from '../../../src/assets/images/image2.png';
import Logo16 from '../../../src/assets/images/image2.png';
import Logo17 from '../../../src/assets/images/image2.png';
import Logo26 from "../../../src/assets/images/Frame 34.png";
import Logo6 from "../../../src/assets/images/image3.png"; 
import Logo7 from "../../../src/assets/images/eclips.png";
import Logoa from "../../../src/assets/images/carousel.png";
import './Card2.css';
import { Carousel } from 'flowbite-react';

const Card2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Logo5, Logo16, Logo17];  

  const handlePastEventsClick = () => {
    setCurrentIndex(0);
  };

  const handleUpcomingEventsClick = () => {
    setCurrentIndex(1); 
  };
  const items = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className="flex items-start pt-6 ">
        <img src={Logo6} alt="Logo" className="" />
        <p className="text-[#58585A] text-start pl-4 text-[18px]  not-italic font-normal leading-[26px]" style={{ fontFamily: "Inter" }}>
            Many desktop publishing packages and web page editors now use Lorem <br />
            Ipsum as their default model text, and a search
        </p>
    </div>
));

  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="container">
        <div className=" flex  gap-6">
          <div className="justify-center  w-[35%] rounded-[30px] bg-[#00549a]">
            <div className="flex pl-5 rounded-[30px]">
              <div className="pt-6">
                <button 
                  className="justify-center items-center px-7 py-3 rounded-[105px] border border-white  " 
                  style={{ width: 'auto', backgroundColor: currentIndex === 0 ? '#1ab78d' : '', }}
                  onClick={handlePastEventsClick}
                >
                  <p className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Inter' }}>Past Events</p>
                </button>
                <button 
                  className="justify-center items-center ml-3 px-7 py-3 rounded-[105px] border    " 
                  style={{ width: 'auto', backgroundColor: currentIndex === 1 ? '#1ab78d' : '' }}
                  onClick={handleUpcomingEventsClick}
                >
                  <p className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Inter' }}>Upcoming Events</p>
                </button>
              </div>
              <div className="ml-auto pr-4 pt-3">
                <img src={Logo7} alt="Logo" className="rounded-[30px]" />
              </div>
            </div>
            <div>
              <div className=" flex justify-center  items-center">
                {currentIndex === 0 ? (
                  <Carousel indicators={false} className='h-[320px] mt-6 w-[90%]' index={currentIndex}>
                    <img src={Logo5} alt="Logo5" className="rounded-[30px]"/>
                    <img src={Logo16} alt="Logo16" className="rounded-[30px]"/>
                    <img src={Logo17} alt="Logo17" className="rounded-[30px]"/>
                  </Carousel>
                ) : (
                    <Carousel indicators={false} className='h-[320px] mt-6 w-[90%]' index={currentIndex}>
                    <img src={Logoa} alt="Logo5" className="rounded-[30px]"/>
                    <img src={Logoa} alt="Logo16" className="rounded-[30px]"/>
                    <img src={Logoa} alt="Logo17" className="rounded-[30px]"/>
                  </Carousel>
                )}
              </div>
            </div>
          </div>
          <div className="w-[64%] ">
            <div className="justify-center rounded-[30px] bg-white">
              <div className="flex justify-between items-center ">
                <p className="pt-12 text-[#222] text-start text-[32px] pl-20 not-italic font-semibold leading-[normal]" style={{ fontFamily: 'Inter' }}>
                  What’s New
                </p>
                <div className="pr-4">
                  <img src={Logo26} alt="Logo" className="rounded-[30px]" />
                </div>
              </div>
             
              <div className="pl-20 pb-12">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
