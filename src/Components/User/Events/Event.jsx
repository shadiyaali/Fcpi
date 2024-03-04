import React, { useState } from 'react';
import Logo16 from "../../../assets/images/event-1.png";
import Logo17 from "../../../assets/images/event-2.png";
import Logo18 from "../../../assets/images/event-3.png";
import Logoa from "../../../assets/images/add.png";
import Logo from "../../../assets/images/event-4.png";
import Log1 from "../../../assets/images/cancel.png";
import { Link } from 'react-router-dom';

const Events = () => {
    const [liveEventsVisible, setLiveEventsVisible] = useState(true);
    const [upcomingEventsVisible, setUpcomingEventsVisible] = useState(false);
    const [completedEventsVisible, setCompletedEventsVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const toggleLiveEvents = () => {
        setLiveEventsVisible(!liveEventsVisible);
        setUpcomingEventsVisible(false);
        setCompletedEventsVisible(false);
        setDropdownVisible(null);
    };

    const toggleUpcomingEvents = () => {
        setUpcomingEventsVisible(!upcomingEventsVisible);
        setLiveEventsVisible(false);
        setCompletedEventsVisible(false);
        setDropdownVisible(null);
    };

    const toggleCompletedEvents = () => {
        setCompletedEventsVisible(!completedEventsVisible);
        setLiveEventsVisible(false);
        setUpcomingEventsVisible(false);
        setDropdownVisible(null);
    };

    const getButtonColor1 = (dropdownName) => {
        if ((dropdownName === 'liveEvents' && liveEventsVisible) ||
            (dropdownName === 'upcomingEvents' && upcomingEventsVisible) ||
            (dropdownName === 'completedEvents' && completedEventsVisible)) {
            return '#1AB78D'; // Active color when dropdown is visible
        } else {
            return '#F4F4F4'; // Inactive color (gray-100)
        }
    };






    const toggleImageVisible = (event) => {
        event.stopPropagation();
        const { name } = event.target.dataset;
        setDropdownVisible(dropdownVisible === name ? null : name);
    };


    const getButtonColor = (dropdownName) => {
        return dropdownVisible === dropdownName ? '#00549A' : '#C5E5FF';
    };



    const liveEventsData = [
        {
            title: "Basic Module in Infectious Diseases (Presentation-01)",
            forum: "Infectious Diseases Forum",
            date: "2022-09-22",
            time: "9:00 AM to 11:00 AM"
        },

    ];

    const upcomingEventsData = [
        {
            title: "Basic Module in Infectious Diseases (Presentation-01)",
            forum: "Infectious Diseases Forum",
            date: "2022-09-22",
            time: "9:00 AM to 11:00 AM"
        },

    ];

    const completedEventsData = [
        {
            title: "Basic Module in Infectious Diseases (Presentation-01)",
            forum: "Infectious Diseases Forum",
            date: "2022-09-22",
            time: "9:00 AM to 11:00 AM"
        },

    ];

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className='bg-white rounded-[30px] p-10 pl-12 pr-12'>
                        <p className='text-[#222] text-start text-[32px] not-italic font-semibold leading-[normal]'>Events</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                            {/* Live Events */}
                            {/* Live Events */}
                            <div className={`rounded-[30px] ${liveEventsVisible ? 'bg-[#1AB78D] hover:bg-[#1AB78D] cursor-pointer' : 'bg-gray-100 hover:bg-[#1AB78D] cursor-pointer'}`} onClick={toggleLiveEvents}>
                                <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />
                                <p className={`text-[#222] p-7 text-start pl-8 hover:text-white ${liveEventsVisible ? 'text-white' : ''} text-[21px] not-italic font-semibold leading-[normal] `}>Live Events</p>
                            </div>



                            <div className={`rounded-[30px]  ${upcomingEventsVisible ? 'bg-[#1AB78D] hover:bg-[#1AB78D] cursor-pointer' : 'bg-gray-100 hover:bg-[#1AB78D] cursor-pointer'}`} onClick={toggleUpcomingEvents}>

                                <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />

                                <p className={`text-[#222] p-7 text-start pl-8 hover:text-white ${upcomingEventsVisible ? 'text-white' : ''} text-[21px] not-italic font-semibold leading-[normal]  `}>Upcoming Events</p>
                            </div>

                            {/* Completed Events */}
                            <div className={`rounded-[30px]  ${completedEventsVisible ? 'bg-[#1AB78D] hover:bg-[#1AB78D] cursor-pointer' : 'bg-gray-100 hover:bg-[#1AB78D] cursor-pointer'}`} onClick={toggleCompletedEvents}>

                                <img src={Logo18} alt="Logo" className="w-full rounded-[30px]" />

                                <p className={`text-[#222] p-7 text-start pl-8 hover:text-white ${completedEventsVisible ? 'text-white' : ''} text-[21px] not-italic font-semibold leading-[normal]  `}>Completed Events</p>
                            </div>
                        </div>

                        {/* Live Events Dropdown */}
                        {liveEventsVisible && (
                            <div className='flex pt-16 gap-4'>
                                <div className='flex  '>
                                    <div className='pl-2'>
                                        {liveEventsData.map((event, index) => (
                                            <div key={index}>
                                                <div className='flex gap-[16rem]'>
                                                    <p className={`text-[#222]  text-[19px] not-italic font-medium leading-[30px] ${dropdownVisible === 'liveEvents' ? 'text-green-500' : ''}`}>{event.title}</p>
                                                    <button
                                                        className={`px-4 py-4 rounded-[30px]`}
                                                        style={{ backgroundColor: getButtonColor('liveEvents') }}
                                                        onClick={toggleImageVisible}
                                                        data-name="liveEvents"
                                                    >
                                                        <img src={dropdownVisible === 'liveEvents' ? Log1 : Logoa} alt="Close Image" className="rounded-[30px]" />
                                                    </button>
                                                </div>
                                                {dropdownVisible === 'liveEvents' && (
                                                    <div className='pl-2'>
                                                        <div className='pt-4'>
                                                            <div className='flex gap-[16rem]'>
                                                                <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'>{event.forum}</p>
                                                            </div>
                                                            <div className='flex gap-10'>
                                                                <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]'>{event.date} {event.time}</p>
                                                                <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                    <Link to='/events-detail'>
                                                                        <p className='text-white text-[16px] not-italic font-semibold leading-[normal]'>click</p>
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <hr className='mt-4' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='pl-32'>
                                        <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {upcomingEventsVisible && (
                            <div className='flex pt-16 gap-4'>
                                <div className='flex  '>
                                    <div className='pl-2'>
                                        {upcomingEventsData.map((event, index) => (
                                            <div key={index}>
                                                <div className='flex gap-[16rem]'>
                                                    <p className={`text-[#222]  text-[19px] not-italic font-medium leading-[30px] ${dropdownVisible === 'upcomingEvents' ? 'text-green-500' : ''}`}>{event.title}</p>
                                                    <button
                                                        className={`px-4 py-4 rounded-[30px]`}
                                                        style={{ backgroundColor: getButtonColor('upcomingEvents') }}
                                                        onClick={toggleImageVisible}
                                                        data-name="upcomingEvents"
                                                    >
                                                        <img src={dropdownVisible === 'upcomingEvents' ? Log1 : Logoa} alt="Close Image" className="rounded-[30px]" />
                                                    </button>
                                                </div>
                                                {dropdownVisible === 'upcomingEvents' && (
                                                    <div className='pl-2'>
                                                        <div className='pt-4'>
                                                            <div className='flex gap-[16rem]'>
                                                                <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'>{event.forum}</p>
                                                            </div>
                                                            <div className='flex gap-10'>
                                                                <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]'>{event.date} {event.time}</p>
                                                                <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                    <Link to='/events-detail'>
                                                                        <p className='text-white text-[16px] not-italic font-semibold leading-[normal]'>click</p>
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <hr className='mt-4' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='pl-32'>
                                        <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {completedEventsVisible && (
                            <div className='flex pt-16 gap-4'>
                                <div className='flex  '>
                                    <div className='pl-2'>
                                        {completedEventsData.map((event, index) => (
                                            <div key={index}>
                                                <div className='flex gap-[16rem]'>
                                                    <p className={`text-[#222]  text-[19px] not-italic font-medium leading-[30px] ${dropdownVisible === 'completedEvents' ? 'text-green-500' : ''}`}>{event.title}</p>
                                                    <button
                                                        className={`px-4 py-4 rounded-[30px]`}
                                                        style={{ backgroundColor: getButtonColor('completedEvents') }}
                                                        onClick={toggleImageVisible}
                                                        data-name="completedEvents"
                                                    >
                                                        <img src={dropdownVisible === 'completedEvents' ? Log1 : Logoa} alt="Close Image" className="rounded-[30px]" />
                                                    </button>
                                                </div>
                                                {dropdownVisible === 'completedEvents' && (
                                                    <div className='pl-2'>
                                                        <div className='pt-4'>
                                                            <div className='flex gap-[16rem]'>
                                                                <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'>{event.forum}</p>
                                                            </div>
                                                            <div className='flex gap-10'>
                                                                <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]'>{event.date} {event.time}</p>
                                                                <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                    <Link to='/events-detail'>
                                                                        <p className='text-white text-[16px] not-italic font-semibold leading-[normal]'>click</p>
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <hr className='mt-4' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='pl-32'>
                                        <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
