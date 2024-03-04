import React, { useState } from 'react';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import Icon from "../../../assets/images/Icon frame.png";
import { Link } from "react-router-dom";
import del from "../../../assets/images/del.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";
import pic from "../../../assets/images/Picture.png";
import search from "../../../assets/images/search.png";
import cls from "../../../assets/images/close.png";
import icon from "../../../assets/images/icon.png";
import icon1 from "../../../assets/images/icon1.png";
import eye from "../../../assets/images/eye.png";
import img from "../../../assets/images/more.png";
import edi from "../../../assets/images/edituse.png";
import dil from "../../../assets/images/deluser.png";
import ch from "../../../assets/images/change.png";
import st from "../../../assets/images/status.png";
import editt from "../../../assets/images/editt.png";

const User = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [userRoleActive, setuserRoleActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [clickedStates, setClickedStates] = useState(Array(3).fill(false)); // Adjust the array size according to the number of boxes
    const [dropdownStates, setDropdownStates] = useState(Array(3).fill(false)); // Adjust the array size according to the number of dropdowns
    const [imagePositionY, setImagePositionY] = useState(0);
    const [imagePositionX, setImagePositionX] = useState(0);

    // Function to calculate the position of the three-dot image
    const calculateImagePosition = (event) => {
        const imageRect = event.target.getBoundingClientRect();
        setImagePositionY(imageRect.bottom); // Set the top position of the dropdown just below the bottom of the image
        setImagePositionX(imageRect.left); // Set the left position of the dropdown aligned with the left of the image
    };

    // Function to toggle the dropdown state
    const handleToggleDropdown = (index) => {
        const newDropdownStates = [...dropdownStates];
        newDropdownStates[index] = !newDropdownStates[index];
        setDropdownStates(newDropdownStates);
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size <= 25 * 1024 * 1024) {
                setSelectedImage(file);
                setError(null);
            } else {
                setError('File size exceeds 25MB limit.');
            }
        } else {
            setError('Please select a valid image file.');
        }
    };

    const handleClick = (index) => {
        const newClickedStates = [...clickedStates]; // Copy the original array
        newClickedStates[index] = !newClickedStates[index]; // Toggle the clicked state at the specified index
        setClickedStates(newClickedStates); // Update the state with the new array
    };

    const togglePersonalInfo = () => {
        setPersonalInfoActive(!personalInfoActive);

        if (!personalInfoActive) {
            setmailingAddressActive(false);
        }
    };

    const toggleuserRole = () => {
        setuserRoleActive(!userRoleActive);
        if (!userRoleActive) {
            setPersonalInfoActive(false);
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
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Add Users</p>
                <div className='flex pt-6 gap-[12rem] p-6'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Add User</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage User</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${userRoleActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={toggleuserRole}>
                            <div className='flex gap-3'>
                                {userRoleActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${userRoleActive ? 'text-[#00549A]' : 'text-gray-600'}`}>User Role</p>
                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (
                    <div className='w-[40%]'>

                        <div className="text-start">
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'> Name</p>
                            <div className="pt-2">

                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Enter your name" />
                            </div>
                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Email</p>
                            <div className="pt-2">
                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]" placeholder="Email" />
                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Phone</p>
                            <div className="pt-2">

                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Enter your mobile number" />
                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Password</p>
                            <div className="pt-2">

                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Enter your password" />
                            </div>
                            <div className='pt-6 grid justify-items-end'>
                                <button className='bg-[#222222] px-6 py-2 rounded-[6px]'>
                                    <p className='text-[color:var(--White,#FFF)] text-[16px] not-italic font-normal leading-[24px]'>Generate Password</p>
                                </button>
                            </div>




                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Reenter Password</p>
                            <div className="pt-2 relative">
                                <div className="relative">
                                    <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Enter your password" />

                                </div>
                                {/*   */}
                            </div>
                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>User Role</p>
                            <div className="pt-2 relative">
                                <div className="relative">
                                    <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="User Role" />
                                    <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                        <option value="" disabled selected></option>
                                        {/* Add your dropdown options here */}
                                    </select>
                                </div>

                            </div>

                            <div className='pt-8'>

                                <button className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                    <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                </button>

                            </div>


                        </div>

                    </div>
                )}

                {mailingAddressActive && (
                    <div className=' '>
                        <div>
                            {/* Search bar */}
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
                                <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-semibold pl-8  leading-[normal]'>Name</p>
                                <p className='text-[color:var(--Gray,#58585A)] pl-[15rem] text-[18px] not-italic font-semibold leading-[normal]'>Email</p>
                                <p className='text-[color:var(--Gray,#58585A)]  text-[18px] not-italic font-semibold pl-[17rem]  leading-[normal]'>Contact</p>
                                <p className='text-[color:var(--Gray,#58585A)] pl-[8rem] text-[18px] not-italic font-semibold leading-[normal]'>User Type</p>
                                <p className='text-[color:var(--Gray,#58585A)] text-[18px] pl-[8.3rem] not-italic font-semibold   leading-[normal]'>Status</p>

                            </div>
                        </div>
                        <div className='py-4 w-full flex p-6 items-center pl-8 pr-8'> {/* Add 'items-center' class to vertically center the content */}
                            <p className='text-[color:var(--Gray,#58585A)] text-[18px] pl-2 not-italic font-normal leading-[normal]'>01</p>
                            <img src={click} alt="" className='pl-10' />
                            <p className='text-[color:var(--Gray,#58585A)] pl-5 text-[18px] not-italic font-normal leading-[normal]'>Darlene Robertson</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[6.5rem] text-[18px] not-italic font-normal leading-[normal]'>trungkienspktnd@gamail.com</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[5rem] text-[18px] not-italic font-normal leading-[normal]'>+91 9995 47 25 58</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[3.5rem] text-[18px] not-italic font-normal leading-[normal]'>Reporter</p>
                            <div className='pl-14'>
                                <img src={eye} alt="" className='w-[100%]' />
                            </div>
                            <div className='pl-[4rem]'>
                                <button className='px-6 py-1 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>
                                    <p className='text-[color:var(--Green,#1AB78D)] text-[16px] not-italic font-medium leading-[normal]'>Active</p>
                                </button>
                            </div>
                            <img src={img} alt="" className='pl-[5rem]' onClick={() => handleToggleDropdown(0)} />


                            {dropdownStates[0] && (
                                <div className='absolute right-32 top-[20rem] bg-white rounded-[8px] p-6 w-[20%] shadow-2xl'  >
                                    <div className='border border-gray-300 rounded-[8px]'>
                                        <Link to="/editprofile">
                                        <div className='flex p-4 '>
                                            <img src={edi} alt="" />
                                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Profile Edit</p>
                                        </div>
                                        </Link> 
                                        <hr />
                                        <div className='flex p-4 '>
                                            <img src={dil} alt="" />
                                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Delete</p>
                                        </div>
                                        <hr />
                                        <Link to="/usertype">
                                        <div className='flex p-4 '>
                                            <img src={ch} alt="" />
                                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Change User Type</p>
                                        </div>
                                        </Link>
                                        <hr />
                                        <Link to="/status">
                                        <div className='flex p-4 '>
                                            <img src={st} alt="" />
                                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Status</p>
                                        </div>
                                        </Link>
                                        <hr />
                                    </div>
                                </div>
                            )}


                        </div>
                        <hr />
                        <div className='py-4 w-full flex p-6 items-center pl-8 pr-8'> {/* Add 'items-center' class to vertically center the content */}
                            <p className='text-[color:var(--Gray,#58585A)] text-[18px] pl-2 not-italic font-normal leading-[normal]'>01</p>
                            <img src={click} alt="" className='pl-10' />
                            <p className='text-[color:var(--Gray,#58585A)] pl-5 text-[18px] not-italic font-normal leading-[normal]'>Darlene Robertson</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[6.5rem] text-[18px] not-italic font-normal leading-[normal]'>trungkienspktnd@gamail.com</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[5rem] text-[18px] not-italic font-normal leading-[normal]'>+91 9995 47 25 58</p>
                            <p className='text-[color:var(--Gray,#58585A)] pl-[3.5rem] text-[18px] not-italic font-normal leading-[normal]'>Reporter</p>
                            <div className='pl-14'>
                                <img src={eye} alt="" className='w-[100%]' />
                            </div>
                            <div className='pl-[4rem]'>
                                <button className='px-6 py-1 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>
                                    <p className='text-[color:var(--Green,#1AB78D)] text-[16px] not-italic font-medium leading-[normal]'>Active</p>
                                </button>
                            </div>
                            <div>
                                <img src={img} alt="" className='pl-[5rem]' onClick={() => handleToggleDropdown(0)} />
                                {/* Conditionally render the dropdown based on the state of the corresponding index */}

                            </div>

                            <hr />



                        </div>
                    </div>
                )}
                {userRoleActive && (
                    <div className=' '>

                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Role Name</p>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px]  not-italic font-normal leading-[24px]'>Basic User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px] not-italic font-normal leading-[24px]'>Premium User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px]  not-italic font-normal leading-[24px]'>Advanced User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                    </div>

                )}
                <div>
                    {/* <div className='bg-white rounded-[8px] p-6 w-[20%] shadow-2xl h-[30%]'>
                        <div className='border border-gray-300 rounded-[8px]'> 
                        <div className='flex p-4 '>
                            <img src={edi} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Profile Edit</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={dil} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Delete</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={ch} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Change User Type</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={st} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Status</p>
                        </div>
                        <hr />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default User;
