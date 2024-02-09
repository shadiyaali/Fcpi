import React from "react";
import foot from "../../../src/assets/images/fcpi 1.png";
import foot3 from "../../../src/assets/images/mail-at-sign-02.png";
import foot2 from "../../../src/assets/images/location-06.png";
import foot4 from "../../../src/assets/images/_Facebook.png";
import foot5 from "../../../src/assets/images/_Twitter.png";
import foot6 from "../../../src/assets/images/_Instagram.png";
import foot7 from "../../../src/assets/images/_Linkedin.png";
import foot8 from "../../../src/assets/images/_YouTube.png";
import logo20 from "../../../src/assets/images/arrow-right-02-round.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container pt-6 ">
                <div></div>
                <div className="relative grid-cols-custom lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] bg-[#222] rounded-[30px] pl-4 gap-10">
                    <div className="p-5 ">
                        <div className="pl-6 pt-12">
                            <img src={foot} alt="Logo" />
                        </div>
                        <div className="flex items-center pl-4 pt-2">
                            <div className="location">
                                <img src={foot2} alt="Logo" className="rounded-[30px]" />
                            </div>
                            <p className="text-start text-[#969696] pl-4 pt-6 text-[14px] not-italic font-normal leading-[24px]">
                                No.677, 1st Floor, Suite # 845,27th <br />
                                Main,13th Cross Road, Sector 1,HSR <br />
                                Layout, Bangalore - 560102
                            </p>
                        </div>
                        <div className="flex items-center pl-4 pt-8">
                            <div className="location">
                                <img src={foot3} alt="Logo" className="rounded-[30px]" />
                            </div>
                            <p className="text-start text-[#969696] pl-4 text-[14px] not-italic font-normal leading-[24px]">
                                fcpiofficial@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="text-[#C5C5C5] text-start lg:pt-28 pl-32   text-[26px] not-italic font-semibold leading-[normal]">
                        Subscribe for update<br /> and newsletter.
                        <div className="  mt-6 relative">
                            <input type="text" className="text rounded-[105px] bg-[#303031] px-[20px] py-[13px] text-[#969696] text-[14px] not-italic font-normal leading-[normal]" placeholder="Enter your email address" />
                            <button className="ml-20 absolute top-0 right-36 -mt-0 rounded-[105px] bg-[#00549a] px-[20px] py-[13px] text-white text-[14px] not-italic font-semibold leading-[normal]">
                                Get Started
                            </button>
                        </div>
                        <p className= " pt-52 p-12 pl-44  text-[#969696] text-[12px] not-italic font-normal leading-[24px] tracking-[0.6px]"style={{fontFamily: "Inter"}}>Powered by Hoztox.com</p>
                    </div>
                    <div className="text-start lg:pt-28">
                        <p className="text-[#969696] text-[16px] not-italic  font-normal leading-[26px]">Home</p>
                        <p className="text-[#969696] text-[16px] not-italic pt-3 font-normal leading-[26px]">About FCPI</p>
                        <p className="text-[#969696] text-[16px] not-italic pt-3 font-normal leading-[26px]">Specialty Forums</p>
                        <p className="text-[#969696] text-[16px] not-italic pt-3 font-normal leading-[26px]">Events</p>
                        <p className="text-[#969696] text-[16px] not-italic pt-3 font-normal leading-[26px]">Blogs</p>
                        <p className="text-[#969696] text-[16px] not-italic pt-3 font-normal leading-[26px]">Contact Us</p>
                    </div>
                    <div className="pt-24 pl-24 ">
                        <p className="text-[#969696]  text-start text-[16px] not-italic pt-3 font-normal leading-[26px]">Social media</p>
                        <div className="flex pt-2 gap-2">
                            <div className="location_footer">
                                <img src={foot4} alt="Logo" />
                            </div>
                            <div className="location_footer">
                                <img src={foot5} alt="Logo" />
                            </div>
                            <div className="location_footer">
                                <img src={foot6} alt="Logo" />
                            </div>
                            <div className="location_footer">
                                <img src={foot7} alt="Logo" />
                            </div>
                            <div className="location_footer">
                                <img src={foot8} alt="Logo" />
                            </div>
                        </div>
                        <div className="pr-16 mt-8">
                            <div className="rounded-[105px] bg-[#1AB78D] py-[10px] px-[60px] flex items-center">
                                <p className="text-[#FFF] text-[14px] not-italic font-normal leading-[normal]"style={{fontFamily: "Inter"}}
                                >Join FCPI</p>
                                <div className="ml-4">
                                    <img src={logo20} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <hr className="absolute bottom-32 transform -translate-y-1/2 w-full mt-8 border border-[#3F3F41]" />



              
               
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
