import React, { useState } from "react";
import Page1 from "../../../assets/images/plash.png";
import Logo23 from "../../../assets/images/Vector-2.svg";
import Logo24 from "../../../assets/images/grace1.svg";
import Logo25 from "../../../assets/images/mammen.png";
import Logo26 from "../../../assets/images/afsal.png";
import Logo27 from "../../../assets/images/faisal.png";
import Logo28 from "../../../assets/images/hisham.png";
import Logo22 from "../../../assets/images/saidulu.png";
import Logo222 from "../../../assets/images/vrinda.png";
import { Link } from "react-router-dom";
const Forum = () => {
    const [selectedForum, setSelectedForum] = useState("Infectious Diseases");

    const infectiousDiseasesItems = [
        { src: Logo25, name: "Mammen Paul", degree: "PharmD" },
        { src: Logo25, name: "Mammen Paul", degree: "PharmD" },
        { src: Logo26, name: "Mammen Paul", degree: "PharmD" },

    ];
    const criticalCareMedicalItems = [
        { src: Logo28, name: "Mammen Paul", degree: "PharmD" },
        { src: Logo222, name: "Mammen Paul", degree: "PharmD" },
        { src: Logo27, name: "Mammen Paul", degree: "PharmD" },

    ];
    const handleForumChange = (forum) => {
        setSelectedForum(forum);
    };

 
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="bg-white rounded-[30px]">
                        <div className="grid grid-cols-2  px-16 pt-64 gap-20">
                            <div className="text-start ">
                                <p className="text-[#222] pt-14 text-[34px] not-italic font-semibold leading-[normal]" >Forum Members</p>
                                <p className="text-[#58585A] pt-8 text-[19px] not-italic font-normal leading-[28px]"  >The Federation of Clinical Pharmacists in India (FCPI) is a non-profitable, professional pharmacy organization composed of a bunch of passionate pharmacists involved in diverse clinical pharmacy responsibilities in India and across the globe. We have come together voluntarily with the undeterred goal of enhancing the clinical pharmacy profession, empowering the clinical pharmacists and thereby delivering high-quality patient care.</p>
                            </div>
                            <div className="pt-48">
                                <div className="relative">
                                    <img src={Logo23} alt="Image" />
                                    <img src={Page1} alt="Left Arrow" className="absolute right-24 -top-20 transform -translate-y-1/2 rounded-[30px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="pt-28 w-[29%] pl-16 ">
                                <div className="inline-flex flex-col  w-[310px] items-start  border rounded-[12px] border-solid border-[#00549A]">

                                    <div className="pt-4 pl-4">
                                    <button onClick={() => handleForumChange("Infectious Diseases")} className={`justify-center items-center ml-3 px-8 py-3 rounded-[105px] border ${selectedForum === "Infectious Diseases" ? 'bg-[#00549A] text-white' : 'text-[#222] bg-white'}`} style={{ width: "auto" }}>
    <p className="text-[14px] font-semibold">Infectious Diseases Forum</p>
</button>

                                    </div>
                                    <div className="pb-6 pt-6 pl-4">
                                    <button onClick={() => handleForumChange("Critical Care Medical")} className={`justify-center items-center ml-3 px-6 py-3 rounded-[105px] border ${selectedForum === "Critical Care Medical" ? 'bg-[#00549A] text-white' : 'text-[#222] bg-white'}`} style={{ width: "auto" }}>
    <p className="text-[14px] font-semibold">Critical Care Medicine Forum</p>
</button>

                                    </div>

                                </div>
                            </div>
                         
                            {selectedForum === "Infectious Diseases" ? (
                                infectiousDiseasesItems.map((item, index) => (
                                
                                    <div key={index} className="flex-col pl-16 pt-28">
                                        <div className="flex ">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-14">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-14 pb-14">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                    </div>
                                  
                                ))
                            ) : (
                                criticalCareMedicalItems.map((item, index) => (
                                    <div key={index} className="flex-col pl-16 pt-28">
                                        <div className="flex  ">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-14">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-14 pb-14">
                                            <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8 border-b-4 border-[#2DCA72] bg-[#EAFBF1]">
                                                <img src={item.src} alt="Image" className="rounded-[150px]" />
                                                <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]"  >{item.name}</p>
                                                <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{item.degree}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
</div>
                        </div>
                    </div>
             
            </div>
        </div>
    );
};

export default Forum;


