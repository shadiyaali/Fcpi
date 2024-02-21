import React, { useState } from 'react';
import Logo1 from "../../../assets/images/calendar.png";
import Logo2 from "../../../assets/images/location-03.png";
import Logo3 from "../../../assets/images/mail-edit.png";
import Logo4 from "../../../assets/images/Dr Neeraj Sidharthan.png";
import "./Event.css"
import { Carousel } from "flowbite-react";
import arrow from "../../../assets/images/arrow.svg"
import logo1 from "../../../assets/images/user-story.png";
import logo2 from "../../../assets/images/user-add--01.png";
import logo3 from "../../../assets/images/user-story.svg";

const Detail = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredLogin, setHoveredLogin] = useState(false);
    const speakersPerPage = 4;
    const speakers = [
        { id: 1, name: "Dr Neeraj Sidharthan", image: Logo4 },
        { id: 2, name: "Dr CCCCCCCCC", image: Logo4 },
        { id: 3, name: "Dr NNNNNNNNNNNNN", image: Logo4 },
        { id: 4, name: "Dr PPPPPPPPPPPP", image: Logo4 },
        { id: 5, name: "Dr QQQQQQQQQQQQ", image: Logo4 },
        { id: 6, name: "Dr RRRRRRRRRRR", image: Logo4 },

    ];

    const indexOfLastSpeaker = currentPage * speakersPerPage;
    const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
    const currentSpeakers = speakers.slice(indexOfFirstSpeaker, indexOfLastSpeaker);
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        setCurrentPage(currentPage - 1);
    };







    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className='bg-white  rounded-[30px]'>
                        <div className='overflow-hidden relative rounded-[30px]'>
                            <div className=' aspect-[4] bg-card3-background bg-cover  to-slate-900  bg-opacity-40 gradient responsive-card rounded-[30px]' >
                                <div className='flex relative z-10 pl-12 pt-32'>
                                    <p className='text-white text-[49px] not-italic font-bold leading-[56px] uppercase ' style={{ fontFamily: "Inter" }}>FCPI Virtual ID Week</p>
                                    <p className='text-white text-[26px] pt-1 pl-4 not-italic font-medium leading-[56px]' style={{ fontFamily: "Inter" }}>(Day-3)</p>
                                </div>
                                <p className='text-white pl-12 text-[30px] relative z-10 not-italic font-normal leading-[normal]'>Infectious Diseases Forum</p>
                                <hr className='mt-8 w-[95%] ml-9 relative z-10' />
                                <div className='flex relative z-10 p-10 pl-12 gap-8'>
                                    <div className='flex gap-4'>
                                        <img src={Logo1} alt="Logo" className=" " />
                                        <p className=' text-white text-[19px] not-italic font-medium leading-[18px]' style={{ fontFamily: "Inter" }}>2023-06-21 , <br />
                                            From 5:00 PM to 7:00 PM</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <img src={Logo2} alt="Logo" className=" " />
                                        <p className='  text-white text-[19px] not-italic font-medium leading-[18px]' style={{ fontFamily: "Inter" }}>The Venetian | The Palazzo<br />
                                            Booth #1756</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <img src={Logo3} alt="Logo" className=" " />
                                        <p className=' pt-2 text-white text-[19px] not-italic font-medium leading-[18px]' style={{ fontFamily: "Inter" }}>fcpiofficial@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-12 pr-12 pt-16'>
                            <p className='text-[#222] text-[35px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>Speaker Desk</p>
                            <div className='flex gap-[30rem]'>
                                <p className='text-[#58585A] pt-10 text-[19px] not-italic font-normal leading-[28px]' style={{ fontFamily: "Inter" }}>Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web <br />sites still in their infancy. Various versions have evolved</p>
                                <div className='text-end pt-6'>

                                    <button onClick={goToPrevPage} disabled={currentPage === 1}>
                                        <img src={arrow} alt="Previous Page" />
                                    </button>
                                    <button onClick={goToNextPage} disabled={indexOfLastSpeaker >= speakers.length}>
                                        <img src={arrow} alt="Next Page" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 pb-8  gap-8">
                                {currentSpeakers.map(speaker => (
                                    <div key={speaker.id} className='bg-[#F4F4F4] rounded-[10px] '>
                                        <img src={speaker.image} alt={speaker.name} className=" w-[100%] rounded-[10px]  " />
                                        <p className='text-black text-center pt-8 pb-8 text-[18px] not-italic font-semibold leading-[18px]' style={{ fontFamily: "Inter" }}>{speaker.name}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='p-12'>
                            <div className='bg-[#F0FAFF] rounded-[10px] text-center w-[50%] p-10'>
                                <p className='text-[#222] text-[36px] not-italic font-semibold leading-[normal]' style={{ fontFamily: "Inter" }}>If you are not Logged In FCPI Please</p>
                               
                                <div className='flex pt-6 pl-12'>

            <div
                className={`flex justify-center items-center px-[25px] py-[6px] bg-[#f4f4f4] hover:bg-[#1AB78D] text-[#00549A] hover:text-white rounded-[105px] border hover:border-none border-[#00549A] ${hoveredLogin ? 'shadow-md' : ''}`}
                onMouseEnter={() => setHoveredLogin(true)}
                onMouseLeave={() => setHoveredLogin(false)}
            >
                <p className="text-[14px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Login</p>
                <div className="pl-3">
                    <img src={hoveredLogin ? logo3 : logo1} alt="Logo" className="" />
                </div>
            </div>
            <div className="pl-5">
                <div className="flex justify-center items-center px-[30px] py-[10px] rounded-[105px] bg-[#1AB78D] hover:bg-[#00549A]">
                    <p className="text-[#FFF] text-[14px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Join FCPI</p>
                    <div className="">
                        <img src={logo2} alt="Logo" className="ml-4" />
                    </div>
                </div>
            </div>
        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Detail;