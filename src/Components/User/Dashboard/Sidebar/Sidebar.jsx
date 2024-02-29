import React, { useState } from 'react';
import {Link} from "react-router-dom"
import log1 from "../../../../assets/images/fcpi 1.png";
import log2 from "../../../../assets/images/menu-02.svg";
import dash from "../../../../assets/images/dashboard-circleblack.svg";
import log3 from "../../../../assets/images/dashboard-circle.png";
import "./Sidebar.css";
import dash1 from "../../../../assets/images/camera-videoblack.svg";
import log4 from "../../../../assets/images/camera-videowhite.svg";
import dash2 from "../../../../assets/images/calendar-01black.svg";
import log5 from "../../../../assets/images/calendar-02white.svg";
import dash3 from "../../../../assets/images/download-square-02black.svg";
import log6 from "../../../../assets/images/download-square-02white.svg";
import dash4 from "../../../../assets/images/certificateblack.svg";
import log7 from "../../../../assets/images/certificatewhite.svg";
import dash5 from "../../../../assets/images/giftblack.svg";
import log8 from "../../../../assets/images/giftwhite.svg";
import dash6 from "../../../../assets/images/logout-02black.svg";
import log9 from "../../../../assets/images/logout-02whaite.svg";

const Sidebar = () => {
    const [hoveredButton, setHoveredButton] = useState(false);
    const [hovered1Button, setHovered1Button] = useState(false);
    const [hovered2Button, setHovered2Button] = useState(false);
    const [hovered3Button, setHovered3Button] = useState(false);
    const [hovered4Button, setHovered4Button] = useState(false);
    const [hovered5Button, setHovered5Button] = useState(false);
    const [hovered6Button, setHovered6Button] = useState(false);
    const [hovered7Button, setHovered7Button] = useState(false);

    return (

        <div className='bg-gray-100  '>
            <div className='bg-white p-6  '>
            <div className='flex justify-between'>
                <img src={log1} alt="" />
                <img src={log2} alt="" />
            </div>
            <div className='pt-16'>
                <Link to="/dashboard">
                <button
                    className='button w-full py-3 rounded-[6px]'
                    onMouseEnter={() => setHoveredButton(true)}
                    onMouseLeave={() => setHoveredButton(false)}
                >
                    <div className='flex gap-4 items-center pl-4 '>
                        <img src={hoveredButton ? log3 : dash} alt="Logo" className='dashboard-image' />
                        <p className='button-text text-[18px]'>
                            Dashboard
                        </p>
                    </div>
                </button>
                </Link>
                <div className='pt-2'>
                    <button
                        className='button  w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered1Button(true)}
                        onMouseLeave={() => setHovered1Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered1Button ? log4 : dash1} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Live
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-2'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered2Button(true)}
                        onMouseLeave={() => setHovered2Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered2Button ? log5 : dash2} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Upcoming Events
                            </p>
                        </div>

                    </button>
                </div>
                <div className='pt-2'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered3Button(true)}
                        onMouseLeave={() => setHovered3Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered3Button ? log5 : dash2} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Attended Events
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-2'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered4Button(true)}
                        onMouseLeave={() => setHovered4Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered4Button ? log6 : dash3} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Downloads
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-2'>
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
                <div className='pt-2'>
                    <button
                        className='button w-full py-3 rounded-[6px]'
                        onMouseEnter={() => setHovered6Button(true)}
                        onMouseLeave={() => setHovered6Button(false)}
                    >
                        <div className='flex gap-4 items-center pl-4 '>
                            <img src={hovered6Button ? log8 : dash5} alt="Logo" className='dashboard-image' />
                            <p className='button-text text-[18px]'>
                                Points
                            </p>
                        </div>
                    </button>
                </div>
                <div className='pt-2'>
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
            <div className='pt-[17rem] pl-4'>
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

export default Sidebar;
