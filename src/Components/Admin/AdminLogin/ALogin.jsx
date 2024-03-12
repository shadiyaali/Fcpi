import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adm from "../../../assets/images/admin.png";
import Log from "../../../assets/images/Group.svg";
import "./ALogin.css";

const ALogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayedPassword, setDisplayedPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayedPassword('★'.repeat(value.length));
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/your-backend-login-endpoint/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                navigate('/admin-dashboard');
            } else {
                const data = await response.json();
                alert(data.error || 'An error occurred.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <div className="w-full">
            <div className='container'>
                <div className=' flex  bg-white'>
                    <div className='grad overflow-hidden relative  bg-cover h-[100vh]'>
                        <img src={adm} alt="" className='h-[100%] w-[100%] rounded-r-[30px]' />
                        <p className='absolute bottom-28 left-16 z-10 text-[color:var(--White,#FFF)] text-[44px] not-italic font-semibold leading-[53px]'>Towards Clinical <br />
                            Pharmacy Excellence</p>
                        <p className='absolute bottom-16 left-16 z-10 text-[color:var(--Lightgray,#F4F4F4)] text-[14px] not-italic font-normal leading-[normal]'>© 2024 All rights reserved</p>
                    </div>

                    <div className=' p-56 '>
                        <div className=" ">
                            <img src={Log} alt="" className="" /></div>
                        <div className="bg-white rounded-[30px]  ">
                            <div className="text-start pt-8">
                                <p className="text-[#222] text-[36px] not-italic font-bold leading-[normal]">Welcome to FCPI</p>
                                <p className='text-[#58585A] text-[16px] not-italic font-normal leading-[26px]'>The Federation of Clinical Pharmacists in India (FCPI)</p>
                                <p className="text-gray-600  pt-4 text-[18px] not-italic font-semibold leading-[24px]">Email*</p>
                                <div className="pt-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className=" border rounded-[6px] px-[20px] py-4 w-[456px]  bg-white"
                                        placeholder="Email address"
                                    />
                                </div>
                                <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Password*</p>
                                <div className="relative pt-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="border rounded-[6px] px-[20px] py-4 w-full pt-6 bg-white"
                                        style={{ font: 'normal 1em Arial' }}
                                        placeholder="************"
                                    />
                                </div>

                                <div className='pt-8'>
                                    <button type="submit" className='bg-[#00549A] rounded-[6px] w-full py-4' onClick={handleLogin}>
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'  >Sign In</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ALogin;
