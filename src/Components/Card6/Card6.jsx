import React from "react";
import Logo16 from "../../../src/assets/images/clark-van-der-beken-xApC8DIiD54-unsplash 1.png";
import Logo17 from "../../../src/assets/images/shubham-dhage-3JjnYjHCK0c-unsplash 1.png";
import Logo27 from "../../../src/assets/images/Frame 10.svg";
 
import './Card6.css';

const Card6 = () => {
    return (
        <div className="w-full h-full pt-6 bg-[#f4f4f4]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-[#C5E5FF] rounded-[30px]">
                       
                        <div className="relative">
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            
                            <img src={Logo27} alt="Right Arrow" className="absolute right-3 top-8 transform -translate-y-1/2 " />
                         
                        </div>
                        <p className="text-[#222] p-4 text-start pl-8 text-[21px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>
                    </div>
                    <div className="bg-[#C5E5FF] rounded-[30px]">
                        <div className="relative">
                            <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />
                            <img src={Logo27} alt="Right Arrow" className="absolute right-3 top-8 transform -translate-y-1/2 " />
                        </div>
                        <p className="text-[#222] p-4 text-start pl-8 text-[21px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Critical Care Medicine Forum</p>
                    </div>
                    <div className="bg-[#C5E5FF] rounded-[30px]">
                        <div className="relative">
                            <img src={Logo17} alt="Logo" className="w-full rounded-[30px]" />
                            <img src={Logo27} alt="Right Arrow" className="absolute right-3 top-8 transform -translate-y-1/2 " />
                        </div>
                        <p className="text-[#222] p-4 text-start pl-8 text-[21px] not-italic font-medium leading-[normal]" style={{ fontFamily: "Inter" }}>Critical Care Medicine Forum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card6;
