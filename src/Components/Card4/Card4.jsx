import React from "react";
import Logo11 from "../../../src/assets/images/logo2.png";
import Logo12 from "../../../src/assets/images/Ellipse 4.png";
import Logo13 from "../../../src/assets/images/elements.png";
import Logo14 from "../../../src/assets/images/kamran-abdullayev-9V1cYW4JIfQ-unsplash 1.png";
import Logo15 from "../../../src/assets/images/meric-dagli-VbLsByQrhz4-unsplash 1.png";
import Logo27 from "../../../src/assets/images/Frame 10.svg";
import './Card4.css';

const Card4 = () => {
    return (
        <div className="w-full h-full pt-6 bg-[#f4f4f4]">
            <div className="container">
                <div className=" ">
                    <div className=" bg-[#00549A] rounded-[30px] p-12">
                        <p className="text-white text-start text-[32px] not-italic font-semibold leading-normal" style={{ fontFamily: "Inter" }}>Explore FCPI</p>
                        <div className="flex pt-8 ">
                            <p className="text-[#FFF] text-[16px] text-start not-italic font-normal leading-[26px]" style={{ fontFamily: "Inter" }}>The standard chunk of Lorem Ipsum used since the 1500s is <br /> reproduced below for those interested. Sections 1.10.32 and <br />1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are<br /> also

                            </p>
                            <p className="text-[#FFF]  text-[16px] pl-24 text-start not-italic font-normal   leading-[26px]" style={{ fontFamily: "Inter" }}>There are many variations of passages of Lorem Ipsum<br /> available, but the majority have suffered alteration in some<br /> form, by injected humour, or randomised words which don't<br /> look even

                            </p>
                        </div>
                        <div className="grid grid-cols-3 rounded-[30px] gap-6 pt-12">
                            <div className="flex flex-col bg-white rounded-[30px]">

                                <div className="relative">
                                    <img src={Logo11} alt="Logo" className="w-[100%] rounded-[30px]" />
                                    <div className=" flex gap-[14rem] items-center absolute right-0 top-10 transform -translate-y-1/2">
                                        <div className="pr-6">
                                            <div className="inline-flex   gap-[10px] shrink-0 px-[28px] py-[8px] rounded-[105px]
   bg-[#c5e5ff]">
                                                <p className="text-[#222] text-[14px] not-italic font-normal leading-[normal]
  "style={{ fontFamily: "Inter" }}>Latest Blogs</p>
                                            </div>
                                        </div>
                                        <img src={Logo27} alt="Right Arrow" className="pr-4 rounded-[30px]" />
                                    </div>
                                </div>


                                <p className="text-[#222] text-start p-8 text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>How Refine Labs rewrote the<br />
                                    book on culture</p>
                                <div className="w-full flex justify-start ml-8 ">
                                    <div className="w-[77%] border border-dashed items-center border-[#EEE]"></div>
                                </div>

                                <div className="inline-flex items-center p-8">
                                    <img src={Logo12} alt="Logo" className=" rounded-[30px]" />
                                    <p className="text-[#58585A] pl-3 text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Samuel Gordalina</p>
                                    <p className="text-[#58585A] pl-32 text-[12px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Dec 19, 2022</p>
                                </div>
                                <div className="pr-64 pb-8 pl-8 ">
                                    <button className=" inline-flex w-[100%] p-4 justify-center shrink-0   rounded-[105px] bg-[#00549a]">
                                        <p className="text-white text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Load more</p>
                                        <div className=" pl-4 pt-1">
                                            <img src={Logo13} alt="Logo" className="rounded-[30px]" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-[30px]">
                                <div className="relative">
                                    <img src={Logo14} alt="Logo" className="w-[100%] rounded-[30px]" />
                                    <div className=" flex gap-[14rem] items-center absolute right-0 top-10 transform -translate-y-1/2">
                                        <div className="pr-2">
                                            <div className="inline-flex   gap-[10px] shrink-0 px-[28px] py-[8px] rounded-[105px]
   bg-[#c5e5ff]">
                                                <p className="text-[#222] text-[14px] not-italic font-normal leading-[normal]
  "style={{ fontFamily: "Inter" }}>Journal watch</p>
                                            </div>
                                        </div>
                                        <img src={Logo27} alt="Right Arrow" className="pr-4 rounded-[30px]" />
                                    </div>
                                </div>
                                <p className="text-[#222] text-start p-8 text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>How Refine Labs rewrote the<br />
                                    book on culture</p>
                                <div className="w-full flex justify-start ml-8 ">
                                    <div className="w-[77%] border border-dashed items-center border-[#EEE]"></div>
                                </div>

                                <div className="inline-flex items-center p-8">
                                    <img src={Logo12} alt="Logo" className=" rounded-[30px]" />
                                    <p className="text-[#58585A] pl-3 text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Samuel Gordalina</p>
                                    <p className="text-[#58585A] pl-32 text-[12px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Dec 19, 2022</p>
                                </div>
                                <div className="pr-64 pl-8 ">
                                    <button className=" inline-flex w-[100%] p-4 justify-center shrink-0   rounded-[105px] bg-[#00549a]">
                                        <p className="text-white text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Load more</p>
                                        <div className=" pl-4 pt-1">
                                            <img src={Logo13} alt="Logo" className="rounded-[30px]" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-[30px]">
                                <div className="relative">
                                    <img src={Logo15} alt="Logo" className="w-[100%] rounded-[30px]" />
                                    <div className=" flex gap-[14rem] items-center absolute right-0 top-10 transform -translate-y-1/2">
                                        <div className="pr-10">
                                            <div className="inline-flex   gap-[10px] shrink-0 px-[28px] py-[8px] rounded-[105px]
   bg-[#c5e5ff]">
                                                <p className="text-[#222] text-[14px] not-italic font-normal leading-[normal]
  "style={{ fontFamily: "Inter" }}>Podcasts</p>
                                            </div>
                                        </div>
                                        <img src={Logo27} alt="Right Arrow" className="pr-4 rounded-[30px]" />
                                    </div>
                                </div>
                                <p className="text-[#222] text-start p-8 text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>How Refine Labs rewrote the<br />
                                    book on culture</p>
                                <div className="w-full flex justify-start ml-8 ">
                                    <div className="w-[77%] border border-dashed items-center border-[#EEE]"></div>
                                </div>

                                <div className="inline-flex items-center p-8">
                                    <img src={Logo12} alt="Logo" className=" rounded-[30px]" />
                                    <p className="text-[#58585A] pl-3 text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Samuel Gordalina</p>
                                    <p className="text-[#58585A] pl-32 text-[12px] not-italic font-normal leading-[normal]" style={{ fontFamily: "Inter" }}>Dec 19, 2022</p>
                                </div>
                                <div className="pr-64 pl-8 ">
                                    <button className=" inline-flex w-[100%] p-4 justify-center shrink-0   rounded-[105px] bg-[#00549a]">
                                        <p className="text-white text-[14px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Load more</p>
                                        <div className=" pl-4 pt-1">
                                            <img src={Logo13} alt="Logo" className="rounded-[30px]" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card4;
