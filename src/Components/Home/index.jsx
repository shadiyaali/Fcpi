import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink, } from 'react-router-dom';
import logo from "../../../src/assets/images/FCPI Logo 1.svg";
import logo1 from "../../../src/assets/images/user-story.png";
import logo2 from "../../../src/assets/images/user-add--01.png";
import logo3 from "../../../src/assets/images/user-story.svg";
import axios from "axios";
import { BASE_URL } from '../../Utils/Config';

import './index.css'

const Home = () => {

    const [showAboutList, setShowAboutList] = useState(false);
    const [hoveredLogin, setHoveredLogin] = useState(false);
    const [isAboutDropdownHovered, setIsAboutDropdownHovered] = useState(false);
    const [showSpecialtyList, setShowSpecialtyList] = useState(false);
    const [forums, setForums] = useState([]);
    const location = useLocation();
    const isActive = location.pathname === '/register';

    // const handleButtonClick = (buttonName) => {
    //   setActiveButton(buttonName);
    // };
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

    const handleSpecialtyMouseEnter = () => {
        setShowSpecialtyList(true);
    };

    const handleSpecialtyMouseLeave = () => {
        setShowSpecialtyList(false);
    };
    const handleDropdownMouseEnter = () => {
        setIsAboutDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsAboutDropdownHovered(false);
    };
    useEffect(() => {
        const fetchForums = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/forums/`);
                console.log("Fetched forums data:", response.data);
                setForums(response.data);
            } catch (error) {
                console.error("Error fetching forums:", error);
            }
        };

        fetchForums();
    }, []);


    return (
        <div className="w-100% h-100% bg-[#f4f4f4]">
            <div className="container">
                <div className="header">
                    <div className="grid pt-6">
                        <img src={logo} alt="Logo" className="" />
                    </div>
                    <div className="pt-6 pl-16 ">
                        <div className=" flex bg-white   rounded-[150px]">
                            <Link
                                to="/"
                                className={`justify-center items-center px-11 py-[16px] rounded-[105px] bg-${location.pathname === '/' ? '[#00549A]' : 'white'} text-${location.pathname === '/' ? 'white' : 'black'} hover:bg-[#00549a] hover:text-white`}
                            >
                                <div>
                                    <p className="text-[16px] not-italic font-normal leading-[normal]">Home</p>
                                </div>
                            </Link>

                            <Link to=""

                                className={`justify-center items-center px-8 py-[16px] rounded-[105px] bg-${location.pathname.startsWith('/about') ? '[#00549a]' : 'white'} text-${location.pathname.startsWith('/about') ? 'white' : '[#222]'} hover:bg-[#00549a] hover:text-white about-us-button`}
                                onMouseEnter={handleAboutMouseEnter}
                                onMouseLeave={handleAboutMouseLeave}
                            >
                                <p className="text-[16px] not-italic font-normal leading-[normal]">About Us</p>
                                {isAboutDropdownHovered && (
                                    <div
                                        className={`about-list show`}
                                        onMouseEnter={handleDropdownMouseEnter}
                                        onMouseLeave={handleDropdownMouseLeave}
                                    >
                                        <ul className="drop-menu">
                                            <li className="">
                                                <Link to="/about-fcpi">
                                                    <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>About FCPI</p>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/about-board">
                                                    <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Board of Directors</p>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/about-forum">
                                                    <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]" style={{ display: "block" }}>Forum Members</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            </Link>

                            {/* Specialty Forums */}
                            <div
                                className={`relative justify-center items-center px-11 py-[16px] rounded-[105px] bg-${location.pathname.includes("/speciality-forum")
                                    ? "[#00549A]"
                                    : "white"
                                    } text-${location.pathname.includes("/speciality-forum")
                                        ? "white"
                                        : "black"
                                    } hover:bg-[#00549a] hover:text-white`}
                                onMouseEnter={handleSpecialtyMouseEnter}
                                onMouseLeave={handleSpecialtyMouseLeave}
                            >
                                <p className="text-[16px] not-italic font-normal leading-[normal]">
                                    Specialty Forums
                                </p>
                                {showSpecialtyList && (
                                    <div className="forum-list show">
                                        <ul className="drop-menu">
                                            {forums.map((forum) => (
                                                <li key={forum.id}>
                                                    <Link to={`/speciality-forum/${forum.title}`} >
                                                        <p className="text-[14px] not-italic px-3 py-1 font-normal leading-[normal]">
                                                            {forum.title}
                                                        </p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link
                                to="/events"
                                className={`justify-center items-center px-11 py-[16px] rounded-[105px] bg-${location.pathname.includes('/events') ? '[#00549A]' : 'white'} text-${location.pathname.includes('/events') ? 'white' : 'black'} hover:bg-[#00549a] hover:text-white`}
                            >
                                <div>
                                    <p className="text-[16px] not-italic font-normal leading-[normal]">Events</p>
                                </div>
                            </Link>
                            <Link
                                to="/blogs"
                                className={`justify-center items-center px-11 py-[16px] rounded-[105px] bg-${location.pathname.includes('/blogs') ? '[#00549A]' : 'white'} text-${location.pathname.includes('/blogs') ? 'white' : 'black'} hover:bg-[#00549a] hover:text-white`}
                            >
                                <div>
                                    <p className="text-[16px] not-italic font-normal leading-[normal]">Blogs</p>
                                </div>
                            </Link>
                            <Link
                                to="/contact"
                                className={`justify-center items-center px-11 py-[16px] rounded-[105px] bg-${location.pathname.includes('/contact') ? '[#00549A]' : 'white'} text-${location.pathname.includes('/contact') ? 'white' : 'black'} hover:bg-[#00549a] hover:text-white`}
                            >
                                <div>
                                    <p className="text-[16px] not-italic font-normal leading-[normal]">Contact Us</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="pl-5 pt-6">
                        <Link to="/login">
                            <div
                                className={`flex justify-center items-center px-[27px] py-[8px] bg-${location.pathname === '/otp' ? '[1AB78D]' : (hoveredLogin ? '[1AB78D]' : '[f4f4f4]')} text-${location.pathname === '/otp' ? 'white' : (hoveredLogin ? 'white' : '[00549A]')} rounded-[105px] border border-[#00549A] hover:border-[#1AB78D] hover:bg-[#1AB78D]`}
                                onMouseEnter={handleLoginMouseEnter}
                                onMouseLeave={handleLoginMouseLeave}
                                onClick={() => {
                                    document.activeElement.blur();
                                }}
                            >
                                <p className="text-[14px] not-italic font-medium leading-[normal]">Login</p>
                                <div className="pl-4">
                                    <img src={location.pathname === '/otp' || hoveredLogin ? logo3 : logo1} alt="Logo" className="" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className=" pl-5 pt-6">
                        <Link
                            to="/register"
                            className={`flex justify-center items-center px-[30px] py-[10px] rounded-[105px] bg-${isActive ? '[#00549A]' : '[#1AB78D]'} hover:bg-[#00549A]`}
                            onClick={() => {
                                document.activeElement.blur();
                            }}
                        >
                            <p className={`text-[14px] not-italic font-normal leading-[normal] text-${isActive ? 'white' : 'white'}`}>Join FCPI</p>
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
