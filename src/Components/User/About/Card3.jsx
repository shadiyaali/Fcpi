import React from "react";
 
import Page1 from "../../../assets/images/push2.png";
 
 
  

const AboutCard3 = () => {
    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                   
        <div className="bg-white text-start rounded-[30px] p-16 pl-16 pt-16 ">
  <p className="text-[#222] text-[32px] not-italic font-semibold leading-[normal]" style={{ fontFamily: "Inter" }}>Our Mission</p>
  <p className="text-[#58585A] pt-8 text-[24px] not-italic font-normal leading-[38px]" style={{ fontFamily: "Inter" }}>
  To enhance high-quality patient- centered <br/>care by supporting clinical pharmacists to<br/> practice at the top of their <span style={{ color: "#00549A" }}>expertise thereby<br/> uplifting the clinical pharmacy</span> profession to<br/> best serve our patients and our society.
  </p>
</div>
<div className=" ">
        <img src={Page1} alt="Left Arrow" className="w-[100%] rounded-[30px] " />
        </div> 

                    </div>
           
        </div> 
        </div>
            </div>
    );
};

export default AboutCard3;
