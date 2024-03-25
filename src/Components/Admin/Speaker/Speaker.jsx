import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../Utils/Config';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import del from "../../../assets/images/del.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";
import pic from "../../../assets/images/Picture.png";
import search from "../../../assets/images/search.png";
import cls from "../../../assets/images/close.png";
import icon from "../../../assets/images/icon.png";
import icon1 from "../../../assets/images/icon1.png";

const Speaker = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setMailingAddressActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [editSpeakerVisible, setEditSpeakerVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        qualification: '',
        designation: '',
        description: '',
        photo: null
    });

    const [speakers, setSpeakers] = useState([]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.title]: e.target.value });
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


    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
        setFormData(prevFormData => ({
            ...prevFormData,
            photo: imageFile
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = new FormData();
            postData.append('name', formData.name);
            postData.append('qualification', formData.qualification);
            postData.append('designation', formData.designation);
            postData.append('description', formData.description);
            postData.append('photo', formData.photo);

            const response = await axios.post(`${BASE_URL}/admins/speakers/`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);

            alert('speaker added successfully!');

            setFormData({
                name: '',
                qualification: '',
                designation: '',
                description: '',
                photo: null
            });
            // Update speakers list after adding

        } catch (error) {
            console.error('Error adding speaker:', error);
            alert('Failed to add speaker. Please try again.');
        }
    };


    const handleDelete = async (speakerId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this speaker?');

        if (confirmDelete) {
            try {
                await axios.delete(`${BASE_URL}/admins/speakers/${speakerId}/delete/`);
                alert('Speaker deleted successfully!');

            } catch (error) {
                console.error('Error deleting speaker:', error);
                alert('Failed to delete speaker. Please try again.');
            }
        }
    };


    const handleEdit = (speaker) => {
        setSelectedSpeaker(speaker);
        setEditSpeakerVisible(!editSpeakerVisible);


        setFormData(prevFormData => ({
            ...prevFormData,
            name: speaker.name,
            qualification: speaker.qualification,
            designation: speaker.designation,
            description: speaker.description,


            photo: null
        }));

    };

    const handleSpeakerSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = new FormData();
            postData.append('name', formData.name);
            postData.append('qualification', formData.qualification);
            postData.append('designation', formData.designation);
            postData.append('description', formData.description);
            if (formData.photo) {

                postData.append('photo', formData.photo);
            }

            if (!selectedSpeaker) {
            
                const response = await axios.post(`${BASE_URL}/admins/speakers/`, postData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
                alert('Speaker added successfully!');
            } else {
             
                const response = await axios.put(`${BASE_URL}/admins/speakers/${selectedSpeaker.id}/update/`, postData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
                alert('Speaker updated successfully!');
            }

    
            setFormData({
                name: '',
                qualification: '',
                designation: '',
                description: '',
                photo: ''
            });
            setEditSpeakerVisible(false);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit Speaker. Please try again.');
        }
    };


    const togglePersonalInfo = () => {
        setPersonalInfoActive(!personalInfoActive);

        if (!personalInfoActive) {
            setMailingAddressActive(false);
        }
    };

    const toggleMailingAddress = () => {
        setMailingAddressActive(!mailingAddressActive);

        if (!mailingAddressActive) {
            setPersonalInfoActive(false);
        }
    };
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <div className='bg-[#f4f4f4] h-[100vh] p-6'>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Speaker Management</p>
                <div className='flex pt-6 gap-[20rem] p-6'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Add Speaker</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={toggleMailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage Speaker</p>
                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (
                    <div className='w-[40%]'>
                        <form onSubmit={handleSubmit}>
                            <div className="text-start">
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Speaker Name</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Speaker Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Qualification</p>
                                <div className="pt-2 relative">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Qualification"
                                            value={formData.qualification}
                                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Designation</p>
                                <div className="pt-2 relative">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Designation"
                                            value={formData.designation}
                                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                        />
                                        <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                            <option value="" disabled selected></option>
                                            {/* Add your dropdown options here */}
                                        </select>
                                    </div>
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Description</p>
                                <div className="pt-1">
                                    <textarea
                                        className="border rounded-[6px] px-[20px] py-4 pb-28 w-full bg-[#F4F4F4]"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Upload Photos</p>
                                <div className="pt-1">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                    />
                                </div>
                                <div className='pt-8'>
                                    <div className='flex gap-2 justify-end'>
                                        <button type="submit" className='border border-gray-300 rounded-[10px] px-4 py-2'>
                                            <p className='text-[#1A1A1A]  text-center text-[16px] not-italic font-normal leading-[normal]'>Submit</p>
                                        </button>
                                        {/* <button type="button" className='bg-[#00549A] rounded-[10px] px-4 py-2'>
                            <p className='text-white  text-center text-[16px] not-italic font-normal leading-[normal]'>Cancel</p>
                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                {mailingAddressActive && (
                    <div className=' '>
<div className='relative'>
                        <input
                            type="text"
                            placeholder="Search speakers..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className="border border-gray-300 rounded-md px-6 py-3 focus:outline-none focus:border-blue-500 w-[40%] relative"
                        />
 
                        <img src={search} alt="Search" className="absolute left-[32rem] top-6 transform -translate-y-1/2" />
                        </div>
                        {speakers.filter(speaker => speaker.name.toLowerCase().includes(searchQuery.toLowerCase())).map((speaker, index) => (
                            <div className='pt-2' key={index}>
                                <div className='w-full '>
                                    <div className='flex pt-4 pb-4 pl-8 '>
                                        <div className='flex gap-4'>
                                            <img src={speaker.photo} alt="" className='w-14 rounded-[60px]' />
                                            <p className='text-[color:var(--Gray,#58585A)] w-[405px] pt-2 pl-4 text-[16px] not-italic font-normal leading-[normal]'>{speaker.name}</p>
                                        </div>
                                        <div className='flex gap-6 pt-2'>
                                            <div>
                                                <img src={ed} alt="" className=' ' onClick={() => handleEdit(speaker)} />
                                            </div>
                                            <div>
                                                <img src={del} alt="" className=' ' onClick={() => handleDelete(speaker.id)} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className=' ' />
                                </div>
                            </div>
                        ))}
                    </div>

                )}

                {editSpeakerVisible && selectedSpeaker && (
                    <div className='w-[40%]'>
                        <form onSubmit={handleSpeakerSubmit}>
                            <div className="text-start">
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Speaker Name</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Speaker Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Qualification</p>
                                <div className="pt-2 relative">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="FQualification"
                                            value={formData.qualification}
                                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Designation</p>
                                <div className="pt-2 relative">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                            placeholder="Designation"
                                            value={formData.designation}
                                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                        />
                                        <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                            <option value="" disabled selected></option>

                                        </select>

                                    </div>
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Description</p>
                                <div className="pt-1">
                                    <textarea
                                        className="border rounded-[6px] px-[20px] py-4 pb-28 w-full bg-[#F4F4F4]"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Upload Photos</p>
                                {selectedSpeaker && (
                                    <div className="pt-1">

                                        <img src={selectedImage ? URL.createObjectURL(selectedImage) : selectedSpeaker.photo} alt="Old Forum Image" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" />
                                    </div>
                                )}
                                <div className="pt-1">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                    />
                                </div>
                                <div className='pt-8'>
                                    <div className='flex gap-2 justify-end'>
                                        <button type="submit" className='border border-gray-300 rounded-[10px] px-4 py-2'>
                                            <p className='text-[#1A1A1A]  text-center text-[16px] not-italic font-normal leading-[normal]'>Submit</p>
                                        </button>
                                        {/* <button type="button" className='bg-[#00549A] rounded-[10px] px-4 py-2'>
                            <p className='text-white  text-center text-[16px] not-italic font-normal leading-[normal]'>Cancel</p>
                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Speaker;
