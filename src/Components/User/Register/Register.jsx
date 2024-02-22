import React from "react";
import reg from "../../../assets/images/reg.png";


const Register = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="flex justify-between bg-white rounded-[30px]">
                        <div>
                            <div className="text-start  p-12">
                                <p className="text-[#222] text-[34px] not-italic font-semibold leading-[36px]"  >User Registration</p>
                                <p className="text-[#58585A] pt-4 text-[19px] not-italic font-normal leading-[28px]" >Register Now and Get Access to Our Contents...</p>

                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] w-[541px] px-[30px] py-4  " placeholder="First Name" />
                                </div>

                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] px-[30px] py-4 w-full" placeholder="Last Name" />
                                </div>

                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] px-[30px] py-4 w-full" placeholder="Phone Number" />
                                </div>
                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] px-[30px] py-4 w-full" placeholder="Email" />
                                </div>
                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] px-[30px] py-4 w-full" placeholder="Enter your password" />
                                </div>
                                <div className="pt-6">
                                    <input type="text" className="border border-gray-300 rounded-[30px] px-[30px] py-4 w-full" placeholder="Re-Enter your password" />
                                </div>
                                <div className="text-end pt-6">
                                    <button className="bg-[#1AB78D] px-16 rounded-[30px] py-4 ">
                                        <p className="text-white text-[17px] not-italic font-semibold leading-[normal]" >Register Now</p>
                                    </button>
                                </div>


                            </div>
                        </div>
                        <div className="  p-12">
                            <img src={reg} alt=""  className="rounded-t-[30px] h-[98%] w-[821px]"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;


