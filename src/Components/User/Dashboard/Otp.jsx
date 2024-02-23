import React from "react";
import Log from "../../../assets/images/FCPI Logo 1.png";


const Otp = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">

            <div className="p-[13.7rem] pl-[40rem] ">
           <div className="bg-white w-[60%] pb-12  shadow-sm-light rounded-[16px]  "> 
           <div className=" pt-12 pl-40 pr-20">
            <img src={Log} alt="" className="w-[80%]"/></div>
            
         
           <hr className="mt-10 w-[100%]"/>
           <div className="text-center mt-6">
            <p className="text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[normal]">Please Enter OTP</p>
            <p className="text-[color:var(--Gray,#58585A)] pt-2 text-center text-[16px] not-italic font-normal leading-[20px]">We have sent the verification code to<br/>
your email address</p>
<div className="flex pl-28 gap-4 pt-8">
   <div className="border border-[#D9D9D9] px-10 py-8 rounded-[6px]"></div>
   <div className="border border-[#D9D9D9] px-10 py-8 rounded-[6px]"></div>
   <div className="border border-[#D9D9D9] px-10 py-8 rounded-[6px]"></div>
   <div className="border border-[#D9D9D9] px-10 py-8 rounded-[6px]"></div>
</div>
<p className="text-[color:var(--Gray,#58585A)] text-[18px] pt-4 not-italic font-medium leading-[24px]">
  Didn’t receive the OTP? <span style={{ color: '#1AB78D'  }}>Resend</span>
</p>
<div className="pt-8 ">
<button className="bg-[#00549A] px-24 py-3 rounded-[6px]">
    <p className=" text-[color:var(--ffffff,#FFF)] text-center text-[18px] not-italic font-semibold leading-[normal]">Verify</p>
</button>
</div>
           </div>
        </div>
        </div>
        </div>
    );
};

export default Otp;


