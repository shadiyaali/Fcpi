import React, { useState } from "react";
import logo from "../../../src/assets/images/FCPI Logo 1.svg";
import logo1 from "../../../src/assets/images/user-story.png";
import logo2 from "../../../src/assets/images/user-add--01.png";
import logo3 from "../../../src/assets/images/user-story.svg";
import './index.css'

const Home = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-100% h-100% bg-[#f4f4f4]">
      <div className="container">
        <div className="header">
          <div className="grid pt-6">
            <img src={logo} alt="Logo" className="" />
          </div>
          <div className="pt-6 pl-28">
            <div className="grid grid-cols-6 bg-white rounded-[150px]">
              <div className="justify-center items-center px-2 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Home</p>
              </div>
              <div className="justify-center items-center px-2 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>About Us</p>
              </div>
              <div className="justify-center items-center px-2 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Specialty Forums</p>
              </div>
              <div className="justify-center items-center px-2 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Events</p>
              </div>
              <div className="justify-center items-center px-2 py-[14px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Blogs</p>
              </div>
              <div className="justify-center items-center px-3 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Contact Us </p>
              </div>
            </div>
          </div>
          <div className="pl-14 pt-6">
            <div
              className="flex justify-center items-center px-[25px] py-[8px] bg-[#f4f4f4] hover:bg-[#1AB78D] text-[#00549A] hover:text-white rounded-[105px] border hover:border-none border-[#00549A]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="text-[14px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Login</p>
              <div className="pl-3">
                <img src={hovered ? logo3 : logo1} alt="Logo" className="" />
              </div>
            </div>
          </div>
          <div className="pl-12 pt-6">
            <div className="flex justify-center items-center px-[30px] py-[10px] rounded-[105px] bg-[#1AB78D] hover:bg-[#00549A]">
              <p className="text-[#FFF] text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Join FCPI</p>
              <div className=" ">
                <img src={logo2} alt="Logo" className="ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
