import React, { useState, useEffect } from "react";
import Logo3 from "../../../src/assets/images/logo.png";
import SliderImage from "../../../src/assets/images/slider.png";
import { Carousel } from "flowbite-react"; 
import Logo25 from "../../../src/assets/images/Frame 10.svg";
import Logo26 from "../../../src/assets/images/Frame 82.svg";
import "./Card1.css"; 
 

const Card1 = () => {
  const [selectedImage, setSelectedImage] = useState(Logo3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevImage) =>
        prevImage === Logo3 ? SliderImage : Logo3
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 gap-6">
          <div className="grid grid-col">
            <div className="rounded-[30px] pt-12 pl-12 bg-white">
              <p className="rounded-[30px] text-start text-[#222] text-[51px] not-italic font-bold leading-[56px]  "  >
                Towards Clinical <br />
                Pharmacy Excellence
              </p>
              <p className="text-[#58585A] text-start pt-8 pb-12 text-[18px] not-italic font-normal leading-[27px] " >
                The Federation of Clinical Pharmacists in India (FCPI) is a non-profitable,<br /> professional pharmacy organization composed of a bunch of passionate <br /> pharmacists involved in diverse clinical pharmacy...
              </p>
            </div>
           
            <Carousel indicators={false} showPrevNext={false} className="h-[230px] pt-6 ">
  <div className="">
    <img
      src={Logo3}
      alt="Slide 1"
      className="w-full h-full  rounded-[30px]"
      style={{ aspectRatio: "16/9" }}  
    />
  </div>
  <div className="rounded-[60px]">
    <img
      src={SliderImage}
      alt="Slide 2"
      className="w-full h-full rounded-[30px]"
      style={{ aspectRatio: "16/9" }}  
    />
  </div>
</Carousel>

            
          </div>
          <div className="flex flex-col w-[99%] h-[550px] rounded-[30px] aspect-[2] bg-card1-background bg-cover responsive-card">
            <div className="aspect-[2] bg-card2-background bg-cover w-[311px] ml-auto mr-6 mt-auto mb-6 h-[328px] backdrop-blur-xl rounded-[23px]   ">
              <div className="flex pl-5 pr-6">
                <p className="text-[#00549A] pt-8 text-[26px] not-italic font-semibold leading-[normal]"  >Event Calendar</p>
                <div className="pl-8 pt-6 ">
                  <img src={Logo25} alt="Logo" className="rounded-[30px]" />
                </div>
              </div>
              <div className="pl-[1.9rem] pr-[1.9rem] pt-8 justify-center">
                <div className="rounded-[180px] bg-[#FFF] w-[249px] ">
                  <div className="flex ">
                    <div className="pt-3 pl-3 ">
                      <img src={Logo26} alt="Logo" className="rounded-[30px]" />
                    </div>
                    <div className="p-1 ">
                      <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" >Ischemic stroke (Part-3)</p>
                      <div className="justify-start mr-28 pt-1">
                        <button className="bg-blue-50 inline-flex gap-[10px] p-[3px] rounded-[14px] ">
                          <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal]"  >12-01-2024</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-[1.9rem] pr-[1.9rem] pt-3">
                <div className="rounded-[180px] bg-[#FFF] w-[249px] ">
                  <div className="flex ">
                    <div className="pt-3 pl-3 ">
                      <img src={Logo26} alt="Logo" className="rounded-[30px]" />
                    </div>
                    <div className="p-1 ">
                      <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" >Ischemic stroke (Part-3)</p>
                      <div className="justify-start mr-28 pt-1">
                        <button className="bg-blue-50 inline-flex gap-[10px] p-[3px] rounded-[14px] ">
                          <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal]" >12-01-2024</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-[1.9rem] pr-[1.9rem]  pt-3  pb-6]">
                <div className="rounded-[180px] bg-[#FFF] w-[249px] ">
                  <div className="flex ">
                    <div className="pt-3 pl-3 ">
                      <img src={Logo26} alt="Logo" className="rounded-[30px]" />
                    </div>
                    <div className="p-1">
                      <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" >Ischemic stroke (Part-3)</p>
                      <div className="justify-start mr-28 pt-1">
                        <button className="bg-blue-50 inline-flex gap-[10px] p-[3px] rounded-[14px] ">
                          <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal]" >12-01-2024</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
