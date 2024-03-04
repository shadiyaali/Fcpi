import React, { useState } from 'react';
import user from "../../../assets/images/user.png"
import { Link } from "react-router-dom";


const UserType = () => {
     
    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                 <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Change User Type</p>
                 <hr  className='mt-6'/>
                 <div className='flex'>
                    <div className='pt-8'>
                        <img src={user} alt="" />
                    </div>
                    <div>
                    <div className='grid grid-cols-4   gap-[13.2rem] pl-10 pt-8'>
                 
                    <div >
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>User ID No</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>01</p>
                        </div>
                        <div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>Name</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>01</p>
                        </div>
                        <div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>Email</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>abc@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>Mobile</p>
                            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>+91 9995 47 58 32</p>
                        </div>
                        </div>
                   
                   <hr className='mt-9   ml-10'/>
                        <div className=' flex  gap-[13.2rem] pl-10 pt-8'>
                 
                 <div >
                         <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>User Type</p>
                         <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>01</p>
                     </div>
                     <div>
                         <p className='text-[color:var(--Black,#222)] pl-12 text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>User Status</p>
                         <div className='pt-2 pl-12'>
                         <button className='   px-4 py-2 rounded-[30px]'style={{background: "rgba(26, 183, 141, 0.10)"}}>
                                    <p className='text-[#1AB78D] text-[14px] not-italic font-semibold leading-[17px]'>Active</p>
                                </button>
                                </div>
                     </div>
                     <div>
                         <p className='text-[color:var(--Black,#222)] text-[18px] pl-12 not-italic font-medium leading-[25px] tracking-[-0.08px]'>User Type</p>
                            <div className="relative pt-2 pl-12">
                                                <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-2 w-full bg-[#F4F4F4]  " placeholder="Basic" />
                                                <select className="absolute inset-y-0 right-0 top-2 bottom-0 bg-transparent border-none cursor-pointer appearance-none">
                                                    <option value="" disabled selected></option>
                                                    {/* Add your dropdown options here */}
                                                </select>
                                            </div>
                     </div>
                      
                     </div>
                        </div>
                 </div>
          <div className=' flex justify-end gap-4 pt-8'>
            <div>
                <button className='rounded-[6px] px-8 py-3'style={{border: "1px solid var(--Gray, #58585A)"}}>
                    <p className='text-[color:var(--Gray,#58585A)] text-center text-[18px] not-italic font-medium leading-[normal]'>Cancel</p>
                </button>
            </div>
            <div>
                <button className='rounded-[6px] px-8 py-3 bg-[#00549A]' >
                    <p className='text-white text-center text-[18px] not-italic font-medium leading-[normal]'>Update</p>
                </button>
            </div>
          </div>
            </div>
        </div>
    );
};

export default UserType;
