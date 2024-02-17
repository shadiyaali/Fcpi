import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Card1 = () => {
    const [activeButton, setActiveButton] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showYearDropdown, setShowYearDropdown] = useState({
        '2022': false,
        '2023': false,
        '2024': false,
    });
    const events = ['Basic Module in Infectious Diseases', 'Another Event'];
    
    // Now it's safe to use the events array length in the useState hook
    const [showEventDropdown, setShowEventDropdown] = useState(Array(events.length).fill(false));

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setShowYearDropdown({ ...showYearDropdown, [year]: !showYearDropdown[year] });
    };

    const toggleDropdown = (button) => {
        setActiveButton(activeButton === button ? '' : button);
        setShowYearDropdown({ '2022': false, '2023': false, '2024': false });
    };

    
    const toggleEventDropdown = (index) => {
        const updatedShowEventDropdown = [...showEventDropdown];
        updatedShowEventDropdown[index] = !updatedShowEventDropdown[index];
        setShowEventDropdown(updatedShowEventDropdown);
    };
    const toggleYearDropdown = (year) => {
        setShowYearDropdown({ ...showYearDropdown, [year]: !showYearDropdown[year] });
    };

    const years = ['2022', '2023', '2024'];
    // const events = ['Basic Module in Infectious Diseases', 'Basic Module in Infectious Diseases'];

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className='flex pt-6 p-6 bg-white rounded-[30px]'>
                        <div className='text-start p-8'>
                            <p className="text-[#222] text-[32px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Events</p>
                            <p className='text-[#58585A] pt-6 text-[16px] not-italic font-normal leading-[28px]' style={{ fontFamily: "Inter" }}>The Federation of Clinical Pharmacists in India (FCPI) is a non-profitable, professional <br />pharmacy organization composed of a bunch of passionate pharmacists involved in diverse<br /> clinical pharmacy responsibilities in India and across the globe. We have come together<br /> voluntarily with the undeterred goal of enhancing the clinical pharmacy profession,<br /> empowering the clinical pharmacists and thereby delivering high quality patient care.</p>
                            <div className='grid grid-cols-4 pt-8 '>
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
                                    className={`bg-[#f4f4f4] ${activeButton === 'blog' ? 'border-b-2 border-blue-500' : ''}`}
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
                                            <div className="flex justify-between border-b-2 items-center">
                                                <p
                                                    className="p-6 cursor-pointer"
                                                    onClick={() => handleYearSelect(year)}
                                                    style={{ fontFamily: "Inter" }}
                                                >
                                                    {year}
                                                </p>
                                                <p className="text-[16px] not-italic font-semibold leading-[normal] ml-auto" style={{ fontFamily: "Inter" }} onClick={() => toggleYearDropdown(year)}>
                                                    {showYearDropdown[year] ? <FaAngleUp /> : <FaAngleDown />}
                                                </p>
                                            </div>
                                            {showYearDropdown[year] && (
                                                <div className='flex flex-col mt-4 pl-12'>
                                                    {events.map((event, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            className={` p-6 ${activeButton === event?.toLowerCase() ? 'border-b-2 border-blue-500' : ''}`}
                                            style={{ color: activeButton === event.toLowerCase() ? '#00549A' : '#000' }}
                                            onClick={() => toggleDropdown(event?.toLowerCase())}
                                        >
                                            <p className="text-[16px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>
                                                {event}
                                            </p>
                                        </button>
                                        <div className="absolute top-full left-0 bg-white shadow-md rounded-lg mt-2 px-4 py-2" style={{ display: showEventDropdown[index] ? 'block' : 'none' }}>
                                            {event === 'Basic Module in Infectious Diseases' && (
                                                <div className='pl-12 pt-6'>
                                                    <p className='text-[color:var(--Gray-1,#333)]  text-[14px] not-italic font-normal leading-[normal]' style={{ fontFamily: "Inter" }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.
                                                    </p>
                                                    <p className='text-[color:var(--Gray-1,#333)] pt-8 pl-8 text-[14px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>(Part-1) 14-03-23</p>
                                                    <p className='text-[color:var(--Gray-1,#333)] pl-8 pt-8 text-[14px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>(Part-2) 16-03-23</p>
                                                </div>
                                            )}
                                        </div>
                                        <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => toggleEventDropdown(index)} />
                                    </div>
                                ))}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </>
                            )}
                            {/* <div className='pl-12 pt-6'> 
                                <p className='text-[color:var(--Gray-1,#333)]  text-[14px] not-italic font-normal leading-[normal]  'style={{fontFamily: "Inter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis<br/> vulputate purus. Aenean sed purus orci.</p>
                                <p className='text-[color:var(--Gray-1,#333)] pt-8 pl-8 text-[14px] not-italic font-semibold leading-[normal]'style={{fontFamily: "Inter"}}>(Part-1) 14-03-23</p>
                                <p className='text-[color:var(--Gray-1,#333)] pl-8 pt-8 text-[14px] not-italic font-semibold leading-[normal]'>(Part-2) 16-03-23</p>
                                </div> */}
 </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;
