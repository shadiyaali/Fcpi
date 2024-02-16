import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../../src/assets/images/FCPI Logo 1.svg";
import logo1 from "../../../src/assets/images/user-story.png";
import logo2 from "../../../src/assets/images/user-add--01.png";
import logo3 from "../../../src/assets/images/user-story.svg";
import './index.css'

const Home = () => {
  const [showAboutList, setShowAboutList] = useState(false);
  const [hoveredLogin, setHoveredLogin] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(false);
  const [isAboutDropdownHovered, setIsAboutDropdownHovered] = useState(false);

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownHovered(true);
  };
  
  const handleAboutMouseLeave = () => {
    setIsAboutDropdownHovered(false);
  };
  
  const handleDropdownMouseEnter = () => {
    setIsAboutDropdownHovered(true);
  };
  
  const handleDropdownMouseLeave = () => {
    setIsAboutDropdownHovered(false);
  };
  

  const toggleAboutList = () => {
    setShowAboutList(!showAboutList);
  };

  return (
    <div className="w-100% h-100% bg-[#f4f4f4]">
      <div className="container">
        <div className="header">
          <div className="grid pt-6">
            <img src={logo} alt="Logo" className="" />
          </div>
          <div className="pt-6 pl-16 ">
            <div className=" flex bg-white   rounded-[150px]">

              <div className="justify-center items-center px-11   py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <Link to="/">
                  <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Home</p>
                </Link>

              </div>
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white about-us-button"   onMouseEnter={handleAboutMouseEnter}
  onMouseLeave={handleAboutMouseLeave}>
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>About Us</p>
                {isAboutDropdownHovered && (
    <div
      className={`about-list show`}
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
                 
                    <ul className="drop-menu">
                      <li className=" ">
                        <Link to="/about-fcpi">
                          <p className="text-[14px] not-italic px-3 py-1    font-normal leading-[normal]" style={{ fontFamily: "Inter", display: "block" }}>About FCPI</p>
                        </Link>
                      </li>
                      <li className=" ">
                        <Link to="/board-of-directors">
                          <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ fontFamily: "Inter",  display: "block" }}>Board of Directors</p>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/forum-members">
                          <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ fontFamily: "Inter", display: "block" }}>Forum Members</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
              <Link to="/speciality-forum">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Specialty Forums</p>
                </Link>
              </div>
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Events</p>
              </div>
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Blogs</p>
              </div>
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                <p className="text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Contact Us </p>
              </div>
            </div>
          </div>

          <div className="pl-5 pt-6">
            <div
              className="flex justify-center items-center px-[25px] py-[8px] bg-[#f4f4f4] hover:bg-[#1AB78D] text-[#00549A] hover:text-white rounded-[105px] border hover:border-none border-[#00549A]"
              onMouseEnter={() => setHoveredLogin(true)}
              onMouseLeave={() => setHoveredLogin(false)}
            >
              <p className="text-[14px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Login</p>
              <div className="pl-3">
                <img src={hoveredLogin  ? logo3 : logo1} alt="Logo" className="" />
              </div>
            </div>
          </div>
          <div className="pl-5 pt-6">
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
