import React from "react";
import Logoa from "../../../src/assets/images/c9b148186761267 2.png";
import rightArrowImage from "../../../src/assets/images/arrow.svg";
import leftArrowImage from "../../../src/assets/images/Frame 78.svg";
import './Card7.css';  

const Card7 = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
          
                <div className="pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[30px]">
                        <div className="text-start p-10 pl-12">
                            <p className="text-[#222] pt-4 text-[34px] not-italic font-semibold leading-[normal]">Newsletters</p>
                            <p className="text-[#58585A] pt-8 text-[18px] not-italic font-normal leading-[28px]">It is a long established fact that a reader will be distracted by <br />the readable content of a page when looking at its layout.<br /> The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters, as opposed to using</p>
                        </div>
                        <div className=" relative p-6 pl-44">
                            <img src={Logoa} alt="Logo" className=" rounded-[30px]" />
                            <div className="absolute right-4 top-16 transform -translate-y-1/2">
        <img src={rightArrowImage} alt="Left Arrow" className="rounded-[30px]" />
    </div>
    <div className="absolute right-20 top-16  transform -translate-y-1/2">
        <img src={leftArrowImage} alt="Left Arrow" className="rounded-[30px]" />
    </div>
                        </div>
                    </div>
                 
             
        </div>
        </div>
            </div>
    );
};

export default Card7;
