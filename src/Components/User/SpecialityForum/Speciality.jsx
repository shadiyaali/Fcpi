import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import Logo5 from '../../../assets/images/card3.png'; 
import Logoa from "../../../assets/images/carousel.png"; 
import Logo7 from "../../../assets/images/eclips.png";
import red from "../../../assets/images/medical-banner-with-doctor-wearing-coat.jpg";




const Speciality = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Logo5, Logo5, Logo5];  
  
    const handlePastEventsClick = () => {
      setCurrentIndex(0);
    };
  
    const handleUpcomingEventsClick = () => {
      setCurrentIndex(1);  
    };
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="grid grid-cols-2 gap-6 ">
                    <div className="justify-center   rounded-[30px] bg-[#00549a]">
            <div className="flex pl-9 rounded-[30px]">
              <div className="pt-8">
              <button 
                    className={`justify-center items-center px-7 py-3 rounded-[105px] border ${currentIndex === 0 ? 'border-transparent' : 'border-white'}`} 
                  style={{ width: 'auto', backgroundColor: currentIndex === 0 ? '#1ab78d' : '', }}
                  onClick={handlePastEventsClick}
                >
                  <p className="text-white text-[14px] font-semibold"  >Past Events</p>
                </button>
                
                <button 
                   className={`justify-center items-center ml-3 px-7 py-3 rounded-[105px] border ${currentIndex === 1 ? 'border-transparent' : ''}`}  
                  style={{ width: 'auto', backgroundColor: currentIndex === 1 ? '#1ab78d' : '' }}
                  onClick={handleUpcomingEventsClick}
                >
                  <p className="text-white text-[14px] font-semibold"  >Upcoming Events</p>
                </button>
              </div>
              <div className="ml-auto pr-4 pt-3">
                <img src={Logo7} alt="Logo" className="rounded-[30px]" />
              </div>
            </div>
            <div>
              <div className=" flex justify-center pb-6 items-center">
                {currentIndex === 0 ? (
                  <Carousel indicators={false} className='h-[570px] mt-6 w-[92%]' index={currentIndex}>
                    <img src={Logo5} alt="Logo5" className="rounded-[30px]"/>
                    <img src={Logo5} alt="Logo16" className="rounded-[30px]"/>
                    <img src={Logo5} alt="Logo17" className="rounded-[30px]"/>
                  </Carousel>
                ) : (
                    <Carousel indicators={false} className='h-[570px] mt-6 w-[92%]' index={currentIndex}>
                    <img src={Logoa} alt="Logo5" className="rounded-[30px]"/>
                    <img src={Logoa} alt="Logo16" className="rounded-[30px]"/>
                    <img src={Logoa} alt="Logo17" className="rounded-[30px]"/>
                  </Carousel>
                )}
              </div>
            </div>
          </div>
    <div className='bg-white rounded-[30px]'>
        <div className=''>
        <img src={red} alt="Red" className="rounded-[30px]"/>
        </div>
        <div className='pt-10 text-start'>
            <p className='text-black text-start pl-8 text-[20px] not-italic font-semibold leading-[30px]'  >Acidity Problems? 14 Home Remedies That Can Help</p>
             <hr  className='mt-4 '/>
             <div className='flex pt-10 pl-8'>
  <div className='inline-flex justify-center items-center gap-[10px] px-[9px] py-[2px] rounded-[4px] bg-[#c5e5ff]'>
    <p className='text-[#00549A] text-[16px] not-italic font-medium leading-[24px]'  >Health Today</p>
  </div>
  <p className='text-[#58585A] pl-4 text-[16px] not-italic font-medium leading-[24px]'  >By Dr Prachi Garg</p>
  <div className="flex-grow"></div>
  <p className='text-[#58585A]  pr-8 text-[16px] not-italic font-normal leading-[24px]' >1 day ago</p>
</div>

        </div>
    </div>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Speciality;
