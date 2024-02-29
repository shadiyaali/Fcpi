import React from "react";

import Logo23 from "../../../assets/images/Line 5.svg";
import logo20 from "../../../assets/images/arrow-right-02-round.png";




const AboutCard4 = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6 ">
                    <div className="relative bg-[#00549A] rounded-[30px]   ">
                        <div className="text-white pt-36  pl-14 pb-16 text-start text-[32px] not-italic font-light leading-[43px] 
" >Dedicated to  your <br /> <span style={{ fontWeight: "bold" }}>health and happiness</span>
                            <div className="text-left pt-6 ">
                                <div className="inline-flex py-[10px] px-[60px] justify-center items-center gap-[10px] shrink-0   bg-[#1AB78D] rounded-[105px]">
                                    <p className="text-[#FFF] text-[16px] not-italic font-normal leading-[normal]"
                                    >Join FCPI</p>
                                    <div className="ml-2">
                                        <img src={logo20} alt="Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Logo23} alt="Image" className="absolute right-0  top-48 transform -translate-y-1/2 " />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutCard4;
