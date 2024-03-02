import React, { useState } from "react";
import { Link, useLocation ,NavLink, } from 'react-router-dom';
import logo from "../../../src/assets/images/FCPI Logo 1.svg";
import logo1 from "../../../src/assets/images/user-story.png";
import logo2 from "../../../src/assets/images/user-add--01.png";
import logo3 from "../../../src/assets/images/user-story.svg";
 
import './index.css'

const Home = () => {
  const location = useLocation();
  const [showAboutList, setShowAboutList] = useState(false);
  const [hoveredLogin, setHoveredLogin] = useState(false); 
  const [isAboutDropdownHovered, setIsAboutDropdownHovered] = useState(false);
  const [activeButton, setActiveButton] = useState("home");
 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleLoginMouseEnter = () => {
    setHoveredLogin(true);
  };

  const handleLoginMouseLeave = () => {
    setHoveredLogin(false);
  };

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


  return (
    <div className="w-100% h-100% bg-[#f4f4f4]">
      <div className="container">
        <div className="header">
          <div className="grid pt-6">
            <img src={logo} alt="Logo" className="" />
          </div>
          <div className="pt-6 pl-16 ">
            <div className=" flex bg-white   rounded-[150px]">
            <NavLink
                to="/"
                activeClassName="active"
                onClick={() => handleButtonClick("home")}
              >
                <div
                  className={`justify-center items-center px-11 py-[16px] rounded-[105px] bg-${
                    activeButton === "home" ? "#00549a" : "white"
                  } text-[#222] hover:text-white hover:bg-[#00549a]`}
                >
                  <p className="text-[16px] not-italic font-normal leading-[normal]">
                    Home
                  </p>
                </div>
              </NavLink>
              <div className="justify-center items-center px-8 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white about-us-button" onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}>
                <p className="text-[16px] not-italic font-normal leading-[normal]"  >About Us</p>
                {isAboutDropdownHovered && (
                  <div
                    className={`about-list show`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >

                    <ul className="drop-menu">
                      <li className=" ">
                        <Link to="/about-fcpi">
                          <p className="text-[14px] not-italic px-3 py-1    font-normal leading-[normal]" style={{ display: "block" }}>About FCPI</p>
                        </Link>
                      </li>
                      <li className=" ">
                        <Link to="/board-of-directors">
                          <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Board of Directors</p>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/forum-members">
                          <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Forum Members</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link to="/speciality-forum">
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
               
                  <p className="text-[16px] not-italic font-normal leading-[normal]" >Specialty Forums</p>
             
              </div>
              </Link>
              <Link to="/events">
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
               
                  <p className="text-[16px] not-italic font-normal leading-[normal]" >Events</p>
              
              </div>
              </Link>
              <Link to="/blogs">
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
              
                  <p className="text-[16px] not-italic font-normal leading-[normal]"  >Blogs</p>
             
              </div>
              </Link>
              <Link to="/contact">
              <div className="justify-center items-center px-11 py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
               
                  <p className="text-[16px] not-italic font-normal leading-[normal]"  >Contact Us </p>
            
              </div>
              </Link>
            </div>
          </div>

          <div className="pl-5 pt-6">
            <Link to="/otp">
            <div
              className={`flex justify-center items-center px-[27px] py-[8px] bg-${hoveredLogin ? '1AB78D' : 'f4f4f4'} text-${hoveredLogin ? 'white' : '00549A'} rounded-[105px] border border-[#00549A] hover:border-[#1AB78D] hover:bg-[#1AB78D]`}
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              onClick={() => {
                document.activeElement.blur();
              }}
            >
              <p className="text-[14px] not-italic font-medium leading-[normal]">Login</p>
              <div className="pl-4">
                <img src={hoveredLogin ? logo3 : logo1} alt="Logo" className="" />
              </div>
            </div>
            </Link>
          </div>

          <div className=" pl-5 pt-6">
            <Link
              to="/register"
              className="flex justify-center items-center px-[30px] py-[10px] rounded-[105px] bg-[#1AB78D] hover:bg-[#00549A]"
              onClick={() => {
                document.activeElement.blur();
              }}
            >
              <p className="text-[14px] not-italic font-normal leading-[normal] text-white">Join FCPI</p>
              <div className="ml-4">
                <img src={logo2} alt="Logo" />
              </div>
            </Link>
           
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
