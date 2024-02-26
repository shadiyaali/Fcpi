import React, { useState } from 'react';
import Log from "../../../../assets/images/login.png";
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [displayedPassword, setDisplayedPassword] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayedPassword('★'.repeat(value.length));
    };

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="flex bg-white rounded-[30px] p-12 gap-6">
                        <div className="">
                            <img src={Log} alt="" className="rounded-[30px] w-[764px]" />
                        </div>
                        <div className="bg-[#f4f4f4] rounded-[30px] w-[45%] p-8 pl-12 pr-12 ">
                            <div className="text-start">
                                <p className="text-[#222] text-[38px] not-italic font-bold leading-[normal]">Login</p>
                                <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Email*</p>
                                <div className="pt-4">
                                    <input type="input" className="border  rounded-[10px] px-[30px] py-4 w-full bg-white" placeholder="Email" />
                                </div>
                                <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Password*</p>
                                <div className="relative pt-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={handleChange}
                                        className="border rounded-[10px] px-[30px] py-4 w-full bg-white"
                                        style={{ font: 'normal 1em Arial' }}
                                    />
                                </div>

                                <div className='pt-8'>
                                    <button className='bg-[#00549A] rounded-[10px] w-full py-4'>
                                        <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'>Sign In</p>
                                    </button>
                                </div>
                                <div className='flex items-center gap-6 pt-6'>
                                    <p className='text-black   text-[15px] not-italic font-medium leading-[24px] underline'>Forget Password</p>
                                    <div className='border-l-2 border-black h-5 border-opacity-60'></div>
                                    <p className='text-black   text-[15px] not-italic font-medium leading-[24px]'>Email OTP</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
