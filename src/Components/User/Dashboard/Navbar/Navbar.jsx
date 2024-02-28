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

    return (
        <div className=''>
             <div className= " w-full h-full ">
                 <div className="flex p-4 bg-white pt-4 justify-end">
                    <div className='flex pr-14'>

                        <div className="justify-center items-center px-11 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                            <p className="text-[17px] not-italic font-normal leading-[normal]">Home</p>
                        </div>

                        <div className="justify-center items-center px-8 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white about-us-button" >
                            <p className="text-[17px] not-italic font-normal leading-[normal]" >About Us</p>
                        </div>

                        <div className="justify-center items-center px-11 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                            <p className="text-[17px] not-italic font-normal leading-[normal]" >Specialty Forums</p>
                        </div>

                        <div className="justify-center items-center px-11 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                            <p className="text-[17px] not-italic font-normal leading-[normal]" >Events</p>
                        </div>

                        <div className="justify-center items-center px-11 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                            <p className="text-[17px] not-italic font-normal leading-[normal]" >Blogs</p>
                        </div>
                      
                        <div className="justify-center items-center px-11 py-4 bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
                            <p className="text-[17px] not-italic font-normal leading-[normal]" >Contact Us</p>
                        </div>
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
