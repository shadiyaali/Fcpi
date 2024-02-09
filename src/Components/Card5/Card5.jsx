import React from "react";
import Logo23 from "../../../src/assets/images/Mask group.svg";
import './Card5.css';  

const Card5 = () => {
  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="container">
        <div className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[30px] lg:col-span-2">
              <div className="p-10 pl-12">
              <div className="flex justify-between items-center">
  <p className="text-black text-start text-[38px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>
    Speciality <span className="capitalize">f</span>orums
  </p>
  <div className="pr-4">
    <button className="inline-flex  justify-center items-center gap-[10px] shrink-0 px-[32px] py-[14px] rounded-[105px] bg-[#00549a]">  
      <p className="text-white text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>View all</p>
    </button>
  </div>
</div>

                <p className="text-[#58585A] text-[18px] pt-7 text-start not-italic font-normal leading-[30px]" style={{ fontFamily: "Inter" }}>It is a long established fact that a reader will be distracted by the readable content of a page when <br/>looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of <br/>letters, as opposed to using</p>
                <div className="flex pb-6 pr-6 justify-end mt-[-20px]"> 
                  
                </div>
              </div>
            </div>
 
     
        
          <div className="bg-[#00549A] rounded-[30px] relative ">
          {/* <div className="relative"> */}
                        <p className="text-white text-start pl-12 pt-14 text-[67px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>3000+</p>
                        <div className="flex text-start pl-14">
                            <p className="text-white text-[17px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Members </p>
                            <p className="text-[#78B6E9] text-[17px] pl-2 not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>use our</p>
                           
                        <img src={Logo23} alt="Image" className="absolute right-0 top-18 transform -translate-y-1/2 " />
                        
                        </div>
                        <p className="text-[#78B6E9] pl-14 text-start text-[17px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}> educational programs</p>
                       
                    {/* </div> */}
                    </div> 
          </div>
           
          
        </div>
      </div>
    </div>
  );
};

export default Card5;
