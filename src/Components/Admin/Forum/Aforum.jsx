import React, { useState, useEffect } from 'react';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import Icon from "../../../assets/images/Icon frame.png";
import { Link } from "react-router-dom";
import del from "../../../assets/images/del.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";
import axios from "axios";
import { BASE_URL } from '../../../Utils/Config';
// import "./Aforum.css"



const Aforum = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [selectedForum, setSelectedForum] = useState(null);
    const [editFormVisible, setEditFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
    });
    const [forums, setForums] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.title]: e.target.value });
    };

    useEffect(() => {
        const fetchForums = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/admins/forums/`);
                setForums(response.data);
            } catch (error) {
                console.error('Error fetching forums:', error);
            }
        };

        fetchForums();
    }, []);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
        setFormData(prevFormData => ({
            ...prevFormData,
            image: imageFile
        }));
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = new FormData();
            postData.append('title', formData.title);
            postData.append('description', formData.description);
            postData.append('image', formData.image);

            const response = await axios.post(`${BASE_URL}/admins/forums/`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            alert('Forum added successfully!');

            setFormData({
                title: '',
                description: '',
                image: null
            });
            // setEditFormVisible(false);
        } catch (error) {
            console.error('Error adding forum:', error);
            alert('Failed to add forum. Please try again.');
        }
    };

    const handleDelete = async (forumId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this forum?');

        if (confirmDelete) {
            try {
                const response = await axios.delete(`${BASE_URL}/admins/forums/${forumId}/delete/`);
                console.log(response.data);
                alert('Forum deleted successfully!');
            } catch (error) {
                console.error('Error deleting forum:', error);
                alert('Failed to delete forum. Please try again.');
            }
        }
    };

    const handleEdit = (forum) => {
        setSelectedForum(forum);
        setEditFormVisible(!editFormVisible);  
    
      
        setFormData(prevFormData => ({
            ...prevFormData,
            title: forum.title,
            description: forum.description,
            
            image: null
        }));
       
    };
    
    
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const postData = new FormData();
            postData.append('title', formData.title);
            postData.append('description', formData.description);
            if (formData.image) {
                // Only append the image if it's selected
                postData.append('image', formData.image);
            }
    
            if (!selectedForum) {
                // Add new forum
                const response = await axios.post(`${BASE_URL}/admins/forums/`, postData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
                alert('Forum added successfully!');
            } else {
                // Update an existing forum
                const response = await axios.put(`${BASE_URL}/admins/forums/${selectedForum.id}/update/`, postData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
                alert('Forum updated successfully!');
            }
    
            // Clear form data after submission
            setFormData({
                title: '',
                description: '',
                image: ''
            });
            setEditFormVisible(false);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit forum. Please try again.');
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

    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Add Forum</p>
                <div className='flex pt-12 gap-[12rem] p-8'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Add Forum</p>

                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage Forum</p>

                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (
                    <div className='w-[40%]'>
                        <form onSubmit={handleSubmit}>
                            <div className="text-start">
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Forum Name</p>
                                <div className="pt-1">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Forum Name"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
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
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Image</p>
                                <div className="pt-1">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                    />
                                </div>
                                <div className='pt-8'>
                                    <button className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                {mailingAddressActive && (
                    <div className=' pt-4'>
                        <div className='bg-gray-100 py-4 w-full flex p-6 gap-[21.5rem]'>
                            <p className='text-[color:var(--Gray,#58585A)] pl-2 text-[18px] not-italic font-semibold leading-[normal]'>Forum Name</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-semibold   leading-[normal]'>Actions</p>
                        </div>
                        {forums.map((forum, index) => (

                            <div key={index} className='w-full '>
                                <div className='flex pt-4 pb-4 pl-8 '>
                                    <div className='flex gap-4'>
                                        <img src={click} alt="" className='' />
                                        <p className='text-[color:var(--Gray,#58585A)] w-[405px]  text-[16px] not-italic font-normal leading-[normal]'>{forum.title}</p>
                                    </div>
                                    <div className='flex gap-6'>
                                        <div>
                                            <img src={ed} alt="" className=' ' onClick={() => handleEdit(forum)} />
                                        </div>
                                        <div>
                                            <img src={del} alt="" className=' ' onClick={() => handleDelete(forum.id)} />
                                        </div>
                                    </div>
                                </div>
                                <hr className=' ' />
                            </div>
                        ))}

                    </div>
                )}

                {editFormVisible && selectedForum && (
                    <div className='w-[40%]'>
                        <form onSubmit={handleFormSubmit}>
                            <div className="text-start">
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Forum Name</p>
                                <div className="pt-1">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Forum Name"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
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
                                

                                {selectedForum && (
                                    <div className="pt-1">
                                    
                                        <img src={selectedImage ? URL.createObjectURL(selectedImage) : selectedForum.image} alt="Old Forum Image" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" />
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
                                    <button className='bg-[#00549A] rounded-[10px] w-full py-4'>
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'>Update</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Aforum;
