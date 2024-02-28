import React, { useState } from 'react';

const Password = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
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
    
    const handlePasswordChange1 = (event) => {
        const value = event.target.value;
        setPassword1(value);
        
    };

    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Change Password</p>
                <div className="text-start">
                    <p className="text-gray-600  pt-4 text-[18px] not-italic font-semibold leading-[24px]">Password*</p>
                    <div className="pt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className=" border rounded-[10px] px-[30px] py-4    bg-white w-[516px]"
                            placeholder="Email address"
                        />
                    </div>
                    <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">New Password*</p>
                    <div className="relative pt-4">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border rounded-[10px] px-[30px] py-4   pt-6 bg-white w-[516px]"
                            style={{ font: 'normal 1em Arial' }}
                            placeholder="************"
                        />
                    </div>
                    <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Confirmed Password*</p>
                    <div className="relative pt-4">
                        <input
                            type="password"
                            value={password1}
                            onChange={handlePasswordChange1}
                            className="border rounded-[10px] px-[30px] py-4   pt-6 bg-white w-[516px]"
                            style={{ font: 'normal 1em Arial' }}
                            placeholder="************"
                        />
                    </div>
                    <div className='pt-8'>
                        <button className='bg-[#00549A] rounded-[10px] w-[516px] py-4'>
                            <p className='text-white  text-center text-[20px] not-italic font-semibold leading-[normal]'>Set Password</p>
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Password;
