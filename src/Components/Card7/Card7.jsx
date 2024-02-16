import React from "react";
import Logoa from "../../../src/assets/images/c9b148186761267 2.png";
import rightArrowImage from "../../../src/assets/images/Frame 13333.svg";
import leftArrowImage from "../../../src/assets/images/Frame 113.svg";
import { Carousel } from 'flowbite-react';
import './Card7.css';

const Card7 = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">

                <div className="pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[30px]">
                        <div className="text-start p-8 pl-12">
                            <p className="text-[#222] pt-12 text-[34px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Newsletters</p>
                            <p className="text-[#58585A] pt-8 text-[18px] not-italic font-normal leading-[28px]" style={{ fontFamily: "Inter" }}>It is a long established fact that a reader will be distracted by <br />the readable content of a page when looking at its layout.<br /> The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters, as opposed to using</p>
                        </div>
                        <div className="p-8 rounded-[30px]">
                            <Carousel indicators={false} className="h-[340px] rounded-[30px] ">
                                <img src={Logoa} alt="Logo5" className="" />
                                <img src={Logoa} alt="Logo16" className="rounded-[30px]" />
                                <img src={Logoa} alt="Logo17" className="rounded-[30px]" />
                            </Carousel>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Card7;


