import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Log from "../../../assets/images/Group.svg";
import "./Otp.css";
import { BASE_URL } from "../../../Utils/Config";

const ResendOtp = () => {
    const [otp, setOtp] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const inputRefs = useRef([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setUserEmail(emailParam);
        } else {
            // Handle the case when emailParam is not present or invalid
            // For example, you could redirect the user to an error page or display an error message
            console.error('Email parameter not found in URL');
        }
    }, [location.search]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (!isNaN(value) && value.length === 1 && otp.length < 4) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp.join(''));

            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleVerify = async () => {
        try {
            console.log('OTP to be verified:', otp);
            console.log('Email to be verified:', userEmail); // Log the email address

            const response = await axios.post(`${BASE_URL}/accounts/verifyOtp/`, {
                email: userEmail, // Include the email along with the OTP
                otp: otp
            });

            console.log('Response from backend:', response.data);

            if (response && response.status === 200 && response.data && response.data.status === 200) {
                console.log('OTP verification successful!'); // Log successful verification
                navigate('/login'); // Navigate to the login page
            } else {
                console.log('OTP verification failed:', response.data.error); // Log error message
                // Display error message to the user
                alert(response.data.error || 'OTP verification failed. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            // Display generic error message to the user
            alert('An error occurred while verifying OTP. Please try again later.');
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/accounts/resendOtp/`, { email: userEmail });
    
            if (response.status === 200 && response.data && response.data.status === 200) {
                alert('OTP resent successfully. Please check your email.');
                // Clear the OTP input fields
                console.log('OTP resent successfully:', response.data);
                console.log('Type of OTP resent:', typeof response.data);
                 // Focus on the first input field
            } else {
                throw new Error('Failed to resend OTP.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            alert('An error occurred while resending OTP. Please try again later.');
        }
    };
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="p-[13.7rem] pl-[40rem] ">
                <div className="bg-white w-[60%] pb-12  shadow-sm-light rounded-[16px]  ">
                    <div className=" pt-12 pl-40 pr-20">
                        <img src={Log} alt="" className="w-[80%]" />
                    </div>
                    <hr className="mt-10 w-[100%]" />
                    <div className="text-center mt-6">
                        <p className="text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[normal]">Please Enter OTP</p>
                        <p className="text-[color:var(--Gray,#58585A)] pt-2 text-center text-[16px] not-italic font-normal leading-[20px]">We have sent the verification code to<br />
                            your email address</p>
                        <div className="flex  justify-center gap-4 pt-8">
                            {[...Array(4)].map((_, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    className="input-field"
                                    ref={el => (inputRefs.current[index] = el)}
                                    maxLength={1}
                                    onChange={e => handleChange(e, index)}
                                />
                            ))}
                        </div>
                        <p className="text-[color:var(--Gray,#58585A)] text-[18px] pt-4 not-italic font-medium leading-[24px]">
                            Didn’t receive the OTP? <span style={{ color: '#1AB78D', cursor: 'pointer' }} onClick={handleResendOtp}>Resend</span>
                        </p>
                        <div className="pt-8 ">
                            <button onClick={handleVerify} className="bg-[#00549A] px-24 py-3 rounded-[6px]">
                                <p className=" text-[color:var(--ffffff,#FFF)] text-center text-[18px] not-italic font-semibold leading-[normal]">Verify</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResendOtp;
