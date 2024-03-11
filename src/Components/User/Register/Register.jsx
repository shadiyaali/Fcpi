import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import reg from "../../../assets/images/reg.png";
import axios from 'axios';
import { BASE_URL } from "../../../Utils/Config";
import { toast,Toaster } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();  

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        password2: ''
    });

    const {
        first_name,
        last_name,
        phone,
        email,
        password,
        password2
    } = formData;

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value  
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Client-side validation
        if (!first_name || !last_name || !phone || !email || !password || !password2) {
            toast.error("All fields are required.");
            return;
        }
    
        if (password !== password2) {
            toast.error("Passwords do not match.");
            return;
        }
    
        try {
            // Send request to backend only if validation passes
            const response = await axios.post(`${BASE_URL}/accounts/register/`, {
                first_name,
                last_name,
                email,
                phone,
                password,
            });
    
            if (response.status === 200) {
                toast.success("Registration successful. Please check your email for OTP.");
                // Check if the user has already been verified
                if (response.data.status === 400 && response.data.error === 'User with this email has already been verified') {
                    // Handle the error message here, e.g., display an error toast
                    toast.error("User with this email has already been verified.");
                } else {
                    // Navigate to the OTP page only if the user is not already verified
                    navigate(`/otp?email=${encodeURIComponent(email)}`);
                }
            } else {
                toast.error("Something went wrong during registration.");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = Object.values(error.response.data.errors).flat();
                errorMessages.forEach(errorMessage => toast.error(errorMessage));
            } else {
                toast.error("An error occurred during registration.");
            }
        }
    };
    
    

    
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
         
            <div className="container">
            <Toaster position="top-center reverseOrder={false}"/>
                <div className="pt-6">
                    <div className="flex justify-between bg-white rounded-[30px]">
                        <div>
                            <div className="text-start  p-12">
                                <p className="text-[#222] text-[34px] not-italic font-semibold leading-[36px]"  >User Registration</p>
                                <p className="text-[#58585A] pt-4 text-[19px] not-italic font-normal leading-[28px]" >Register Now and Get Access to Our Contents...</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="pt-6">
                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-[30px] w-[541px] px-[20px] py-4"
                                            placeholder="First Name"
                                            value={first_name}
                                            onChange={(e) => handleChange(e, 'first_name')}
                                        />

                                    </div>

                                    <div className="pt-6">
                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-[30px] px-[20px] py-4 w-full"
                                            placeholder="Last Name"
                                            value={last_name}
                                            onChange={(e) => handleChange(e, 'last_name')}
                                        />

                                    </div>

                                    <div className="pt-6">
                                        <input
                                            type="text"
                                            className="border border-gray-300 rounded-[30px] px-[20px] py-4 w-full"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => handleChange(e, 'phone')}
                                        />

                                    </div>
                                    <div className="pt-6">
                                        <input
                                            type="email"
                                            className="border border-gray-300 rounded-[30px] px-[20px] py-4 w-full"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => handleChange(e, 'email')}
                                        />

                                    </div>
                                    <div className="pt-6">
                                        <input
                                            type="password"
                                            className="border border-gray-300 rounded-[30px] px-[20px] py-4 w-full"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => handleChange(e, 'password')}
                                        />

                                    </div>
                                    <div className="pt-6">
                                        <input
                                            type="password"
                                            className="border border-gray-300 rounded-[30px] px-[20px] py-4 w-full"
                                            placeholder="Re-Enter your password"
                                            value={password2}
                                            onChange={(e) => handleChange(e, 'password2')}  
                                        />

                                    </div>
                                    <div className="text-end pt-6">
                                    
                                            <button type="submit" className="bg-[#1AB78D] px-16 rounded-[30px] py-4 ">
                                                <p className="text-white text-[17px] not-italic font-semibold leading-[normal]" >Register Now</p>
                                            </button>
                                        
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="p-12">
                            <img src={reg} alt="" className="rounded-[30px] h-[98%] w-[821px]" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;


