import React, { useState } from 'react';
import {Link,NavLink ,useLocation} from "react-router-dom" 
import log1 from "../../../assets/images/fcpi 1.png";
import log2 from "../../../assets/images/menu-02.svg";
import dash from "../../../assets/images/dashboard-circleblack.svg";
import log3 from "../../../assets/images/dashboard-circle.png";
import "./Asidebar.css";
import dash1 from "../../../assets/images/forumb.png";
import log4 from "../../../assets/images/camera-videowhite.svg";
import dash2 from "../../../assets/images/speakerb.png";
import log5 from "../../../assets/images/calendar-02white.svg";
import dash3 from "../../../assets/images/eventsb.png";
import log6 from "../../../assets/images/download-square-02white.svg";
import dash4 from "../../../assets/images/certificateblack.svg";
import log7 from "../../../assets/images/certificatewhite.svg";
import dash5 from "../../../assets/images/userw.png";
import log8 from "../../../assets/images/userb.png";
import dash6 from "../../../assets/images/logout-02black.svg";
import log9 from "../../../assets/images/logout-02whaite.svg";
import dash11 from "../../../assets/images/speakerw.png";
import dash12 from "../../../assets/images/forumw.png";
// 
const Asidebar = () => {
    const [hoveredButton, setHoveredButton] = useState(false);
    const [hovered1Button, setHovered1Button] = useState(false);
    const [hovered2Button, setHovered2Button] = useState(false);
    const [hovered3Button, setHovered3Button] = useState(false);
    const [hovered4Button, setHovered4Button] = useState(false);
    const [hovered5Button, setHovered5Button] = useState(false);
    const [hovered6Button, setHovered6Button] = useState(false);
    const [hovered7Button, setHovered7Button] = useState(false);
    const location = useLocation();

    return (

        <div className='bg-gray-100'>
            <div className='bg-white p-6  '>
           
            <div className='flex justify-between'>
                <img src={log1} alt="" />
                <img src={log2} alt="" />
            </div>
            <div className='pt-8'>
            <Link to="/admin-dashboard">
                        <button
                            className={`button w-full py-3 rounded-[6px] ${location.pathname === '/admin-dashboard' ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredButton(true)}
                            onMouseLeave={() => setHoveredButton(false)}
                        >
                            <div className='flex gap-4 items-center pl-4 '>
                            <img src={location.pathname === '/admin-dashboard' ?  log3 : dash} alt="Logo" className='dashboard-image' />
                                <p className='button-text text-[18px]'>
                                    Dashboard
                                </p>
                            </div>
                        </button>
                    </Link>
                <div className='pt-1'>
                <Link to="/aforum">
                        <button
                            className={`button  w-full py-3 rounded-[6px] ${location.pathname === '/aforum' ? 'active' : ''}`}
                        >
                            <div className='flex gap-4 items-center pl-4 '>
                                {/* Render different icon based on whether the section is active */}
                                <img src={location.pathname === '/aforum' ? dash12 : dash1} alt="Logo" className='dashboard-image' />
                                <p className='button-text text-[18px]'>
                                    Forum
                                </p>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className='pt-1'>
                <Link to="/speaker">
                        <button
                            className={`button  w-full py-3 rounded-[6px] ${location.pathname === '/speaker' ? 'active' : ''}`}
                        >
                            <div className='flex gap-4 items-center pl-4 '>
                                {/* Render different icon based on whether the section is active */}
                                <img src={location.pathname === '/speaker' ? dash11 : dash2} alt="Logo" className='dashboard-image' />
                                <p className='button-text text-[18px]'>
                                    Speakers
                                </p>
                            </div>
                        </button>
                    </Link>
                </div>
                <Link to="">
                        <button
                            className={`button w-full py-3 rounded-[6px] ${location.pathname === '' ? 'active' : ''}`}
                        >
                            <div className='flex gap-4 items-center pl-4 '>
                                {/* Render different icon based on whether the section is active */}
                                <img src={location.pathname === '' ? log5 : dash3} alt="Logo" className='dashboard-image' />
                                <p className='button-text text-[18px]'>
                                    Events
                                </p>
                            </div>
                        </button>
                    </Link>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered3Button(true)}
                        onMouseLeave={() => setHovered3Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered3Button ? log5 : dash2} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Blogs
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered4Button(true)}
                        onMouseLeave={() => setHovered4Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered4Button ? log6 : dash3} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Newsletter
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered5Button(true)}
                        onMouseLeave={() => setHovered5Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered5Button ? log7 : dash4} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Certificates
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                <Link to="/user">
                        <button
                            className={`button w-full py-3 rounded-[6px] ${location.pathname === '/user' ? 'active' : ''}`}
                        >
                            <div className='flex gap-4 items-center pl-4 '>
                                {/* Render different icon based on whether the section is active */}
                                <img src={location.pathname === '/user' ? log8 : dash5} alt="Logo" className='dashboard-image' />
                                <p className='button-text text-[18px]'>
                                    Users
                                </p>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            CMS
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Journal Watch
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Podcast
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            Bulk Email
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                            FCPI
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-1'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered7Button(true)}
                        onMouseLeave={() => setHovered7Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered7Button ? log9 : dash6} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Logout
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='pl-4 pt-4'>
                <p className='text-[#969696] text-[14px] not-italic font-normal leading-[16px] tracking-[0.6px]'>Powered by <br />
                    Hoztox Technologies</p>
                <div className='pt-3'>
                    <a href="https://www.hoztox.com" className='text-[#F58A2F] text-[14px] not-italic font-normal leading-[24px] tracking-[0.6px] underline' target="_blank" rel="noopener noreferrer">www.hoztox.com</a>
                </div>
            </div>
        </div>
        </div>
 
    );
};

export default Asidebar;
