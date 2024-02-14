import React from "react";

import Page1 from "../../../assets/images/plash.png";
import Logo23 from "../../../assets/images/Vector-2.svg";
import Logo24 from "../../../assets/images/grace1.svg";
import Logo25 from "../../../assets/images/mammen.png";
import Logo26 from "../../../assets/images/afsal.png";
import Logo27 from "../../../assets/images/faisal.png";
import Logo28 from "../../../assets/images/hisham.png";
import Logo22 from "../../../assets/images/saidulu.png";
import Logo222 from "../../../assets/images/vrinda.png";




const Forum = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="  bg-white rounded-[30px]  ">
                        <div className="grid grid-cols-2 p-[5rem] gap-20">
                            <div className="text-start pt-44">
                                <p className="text-[#222] text-[32px] not-italic font-semibold leading-[normal]
 "style={{ fontfamily: "Inter" }}> Forum Members</p>
                                <p className="text-[#58585A] pt-8 text-[17px] not-italic font-normal leading-[28px]" style={{ fontfamily: "Inter" }}>The Federation of Clinical Pharmacists in India (FCPI) is a non- <br />profitable, professional pharmacy organization composed of a bunch<br /> of passionate pharmacists involved in diverse clinical pharmacy<br /> responsibilities in India and across the globe. We have come<br /> together voluntarily with the undeterred goal of enhancing the<br /> clinical pharmacy profession, empowering the clinical pharmacists<br /> and thereby delivering high quality patient care.</p>
                            </div>
                            <div className="pt-72">
                                <div className="relative   ">
                                    <img src={Logo23} alt="Image" className="" />
                                    <img src={Page1} alt="Left Arrow" className="absolute  right-24 -top-20 transform -translate-y-1/2   rounded-[30px] " />

                                </div>
                            </div>
                        </div>
                        <div className=" grid grid-cols-4 p-[5rem] gap-14   justify-between  ">

                            <div className="inline-flex flex-col h-[15%] items-start gap-[10px] border   rounded-[12px] border-solid border-[#00549A]">
                                <div className="p-6">
                                <div className="   rounded-[105px] px-[30px] py-[12px]   bg-[#00549A]">

                                    <p className="text-white  text-[14px] not-italic font-normal leading-[normal]
  "style={{ fontFamily: "Inter" }}>Infectious Diseases Forum</p>
 
                                </div>
                                </div>
                                <p className="text-[#222] pl-12 text-[14px] not-italic font-normal leading-[normal]"style={{ fontFamily: "Inter" }}>Critical Care Medicine Forum</p>

                            </div>
                            {/* .................................................................. */}
                            <div className="flex-col">
                            <div className="flex pl-8 gap-14 ">
                            <div className=" pr-20 pb-8 shrink-0 rounded-[8px] pl-10 pt-8 border-b-4 border-[#00549A]
  bg-[#F0FAFF]">
                                <div className="  ">
                                    <img src={Logo24} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Grace Mary John</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD., BCIDP</p>

                            </div>
                            <div className=" shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#00549A]
  bg-[#F0FAFF]">
                            <div className="  ">
                                <img src={Logo28} alt="Image" className="rounded-[150px]" />

                            </div>
                            <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Mohamed Hisham</p>
                            <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD., BCCCP., BCIDP</p>

                        </div>
                            <div className="  shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#00549A]
  bg-[#F0FAFF]">
                                <div className="  ">
                                    <img src={Logo22} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Saidulu Ganta</p>
                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">PharmD</p>
                                </div>
                            </div>
                          {/* ......................................................................................... */}
                            <div className="flex pl-8 pt-14 gap-14">
                            <div className=" shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#00549A]
 bg-[#F0FAFF]">
                                <div className="  ">
                                    <img src={Logo222} alt="Image" className="rounded-[150px]" />

                                </div>
                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]
 "style={{ fontFamily: "Inter" }}>Vrinda Nampoothiri</p>
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
                            {/* ................................................................................. */}
                            <div className="flex pl-8 pt-14 gap-14">
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
                            {/* .............................................................................................. */}
                            <div className="flex pl-8 pt-14 gap-14">
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
                        </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;
