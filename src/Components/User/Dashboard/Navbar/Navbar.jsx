import React, { useState } from 'react';
import logo3 from "../../../../assets/images/user-story.svg";
import "./Navbar.css";
import { Link } from 'react-router-dom';  
import acc from "../../../../assets/images/user-account.png";
import acc1 from "../../../../assets/images/user.png";
import acc2 from "../../../../assets/images/square.png";
import acc3 from "../../../../assets/images/logout.png";


const Navbar = () => {
    const [isAboutDropdownHovered, setIsAboutDropdownHovered] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

   

    const handleAccountMouseEnter = () => {
        setIsAccountDropdownOpen(true);
    };

    const handleAccountMouseLeave = () => {
        setIsAccountDropdownOpen(false);
    };

    const handleDropdownMouseEnter = () => {
        setIsAboutDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsAboutDropdownHovered(false);
    };

    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
    };
    const handleAboutMouseEnter = () => {
        setIsAboutDropdownHovered(true);
      };
    
      const handleAboutMouseLeave = () => {
        setIsAboutDropdownHovered(false);
      };
    return (
        <div className=''>
             <div className= " w-full h-full ">
                 <div className="flex p-4 bg-white pt-4 justify-end">
                    <div className='flex pr-14'>

                    <Link to="/">
              <div className="justify-center items-center px-11   py-[16px] rounded-[105px] bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
               
                  <p className="text-[16px] not-italic font-normal leading-[normal]"  >Home</p>
               

              </div>
              </Link>

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

                    <div className='pr-2 relative'> 
                        <button className='bg-[#1AB78D] px-11 py-4 rounded-[4px]' onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave} onClick={toggleAccountDropdown}>
                            <div className='flex gap-4'>
                                <p className='text-[color:var(--White,#FFF)] text-[17px] not-italic font-semibold leading-[normal]'>My Account</p>
                                <img src={logo3} alt=""  />
                            </div>
                        </button>
                        {isAccountDropdownOpen && (
                                <div className={`account-list show`} onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                                    <ul className="drop-menu">
                                        <li className='flex'>
                                            <Link to="/points">
                                            <img src={acc} alt="" />
                                                <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>My Points</p>
                                                
                                            </Link>
                                        </li>
                                        <li className='flex'>
                                            <Link to="/profile">
                                            <img src={acc1} alt="" />
                                                <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>My Profile</p>
                                            </Link>
                                        </li>
                                        <li className='flex'>
                                            <Link to="/password">
                                                <img src={acc2} alt=""/>
                                                <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Change Password</p>
                                            </Link>
                                        </li>
                                        <li className='flex'>
                                            <Link to="/logout">
                                            <img src={acc3} alt=""/>
                                                <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Logout</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
