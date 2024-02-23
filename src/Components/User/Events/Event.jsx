import React, { useState } from 'react';
import Logo16 from "../../../assets/images/event-1.png";
import Logo17 from "../../../assets/images/event-2.png";
import Logo18 from "../../../assets/images/event-3.png";
import Logoa from "../../../assets/images/add.png";
import Logo from "../../../assets/images/event-4.png";
import Log1 from "../../../assets/images/cancel.png";
import { Link } from 'react-router-dom';

const Events = () => {
    const [liveEventsVisible, setLiveEventsVisible] = useState(false);
    const [upcomingEventsVisible, setUpcomingEventsVisible] = useState(false);
    const [completedEventsVisible, setCompletedEventsVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState({
        liveEvents: false,
        upcomingEvents: false,
        completedEvents: false,
    });
    const [addButtonClicked, setAddButtonClicked] = useState(false);

    const toggleLiveEvents = () => {
        setLiveEventsVisible(!liveEventsVisible);
        setUpcomingEventsVisible(false);
        setCompletedEventsVisible(false);
    };

    const toggleUpcomingEvents = () => {
        setUpcomingEventsVisible(!upcomingEventsVisible);
        setLiveEventsVisible(false);
        setCompletedEventsVisible(false);
    };

    const toggleCompletedEvents = () => {
        setCompletedEventsVisible(!completedEventsVisible);
        setLiveEventsVisible(false);
        setUpcomingEventsVisible(false);
    };

    const toggleImageVisible = (event) => {
        const { name } = event.target.dataset;
        setDropdownVisible({
            ...dropdownVisible,
            [name]: !dropdownVisible[name],
        });
    };

    const getButtonText = (dropdownName) => {
        return dropdownVisible[dropdownName] ? 'Cancel Image' : 'Add Image';
    };
    const getButtonColor = (dropdownName) => {
        return dropdownVisible[dropdownName] ? '#00549A' : '#1A237E';  
    };

    const getImageSrc = (dropdownName) => {
        return dropdownVisible[dropdownName] ? Log1 : Logoa;
    };

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className='bg-white rounded-[30px] p-10 pl-12 pr-12'>
                        <p className='text-[#222] text-start text-[32px] not-italic font-semibold leading-[normal]'>Events</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-8">
                            {/* Live Events */}
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleLiveEvents}>
                                <div className="">
                                    <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start pl-8 hover:text-white text-[21px] not-italic font-semibold leading-[normal]" >Live Events</p>
                            </div>
                            {/* Upcoming Events */}
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleUpcomingEvents}>
                                <div className="relative">
                                    <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start hover:text-white pl-8 text-[21px] not-italic font-semibold leading-[normal]" >Upcoming Events</p>
                            </div>
                            {/* Completed Events */}
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleCompletedEvents}>
                                <div className="relative">
                                    <img src={Logo18} alt="Logo" className="w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start hover:text-white pl-8 text-[21px] not-italic font-semibold leading-[normal]" >Completed Events</p>
                            </div>
                        </div>

                        {/* Live Events Dropdown */}
                        {liveEventsVisible && (
                            <div className='flex pt-12 gap-4'>
                                <div className='flex pt-12  gap-4 '>
                                    <div className='pl-2'>
                                        <div className='pt-4'>
                                            <div className='flex gap-[16rem]'>
                                                <p className='text-[#222]  text-[19px] not-italic font-medium leading-[30px]' >Basic Module in Infectious Diseases (Presentation-01)</p>
                                                <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible} data-name="liveEvents">
                                                    <img src={getImageSrc('liveEvents')} alt="Logo17" className="rounded-[30px]" />
                                                </button>
                                            </div>
                                            {dropdownVisible.liveEvents && (
                                                <div className='pl-2'>
                                                    <div className='pt-4'>
                                                        <div className='flex gap-[16rem]'>
                                                            <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'  >Infectious Diseases Forum</p>
                                                        </div>
                                                        <div className='flex gap-10'>
                                                            <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]' >2022-09-22 9:00 AM to 11:00 AM</p>
                                                            <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                <Link to='/event-detail'>
                                                                    <p className='text-white text-[16px] not-italic font-semibold leading-[normal]'  >click</p>
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <hr className='mt-4' />
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex gap-[16rem]'>
                                                <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]'  >Basic Module in Infectious Diseases (Presentation-01)</p>
                                                <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible} data-name="liveEvents">
                                                    <img src={getImageSrc('liveEvents')} alt="Logo17" className="rounded-[30px]" />
                                                </button>
                                            </div>
                                            {dropdownVisible.liveEvents && (
                                                <div className='pl-2'>
                                                    <div className='pt-4'>
                                                        <div className='flex gap-[16rem]'>
                                                            <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'  >Infectious Diseases Forum</p>
                                                        </div>
                                                        <div className='flex gap-10'>
                                                            <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]'  >2022-09-22 9:00 AM to 11:00 AM</p>
                                                            <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                <p className='text-white text-[16px] not-italic font-semibold leading-[normal]' >click</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <hr className='mt-4' />
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex gap-[16rem]'>
                                                <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' >Basic Module in Infectious Diseases (Presentation-01)</p>
                                                <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible} data-name="liveEvents">
                                                    <img src={getImageSrc('liveEvents')} alt="Logo17" className="rounded-[30px]" />
                                                </button>
                                            </div>
                                            {dropdownVisible.liveEvents && (
                                                <div className='pl-2'>
                                                    <div className='pt-4'>
                                                        <div className='flex gap-[16rem]'>
                                                            <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]'  >Infectious Diseases Forum</p>
                                                        </div>
                                                        <div className='flex gap-10'>
                                                            <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]' >2022-09-22 9:00 AM to 11:00 AM</p>
                                                            <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                                                                <p className='text-white text-[16px] not-italic font-semibold leading-[normal]'  >click</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <hr className='mt-4' />
                                        </div>
                                    </div>
                                    <div className='pl-20'>
                                        <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Upcoming Events Dropdown */}
                        {/* Code for Upcoming Events Dropdown */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
