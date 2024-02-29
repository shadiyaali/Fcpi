import React from "react";
import con from "../../../assets/images/contact-1.png";
import foot3 from "../../../assets/images/mail-at-sign-03.png";
import foot2 from "../../../assets/images/location-07.png";
import con2 from "../../../assets/images/con2.png";
import con3 from "../../../assets/images/con3.png";
import con4 from "../../../assets/images/con-4.png";
import con5 from "../../../assets/images/con5.png";
import con6 from "../../../assets/images/con-6.png";
import "./Contact.css";


const Contact = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="grid grid-cols-2 gap-6 ">
                        <div >
                            <div className="">
                                <img src={con} alt="" className="rounded-[30px] w-[100%] h-[98%]" />
                            </div>
                            <div className="pt-6">
                                <div className="bg-[#00549A] rounded-[30px] p-12 pb-12 pl-12">
                                    <div className="text-start">
                                        <p className="text-white text-[36px] not-italic font-semibold leading-[normal]"  >Get in touch </p>
                                        <p className=" text-white pt-8 text-[19px] not-italic font-normal leading-[28px]"  >The Federation of Clinical Pharmacists in India (FCPI) founded in <br />2020, represents a professional and scientific forum for pharmacists,<br /> researchers and educators involved in patient care services.</p>
                                        <div className="flex items-center gap-2 pt-2">
                                            <div className="pt-2">
                                                <img src={foot2} alt="Logo" className="rounded-[30px]" />
                                            </div>
                                            <p className="text-start  text-white  pt-8 text-[17px] not-italic font-normal leading-[24px]">
                                                No.677, 1st Floor, Suite # 845,27th
                                                Main,13th<br /> Cross Road, Sector 1,HSR
                                                Layout, Bangalore - 560102
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 pt-8">
                                            <div className=" ">
                                                <img src={foot3} alt="Logo" className="rounded-[30px]" />
                                            </div>
                                            <p className="text-start  text-white text-[17px] not-italic font-normal leading-[24px]">
                                                fcpiofficial@gmail.com
                                            </p>
                                        </div>
                                        <div className="flex gap-2 pt-8">
                                            <img src={con2} alt="" />
                                            <img src={con3} alt="" />
                                            <img src={con4} alt="" />
                                            <img src={con5} alt="" />
                                            <img src={con6} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[30px] p-8 pl-12 pr-12">
                    
                        <div>
    <p className="text-[#222] text-[29px] not-italic font-semibold leading-[36px]"  >Enter your details<br />and we'll get back to you</p>
    <p className="text-[#58585A] pt-8 text-[18px] not-italic font-normal leading-[28px]">Lorem Ipsum as their default model text, and a search<br />for 'lorem ipsum' will uncover many web sites still in<br />their infancy. Various versions have evolved</p>
    
    <div className="pt-6">
        <input type="text" className="border border-gray-400 rounded-[30px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Name" />
    </div>
    
    <div className="pt-4">
        <input type="text" className="border  rounded-[30px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Email" />
    </div>
    
    <div className="pt-4">
        <input type="text" className="border  rounded-[30px] px-[20px] py-4 w-full bg-[#F4F4F4]  " placeholder="Phone" />
    </div>
    
    <div className="pt-4">
        <textarea className="border  rounded-[10px] px-[20px] py-4 pb-24 w-full bg-[#F4F4F4]  " placeholder="Your message"></textarea>
    </div>
</div>

    <div className="text-end pt-4">
        <button className="bg-[#1AB78D] px-[30px] rounded-[30px] py-3 ">
            <p className="text-white text-[17px] not-italic font-semibold leading-[normal]" >Submit</p>
        </button>
    </div>
 

</div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Contact;


