import React, { useState } from "react";
import Logo5 from "../../../src/assets/images/image2.png";
import Logo6 from "../../../src/assets/images/image3.png";
import Logo7 from "../../../src/assets/images/eclips.png";
import Logo26 from "../../../src/assets/images/Frame 34.png";
import rightArrowImage from "../../../src/assets/images/arrow.svg";
import leftArrowImage from "../../../src/assets/images/Frame 78.svg";
import Logo16 from "../../../src/assets/images/logo2.png";
import Logo17 from "../../../src/assets/images/kamran-abdullayev-9V1cYW4JIfQ-unsplash 1.png";
import './Card2.css'; 

const Card2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Logo5, Logo16, Logo17];  
    
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    
    const items = Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex items-start pt-6 ">
            <img src={Logo6} alt="Logo" className="" />
            <p className="text-[#58585A] text-start pl-4 text-[18px]  not-italic font-normal leading-[26px]" style={{ fontFamily: "Inter" }}>
                Many desktop publishing packages and web page editors now use Lorem <br />
                Ipsum as their default model text, and a search
            </p>
        </div>
    ));

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="flex gap-6">
                    <div className="justify-center rounded-[30px] bg-[#00549a]">
                        <div className="flex pl-5 rounded-[30px]">
                            <div className="pt-6">
                                <button onClick={handlePrevious} className="justify-center items-center px-7 py-3 rounded-[105px] bg-[#1ab78d]" style={{ width: "auto" }}>
                                    <p className="text-white text-[14px] font-semibold" style={{ fontFamily: "Inter" }}>Past Events</p>
                                </button>
                                <button className="justify-center items-center ml-3 px-7 py-3 rounded-[105px] border border-white" style={{ width: "auto" }}>
                                    <p className="text-white text-[14px] font-semibold" style={{ fontFamily: "Inter" }}>Upcoming Events</p>
                                </button>
                            </div>
                            <div className="ml-auto pr-4 pt-3">
                                <img src={Logo7} alt="Logo" className="rounded-[30px]" />
                            </div>
                        </div>
                        <div>
                            <div className=" relative flex justify-center p-6 pb-6 pt-6 items-center">
                                <img src={images[currentImageIndex]} alt="Logo" className="rounded-[30px]" />
                                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                                    <img onClick={handleNext} src={rightArrowImage} alt="Right Arrow" className="rounded-[30px]" />
                                </div>
                                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                                    <img onClick={handlePrevious} src={leftArrowImage} alt="Left Arrow" className="rounded-[30px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[64%] ">
                        <div className="justify-center rounded-[30px] bg-white">
                            <div className="flex justify-between items-center ">
                                <p className="pt-12 text-[#222] text-start text-[32px] pl-20 not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>
                                    What’s New
                                </p>
                                <div className="pr-4">
                                    <img src={Logo26} alt="Logo" className="rounded-[30px]" />
                                </div>
                            </div>
                            <div className="pl-20 pb-12">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
