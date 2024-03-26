import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../Utils/Config';
import del from '../../../assets/images/delete-02.png';
import { toast, Toaster } from "react-hot-toast";

const EditEvents = () => {
    const [formData, setFormData] = useState({
        days: '',
        forum: '',
        event_name: '',
        date: '',
        speakers: [],
        single_speaker: '',
        youtube_link: '',
        points: '',
        starting_time: '',
        ending_time: '',
        topics: ''
    });



    const [scheduleFormData, setScheduleFormData] = useState([
        { youtube_link: '', points: '', starting_time: '', ending_time: '', topics: '' }
    ]);





    const [speakers, setSpeakers] = useState([]);
    const [speakerList, setSpeakerList] = useState([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState('');
    const [selectedSpeakers, setSelectedSpeakers] = useState([]);
    const [forums, setForums] = useState([]);
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/speakers/`);
                setSpeakers(response.data);
            } catch (error) {
                console.error('Error fetching speakers:', error);
            }
        };
        fetchSpeakers();
    }, []);

    const { eventId } = useParams();
    console.log("eventId:", eventId);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/events/${eventId}/update/`);
                const eventData = response.data;
                setFormData({
                    days: eventData.days.toString(),
                    forum: eventData.forum.toString(),
                    event_name: eventData.event_name,
                    date: eventData.date,
                    speakers: eventData.speakers,
                    single_speaker: eventData.single_speaker,
                    youtube_link: eventData.youtube_link,
                    points: eventData.points,
                    starting_time: eventData.starting_time,
                    ending_time: eventData.ending_time,
                    topics: eventData.topics


                });
                console.log(response.data)
                setScheduleFormData(eventData.single_events || []);
                setSelectedSpeakers(eventData.speakers);
            } catch (error) {
                console.error('Error fetching event data:', error);
                toast.error('Failed to fetch event data.');
            }
        };

        fetchEventData();
    }, [eventId]);


    useEffect(() => {
        const fetchForumData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/forums/`);
                setForums(response.data);
            } catch (error) {
                console.error('Error fetching forum data:', error);
                toast.error('Failed to fetch forum data.');
            }
        };

        const fetchScheduleData = async () => {

        };

        fetchForumData();
        fetchScheduleData();
    }, []);

    const handleSpeakerSearch = (searchQuery) => {
        const filtered = speakers.filter(speaker =>
            speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSpeakerList(filtered);
    };

    const handleCheckboxChange = (e, speakerId) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedSpeakers(prevSelected => [...prevSelected, speakerId]);
        } else {
            setSelectedSpeakers(prevSelected => prevSelected.filter(id => id !== speakerId));
        }
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
            single_speaker: value // Set the single_speaker field in the formData state
        }));
    };
    
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchedule = [...scheduleFormData];
        updatedSchedule[index] = {
            ...updatedSchedule[index],
            [name]: value
        };
        setScheduleFormData(updatedSchedule); // Update the state with the modified data
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

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await handleUpdateEvent();
    } catch (error) {
        console.error('Error updating event:', error);
        toast.error('Failed to update event. Please try again.');
    }
};


    const handleUpdateEvent = async () => {
        try {
            const updatedEventData = {
                days: formData.days,
                forum: formData.forum,
                event_name: formData.event_name,
                date: formData.date,
                speakers: selectedSpeakers,
                schedules: scheduleFormData,
                banner: formData.banner,
                single_speaker: formData.single_speaker,
                youtube_link: formData.youtube_link,
                points: formData.points,
                starting_time: formData.starting_time,
                ending_time: formData.ending_time,
                topics: formData.topics
            };

            const response = await axios.put(`${BASE_URL}/admins/events/${eventId}/update/`, updatedEventData);

            if (response.status === 200) {
                console.log('Event updated:', response.data);
                alert('Event updated successfully!');
            } else {
                console.error('Error updating event. Status:', response.status);
                alert('Failed to update event. Please try again.'); // Alert when update fails
            }
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Failed to update event. Please try again.'); // Alert when update fails
        }
    };



    return (
        <div className='bg-[#f4f4f4] h-[100vh] p-6'>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Edit Events</p>
                <div>
                <form onSubmit={handleSubmit}>

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
                        </div>
                        <div className='  flex pt-8 gap-8'>
                            <div className='w-full'>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Choose Forum</p>
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
                            <div className='w-full'></div>
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
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Search for a speaker"
                                        />
                                        <div className="bg-white border border-gray-400 rounded-[6px] w-full mt-1 z-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                            {speakerList.map(speaker => (
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


                        <div className="pt-8"> {/* Start of container div for Event Schedules */}
                            <p className="text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]">Event Schedules</p>
                            <div>
                                {/* Render schedule sections dynamically */}
                                {scheduleFormData.map((schedule, index) => (
                                    <div key={index}>
                                        {/* Render schedule section content here */}
                                        <div className="pt-8">
                                            <p className="text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]">Schedule - Day {index + 1}</p>
                                            <div className="flex gap-8 pt-6">
                                                {/* YouTube Link field */}
                                                <div className="relative w-[40%]">
                                                    <p className="text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]">YouTube Link</p>
                                                    <div className="pt-2">
                                                        <input
                                                            type="text"
                                                            name="youtube_link"
                                                            value={schedule.youtube_link || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                            className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full  bg-[#F4F4F4]"
                                                            placeholder="Basic Module in Infectious Diseases"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Points field */}
                                                <div className="relative w-[8%]">
                                                    <p className="text-[color:var(--Black,#222)]  text-[18px] not-italic font-medium  leading-[24px]">Points</p>
                                                    <div className="pt-2">
                                                        <input
                                                            type="text"
                                                            name="points"
                                                            value={schedule.points || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                            className="border border-gray-400  rounded-[6px] px-[26px] py-4 w-full bg-[#F4F4F4]"
                                                            placeholder="5.00"
                                                        />
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
                                                                onChange={(e) => handleChange(e, index)}
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
                                                                onChange={(e) => handleChange(e, index)}
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
                                                                onChange={(e) => handleChange(e, index)}
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
    value={formData.single_speaker} // Update this line to use formData.single_speaker
    onChange={(e) => handleSpeakerChange(e)}
>
    <option value="" disabled>Select a speaker</option>
    {speakers.map(speaker => (
        <option key={speaker.id} value={speaker.id}>{speaker.name}</option>
    ))}
</select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className='pt-8 w-[15%]'>
                            <button type='submit' className='bg-[#00549A] rounded-[10px] w-full py-4'>
                                <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'>Submit</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditEvents;

