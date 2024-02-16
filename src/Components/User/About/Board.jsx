import React from "react";

import Page1 from "../../../assets/images/ligmyzin.png";
import Logo23 from "../../../assets/images/Vector-2.svg";
import Logo24 from "../../../assets/images/grace1.svg";
import Logo25 from "../../../assets/images/mammen.png";
import Logo26 from "../../../assets/images/afsal.png";
import Logo27 from "../../../assets/images/faisal.png";
import Logo28 from "../../../assets/images/hisham.png";
import Logo29 from "../../../assets/images/rashid.png";




const Board = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="  bg-white rounded-[30px]  ">
                        <div className="grid grid-cols-2 pt-24 gap-20">
                            <div className="text-start pt-36 pl-12">
                                <p className="text-[#222] text-[38px] not-italic font-semibold leading-[normal]
 "style={{ fontfamily: "Inter" }}> Board of Directors</p>
                                <p className="text-[#58585A] pt-8 text-[18px] not-italic font-normal leading-[31px]" style={{ fontfamily: "Inter" }}>The Federation of Clinical Pharmacists in India (FCPI) is a non- <br />profitable, professional pharmacy organization composed of a bunch<br /> of passionate pharmacists involved in diverse clinical pharmacy<br /> responsibilities in India and across the globe. We have come<br /> together voluntarily with the undeterred goal of enhancing the<br /> clinical pharmacy profession, empowering the clinical pharmacists<br /> and thereby delivering high quality patient care.</p>
                            </div>
                            <div className="pt-80 pl-8">
                                <div className="relative   ">
                                    <img src={Logo23} alt="Image" className="" />
                                    <img src={Page1} alt="Left Arrow" className="absolute  right-36 -top-20 transform -translate-y-1/2   rounded-[30px] " />

                                </div>
                            </div>
                        </div>
                        <div className=" grid grid-cols-4 pl-12 pr-12 pt-32 gap-12   justify-between  ">
                            <div className=" pr-20 pb-8 shrink-0 rounded-[8px] pl-10 pt-8 border-b-4 border-[#F75FDE]
  bg-[#feecfb]">
                                <div className="  ">
                                    <img src={Logo24} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Grace Mary John</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD., BCIDP</p>

                            </div>
                            <div className=" shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72]
  bg-[#EAFBF1]">
                                <div className="  ">
                                    <img src={Logo25} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Mammen Paul</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD</p>

                            </div>
                            <div className="  shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#00549A]
  bg-[#F0FAFF]">
                                <div className="  ">
                                    <img src={Logo26} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Mohammed Afsal</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">MPharm</p>

                            </div>
                            <div className="  shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#FF7D52]
  bg-[#FFF2EE]">
                                <div className="  ">
                                    <img src={Logo27} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Mohammed Faisal</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">MPharm., CPQIH</p>

                            </div>

                        </div>
                        {/* ......................................................................... */}
                        <div className=" grid grid-cols-4  pl-14 pr-14 pt-12 pb-12 gap-12">
                        <div className=" shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#9452FF]
  bg-[#EEF0FF]">
                            <div className="  ">
                                <img src={Logo28} alt="Image" className="rounded-[150px]" />

                            </div>
                            <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Mohamed Hisham</p>
                            <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD., BCCCP., BCIDP</p>

                        </div>
                        <div className="  shrink-0 rounded-[8px] pl-10 pt-8 pr-16 pb-8 border-b-4 border-[#B1B1B1]  
  bg-[#F2F2F2]">
                            <div className="  ">
                                <img src={Logo29} alt="Image" className="rounded-[150px]" />

                            </div>
                            <p className="text-black pt-6 text-start text-[21px]  not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Muhammed Rashid</p>
                            <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">MPharm</p>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
