import React, { useState, useEffect } from 'react';
import user from "../../../assets/images/user.png"
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from 'axios';
import { BASE_URL } from "../../../Utils/Config";
import edit from "../../../assets/images/edit-user.png"


const Profile = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [userRoleActive, setuserRoleActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [displayedPassword, setDisplayedPassword] = useState('');
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        primary_position: '',
        state: '',
        primary_pharmacy_degree: '',
        secondary_pharmacy_degree: '',
        additional_degrees: '',
        city: '',
        country: '',
        pharmacy_college_name: '',
        pharmacy_college_degree: ''
    });

 
    // useEffect(() => {
    //     const fetchUserProfileData = async () => {
    //         try {
    //             const response = await axios.get(`${BASE_URL}/accounts/userlist/`);
    //             console.log(response.data)
    //             const userProfileData = response.data;
    //             setFormData(userProfileData);
    //         } catch (error) {
    //             console.error('Error fetching user profile data:', error);
    //             toast.error('Failed to fetch user profile data!');
    //         }
    //     };

    //     fetchUserProfileData();
    // }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/accounts/userprofilelist/`);
                const userProfileData = response.data;
                setFormData(userProfileData);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
                toast.error('Failed to fetch user profile data!');
            }
        };

        fetchUserProfileData();
    }, []);
const handleDelete = async () => {
    try {
        await axios.delete(`${BASE_URL}/accounts/userprofile/${formData.id}/`);
        toast.success('User profile deleted successfully!');
        // Optionally, you can reset form data or redirect after deletion
    } catch (error) {
        console.error('Error deleting user profile:', error);
        toast.error('Failed to delete user profile!');
    }
};
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        if (formData.id) {
            // If the form data contains an 'id' field, send a PUT request
            const response = await axios.put(`${BASE_URL}/accounts/userprofile/${formData.id}/`, formData);
            console.log('Form data updated:', response.data);
            toast.success('Form updated successfully!');
            setEditMode(false); // Disable edit mode after successful update
        } else {
            // If 'id' field is not present, send a POST request
            const response = await axios.post(`${BASE_URL}/accounts/userprofile/`, formData);
            console.log('Form data submitted:', response.data);
            toast.success('Form submitted successfully!');
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.detail || 'Form submission failed!';
            toast.error(errorMessage);
        } else {
            console.error('Error submitting form:', error);
            toast.error('Form submission failed!');
        }
    }
};






    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayedPassword('★'.repeat(value.length));
    };
    const handlePasswordChange1 = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayedPassword('★'.repeat(value.length));
    };


    const handleEdit = () => {
        setEditMode(true);
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
            setuserRoleActive(false);
        }
    };
    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                <Toaster position="top-center reverseOrder={false}" />
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Profile Edit</p>
                <div className='flex pt-6 gap-[12rem] p-6'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>

                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Modify Profile</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Change Password</p>
                            </div>
                        </button>
                    </div>

                </div>
                <form onSubmit={handleSubmit}>
                    {personalInfoActive && (
                        <div className='flex '>
                            <div className='relative'>
                            <img src={user} alt="" className=' h-[25%] w-[100%] rounded-[8px]' />
                            <img src={edit} alt="" className='absolute -right-4 top-44 z-10 cursor-pointer' onClick={handleEdit} />
                        </div>
                            <div className='grid grid-cols-2 pt-4 w-full'>
                                <div className='pl-16'>
                                    <div className=''>

                                        <div className="text-start">
                                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>First Name</p>
                                            <div className="pt-2">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    value={formData.first_name}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Date of Birth</p>
                                            <div className="pt-2">
                                                <input
                                                    type="date"
                                                    name="date_of_birth"
                                                    value={formData.date_of_birth}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="Date of Birth"
                                                />

                                            </div>

                                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>State</p>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                placeholder="state"
                                            />



                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Primary Pharmacy Degree</p>
                                            <div className="relative pt-2">
                                                <select
                                                    className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    name="primary_pharmacy_degree"
                                                    defaultValue={formData.primary_pharmacy_degree}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>Select Primary Pharmacy Degree</option>
                                                    <option value="Bachelors in Pharmacy">Bachelors in Pharmacy</option>
                                                    <option value="Doctor of Pharmacy">Doctor of Pharmacy</option>
                                                    {/* Add more options as needed */}
                                                </select>

                                            </div>

                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Secondary Pharmacy Degree</p>
                                            <div className="relative pt-2">
                                                <select
                                                    className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    name="secondary_pharmacy_degree"
                                                    value={formData.secondary_pharmacy_degree}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>Select secondaryPharmacyDegree</option>
                                                    <option value="Doctor of Pharmacy Post Baccalaureate">Doctor of Pharmacy Post Baccalaureate</option>
                                                    <option value="Masters in Pharmacy">Masters in Pharmacy</option>
                                                   
                                                </select>

                                            </div>
                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Additional Degrees</p>
                                            <div className="pt-2">
                                                <input
                                                    type="text"
                                                    name="additional_degrees"
                                                    value={formData.additional_degrees}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="additionalDegrees"
                                                />
                                            </div>



                                        </div>

                                    </div>
                                </div>
                                <div className='pl-16'>
                                    <div className=''>

                                        <div className="text-start">
                                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Last Name</p>
                                            <div className="pt-2">

                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    value={formData.last_name}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="last_name"
                                                />
                                            </div>

                                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Primary Position</p>
                                            <div className="pt-2 relative">
                                                <div className="relative pt-2">
                                                    <select
                                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                        name="primary_position"
                                                        value={formData.primary_position}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="" disabled selected>Select Primary Pharmacy Degree</option>
                                                        <option value="student">student</option>
                                                        <option value="clinical pharmacist">clinical pharmacist</option>
                                                        <option value="pharmacist">pharmacist</option>
                                                        <option value="faculty">faculty</option>

                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>

                                            </div>
                                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>City</p>
                                            <div className="relative pt-2">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="city"
                                                />
                                            </div>




                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Country</p>
                                            <div className="relative pt-2">
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="country"
                                                />
                                            </div>
                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Name of Pharmacy College</p>
                                            <div className="pt-2 relative">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="pharmacy_college_name"
                                                        value={formData.pharmacy_college_name}
                                                        onChange={handleInputChange}
                                                        className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                        placeholder="pharmacyCollegeName"
                                                    />
                                                </div>

                                            </div>
                                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Name of Pharmacy College Degree</p>
                                            <div className=" relative pt-2">

                                                <input
                                                    type="text"
                                                    name="pharmacy_college_degree"
                                                    value={formData.pharmacy_college_degree}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                                    placeholder="pharmacyCollegeDegree"
                                                />
                                            </div>

                                            <div className='pt-16 flex'>
 
                                                <button type="submit" className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                                    <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                                </button>

                                                <button type="submit" className='bg-[#00549A] rounded-[10px] w-full py-4'>
                            <p className='text-white text-center text-[20px] not-italic font-semibold leading-[normal]'>
                                {editMode ? 'Save' : 'Edit'}
                            </p>
                        </button>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                </form>
                {mailingAddressActive && (
                    <div className=''>
                        
                        <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">New Password*</p>
                        <div className="relative pt-4 w-[40%]">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="border rounded-[10px] px-[20px] py-4 w-full pt-6 bg-white"
                                style={{ font: 'normal 1em Arial' }}
                                placeholder="************"
                            />
                        </div>
                        <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Conform Password*</p>
                        <div className="relative pt-4 w-[40%]">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange1}
                                className="border rounded-[10px] px-[20px] py-4 w-full pt-6 bg-white"
                                style={{ font: 'normal 1em Arial' }}
                                placeholder="************"
                            />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
