import React from "react";
import Page1 from "../../../assets/images/ligmyzin.png";
import Logo23 from "../../../assets/images/Vector-2.svg";
import Logo24 from "../../../assets/images/grace1.svg";
import Logo25 from "../../../assets/images/mammen.png";
import Logo26 from "../../../assets/images/afsal.png";
import Logo27 from "../../../assets/images/faisal.png";
import Logo28 from "../../../assets/images/hisham.png";
import Logo29 from "../../../assets/images/rashid.png";
import { Link } from "react-router-dom";

const Board = () => {
    const boardMembers = [
        { id: 1, src: Logo24, name: "Grace Mary John", degree: "PharmD., BCIDP", borderColor: '#F75FDE', bgColor: "#feecfb" },
        { id: 2, src: Logo25, name: "Mammen Paul", degree: "PharmD", borderColor: "#2DCA72", bgColor: "#EAFBF1" },
        { id: 3, src: Logo26, name: "Mohammed Afsal", degree: "MPharm", borderColor: "#00549A", bgColor: "#F0FAFF" },
        { id: 4, src: Logo27, name: "Mohammed Faisal", degree: "MPharm., CPQIH", borderColor: "#FF7D52", bgColor: "#FFF2EE" },
        { id: 5, src: Logo28, name: "Mohamed Hisham", degree: "PharmD., BCCCP., BCIDP", borderColor: "#9452FF", bgColor: "#EEF0FF" },
        { id: 6, src: Logo29, name: "Muhammed Rashid", degree: "MPharm", borderColor: "#B1B1B1", bgColor: "#F2F2F2" }
    ];
    

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="bg-white rounded-[30px]">
                    <div className="grid grid-cols-2  px-16 pt-64 gap-20">
                            <div className="text-start ">
                                <p className="text-[#222] pt-14 text-[34px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Board of Directors</p>
                                <p className="text-[#58585A] pt-8 text-[19px] not-italic font-normal leading-[28px]" style={{ fontFamily: "Inter" }}>The Federation of Clinical Pharmacists in India (FCPI) is a non- <br />profitable, professional pharmacy organization composed of a bunch<br /> of passionate pharmacists involved in diverse clinical pharmacy<br /> responsibilities in India and across the globe. We have come<br /> together voluntarily with the undeterred goal of enhancing the<br /> clinical pharmacy profession, empowering the clinical pharmacists<br /> and thereby delivering high quality patient care.</p>
                            </div>
                            <div className="pt-48">
                                <div className="relative">
                                    <img src={Logo23} alt="Image" />
                                    <img src={Page1} alt="Left Arrow" className="absolute right-24 -top-20 transform -translate-y-1/2 rounded-[30px]" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 pl-16 pr-16 pt-32 gap-14 pb-14 justify-between">
                        {boardMembers.map((member) => (
                                <Link to={`/details/${member.id}`} key={member.id}> 
                                    <div className="shrink-0 rounded-[8px] pl-10 pt-8 pr-20 pb-8" style={{ borderBottom: `4px solid ${member.borderColor}`, backgroundColor: member.bgColor }}>
                                        <div>
                                            <img src={member.src} alt="Image" className="rounded-[150px]" />
                                        </div>
                                        <p className="text-black pt-6 text-start text-[21px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>{member.name}</p>
                                        <p className="text-black pt-2 text-start text-[16px] not-italic font-normal leading-[normal]">{member.degree}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
