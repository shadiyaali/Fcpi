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

const Speaker = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [clickedStates, setClickedStates] = useState(Array(3).fill(false)); // Adjust the array size according to the number of boxes

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

    const togglemailingAddress = () => {
        setmailingAddressActive(!mailingAddressActive);

        if (!mailingAddressActive) {
            setPersonalInfoActive(false);
        }
    };

    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Add Speaker</p>
                <div className='flex pt-6 gap-[12rem] p-6'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Add Speaker</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage Speaker</p>
                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (
                    <div className='w-[40%]'>

                        <div className="text-start">
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Speaker Name</p>
                            <div className="pt-2">

                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Speaker Name" />
                            </div>
                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Qualification</p>
                            <div className="pt-2 relative">
                                <div className="relative">
                                    <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Qualification" />
                                    <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                        <option value="" disabled selected></option>
                                        {/* Add your dropdown options here */}
                                    </select>
                                </div>
                                {/*   */}
                            </div>



                            <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Designation</p>
                            <div className="pt-2 relative">
                                <div className="relative">
                                    <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]" placeholder="Designation" />
                                    <select className="absolute inset-y-0 right-0 top-0 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                        <option value="" disabled selected></option>
                                        {/* Add your dropdown options here */}
                                    </select>
                                </div>
                                {/*   */}
                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Description</p>
                            <div className="pt-1">
                                <textarea className="border  rounded-[6px] px-[20px] py-4 pb-24 w-full bg-[#F4F4F4]  " placeholder="Message"></textarea>
                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Upload Photos</p>
                            <div className="pt-1">
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageInput" className="absolute left-48 px-8 py-6 cursor-pointer">
                                        {selectedImage ? (
                                            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="w-40 h-auto" />
                                        ) : (
                                            <img src={pic} alt="Icon" />
                                        )}
                                    </label>
                                    <div className='absolute left-28 ml-10 mt-28 flex gap-2'>
                                        <p className='text-[#222] text-[18px] not-italic font-normal leading-[normal]'>Drop your image here, or</p>
                                        <p className='text-[#00549A] text-[18px] not-italic font-normal leading-[normal]'>browse</p>
                                    </div>
                                    <p className='absolute left-48 mt-36 text-[#353535] text-center text-[14px] not-italic font-normal leading-[normal]'>Supports: PNG, JPG, JPEG, WEBP</p>
                                    <textarea className="border border-dashed rounded-[6px] px-[20px] py-4 pb-32 pl-12 w-full bg-[#F4F4F4]" ></textarea>
                                    {error && <p className="absolute left-52 mt-28 text-[#FF0000] text-center text-[14px] not-italic font-normal leading-[normal]">{error}</p>}
                                </div>
                            </div>



                            <div className='pt-8'>
                                <Link to="">
                                    <div className='flex gap-2 justify-end'>
                                        <button className='  border border-gray-300 rounded-[10px] px-4  py-2'  >
                                            <p className='text-[#1A1A1A]  text-center text-[16px] not-italic font-normal leading-[normal]'  >Submit</p>
                                        </button>
                                        <button className='bg-[#00549A] rounded-[10px] px-4 py-2'  >
                                            <p className='text-white  text-center text-[16px] not-italic font-normal leading-[normal]'  >Cancel</p>
                                        </button>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                )}

                {mailingAddressActive && (
                    <div className='items-center'>
                        <div>
                            {/* Search bar */}
                            <button className='border border-gray-300 px-4 py-3 w-[44%] rounded-[6px]'>
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

                        {/* Clickable boxes */}
                        <div>
                            {clickedStates.map((clicked, index) => (
                                <div className='py-4 w-full flex p-6' key={index}>
                                    <div
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                            cursor: 'pointer',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: clickedStates[index] ? '#424242' : 'transparent',
                                        }}
                                        onClick={() => handleClick(index)}
                                    >
                                        <img src={clickedStates[index] ?icon : icon1} alt="Tick Icon" style={{ width: '100%', height: '100%', display: clickedStates[index] ? 'block' : 'none' }} />
                                    </div>
                                    <img src={click} alt="" className='pl-5' />
                                    <p className='text-[color:var(--Gray,#58585A)] pl-5 text-[16px] not-italic font-normal leading-[normal]'>Infectious Diseases Forum</p>
                                    <div>
                                        <img src={ed} alt="" className='pl-28' />
                                    </div>
                                    <div>
                                        <img src={del} alt="" className='pl-4' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Speaker;
