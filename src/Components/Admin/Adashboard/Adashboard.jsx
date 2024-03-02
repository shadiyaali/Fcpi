import React, { useState } from 'react';
import adm from "../../../assets/images/admin-3.png";
import logo1 from "../../../assets/images/planet.png";
import grn from "../../../assets/images/green.png";
import cam from "../../../assets/images/camera.png";
import img from "../../../assets/images/ad-user.png";
import exp from "../../../assets/images/export.png";
import grp from "../../../assets/images/graph.png";
import adm1 from "../../../assets/images/bg-adm.png";
import blg from "../../../assets/images/blg.png";
import "./Adashboard.css";


const Adashboard = () => {
    const [upcomingActive, setUpcomingActive] = useState(true)
    const [PastActive, setPastActive] = useState(false)
    const [activeButton, setActiveButton] = useState('');
    const [activeButton1, setActiveButton1] = useState('today');
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


    ];
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
    return (
        <div className='bg-[#f4f4f4] w-[100%] h-[100%] p-6 '>


            <div className='grading overflow-hidden rounded-[8px] relative'>
                <img src={adm} alt="" className='rounded-[8px] w-[100%] overflow-hidden' />
                <div className='absolute left-6 bottom-6  '>

                    <div className='w-full flex-justify between '>
                        <div className=''>
                            <p className='text-white relative z-10 text-[32px] not-italic font-bold leading-[normal] uppercase'>FCPI Virtual ID Week</p>
                            <p className='text-white relative z-10 pt-3 pl-2 text-[18px] not-italic font-medium leading-[normal]'>(Day-3)</p>
                            <p className='text-white relative z-10 text-[21px] not-italic font-normal leading-[normal]'>Infectious Diseases Forum</p>

                        </div>




                        <div className='relative  z-10'>


                            <div>
                                <img src={grn} alt="" />
                            </div>
                            <p className='text-[color:var(--White,#FFF)] relative z-10 text-[21px] not-italic font-semibold leading-[25px] tracking-[-0.105px]'>Live Events</p>
                            <img src={cam} alt="" />
                        </div>

                    </div>


                </div>
            </div>
            <div className=''>
                <div className='flex pt-6 gap-6'>
                    <div className=' w-[61.6%]    pl-6 pr-6  bg-white shadow-equal  h-auto rounded-[8px] pt-6 '>
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
                                        <div className='flex pt-3'>
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
                                        <div className='flex pt-3'>
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
                                <div className='text-end pt-5'>
                                    <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                        <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all</p>
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className='flex pt-6'>


                        </div>

                    </div>
                    <div className='bg-white rounded-[8px] w-[39%] p-6'>
                        <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Recent Registered User’s</p>
                        <hr className='mt-6' />
                        <div className='flex  pt-5  '>
                            <div className=''>
                                <img src={img} alt="" />
                            </div>
                            <div className='flex w-[100%] justify-between'>
                                <div className='pl-4'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[normal] tracking-[0.25px]'>Mohamed Hisham</p>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[12px] not-italic font-normal leading-[normal] tracking-[0.25px]'>Registered on 01-01-24</p>
                                </div>
                                <div className=' pl-4'>
                                    <button className='px-4 py-2 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>

                                        <p className='text-[color:var(--Green,#1AB78D)] text-[14px] not-italic font-medium leading-[normal]'>Active</p>

                                    </button>
                                </div>

                            </div>

                        </div>
                        <hr className='mt-4' />
                        <div className='flex  pt-5'>
                            <div className=''>
                                <img src={img} alt="" />
                            </div>
                            <div className='flex w-[100%] justify-between '>
                                <div className='pl-4'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[normal] tracking-[0.25px]'>Mohamed Hisham</p>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[12px] not-italic font-normal leading-[normal] tracking-[0.25px]'>Registered on 01-01-24</p>
                                </div>
                                <div className=' pl-2'>
                                    <button className='px-4 py-2 rounded-[4px]' style={{
                                        background: "rgba(244, 77, 41, 0.10)"

                                    }}>

                                        <p className='text-[#F44D29] text-[14px] not-italic font-medium leading-[normal]'>Inactive</p>

                                    </button>
                                </div>

                            </div>

                        </div>
                        <hr className='mt-4' />
                        <div className='flex  pt-5'>
                            <div className=''>
                                <img src={img} alt="" />
                            </div>
                            <div className='flex w-[100%] justify-between '>
                                <div className='pl-4'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[normal] tracking-[0.25px]'>Mohamed Hisham</p>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[12px] not-italic font-normal leading-[normal] tracking-[0.25px]'>Registered on 01-01-24</p>
                                </div>
                                <div className=' pl-4'>
                                    <button className='px-4 py-2 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>

                                        <p className='text-[color:var(--Green,#1AB78D)] text-[14px] not-italic font-medium leading-[normal]'>Active</p>

                                    </button>
                                </div>

                            </div>

                        </div>
                        <hr className='mt-4' />
                        <div className='text-end pt-5'>
                            <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all User’s </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex pt-6 gap-6'>
                <div className='bg-white rounded-[8px] w-[423px]  '>
                    <p className='text-[color:var(--Black,#222)] pl-6 pt-6 text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>User Count</p>
                    <hr className='mt-6 w-full' />
                    <div className='flex pt-6'>
                        <p className='text-[color:var(--Blue,#00549A)] pl-6 text-[40px] not-italic font-semibold leading-[23px] tracking-[-1.95px]'>3256</p>
                        <img src={exp} alt="" className='pl-2' />
                        <p className='text-[color:var(--Gray,#58585A)] pl-4 text-[16px] not-italic font-normal leading-[normal] tracking-[-0.07px]'>Total Users</p>
                    </div>
                    <div className='flex pl-6'>
                        <p className='text-[color:var(--Gray,#58585A)] text-[18px] pt-6 not-italic font-normal leading-[normal] tracking-[-0.08px]'>Today</p>
                        <div className='pl-4 pt-4'>
                            <div className='px-2 py-2  rounded-[30px]' style={{ background: "rgba(238, 110, 110, 0.10)" }}>
                                <p className='text-[#EE6E6E] text-[17px] not-italic font-normal leading-[22.452px]'>45</p>
                            </div>
                        </div>
                        <p className='text-[color:var(--Gray,#58585A)] pt-6 text-[20px] pl-6 not-italic font-normal leading-[normal] tracking-[-0.08px]'>This week</p>
                        <div className='pl-4 pt-4'>
                            <div className='px-2 py-2  rounded-[30px]' style={{ background: "rgba(0, 84, 154, 0.10)" }}>
                                <p className='text-[#00549A] text-[17px] not-italic font-normal leading-[22.452px]'>116</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-6 pl-6 pr-6 pb-6'>
                        <img src={grp} alt="" className='w-[100%]' />
                    </div>
                </div>
                <div className='bg-white rounded-[8px] w-[75%] p-6'>



                    <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Newsletters</p>
                    <hr className='mt-6' />

                    <div className='flex w-[100%] pt-6'>
                        <div>
                            <img src={adm1} alt="" className='rounded-[4px]' />
                        </div>
                        <div className='pl-4 w-[100%] '>
                            <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[23px]'>Product-Led Growth vs. Sales-Led Growth<br />
                                vs. Marketing-Led Growth</p>
                            <div className='flex justify-between'>
                                <div className='pt-1'>
                                    <button className='bg-gray-100 rounded-[74px] px-4 py-1'>
                                        <p className='text-[#58585A] text-[17px] not-italic font-normal leading-[normal]'>Critical Care Medicine Forum</p>
                                    </button>
                                </div>
                                <p className=' text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[20px]'>January 2024</p></div>
                        </div>
                    </div>
                    <hr className='mt-6' />
                    <div className='flex pt-6'>
                        <div>
                            <img src={adm1} alt="" className='rounded-[4px]' />
                        </div>
                        <div className='pl-4 w-[100%] '>
                            <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[23px]'>Product-Led Growth vs. Sales-Led Growth<br />
                                vs. Marketing-Led Growth</p>
                            <div className='flex justify-between'>
                                <div className='pt-1'>
                                    <button className='bg-gray-100 rounded-[74px] px-4 py-1'>
                                        <p className='text-[#58585A] text-[17px] not-italic font-normal leading-[normal]'>Critical Care Medicine Forum</p>
                                    </button>
                                </div>
                                <p className=' text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[20px]'>January 2024</p></div>
                        </div>
                    </div>
                    <hr className='mt-6' />
                    <div className='text-end pt-6'>
                        <button className='bg-gray-100 px-4 py-2 rounded-[4px]  '>
                            <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all Newsletters </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex pt-6 gap-6'>
                <div className='bg-white rounded-[8px] w-[61.6%] p-6'>



                    <div className='flex justify-between'>
                        <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>  <div className='flex justify-between'>
                            <p className='text-[color:var(--Black,#222)] text-[28px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Recent Blogs</p>
                            <div className=' '>

                            </div>
                        </div></p>
                        <div className=' '>
                            <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
                                <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all </p>
                            </button>
                        </div>
                    </div>
                    <hr className='mt-6' />

                    <div className='flex w-[100%] pt-7'>
                        <div>
                            <img src={blg} alt="" className='rounded-[4px]' />
                        </div>
                        <div className='pl-4 w-[100%] '>
                            <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[23px]'>Product-Led Growth vs. Sales-Led Growth<br />
                                vs. Marketing-Led Growth</p>
                            <div className='flex justify-between'>
                                <div className='pt-2'>
                                    <button className='bg-gray-100 rounded-[74px] px-4 py-1'>
                                        <p className='text-[#58585A] text-[17px] not-italic font-normal leading-[normal]'>Critical Care Medicine Forum</p>
                                    </button>
                                </div>
                                <p className=' text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[20px]'>January 2024</p></div>
                        </div>
                    </div>
                    <hr className='mt-6' />
                    <div className='flex pt-7'>
                        <div>
                            <img src={blg} alt="" className='rounded-[4px]' />
                        </div>
                        <div className='pl-4 w-[100%] '>
                            <p className='text-[color:var(--Black,#222)] text-[21px] not-italic font-medium leading-[23px]'>Product-Led Growth vs. Sales-Led Growth<br />
                                vs. Marketing-Led Growth</p>
                            <div className='flex justify-between'>
                                <div className='pt-2'>
                                    <button className='bg-gray-100 rounded-[74px] px-4 py-1'>
                                        <p className='text-[#58585A] text-[17px] not-italic font-normal leading-[normal]'>Critical Care Medicine Forum</p>
                                    </button>
                                </div>
                                <p className=' text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[20px]'>January 2024</p></div>
                        </div>
                    </div>
                    <hr className='mt-6' />
                    <div className='flex pt-6'>
                        <div>
                            <img src={blg} alt="" className='rounded-[4px]' />
                        </div>
                        <div className='pl-4 w-[100%] '>
                            <p className='text-[color:var(--Black,#222)] text-[22px] not-italic font-medium leading-[23px]'>Product-Led Growth vs. Sales-Led Growth<br />
                                vs. Marketing-Led Growth</p>
                            <div className='flex justify-between'>
                                <div className='pt-1'>
                                    <button className='bg-gray-100 rounded-[74px] px-4 py-1'>
                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]'>Critical Care Medicine Forum</p>
                                    </button>
                                </div>
                                <p className=' text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[20px]'>January 2024</p></div>
                        </div>
                    </div>


                    <div className='text-end pt-6'>

                    </div>
                </div>
                <div className='p-6 bg-white   rounded-[8px] w-[39%]   pt-6 '>
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
                            className={`border border-[#CBCBCB] rounded-[102px] px-5 py-1 ${activeButton1 === 'today' ? 'border-none bg-[#DFF9F2]' : ''}`}
                            onClick={() => toggleDropdown1('today')}
                        >
                            <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'today' ? 'text-[#1AB78D]' : ''}`}>Today</p>
                        </button>
                        <button
                            className={`border border-[#CBCBCB] rounded-[102px] px-6 py-1 ${activeButton1 === 'thisWeek' ? 'border-none bg-[#DFF9F2]' : ''}`}
                            onClick={() => toggleDropdown1('thisWeek')}>
                            <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'thisWeek' ? 'text-[#1AB78D]' : ''}`}>This Week</p>
                        </button>
                        <button
                            className={`border border-[#CBCBCB] rounded-[102px] px-6 py-1 ${activeButton1 === 'thisMonth' ? 'border-none bg-[#DFF9F2]' : ''}`}
                            onClick={() => toggleDropdown1('thisMonth')}>
                            <p className={`text-[#58585A] text-[17px] not-italic font-normal leading-[normal] ${activeButton === 'thisMonth' ? 'text-[#1AB78D]' : ''}`}>This Month</p>
                        </button>
                        <button
                            className={`border border-[#CBCBCB] rounded-[102px] px-5 py-1 ${activeButton1 === 'thisYear' ? 'border-none bg-[#DFF9F2]' : ''}`}
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
                <div className='bg-[white] rounded-[8px] p-6'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Users Active Chart</p>
                        </div>
                  
                    <div>
                                <button className={`relative p-3 px-4  rounded-[4px] ${upcomingActive ? ' bg-[#00549A]' : 'bg-gray-100'}`} onClick={toggleUpcoming}>
                                    <div className='flex gap-3'>

                                        <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${upcomingActive ? 'text-white' : 'text-gray-600'}`}>Monthly</p>

                                    </div>
                                </button>
                                <button className={`relative p-3 px-4 rounded-[4px] ${PastActive ? ' bg-[#00549A]' : 'bg-gray-100'}`} onClick={togglePast}>
                                    <div className='flex gap-3'>

                                        <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${PastActive ? 'text-white' : 'text-gray-600'}`}>Weakly</p>

                                    </div>
                                </button>
                            </div>
                            </div>
                </div>
            </div>
        </div>

    );
};

export default Adashboard;
