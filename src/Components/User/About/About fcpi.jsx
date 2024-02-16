import React from "react";
import Page from "../../../assets/images/page1.svg";
import Page1 from "../../../assets/images/Vector.svg";
import Page2 from "../../../assets/images/learn.png";
 
  

const About = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
          <div className="flex gap-44 bg-white rounded-[30px] p-12  pb-48">
          <div className="relative p-5 ">
        <img src={Page} alt="Left Arrow" className=" w-[100%] h- rounded-[30px]" />
        <div className="absolute -right-9 -bottom-44 transform -translate-y-1/2 z-20">
        <img src={Page1} alt="Left Arrow" className=" " />
        </div>
    </div>
    <div className="pt-28">
        <p className="text-[#222] text-start text-[36px] not-italic font-bold leading-[normal]
  "style={{fontfamily: "Inter"}}>About FCPI</p>
  <p className="text-[#58585A] pt-8 text-start text-[19px] not-italic font-normal leading-[32px]"style={{fontfamily: "Inter"}}>The Federation of Clinical Pharmacists in India (FCPI) is a non- <br/>profitable, professional pharmacy organization composed of a <br/> bunch of passionate pharmacists involved in diverse clinical<br/> pharmacy responsibilities in India and across the globe. We have <br/> come together voluntarily with the undeterred goal of enhancing <br/> the clinical pharmacy profession, empowering the clinical <br/> pharmacists and thereby delivering high quality patient care.</p>
 <div className="pt-10 text-left ">
  <div className="inline-flex  justify-center items-center gap-[10px] shrink-0 border px-[30px] py-[7px] rounded-[105px] border-solid border-[#00549A]">
  <p className="text-[#00549A] text-[18px] not-italic font-semibold leading-[normal]"style={{fontfamily: "Inter"}}>Load more</p>
  <img src={Page2} alt="Left Arrow" className=" " />
  </div>
   </div>
   </div>
          </div>
                 
        </div>
        </div>
            </div>
    );
};

export default About;
