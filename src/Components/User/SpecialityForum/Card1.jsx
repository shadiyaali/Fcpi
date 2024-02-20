import React, { useState, useRef } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Card1 = () => {
    const [activeButton, setActiveButton] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showYearDropdown, setShowYearDropdown] = useState({
        '2024': false,
        '2023': false,
        '2022': false,
        '2021': false,
    });
    const [dropdownVisible, setDropdownVisible] = useState({
        today: false,
        thisWeek: false,
        thisMonth: false,
        thisYear: false,
    });

    const events = ['Basic Module in Infectious Diseases', 'Another Event'];
    const eventRefs = useRef(events.map(() => React.createRef()));

    const [showEventDropdown, setShowEventDropdown] = useState(Array(events.length).fill(false));

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setShowYearDropdown({ ...showYearDropdown, [year]: !showYearDropdown[year] });
    };

    const toggleDropdown = (button) => {
        setActiveButton(activeButton === button ? '' : button);
        setShowYearDropdown({ '2024': false, '2023': false, '2022': false, '2021': false });
    };

    const toggleEventDropdown = (index) => {
        const updatedShowEventDropdown = [...showEventDropdown];
        updatedShowEventDropdown[index] = !updatedShowEventDropdown[index];
        setShowEventDropdown(updatedShowEventDropdown);
    };

    const toggleYearDropdown = (year) => {
        setShowYearDropdown({ ...showYearDropdown, [year]: !showYearDropdown[year] });
    };
    const toggleDropdown1 = (button) => {
        setActiveButton(button);  
        setDropdownVisible((prevState) => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === button ? !prevState[key] : false])),
        }));
    };
    
    




    const years = ['2024', '2023', '2022', '2021'];

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className='flex gap-24  pt-6 p-8  bg-white rounded-[30px]'>
                        <div className='text-start p-8'>
                            <p className="text-[#222] text-[32px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Events</p>
                            <p className='text-[#58585A] pt-6 text-[16px] not-italic font-normal leading-[28px]' style={{ fontFamily: "Inter" }}>The Federation of Clinical Pharmacists in India (FCPI) is a non-profitable, professional <br />pharmacy organization composed of a bunch of passionate pharmacists involved in diverse<br /> clinical pharmacy responsibilities in India and across the globe. We have come together<br /> voluntarily with the undeterred goal of enhancing the clinical pharmacy profession,<br /> empowering the clinical pharmacists and thereby delivering high quality patient care.</p>
                            <div className='grid grid-cols-4 pt-8'>

                                <button
                                    className={`bg-[#f4f4f4] p-6 rounded-l-lg ${activeButton === 'webinar' ? 'border-b-2 border-blue-500' : ''}`}
                                    style={{ color: activeButton === 'webinar' ? '#00549A' : '#000' }}
                                    onClick={() => toggleDropdown('webinar')}
                                >
                                    <p className="text-[16px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>
                                        Webinar archives
                                    </p>
                                </button>
                                <button
                                    className={`bg-[#f4f4f4] ${activeButton === 'blog' ? 'border-b-2  border-blue-500' : ''}`}
                                    style={{ color: activeButton === 'blog' ? '#00549A' : '#000' }}
                                    onClick={() => toggleDropdown('blog')}
                                >
                                    <p className='text-[#000] text-[16px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>Blog archives</p>
                                </button>
                                <button
                                    className={`bg-[#f4f4f4] ${activeButton === 'newsletter' ? 'border-b-2 border-blue-500' : ''}`}
                                    style={{ color: activeButton === 'newsletter' ? '#00549A' : '#000' }}
                                    onClick={() => toggleDropdown('newsletter')}
                                >
                                    <p className='text-[#000] text-[16px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>Newsletter archives</p>
                                </button>
                                <button
                                    className={`bg-[#f4f4f4] rounded-r-lg ${activeButton === 'podcast' ? 'border-b-2 border-blue-500' : ''}`}
                                    style={{ color: activeButton === 'podcast' ? '#00549A' : '#000' }}
                                    onClick={() => toggleDropdown('podcast')}
                                >
                                    <p className='text-[#000] text-[16px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>Podcast archives</p>
                                </button>

                            </div>
                            {activeButton && (
                                <>
                                    {years.map((year) => (
                                        <React.Fragment key={year}>
                                            <div className="flex justify-between  border-b-2 border-gray-100 items-center">
                                                <p
                                                    className="p-6 cursor-pointer text-[#333] font-semibold"
                                                    onClick={() => handleYearSelect(year)}
                                                    style={{ fontFamily: "Inter" }}
                                                >
                                                    {year}
                                                </p>
                                                <p className="text-[16px] pt-6 not-italic font-semibold text-[#626262] leading-[normal] ml-auto" style={{ fontFamily: "Inter" }} onClick={() => toggleYearDropdown(year)}>
                                                    {showYearDropdown[year] ? <FaAngleUp /> : <FaAngleDown />}
                                                </p>
                                            </div>
                                            {showYearDropdown[year] && (
                                                <div className='flex flex-col mt-4 pl-12'>
                                                    {events.map((event, index) => (
                                                        <div key={index} className="">
                                                            <div
                                                                className="flex justify-between"
                                                                onClick={() => toggleEventDropdown(index)}
                                                            >
                                                                <p className="pt-8 pb-4 text-[16px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }} ref={eventRefs.current[index]}>
                                                                    {event}
                                                                </p>
                                                                <p className="pb-8 pt-6 text-[16px] not-italic font-semibold leading-[normal] ml-auto" style={{ fontFamily: "Inter" }} onClick={() => toggleEventDropdown(index)}>
                                                                    {showEventDropdown[index] ? <FaAngleUp /> : <FaAngleDown />}
                                                                </p>
                                                            </div>
                                                            {showEventDropdown[index] && (
                                                                <div className=" bg-white  rounded-lg mt-2 px-4 py-2" style={{ top: eventRefs.current[index]?.offsetHeight }}>

                                                                    <p className='text-[color:var(--Gray-1,#333)]  text-[14px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis<br /> vulputate purus. Aenean sed purus orci.
                                                                    </p>
                                                                    <p className='text-[color:var(--Gray-1,#333)] pt-8 pl-8 text-[14px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>(Part-1) 14-03-23</p>
                                                                    <p className='text-[color:var(--Gray-1,#333)] pl-8 pt-8 text-[14px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>(Part-2) 16-03-23</p>
                                                                </div>

                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </>
                            )}
                        </div>
                        <div className='p-6 pl-10'>
                            <p className='text-[#222] text-start text-[32px] not-italic font-semibold leading-[normal] ' style={{ fontFamily: "Inter" }}>Event Calendar
                            </p>
                            <div className='pt-6'>

                                <div className='border border-[#CBCBCB] rounded-[12px]'>
                                    <div className='pt-5 p-5  '>
                                        <p className='text-[#222] text-start text-[23px]  not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>Events</p>
                                        <div className='flex  pt-5 gap-4'>
                                            <button
                                                className={`border border-[#CBCBCB] rounded-[102px] px-4 py-1 ${activeButton === 'today' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                                onClick={() => toggleDropdown1('today')}
                                            >
                                                <p className={`text-[#58585A] text-[18px] not-italic font-normal leading-[normal] ${activeButton === 'today' ? 'text-[#1AB78D]' : ''}`}>Today</p>
                                            </button>

                                            <button
                                                className={`border border-[#CBCBCB] rounded-[102px] px-4 py-1 ${activeButton === 'thisWeek' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                                onClick={() => toggleDropdown1('thisWeek')}>
                                                <p className={`text-[#58585A] text-[18px] not-italic font-normal leading-[normal] ${activeButton === 'thisWeek' ? 'text-[#1AB78D]' : ''}`}>This Week</p>
                                            </button>
                                            <button
                                                className={`border border-[#CBCBCB] rounded-[102px] px-4 py-1 ${activeButton === 'thisMonth' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                                onClick={() => toggleDropdown1('thisMonth')}>
                                                <p className={`text-[#58585A] text-[18px] not-italic font-normal leading-[normal] ${activeButton === 'thisMonth' ? 'text-[#1AB78D]' : ''}`}>This Month</p>
                                            </button>
                                            <button
                                                className={`border border-[#CBCBCB] rounded-[102px] px-4 py-1 ${activeButton === 'thisYear' ? 'border-none bg-[#DFF9F2]' : ''}`}
                                                onClick={() => toggleDropdown1('thisYear')}>
                                                <p className={`text-[#58585A] text-[18px] not-italic font-normal leading-[normal] ${activeButton === 'thisYear' ? 'text-[#1AB78D]' : ''}`}>This Year</p>
                                            </button>
                                        </div>

                                    </div>

                                    <hr className='w-full mt-2' />


                                    {dropdownVisible.today && (
                                        <div className='flex   pt-5'>
                                            <div className=''>
                                                <div className='flex  pl-5 '>
                                                    <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                        <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                        <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                    </div>
                                                    <div className='flex flex-col pl-4 5'>
                                                        <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                        <div className='flex gap-4 pt-2'>
                                                            <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                            </button>
                                                            <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                <hr className='w-full mt-4' />
                                                <div className=''>
                                                    <div className='flex  pl-5 pt-6'>
                                                        <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                            <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                            <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                        </div>
                                                        <div className='flex flex-col pl-4 pr-5'>
                                                            <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                            <div className='flex gap-4 pt-2'>
                                                                <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                    <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                </button>
                                                                <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                    <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                    <hr className='w-full mt-4' />
                                                    <div className=''>
                                                        <div className='flex  pl-5 pt-6'>
                                                            <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                                <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                                <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                            </div>
                                                            <div className='flex flex-col pl-4 pr-5'>
                                                                <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                                <div className='flex gap-4 pt-2'>
                                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                    </button>
                                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                        <hr className='w-full mt-4' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    )}
                                    {dropdownVisible.thisWeek && (
                                        <div className='flex   pt-6'>
                                            <div className=''>
                                                <div className='flex  pl-5 '>
                                                    <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                        <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                        <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                    </div>
                                                    <div className='flex flex-col pl-4 pr-5'>
                                                        <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                        <div className='flex gap-4 pt-2'>
                                                            <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                            </button>
                                                            <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                <hr className='w-full mt-4' />
                                                <div className=''>
                                                    <div className='flex  pl-5 pt-6'>
                                                        <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                            <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                            <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                        </div>
                                                        <div className='flex flex-col pl-4 pr-5'>
                                                            <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                            <div className='flex gap-4 pt-2'>
                                                                <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                    <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                </button>
                                                                <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                    <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                    <hr className='w-full mt-4' />
                                                    <div className=''>
                                                        <div className='flex  pl-5 pt-6'>
                                                            <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                                <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                                <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                            </div>
                                                            <div className='flex flex-col pl-4 pr-5'>
                                                                <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                                <div className='flex gap-4 pt-2'>
                                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                    </button>
                                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                        <hr className='w-full mt-4' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    {dropdownVisible.thisMonth && (
                                        <div className='flex   pt-6'>
                                            <div className=''>
                                                <div className='flex  pl-5 '>
                                                    <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                        <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                        <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                    </div>
                                                    <div className='flex flex-col pl-4 pr-5'>
                                                        <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                        <div className='flex gap-4 pt-2'>
                                                            <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                            </button>
                                                            <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                <hr className='w-full mt-4' />
                                                <div className=''>
                                                    <div className='flex  pl-5 pt-6'>
                                                        <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                            <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                            <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                        </div>
                                                        <div className='flex flex-col pl-4 pr-5'>
                                                            <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                            <div className='flex gap-4 pt-2'>
                                                                <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                    <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                </button>
                                                                <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                    <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                    <hr className='w-full mt-4' />
                                                    <div className=''>
                                                        <div className='flex  pl-5 pt-6'>
                                                            <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                                <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                                <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                            </div>
                                                            <div className='flex flex-col pl-4 pr-5'>
                                                                <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                                <div className='flex gap-4 pt-2'>
                                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                    </button>
                                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                        <hr className='w-full mt-4' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    {dropdownVisible.thisYear && (
                                        <div className='flex   pt-6'>
                                            <div className=''>
                                                <div className='flex  pl-5 '>
                                                    <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                        <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                        <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                    </div>
                                                    <div className='flex flex-col pl-4 pr-5'>
                                                        <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                        <div className='flex gap-4 pt-2'>
                                                            <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                            </button>
                                                            <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                <hr className='w-full mt-4' />
                                                <div className=''>
                                                    <div className='flex  pl-5 pt-6'>
                                                        <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                            <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                            <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                        </div>
                                                        <div className='flex flex-col pl-4 pr-5'>
                                                            <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                            <div className='flex gap-4 pt-2'>
                                                                <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                    <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                </button>
                                                                <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                    <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                    <hr className='w-full mt-4' />
                                                    <div className=''>
                                                        <div className='flex  pl-5 pt-6'>
                                                            <div className='px-6 py-3 p-4 rounded-[60px] bg-[#DFF9F2] text-[#1AB78D]'>
                                                                <p className=' text-[23px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>8 </p>
                                                                <p className='text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>Jan</p>
                                                            </div>
                                                            <div className='flex flex-col pl-4'>
                                                                <p className='text-[#222] text-start text-[24px] not-italic font-medium leading-[normal]' style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>

                                                                <div className='flex gap-4 pt-2'>
                                                                    <button className='bg-[#F0F0F0] rounded-[74px] px-4 py-2'>
                                                                        <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>FCPI Launch (Recorded video)</p>
                                                                    </button>
                                                                    <button className='bg-[#C5E5FF] rounded-[74px] px-4 py-2 '>
                                                                        <p className='text-[#00549A] text-[16px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>08-01-24</p>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <p className='text-[#58585A] text-start pt-4 pl-8 text-[16px] not-italic font-normal leading-[23px]'>Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s,  when an unknown  printer took a galley of type <br /> and scrambled </p>
                                                        <hr className='w-full mt-4' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card1;
