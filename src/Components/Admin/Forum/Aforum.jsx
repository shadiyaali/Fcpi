import React, { useState } from 'react';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import Icon from "../../../assets/images/Icon frame.png";
import { Link } from "react-router-dom";
import del from "../../../assets/images/del.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";

const Aforum = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);

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


    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Toggle the clicked state
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
                <div className='flex pt-12 gap-20 p-8'>
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
                <hr />
                {personalInfoActive && (
                    <div className='w-[40%]'>

                        <div className="text-start">
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Forum Name</p>
                            <div className="pt-1">

                                <input type="text" className="border border-gray-400  rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Forum Name" />
                            </div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Description</p>
                            <div className="pt-1">
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageInput" className="absolute left-60 px-8 py-6 cursor-pointer">
                                        {selectedImage ? (
                                            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="w-40 h-auto" />
                                        ) : (
                                            <img src={Icon} alt="Icon" />
                                        )}
                                    </label>
                                    <div className='absolute left-32 ml-10 mt-20 flex gap-2'>
                                        <p className='text-[color:var(--Blue,#00549A)] text-[18px] not-italic font-medium leading-[normal]'>Click to Upload</p>
                                        <p className='text-[#353535] text-[18px] not-italic font-normal leading-[normal]'>or drag and drop</p>
                                    </div>
                                    <p className='absolute left-52 mt-28 text-[#353535] text-center text-[16px] not-italic font-normal leading-[normal]'> (Max. File size: 25 MB)</p>
                                    <textarea className="border rounded-[6px] px-[20px] py-4 pb-20 pl-12 w-full bg-[#F4F4F4]" ></textarea>
                                    {error && <p className="absolute left-52 mt-28 text-[#FF0000] text-center text-[16px] not-italic font-normal leading-[normal]">{error}</p>}
                                </div>
                            </div>

                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic pt-6 font-medium leading-[24px]'>Description</p>
                            <div className="pt-1">
                                <textarea className="border  rounded-[6px] px-[20px] py-4 pb-28 w-full bg-[#F4F4F4]  " placeholder="Message"></textarea>
                            </div>

                            <div className='pt-8'>
                                <Link to="/dashboard">
                                    <button className='bg-[#00549A] rounded-[10px] w-full py-4'  >
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Submit</p>
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                )}
                {mailingAddressActive && (
                    <div className=' '>
                        <div className='bg-gray-100 py-4 w-full flex p-6'>
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
                                    backgroundColor: clicked ? '#424242' : 'transparent',
                                    color: clicked ? '#fff' : '#000',
                                }}
                                onClick={handleClick}
                            >
                                <span style={{ color: clicked ? '#fff' : '#000' }}>{clicked && '✔'}</span>
                            </div>

                          
                            <p className='text-[color:var(--Gray,#58585A)] pl-2 text-[18px] not-italic font-semibold leading-[normal]'>Forum Name</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-semibold pl-[16rem] leading-[normal]'>Actions</p>
                           
                        </div>
                        <div className='  py-4 w-full flex p-6'>
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
                                    backgroundColor: clicked ? '#424242' : 'transparent',
                                    color: clicked ? '#fff' : '#000',
                                }}
                                onClick={handleClick}
                            >
                                <span style={{ color: clicked ? '#fff' : '#000' }}>{clicked && '✔'}</span>
                            </div>
                            <img src={click} alt="" className='pl-5'/>
                            <p className='text-[color:var(--Gray,#58585A)] pl-5 text-[16px] not-italic font-normal leading-[normal]'>Infectious Diseases Forum</p>
                            <div>
                                    <img src={ed} alt="" className='pl-28' />
                                </div>
                                <div>
                                    <img src={del} alt="" className='pl-4' />
                                </div>
                        </div>
                        <hr />
                        <div className='  py-4 w-full flex p-6'>
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
                                    backgroundColor: clicked ? '#424242' : 'transparent',
                                    color: clicked ? '#fff' : '#000',
                                }}
                                onClick={handleClick}
                            >
                                <span style={{ color: clicked ? '#fff' : '#000' }}>{clicked && '✔'}</span>
                            </div>
                            <img src={click} alt="" className='pl-5'/>
                            <p className='text-[color:var(--Gray,#58585A)] pl-5 text-[16px] not-italic font-normal leading-[normal]'>Infectious Diseases Forum</p>
                            <div>
                                    <img src={ed} alt="" className='pl-28' />
                                </div>
                                <div>
                                    <img src={del} alt="" className='pl-4' />
                                </div>
                        </div>
                        <hr />

                    </div>

                )}
            </div>



        </div>
    );
};

export default Aforum;
