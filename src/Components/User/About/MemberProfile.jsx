import React from "react";

import Logo24 from "../../../assets/images/grace1.svg";
import Logo25 from "../../../assets/images/mammen.png";
import Logo26 from "../../../assets/images/afsal.png";
import Logo27 from "../../../assets/images/faisal.png";
import Logo28 from "../../../assets/images/hisham.png";
import Logo29 from "../../../assets/images/rashid.png";
import dot from "../../../assets/images/dot.png";




const Member = () => {
    const boardMembers = [
        { id: 1, src: Logo24, name: "Grace Mary John",   },
        { id: 2, src: Logo25, name: "Mammen Paul" },
        { id: 3, src: Logo26, name: "Mohammed Afsal",  },
        { id: 4, src: Logo27, name: "Mohammed Faisal"  },
        { id: 5, src: Logo28, name: "Mohamed Hisham"  },
        { id: 6, src: Logo29, name: "Muhammed Rashid" }
    ];
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6 ">
                    <div className="bg-white rounded-[30px]">
                        <div className="bg-[#EAFBF1] rounded-t-[30px] "> 
                        <div className="flex gap-16 p-20">
                                    <img src={Logo24} alt="Image" className="rounded-[400px] w-[18%]" />
                                    <div className="pt-16">
                                     <p className="text-[#00549A] text-[42px] not-italic font-bold leading-[140%] tracking-[0.42px] "style={{ fontfamily: "Inter"}}>Grace Mary John</p>
                                     <p className="text-[#222] pt-2 text-[24px] not-italic font-medium leading-[140%]"style={{ fontfamily: "Inter"}}>BCIDP – Board Certified Infectious Disease Pharmacist</p>
                                     </div>
                                </div>
                        </div>
                        <div className="p-20">
                        <div className="border-l-2 border-[#00549A] pl-10">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Current/Recent job title:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>Chief Clinical Pharmacist at Believers Church Medical College Hospital, India since 2016</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Additional Job Titles:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>Assistant Professor – Department of Clinical Pharmacology and Clinical Pharmacy at Believers <br/>
Church Medical College Hospital, India since 2022</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Previous Work Experience apart from Current Job Title:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>N/A</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Publications:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>N/A</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Current research work(2022):</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>N/A</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Conference Presentations and Invited Talks:</p>
                            <p className="text-[#58585A]  text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>N/A</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Additional Information:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>Society for Healthcare Epidemiology of America (SHEA) <br/>
International Ambassador 2022 </p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Achievements and Awards:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>Excellence award for outstanding contributions through dedicated and committed work issued<br/>
by Believers Church Medical College Hospital in September 2019</p>
                        </div>
                        <div className="pt-5">
                        <img src={dot} alt="Image" className=" " />
                        </div>
                        </div>
                        <div className="pt-5">
                        <div className="border-l-2  border-[#00549A] pl-10 ">
                            <p className="text-[#222]  text-[23px] not-italic font-semibold leading-[normal]"style={{ fontfamily: "Inter"}}>Areas of Interest:</p>
                            <p className="text-[#58585A] text-[19px] pt-3 not-italic font-normal leading-[normal]"style={{ fontfamily: "Inter"}}>Infectious Diseases, Critical care Medicine, Antimicrobial<br/>
stewardship, Clinical Research</p>
                        </div>
                       
                        </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Member;
