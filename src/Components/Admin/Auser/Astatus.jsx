import React, { useState } from 'react';
 
 

const Status = () => {
     
    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
        <div className='bg-white p-6 rounded-[8px]'>
             <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Status</p>
             <hr  className='mt-6'/>
             <div className='flex'>
               
                <div>
        
              
                    <div className=' flex  gap-[13.2rem]   pt-8'>
                    <div>
                     <p className='text-[color:var(--Black,#222)] pl-12 text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>Current Status</p>
                     <div className='pt-2 pl-12'>
                     <button className='   px-4 py-2 rounded-[30px]'style={{background: "rgba(26, 183, 141, 0.10)"}}>
                                <p className='text-[#1AB78D] text-[14px] not-italic font-semibold leading-[17px]'>Active</p>
                            </button>
                            </div>
                 </div>
             
             <div >
                     <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[25px] tracking-[-0.08px]'>User Type</p>
                     <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[25px] tracking-[-0.07px]'>Basic</p>
                 </div>
              
                 <div>
                     <p className='text-[color:var(--Black,#222)] text-[18px] pl-12 not-italic font-medium leading-[25px] tracking-[-0.08px]'>Change Status</p>
                        <div className="relative pt-2 pl-12">
                                            <input type="text" className="border border-gray-400 rounded-[6px] px-[20px] py-2 w-full bg-[#F4F4F4]  " placeholder="Active" />
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

export default  Status;
