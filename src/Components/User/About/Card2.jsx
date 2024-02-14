import React from "react";
 
import Page1 from "../../../assets/images/push.png";
 
 
  

const AboutCard2 = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                    <div className=" ">
        <img src={Page1} alt="Left Arrow" className="w-[100%] rounded-[30px] " />
        </div> 
        <div className="bg-white text-start rounded-[30px] p-16 pl-16 pt-16 ">
  <p className="text-[#222] text-[32px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Our Vision</p>
  <p className="text-[#58585A] pt-8 text-[24px] not-italic font-normal leading-[38px]" style={{ fontFamily: "Inter" }}>
    To develop advanced clinical pharmacist<br/> roles and responsibilities, to integrate with <br/><span style={{ color: "#00549A" }}>multi-professional teams</span> for optimizing<br/> pharmacotherapy in the prevention and <br/>treatment of disease.
  </p>
</div>

                    </div>
           
        </div> 
        </div>
            </div>
    );
};

export default AboutCard2;
