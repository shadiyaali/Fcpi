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
    const [dropdownVisible, setDropdownVisible] = useState(false); 
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
  
    const toggleImageVisible = () => {
        // Toggle dropdown visibility
        setDropdownVisible(!dropdownVisible);
    };
  
    

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className='bg-white rounded-[30px] p-10 pl-12 pr-12'>
                        <p className='text-[#222] text-start text-[32px] not-italic font-semibold leading-[normal] ' style={{fontFamily: "Inter"}}>Events</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-8">
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleLiveEvents}>
                                <div className="">
                                    <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start pl-8 hover:text-white text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Live Events</p>
                            </div>
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleUpcomingEvents}>
                                <div className="relative">
                                    <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start hover:text-white pl-8 text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Upcoming Events</p>
                            </div>
                            <div className="bg-[#C5E5FF] rounded-[30px] hover:bg-[#1AB78D]" onClick={toggleCompletedEvents}>
                                <div className="relative">
                                    <img src={Logo18} alt="Logo" className="w-full rounded-[30px]" />
                                </div>
                                <p className="text-[#222] p-7 text-start hover:text-white pl-8 text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Completed Events</p>
                            </div>
                        </div>

                        {liveEventsVisible && (
                            <div className='flex pt-12 gap-4'>
                                <div className='flex pt-12  gap-4 '>
                    <div className='pl-2'>
                         <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222]  text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]" onClick={toggleImageVisible} />
                        </button>
                        </div>
                        {dropdownVisible && (
            <div className='pl-2'>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>Infectious Diseases Forum</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>2022-09-22 9:00 AM to 11:00 AM</p>
                        <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                            <Link to='/event-detail'>
                            <p className='text-white text-[16px] not-italic font-semibold leading-[normal]' style={{fontFamily:"Inter"}}>click</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )}
                        <hr className='mt-4'/>
                    </div>
                    <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]"onClick={toggleImageVisible}  />
                        </button>
                        </div>
                        {dropdownVisible && (
            <div className='pl-2'>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>Infectious Diseases Forum</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>2022-09-22 9:00 AM to 11:00 AM</p>
                        <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                            <p className='text-white text-[16px] not-italic font-semibold leading-[normal]' style={{fontFamily:"Inter"}}>click</p>
                        </button>
                    </div>
                </div>
            </div>
        )}
                        <hr className='mt-4'/>
                    </div>
                    <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]" onClick={toggleImageVisible} />
                        </button>
                        </div>
                        {dropdownVisible && (
            <div className='pl-2'>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#58585A] pt-2 text-start text-[19px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>Infectious Diseases Forum</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-[#58585A] pt-4 text-[17px] not-italic font-normal leading-[normal]' style={{fontFamily:"Inter"}}>2022-09-22 9:00 AM to 11:00 AM</p>
                        <button className='bg-[#1AB78D] rounded-[105px] px-5 py-2'>
                            <p className='text-white text-[16px] not-italic font-semibold leading-[normal]' style={{fontFamily:"Inter"}}>click</p>
                        </button>
                    </div>
                </div>
            </div>
        )}
                        
                    </div>
                  
                    </div>
                    <div className='pl-20'>
                 <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
                 </div>
                  
                 </div>
                            </div>
                        )}

{upcomingEventsVisible && (
    <div className='flex pt-12 gap-4'>
        <div className='flex pt-12 gap-4'>
            <div className='pl-2'>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#222] text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible}>
                            <img src={Logoa} alt="Logo17" className="rounded-[30px]" />
                        </button>
                    </div>
                    <hr className='mt-4'/>
                </div>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible}>
                            <img src={Logoa} alt="Logo17" className="rounded-[30px]" />
                        </button>
                    </div>
                    
                    <hr className='mt-4'/>
                </div>
                <div className='pt-4'>
                    <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]' onClick={toggleImageVisible}>
                            <img src={Logoa} alt="Logo17" className="rounded-[30px]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='pl-20'>
                <img src={Logo} alt="Logo17" className="rounded-[30px] w-[540px]" />
            </div>
        </div>
        {/* Dropdown */}
       
    </div>
)}


                        {completedEventsVisible && (
                            <div className='flex pt-12 gap-4'>
                                <div className='flex pt-12  gap-4 '>
                    <div className='pl-2'>
                         <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222]  text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]" onClick={toggleImageVisible} />
                        </button>
                        </div>
                        <hr className='mt-4'/>
                    </div>
                    <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]" onClick={toggleImageVisible} />
                        </button>
                        </div>
                        <hr className='mt-4'/>
                    </div>
                    <div className='pt-4'>
                        <div className='flex gap-[16rem]'>
                        <p className='text-[#222] pt-2 text-[19px] not-italic font-medium leading-[30px]' style={{fontFamily:"Inter"}}>Basic Module in Infectious Diseases (Presentation-01)</p>
                        <button className='px-4 py-4 bg-[#C5E5FF] rounded-[30px]'>
                        <img src={Logoa} alt="Logo17" className="rounded-[30px]" onClick={toggleImageVisible} />
                        </button>
                        </div>
                        
                    </div>
                  
                    </div>
                    <div className='pl-20'>
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
