import React, { useState, useEffect } from 'react';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import Icon from "../../../assets/images/Icon frame.png";
import { Link, useParams } from 'react-router-dom';
import del from "../../../assets/images/delete-02.png";
import sp from "../../../assets/images/sp.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";
import add from "../../../assets/images/add1.png";
import axios from "axios";
import { BASE_URL } from '../../../Utils/Config';
import search from "../../../assets/images/search.png";
import cls from "../../../assets/images/close.png";
import eye from "../../../assets/images/eye.png";
import img from "../../../assets/images/more.png";
import { toast, Toaster } from "react-hot-toast";

import edi from "../../../assets/images/edituse.png";
import dil from "../../../assets/images/deluser.png";
import ch from "../../../assets/images/change.png";
import st from "../../../assets/images/status.png";

// import "./Aforum.css"



const AEvents = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [selectedForum, setSelectedForum] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('');
    const [filteredSpeakers, setFilteredSpeakers] = useState([]);
    const [selectedSpeakers, setSelectedSpeakers] = useState([]);
    const [eventData, setEventData] = useState()
    const [selectedImage, setSelectedImage] = useState(null);
    const { eventId } = useParams();

    const [formData, setFormData] = useState({
        days: '',
        forum: '',
        event_name: '',
        date: '',
        speakers: [],
        banner: null,
        single_speaker: '',
        youtube_link: '',
        points: '',
        starting_time: '',
        ending_time: '',
        topics: ''


    });
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/events/`);

                const fetchedEventData = response.data;
                setEventData(fetchedEventData);
            } catch (error) {
                console.error('Error fetching user data:', error);
                toast.error("Error fetching user data");
            }
        };

        fetchEventData();
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const bannerFile = e.target.files[0];
        setSelectedImage(bannerFile);
        setFormData(prevFormData => ({
            ...prevFormData,
            banner: bannerFile
        }));
    };


    const [dropdownStates, setDropdownStates] = useState([]);


    useEffect(() => {
        if (eventData && eventData.length > 0) {

            setDropdownStates(Array(eventData.length).fill(false));
        }
    }, [eventData]);


    const handleToggleDropdown = (index) => {
        setDropdownStates(prevStates => {

            const newDropdownStates = [...prevStates];

            newDropdownStates[index] = !newDropdownStates[index];
            return newDropdownStates;
        });
    };



    const [scheduleFormData, setScheduleFormData] = useState([]);

    const handleScheduleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchedule = [...scheduleFormData];
        if (!updatedSchedule[index]) {
            updatedSchedule[index] = {};
        }
        updatedSchedule[index][name] = value;
        setScheduleFormData(updatedSchedule);
    };


    const [speakers, setSpeakers] = useState([]);
    const [speakerList, setSpeakerList] = useState([]);

    const handleSpeakerSearch = (searchQuery) => {
        const filtered = speakers.filter(speaker =>
            speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSpeakers(filtered);
        // Only set speakerList to true if there are filtered speakers
        setSpeakerList(filtered.length > 0);
    };


    const [forums, setForums] = useState([]);
    useEffect(() => {
        const fetchForums = async () => {
            try {

                const response = await axios.get(`${BASE_URL}/admins/forums/`);
                setForums(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching forums:', error);
            }
        };

        fetchForums();
    }, []);

    const handleCheckboxChange = (e, speakerId) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedSpeakers(prevSelected => [...prevSelected, speakerId]);
        } else {
            setSelectedSpeakers(prevSelected => prevSelected.filter(id => id !== speakerId));
        }
    };

    const handleAddSpeaker = () => {
        if (selectedSpeaker) {
            setFormData(prevState => ({
                ...prevState,
                speakers: [...prevState.speakers, selectedSpeaker]
            }));
            setSelectedSpeaker('');
        }
    };

    const handleRemoveSpeaker = (speakerId) => {
        setSelectedSpeakers(prevSpeakers => prevSpeakers.filter(id => id !== speakerId));
    };


    const handleSpeakerChange = (e) => {
        const value = e.target.value;
        setSelectedSpeaker(value);
        setFormData(prevState => ({
            ...prevState,
            single_speaker: value
        }));
    };

    const handleSpeakerChangeForSection = (e, index) => {
        const value = e.target.value;
        const updatedSchedule = [...scheduleFormData];
        updatedSchedule[index] = {
            ...updatedSchedule[index],
            single_speaker: value
        };
        setScheduleFormData(updatedSchedule);
    };
    useEffect(() => {
        const fetchspeakers = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/speakers/`);
                setSpeakers(response.data);
            } catch (error) {
                console.error('Error fetching  spekers:', error);
            }
        };

        fetchspeakers();
    }, []);



    const handleMultiSubmit = async (e) => {
        e.preventDefault();

        try {


            const requestData = {
                days: formData.days,
                forum: formData.forum,
                event_name: formData.event_name,
                date: formData.date,
                speakers: selectedSpeakers,
                schedules: scheduleFormData,
                banner: formData.banner
            };

            console.log('Request Data:', requestData);

            const response = await axios.post(`${BASE_URL}/admins/eventspeakers/`, requestData);
            console.log(response.data);
            alert('Event added successfully!');

            setFormData({
                days: '',
                forum: '',
                event_name: '',
                date: '',
                speakers: [],
                banner: '',
                single_speaker: '',
                youtube_link: '',
                points: '',
                starting_time: '',
                ending_time: '',
                topics: '',
            });
            setSelectedSpeakers([]);
            setScheduleFormData([
                {
                    youtube_link: '',
                    points: '',
                    starting_time: '',
                    ending_time: '',
                    topics: '',
                    selectedSpeakers: [],
                },
            ]);
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Failed to add event. Please try again.');
        }
    };


    const togglePersonalInfo = () => {
        setPersonalInfoActive(!personalInfoActive);

        if (!personalInfoActive) {
            setmailingAddressActive(false);
        }
    };

    const togglemailingAddress = () => {
        setmailingAddressActive(!mailingAddressActive);

        if (!mailingAddressActive) {
            setPersonalInfoActive(false);
        }
    };
    const handleForumChange = (e) => {
        setFormData({ ...formData, forum: e.target.value });
    };

    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Add Events</p>
                <div className='flex pt-12 gap-[12rem] p-8'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Single Day</p>

                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage events</p>

                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (

                    <div className=' '>
                        <form onSubmit={handleMultiSubmit}>

                            <div className='flex gap-8'>
                                <div className='w-[35%]'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Number of Days</p>
                                    <div className="pt-2">

                                        <input
                                            type="text"
                                            name="days"
                                            value={formData.days}
                                            onChange={handleChange}

                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="2"
                                        />
                                    </div>

                                </div>
                                {/* <div className='pt-8 w-[15%] '>
                                    <button type='submit' className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                    </button>
                                </div> */}

                            </div>
                            <div className='  flex pt-8 gap-8'>

                                <div className='w-full'>

                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium  leading-[24px]'>Choose Forum</p>
                                    <div className="  relative">
                                        <div className="relative pt-2">
                                            <select
                                                className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                value={formData.forum}
                                                onChange={(e) => setFormData({ ...formData, forum: e.target.value })}
                                            >
                                                <option value="" disabled>Select a forum</option>
                                                {forums.map(forum => (
                                                    <option key={forum.id} value={forum.id}>{forum.title}</option>
                                                ))}
                                            </select>

                                        </div>

                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Event Name</p>
                                    <div className="pt-2">

                                        <input
                                            type="text"
                                            name="event_name"
                                            value={formData.event_name}
                                            onChange={handleChange}
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Basic Module in Infectious Diseases"
                                        />
                                    </div>

                                </div>
                                <div>
                                    <p className='text-[color:var(--Black,#222)]   text-[18px] not-italic font-medium leading-[24px]'>Event Date</p>
                                    <div className="pt-2">
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Date of Birth"
                                        />

                                    </div>
                                </div>
                                <div className='w-full'>

                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-[40%] pt-8'>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium  leading-[24px]'>Speakers</p>
                                    <div className="  relative">
                                        <div className="relative pt-2">
                                            <input
                                                type="text"
                                                name="speaker_search"
                                                value={selectedSpeaker}
                                                onChange={(e) => {
                                                    handleSpeakerSearch(e.target.value);
                                                    setSelectedSpeaker(e.target.value);
                                                    handleChange(e);
                                                }}
                                                onClick={() => {
                                                    if (!speakerList) {
                                                        setSpeakerList(true);
                                                    }
                                                }}
                                                className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                placeholder="Search for a speaker"
                                            />
                                            <div className="bg-white border border-gray-400 rounded-[6px] w-full mt-1 z-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                                {filteredSpeakers.map(speaker => (
                                                    <div key={speaker.id} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                                                        <input
                                                            type="checkbox"
                                                            id={speaker.id}
                                                            value={speaker.id}
                                                            checked={selectedSpeakers.includes(speaker.id)}
                                                            onChange={(e) => handleCheckboxChange(e, speaker.id)}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor={speaker.id}>{speaker.name}</label>
                                                    </div>

                                                ))}
                                            </div>



                                        </div>


                                    </div>
                                </div>
                                <div className='w-[40%] pt-16'>
                                    {selectedSpeakers.map(speakerId => (
                                        <div key={speakerId} className="pt-2 flex relative">
                                            <img src={speakers.find(speaker => speaker.id === speakerId)?.photo} alt="" className='absolute left-6 top-4 w-[8%] rounded-[30px]' />
                                            <div
                                                className="border border-gray-400 rounded-[6px]  pl-20  py-4 w-full bg-[#F4F4F4] flex items-center"
                                            >
                                                {speakers.find(speaker => speaker.id === speakerId)?.name}
                                                <img
                                                    src={del}
                                                    alt=""
                                                    className='ml-auto cursor-pointer pr-8 '
                                                    onClick={() => handleRemoveSpeaker(speakerId)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Image</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                required  // Add the required attribute
                            />



                            {[...Array(Number(formData.days))].map((_, index) => (
                                <div key={index}>
                                    <div className='pt-8'>
                                        <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Schedule - Day {index + 1}</p>
                                        <div className=' flex gap-8 pt-6'>

                                            <div className="relative w-[40%]">
                                                <p className='text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]'>YouTube Link </p>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        name="youtube_link"
                                                        value={scheduleFormData[index]?.youtube_link || ''}
                                                        onChange={(e) => handleScheduleChange(e, index)}
                                                        className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full  bg-[#F4F4F4]"
                                                        placeholder="Basic Module in Infectious Diseases"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative w-[8%]">
                                                <p className='text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]'>Points</p>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        name="points"
                                                        value={scheduleFormData[index]?.points || ''}
                                                        onChange={(e) => handleScheduleChange(e, index)}
                                                        className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full bg-[#F4F4F4]"
                                                        placeholder="5.00"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-8'>
                                        <div className='flex gap-8'>
                                            <div className=" pt-6 relative w-[8%]">
                                                <p className='text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]'>Starting Time</p>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        name="starting_time"
                                                        value={scheduleFormData[index]?.starting_time || ''}
                                                        onChange={(e) => handleScheduleChange(e, index)}
                                                        className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full bg-[#F4F4F4]"
                                                        placeholder="5:00 PM"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" pt-6 relative w-[8%]">
                                                <p className='text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]'>Ending Time</p>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        name="ending_time"
                                                        value={scheduleFormData[index]?.ending_time || ''}
                                                        onChange={(e) => handleScheduleChange(e, index)}
                                                        className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full bg-[#F4F4F4]"
                                                        placeholder="5:00 PM"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" pt-6 relative w-[35%]">
                                                <p className='text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]'>Topics</p>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        name="topics"
                                                        value={scheduleFormData[index]?.topics || ''}
                                                        onChange={(e) => handleScheduleChange(e, index)}
                                                        className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full bg-[#F4F4F4]"
                                                        placeholder="Challenging Cases In Transplant ID"
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-[28%] pt-6'>
                                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Selected Speakers</p>
                                                <div className="relative pt-2">
                                                    <select
                                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                        value={scheduleFormData[index]?.single_speaker || ''}
                                                        onChange={(e) => handleSpeakerChangeForSection(e, index)}
                                                    >
                                                        <option value="" disabled>Select a speaker</option>
                                                        {selectedSpeakers.map(speakerId => {
                                                            const speaker = speakers.find(s => s.id === speakerId);
                                                            return (
                                                                <option key={speaker.id} value={speaker.id}>
                                                                    {speaker.name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}


                            <div className='pt-8 w-[15%] '>
                                <button type='submit' className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                    <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                </button>
                            </div>

                        </form>
                    </div>






                )}

                {mailingAddressActive && (
                    <div className=' '>
                        <div>

                            <button className='border border-gray-300 px-4 py-3 w-[40%] rounded-[6px]'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2'>
                                        <img src={search} alt="" />
                                        <p className='text-[color:var(--Gray,#58585A)] pl-2 text-[15px] not-italic font-normal leading-[normal]'>Search by data...</p>
                                    </div>
                                    <div>
                                        <img src={cls} alt="" className='pl-[20rem]' />
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className='pt-8'>
                            <div className='bg-gray-100 py-4 w-full flex p-6 gap-2 pl-8 pr-8 '>
                                <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-semibold leading-[normal]'>#ID</p>
                                <div className=''>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-semibold pl-8  leading-[normal]'>Event Name</p>
                                </div>
                                <div>
                                    <p className='text-[color:var(--Gray,#58585A)] pl-[13.5rem] text-[18px] not-italic font-semibold leading-[normal]'>Forum</p>
                                </div>
                                <div>
                                    <p className='text-[color:var(--Gray,#58585A)]  text-[18px] not-italic font-semibold pl-[16.5rem]  leading-[normal]'>Event Date</p>
                                </div>

                                <p className='text-[color:var(--Gray,#58585A)] text-[18px] pl-[14rem] not-italic font-semibold   leading-[normal]'>Status</p>
                            </div>
                        </div>

                        {eventData.map((event, index) => (
                            <div key={index} className='py-4 w-full flex p-6 items-center pl-8 pr-8'>
                                <div className='w-[3%]'>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[18px]   not-italic font-normal leading-[normal]'>{event?.id}</p>
                                </div>
                                <img src={event?.banner} alt="" className=' pl-8' />
                                <div className='w-[28%] pl-4'>
                                    <p className='text-[color:var(--Gray,#58585A)]  text-[18px] not-italic font-normal leading-[normal]'>{event?.event_name}</p>
                                </div>
                                <div className='w-[30%]'>
                                    <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-normal leading-[normal]'>{event?.forum_name}</p>
                                </div>
                                <div className='w-[10%]'>
                                    <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-normal leading-[normal]'>{event?.date}</p>
                                </div>
                                <div className='w-[15%]'>

                                </div>
                                <div className='pl-[2rem]'>
                                    <button className='px-6 py-1 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>
                                        <p className='text-[color:var(--Green,#1AB78D)] text-[16px] not-italic font-medium leading-[normal]'>Active</p>
                                    </button>
                                </div>
                                <div className='pl-16'>
                                    <img src={eye} alt="" className='w-[100%]' />
                                </div>

                                <img src={img} alt="" className='pl-[5rem]' onClick={() => handleToggleDropdown(index)} />
                                {dropdownStates[index] && (
                                    <div className='absolute right-32 top-[20rem] bg-white rounded-[8px] p-6 w-[20%] shadow-2xl'  >
                                        <div className='border border-gray-300 rounded-[8px]'>

                                            <Link to={`/events/${eventId}`}>
                                                <div className='flex p-4'>
                                                    <img src={edi} alt="" />
                                                    <p className='text-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Edit</p>
                                                </div>
                                            </Link>


                                            <hr />
                                            <div className='flex p-4 '>
                                                <img src={dil} alt="" />
                                                <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Delete</p>
                                            </div>
                                            <hr />

                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                )}




            </div>
        </div>
    );
};

export default AEvents;
