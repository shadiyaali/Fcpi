import React, { useState } from 'react';
import user from "../../../assets/images/user.png"
import { Link } from "react-router-dom";


const Profile = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [userRoleActive, setuserRoleActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayedPassword, setDisplayedPassword] = useState('');

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayedPassword('★'.repeat(value.length));
    };



    // Function to toggle the dropdown state




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

                {personalInfoActive && (
                    <div className='flex '>
                        <div className='pt-6'>
                            <img src={user} alt="" className='  h-[192px] w-[192px]' />
                        </div>
                        <div className='grid grid-cols-2 pt-4 w-full'>
                            <div className='pl-16'>
                                <div className= ''>

                                    <div className="text-start">
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>First Name</p>
                                        <div className="pt-2">

                                            <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="First Name" />
                                        </div>
                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Date of Birth</p>
                                        <div className="pt-2">
                                            <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" placeholder="Date of Birth" />
                                        </div>
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Primary Position</p>
                                        <div className="pt-2 relative">
                                            <div className="relative">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="yes" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>

                                        </div>
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>State</p>
                                        <div className="relative pt-2">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Kerala" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>
                        



                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Primary Pharmacy Degree</p>
                                        <div className="relative pt-2">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Doctor of Pharmacy" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>
                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Secondary Pharmacy Degree</p>
                                        <div className="pt-2 relative">
                                            <div className="relative">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Masters in Pharmacy" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>

                                        </div>
                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Additional Degrees</p>
                                        <div className="pt-2">
                                            <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" placeholder="Yes" />
                                        </div>

                                       

                                    </div>

                                </div>
                            </div>
                            <div className='pl-16'>
                                <div className= ''>

                                    <div className="text-start">
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Last Name</p>
                                        <div className="pt-2">

                                            <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Last Name" />
                                        </div>
                                         
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Primary Position</p>
                                        <div className="pt-2 relative">
                                            <div className="relative">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Primary Position" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>

                                        </div>
                                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>City</p>
                                        <div className="relative pt-2">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Calicut" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>
                        



                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Country</p>
                                        <div className="relative pt-2">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="India" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>
                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Name of Pharmacy College</p>
                                        <div className="pt-2 relative">
                                            <div className="relative">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Doctor of Pharmacy" />
                                                <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>

                                        </div>
                                        <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Name of Pharmacy College Degree</p>
                                        <div className="pt-2">
                                            <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" placeholder="Masters in Pharmacy" />
                                        </div>

                                        <div className='pt-16'>

                                            <button className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                                <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                            </button>

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {mailingAddressActive && (
                    <div className=' '>
                         
                         <div className="  rounded-[30px] w-[38%]    ">
                            <div className="text-start">
                             
                                <p className="text-gray-600  pt-4 text-[18px] not-italic font-semibold leading-[24px]">New Password</p>
                                <div className="relative pt-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="border rounded-[10px] px-[20px] py-4 w-full pt-6 bg-white"
                                        style={{ font: 'normal 1em Arial' }}
                                        placeholder="************"
                                    />
                                </div>
                                <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Confirmed Password</p>
                                <div className="relative pt-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="border rounded-[10px] px-[20px] py-4 w-full pt-6 bg-white"
                                        style={{ font: 'normal 1em Arial' }}
                                        placeholder="************"
                                    />
                                </div>

                                <div className='pt-8'>
                                   
                                        <button className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                            <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                        </button>
                                   
                                </div>
                                 

                            </div>
                        </div>
                        
                    </div>
                )}



            </div>
        </div>
    );
};

export default Profile;
