import React, { useState } from 'react';
import log from "../../../../assets/images/Frame.png";
import "./UserDashboard.css"
import logo1 from "../../../../assets/images/planet.png";
import logo5 from "../../../../assets/images/circle.png";


const UserDashboard = () => {

    const [upcomingActive, setUpcomingActive] = useState(true)
    const [PastActive, setPastActive] = useState(false)
    const [activeButton1, setActiveButton1] = useState('today');
    const [activeButton, setActiveButton] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [isRotated, setIsRotated] = useState(false);
    const [activePerson, setActivePerson] = useState(false);

    const handleIconClick = () => {
        setIsRotated(!isRotated);
    };
    
    const togglePerson = () => {
        setActivePerson(!activePerson)
    }
    const toggleUpcoming = () => {
        setUpcomingActive(!upcomingActive);

        if (!upcomingActive) {
            setPastActive(false);
        }
    };
    const togglePast = () => {
        setPastActive(!PastActive);

        if (!PastActive) {
            setUpcomingActive(false);
        }
    };
    const [dropdownVisible, setDropdownVisible] = useState({
        today: true,
        thisWeek: false,
        thisMonth: false,
        thisYear: false,
    });
    const toggleDropdown1 = (button) => {
        setActiveButton1(button);
        setDropdownVisible((prevState) => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === button ? !prevState[key] : false])),
        }));
    };

    const dropdownContent = [
        {
            title: 'FCPI ID Forum Year in Review 2023',
            speaker: 'Veena Vengopalan PharmD., BCIDP',
            time: '8:00 PM - 9:00 PM Top Papers in PK/PD and TDM for Antimicrobials',
        },
        {
            title: 'Basic Module in Infectious Diseases',
            speaker: 'Sangita Sudhir',
            time: '6:00 PM - 7:00 PM Microbiology and Antimicrobial Resistance',
        },
        {
            title: 'Basic Module in Infectious Diseases',
            speaker: 'Sangita Sudhir',
            time: '6:00 PM - 7:00 PM Microbiology and Antimicrobial Resistance',
        },
    ];
    const dropdownContent1 = [
        {
            title: 'FCPI ID Forum Year in Review 2023',
            speaker: 'Veena Vengopalan PharmD., BCIDP',
            time: '8:00 PM - 9:00 PM Top Papers in PK/PD and TDM for Antimicrobials',
        },
        {
            title: 'Basic Module in Infectious Diseases',
            speaker: 'Sangita Sudhir',
            time: '6:00 PM - 7:00 PM Microbiology and Antimicrobial Resistance',
        },
        {
            title: 'Basic Module in Infectious Diseases',
            speaker: 'Sangita Sudhir',
            time: '6:00 PM - 7:00 PM Microbiology and Antimicrobial Resistance',
        },

    ];
    return (
        <div className='bg-[#f4f4f4] w-[100%] h-[100%] p-6 '>
            <div className='bg-white p-6'>

                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Welcome to FCPI Dashboard</p>


                <p className='text-[color:var(--Gray,#58585A)] text-[14px] not-italic font-normal leading-[24px]'>Your FCPI Dashboard for today</p>
                <hr className='mt-6' />
                <div className='flex   pt-8'>
                    <div className='h-[230px] w-[230px]'>
                        <img src={log} alt="" className='rounded-[8px] rounded-r-none' />
                    </div>
                    <div className='bg-[#f4f4f4] w-[100%]   rounded-[8px] rounded-l-none h-[192px] p-8 '>
                        <div>
                            <div className='flex pt-3 gap-8'>
                                <p className='text-[color:var(--Black,#222)] text-[20px] not-italic font-semibold leading-[normal]'>Mammen Paul</p>
                                <button className=' bg-[#EAFCEC] border border-[#64A15E] px-3 rounded-[30px]'>
                                    <p className='text-[#64A15E] text-[14px] not-italic font-semibold leading-[17px]'>Active</p>
                                </button>
                            </div>
                        </div>
                        <div className=' pt-2'>
                            <p className='text-gray-600 text-sm text-[16px] font-normal leading-normal'>
                                <span className='text-[16px] text-gray-600'> Male</span>
                                <span className="dot-before text-gray-600 pl-3 text-[16px]">36 years (24/06/1984)</span>
                                <span className="dot-before text-gray-600 pl-3 text-[16px]">Self employed</span>
                            </p>
                        </div>
                        <div className='pt-2 flex'>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>ID</p>
                                <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>PA678912</p>
                            </div>
                            <div className='pl-6'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>File number</p>
                                <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>AB876543210</p>
                            </div>
                            <div className='pl-6'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>Aadhaar number</p>
                                <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>XXXXX543210</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex pt-6 gap-6'>
                    <div className=' w-[847px]  p-6  bg-white shadow-equal h-[530px] rounded-[8px] pt-6 '>
                        <div className='flex justify-between'>
                            <p className='text-[color:var(--Black,#222)] text-[27px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Events</p>
                            <div>
                                <button className={`relative p-3 px-4  rounded-[4px] ${upcomingActive ? ' bg-[#00549A]' : 'bg-gray-100'}`} onClick={toggleUpcoming}>
                                    <div className='flex gap-3'>

                                        <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${upcomingActive ? 'text-white' : 'text-gray-600'}`}>Upcoming Event</p>

                                    </div>
                                </button>
                                <button className={`relative p-3 px-4 rounded-[4px] ${PastActive ? ' bg-[#00549A]' : 'bg-gray-100'}`} onClick={togglePast}>
                                    <div className='flex gap-3'>

                                        <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${PastActive ? 'text-white' : 'text-gray-600'}`}>Past Event</p>

                                    </div>
                                </button>
                            </div>


                        </div>
                        {upcomingActive && (
                            <div className="dropdown-content mt-4">
                                {dropdownContent.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='flex pt-6'>
                                            <img src={logo1} alt="" className='rounded-[8px]' />
                                            <div className='pl-4'>
                                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-semibold leading-[normal]'>{item.title}</p>
                                                <p className='text-[color:var(--Green,#1AB78D)] pt-2 text-[19px] not-italic font-medium leading-[20px]'>{item.speaker}</p>
                                                <p className='text-[color:var(--Gray,#58585A)] pt-1 text-[17px] not-italic font-normal leading-[20px]'>{item.time}</p>
                                            </div>
                                        </div>
                                        <hr className='mt-6' />
                                    </React.Fragment>
                                ))}
                                <div className='text-end pt-4'>
                                    <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                        <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all</p>
                                    </button>
                                </div>
                            </div>
                        )}
                        {PastActive && (
                            <div className="dropdown-content mt-4">
                                {dropdownContent1.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='flex pt-6'>
                                            <img src={logo1} alt="" className='rounded-[8px]' />
                                            <div className='pl-4'>
                                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-semibold leading-[normal]'>{item.title}</p>
                                                <p className='text-[color:var(--Green,#1AB78D)] pt-2 text-[19px] not-italic font-medium leading-[20px]'>{item.speaker}</p>
                                                <p className='text-[color:var(--Gray,#58585A)] pt-1 text-[17px] not-italic font-normal leading-[20px]'>{item.time}</p>
                                            </div>
                                        </div>
                                        <hr className='mt-6' />
                                    </React.Fragment>
                                ))}
                                <div className='text-end pt-4'>
                                    <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                        <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all</p>
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className='flex pt-6'>


                        </div>


                    </div>
                    <div className='p-4 bg-white shadow-equal rounded-[8px] w-[530px] h-[530px] pt-6 '>
                        <div className='flex justify-between'>
                            <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Event Calendar</p>
                            <div className=' '>
                                <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                    <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all </p>
                                </button>
                            </div>
                        </div>
                        <hr className='mt-4' />
                        <div className='flex gap-3 pt-4'>
                            <button
                                className={`border border-[#CBCBCB] rounded-[102px] px-5 py-2 ${activeButton1 === 'today' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                onClick={() => toggleDropdown1('today')}
                            >
                                <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'today' ? 'text-[#1AB78D]' : ''}`}>Today</p>
                            </button>
                            <button
                                className={`border border-[#CBCBCB] rounded-[102px] px-6 py-2 ${activeButton1 === 'thisWeek' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                onClick={() => toggleDropdown1('thisWeek')}>
                                <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'thisWeek' ? 'text-[#1AB78D]' : ''}`}>This Week</p>
                            </button>
                            <button
                                className={`border border-[#CBCBCB] rounded-[102px] px-6 py-2 ${activeButton1 === 'thisMonth' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                onClick={() => toggleDropdown1('thisMonth')}>
                                <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'thisMonth' ? 'text-[#1AB78D]' : ''}`}>This Month</p>
                            </button>
                            <button
                                className={`border border-[#CBCBCB] rounded-[102px] px-5 py-2 ${activeButton1 === 'thisYear' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                onClick={() => toggleDropdown1('thisYear')}>
                                <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'thisYear' ? 'text-[#1AB78D]' : ''}`}>This Year</p>
                            </button>
                        </div>
                        <hr className='mt-4' />
                        {dropdownVisible.today && (
                            <div className=' '>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5'>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5 '>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {dropdownVisible.thisWeek && (
                            <div className=' '>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5'>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5 '>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {dropdownVisible.thisMonth && (
                            <div className=' '>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5'>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5 '>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {dropdownVisible.thisYear && (
                            <div className=' '>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5'>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='bg-white shadow-equal p-5 '>

                                        <div className='flex  gap-5'>
                                            <div className='bg-[#DFF9F2] px-5    rounded-[30px]'>
                                                <p className='text-[#1AB78D] pt-1 text-[22px] text-center  not-italic font-semibold leading-[normal]'>8</p>
                                                <p className='text-[#1AB78D]  text-[16px] not-italic font-normal leading-[normal]'>Jan</p>
                                            </div>
                                            <div>
                                                <p className=' text-[#222] text-[20px] not-italic font-medium leading-[normal]'>Infectious Diseases Forum</p>
                                                <div className='pt-2 flex gap-4'>
                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>FCPI Launch (Recorded video)</p>
                                                    </button>

                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-5 py-1'>
                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]'>08-01-24</p>
                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                        <p className='pt-4    text-[#58585A] text-[14px] not-italic font-normal leading-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever
                                            since <br />the 1500s, when an unknown printer took</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className='pt-6'>
                    <div className='bg-white shadow-equal rounded-[8px] w-[100%] p-6'>

                        <div className='flex justify-between'>
                            <div>
                                <button className='bg-gray-100 rounded-[4px] rounded-b-none px-8 py-2'>
                                    <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[25px] tracking-[-0.105px]'>Personal Information</p>
                                </button>
                            </div>
                            <div className={`pt-2 ${isRotated ? 'rotate-icon' : ''}`} onClick={handleIconClick}>
                                <img src={logo5} alt="" />
                            </div>

                        </div>
                        <hr />
                        
                        <div>
                        <div className='flex justify-between pt-8'>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Current Work Institution Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>KMCT</p>
                            </div>
                        </div>
                        <div className='flex justify-between pt-16'>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
                            </div>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Current Work Institution Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>KMCT</p>
                            </div>
                        </div>
                        <div className='flex   pt-16'>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px]  not-italic font-normal leading-[22px] tracking-[-0.07px]'>Secondary<br /> Pharmacy Degree:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Doctor of Pharmacy</p>
                            </div>
                            <div className='pl-[8rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Name of Pharmacy <br />College Degree:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> KMCT</p>
                            </div>
                            <div className='pl-[7rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Additional Degrees: </p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Yes</p>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div className='pt-6'>
                    <div className='bg-white shadow-equal rounded-[8px] w-[100%] p-6'>

                        <div className='flex justify-between'>
                            <div>
                                <button className='bg-gray-100 rounded-[4px] rounded-b-none px-5 py-2'>
                                    <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[25px] tracking-[-0.105px]'>Mailing Address</p>
                                </button>
                            </div>
                            <div className={`pt-2 ${isRotated ? 'rotate-icon' : ''}`} onClick={handleIconClick}>
                                <img src={logo5} alt="" />
                            </div>

                        </div>
                        <hr />
                        <div className='flex   pt-8'>
                            <div >
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
                            </div>
                            <div className='pl-[10.5rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
                            </div>
                            <div className='pl-[10.5rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
                            </div>
                            <div className='pl-[10.5rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
                            </div>

                        </div>

                        <div className='flex   pt-16'>
                            <div>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px]  not-italic font-normal leading-[22px] tracking-[-0.07px]'>Secondary<br /> Pharmacy Degree:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Doctor of Pharmacy</p>
                            </div>
                            <div className='pl-[8rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Name of Pharmacy <br />College Degree:</p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> KMCT</p>
                            </div>
                            <div className='pl-[7rem]'>
                                <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Additional Degrees: </p>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Yes</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
