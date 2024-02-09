import React from "react";
import Logo3 from "../../../src/assets/images/logo.png";
import Logo4 from "../../../src/assets/images/image1.png";
import Logo25 from "../../../src/assets/images/Frame 10.svg";
import Logo26 from "../../../src/assets/images/Frame 82.svg";

const Card1 = () => {
  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 pb-6 gap-6">
          <div className="grid grid-col   ">
            <div className=" rounded-[30px] pt-12 pl-12 bg-white">
              <p className="rounded-[30px]  text-start text-[#222] text-[49px]  not-italic font-bold leading-[56px] md:leading-[normal]" style={{ fontFamily: "Inter" }}>
                Towards Clinical <br />
                Pharmacy Excellence
              </p>
              <p className="text-[#58585A] text-start pt-8 pb-12  text-[16px]   not-italic font-normal leading-[27px]  " style={{ fontFamily: "Inter" }}>
                The Federation of Clinical Pharmacists in India (FCPI) is a non-profitable,<br /> professional pharmacy organization composed of a bunch of passionate <br /> pharmacists involved in diverse clinical pharmacy...
              </p>
            </div>
            <div className=" pt-6">
              <img src={Logo3} alt="Logo" className="w-[100%] h-[98%] rounded-[30px]" />
            </div>
          </div>
          <div className="flex flex-col w-[99%] h-[100%] rounded-[30px] aspect-[2] bg-card1-background bg-cover responsive-card">
            <div
              className="w-[42%] ml-auto mr-6 mt-auto mb-6 h-[63%]  shrink-0 backdrop-blur-2xl rounded-[23px] border-[1.5px] border-solid border-[#80D5DB]"

            >
              <div className="flex  pl-6">
                <p className="text-[#00549A] pt-6 text-[24px] not-italic font-semibold leading-[normal]
  "style={{ fontFamily: "Inter" }}>Event Calendar</p>
                <div className=" pl-8 pt-4 ">
                  <img src={Logo25} alt="Logo" className="  rounded-[30px]" />
                </div>
              </div>
              <div className="px-5  pt-8">
              <div className=" rounded-[180px] bg-[#FFF] ">
                 <div className="flex  " >
                <div className=" pt-3 pl-3 ">
                  <img src={Logo26} alt="Logo" className="  rounded-[30px]" />
                </div>
                <div className="p-2  ">
                <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Ischemic stroke (Part-3)</p>
                <div className="justify-start mr-28">
                <button className=" bg-blue-50 inline-flex   gap-[10px] p-[3px] rounded-[14px] ">
                  <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal"style={{ fontFamily: "Inter" }}>12-01-2024</p>
                </button>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="px-5 pt-3">
              <div className=" rounded-[180px] bg-[#FFF] ">
                 <div className="flex  " >
                <div className=" pt-3 pl-3 ">
                  <img src={Logo26} alt="Logo" className="  rounded-[30px]" />
                </div>
                <div className="p-2  ">
                <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Ischemic stroke (Part-3)</p>
                <div className="justify-start mr-28">
                <button className=" bg-blue-50 inline-flex   gap-[10px] p-[3px] rounded-[14px] ">
                  <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal"style={{ fontFamily: "Inter" }}>12-01-2024</p>
                </button>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="px-5  pt-3">
              <div className=" rounded-[180px] bg-[#FFF] ">
                 <div className="flex  " >
                <div className=" pt-3 pl-3 ">
                  <img src={Logo26} alt="Logo" className="  rounded-[30px]" />
                </div>
                <div className="p-2  ">
                <p className="text-[#222] text-[16px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Ischemic stroke (Part-3)</p>
                <div className="justify-start mr-28">
                <button className=" bg-blue-50 inline-flex   gap-[10px] p-[3px] rounded-[14px] ">
                  <p className="text-[#00549A] text-[12px] not-italic font-normal leading-[normal"style={{ fontFamily: "Inter" }}>12-01-2024</p>
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
