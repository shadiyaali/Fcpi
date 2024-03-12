import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Log from '../../../../assets/images/login.png';
import './Login.css';
import { BASE_URL } from '../../../../Utils/Config';
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Client-side validation
        if (!email || !password) {
            toast.error("Email and password are required.");
            return;
        }

        try {
            console.log(email,password)
            setLoading(true); // Set loading state
            const response = await axios.post(`${BASE_URL}/accounts/login/`, {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                navigate('/dashboard');
            } else {
                throw new Error(response.data.error || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                toast.error("Invalid email or password.");
            } else {
                toast.error(error.message || "An error occurred during login. Please try again later.");
            }
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <Toaster position="top-center" /> {/* Single Toaster component */}
                <div className="pt-6">
                    <div className="flex bg-white rounded-[30px] p-12 gap-6">
                        <div className="relative">
                            <img src={Log} alt="" className="rounded-[30px] w-[764px]" />
                            <p className="absolute left-10 bottom-10 text-[color:var(--White,#FFF)] text-[34px] not-italic font-semibold leading-[36px]">
                                Towards Clinical
                                <br />
                                Pharmacy Excellence
                            </p>
                        </div>
                        <div className="bg-[#f4f4f4] rounded-[30px] w-[45%] p-8 pl-12 pr-12 ">
                            <div className="text-start">
                                <p className="text-[#222] text-[38px] not-italic font-bold leading-[normal]">Login</p>
                                <p className="text-gray-600  pt-4 text-[18px] not-italic font-semibold leading-[24px]">Email*</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="pt-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className=" border rounded-[10px] px-[20px] py-4 w-full  bg-white"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <p className="text-[#444150] pt-4 text-[18px] not-italic font-semibold leading-[24px]">Password*</p>
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

                                    <div className="pt-8">
                                        <button className="bg-[#00549A] rounded-[10px] w-full py-4" type="submit" disabled={loading}>
                                            {loading ? "Signing In..." : <p className="text-white  text-center text-[20px] not-italic font-semibold leading-[normal]">Sign In</p>}
                                        </button>
                                    </div>
                                </form>
                                 
                                <div className="flex items-center gap-6 pt-6">
                                    <Link to="/forgot-password" className="text-black   text-[15px] not-italic font-medium leading-[24px] underline">Forget Password</Link>
                                    <div className="border-l-2 border-black h-5 border-opacity-60"></div>
                                    <p className="text-black   text-[15px] not-italic font-medium leading-[24px]">Email OTP</p>
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
