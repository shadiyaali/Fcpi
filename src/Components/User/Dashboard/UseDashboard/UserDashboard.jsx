import React  from 'react';
import log from "../../../../assets/images/Frame.png";
import "./UserDashboard.css"
import logo1 from "../../../../assets/images/planet.png";
 
 
const UserDashboard = () => {
    

    return (
        <div className='bg-[#f4f4f4] w-[100%] h-[100%] p-8 '> 
          <div className='bg-white p-8'>
             
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Welcome to FCPI Dashboard</p>
          
    
        <p className='text-[color:var(--Gray,#58585A)] text-[14px] not-italic font-normal leading-[24px]'>Your FCPI Dashboard for today</p>
    <hr className='mt-8'/>
        <div className='flex   pt-12'>
            <div>
                <img src={log} alt="" className='h-[192px]' />
            </div>
            <div className='bg-[#f4f4f4] w-[100%] pl-8 rounded-[8px] rounded-l-none h-[192px] p-8'>
                <div>
                    <div className='flex pt-3 gap-8'>
                    <p className='text-[color:var(--Black,#222)] text-[20px] not-italic font-semibold leading-[normal]'>Mammen Paul</p>
                    <button className=' bg-[#EAFCEC] border border-[#64A15E] px-3 rounded-[30px]'>
                        <p className='text-[#64A15E] text-[14px] not-italic font-semibold leading-[17px]'>Active</p>
                    </button>
                </div>
                </div>
                <div className=' pt-2'>
                <p className='text-gray-600 text-sm text-[16px] font-normal leading-normal'>
           <span className='text-[16px] text-gray-600'> Male</span>
            <span className="dot-before text-gray-600 pl-3 text-[16px]">36 years (24/06/1984)</span>
            <span className="dot-before text-gray-600 pl-3 text-[16px]">Self employed</span>
        </p>
                </div>
                <div className='pt-2 flex'>
                    <div>
                        <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>ID</p>
                        <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>PA678912</p>
                    </div>
                    <div className='pl-6'>
                        <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>File number</p>
                        <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>AB876543210</p>
                    </div>
                    <div className='pl-6'>
                        <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[normal]'>Aadhaar number</p>
                        <p className='text-[color:var(--Black,#222)] text-[16px] not-italic font-normal leading-[normal]'>XXXXX543210</p>
                    </div>
                </div>
            </div>

        </div>
      
        <div className='flex pt-8 gap-8'>
    <div className=' w-[847px] p-4   bg-white shadow-2xl rounded-[8px] pt-6 pb-6'> 
        <div className='flex justify-between'>
            <p className='text-[color:var(--Black,#222)] text-[27px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Events</p>
            <div>
                <button className='bg-[#f4f4f4] hover:bg-[#00549A]  rounded-[6px] rounded-r-none px-6 py-3'>
                    <p className='text-[#58585A] hover:text-white text-[19px] not-italic font-medium leading-[normal]'>Upcoming Events</p>
                </button>
                <button className='bg-[#f4f4f4] rounded-[6px] hover:bg-[#00549A] rounded-l-none px-6 py-3'>
                    <p className='text-[#58585A] text-[19px] hover:text-white not-italic font-medium leading-[normal]'>Past Events</p>
                </button>
            </div>
            </div>
            <div className='flex pt-6'>
            <img src={logo1} alt="" className='rounded-[8px]'/>
            <div className='pl-4'>
                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-semibold leading-[normal]'>FCPI ID Forum Year in Review 2023</p>
                <p className='text-[color:var(--Green,#1AB78D)] pt-2 text-[19px] not-italic font-medium leading-[20px]'>Veena Vengopalan PharmD., BCIDP</p>
                <p className='text-[color:var(--Gray,#58585A)] pt-1 text-[17px] not-italic font-normal leading-[20px]'>8:00 PM - 9:00 PM Top Papers in PK/PD and TDM for Antimicrobials,</p>
            </div>
           
        </div>
        <hr  className='mt-6'/>
        <div className='flex pt-6'>
            <img src={logo1} alt="" className='rounded-[8px]'/>
            <div className='pl-4'>
                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-semibold leading-[normal]'>FCPI ID Forum Year in Review 2023</p>
                <p className='text-[color:var(--Green,#1AB78D)] pt-2 text-[19px] not-italic font-medium leading-[20px]'>Veena Vengopalan PharmD., BCIDP</p>
                <p className='text-[color:var(--Gray,#58585A)] pt-1 text-[17px] not-italic font-normal leading-[20px]'>8:00 PM - 9:00 PM Top Papers in PK/PD and TDM for Antimicrobials,</p>
            </div>
           
        </div>
        <hr  className='mt-6'/>
        <div className='flex pt-6'>
            <img src={logo1} alt="" className='rounded-[8px]'/>
            <div className='pl-4'>
                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-semibold leading-[normal]'>FCPI ID Forum Year in Review 2023</p>
                <p className='text-[color:var(--Green,#1AB78D)] pt-2 text-[19px] not-italic font-medium leading-[20px]'>Veena Vengopalan PharmD., BCIDP</p>
                <p className='text-[color:var(--Gray,#58585A)] pt-1 text-[17px] not-italic font-normal leading-[20px]'>8:00 PM - 9:00 PM Top Papers in PK/PD and TDM for Antimicrobials,</p>
            </div>
           
        </div>
        <hr  className='mt-6'/>
        <div className='text-end pt-4'>
        <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
            <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all </p>
        </button>
        </div>
    </div>
    <div className='p-4 bg-white shadow-2xl rounded-[8px] w-[542px] pt-6 pb-6'>
        <div className='flex justify-between'>
        <p className='text-[color:var(--Black,#222)] text-[26px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Event Calendar</p>
        <div className=' '>
        <button className='bg-gray-100 px-4 py-2 rounded-[4px]'>
            <p className='text-[color:var(--Blue,#00549A)] text-[14px] not-italic font-medium leading-[normal]'>View all </p>
        </button>
        </div>
        </div>
        <hr  className='mt-4'/>
        <div className='flex gap-3 pt-7'>
            <button className='bg-white border hover:bg-[#DFF9F2] hover:border-[#DFF9F2]  border-[#CBCBCB] px-5 py-2 rounded-[106px]'>
                <p className='text-[#58585A] hover:text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]'>Today</p>
            </button>
            <button className='bg-white border hover:bg-[#DFF9F2] hover:border-[#DFF9F2]  border-[#CBCBCB] px-6  py-2 rounded-[106px]'>
                <p className='text-[#58585A] hover:text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]'>Tomorrow</p>
            </button>
            <button className='bg-white border hover:bg-[#DFF9F2] hover:border-[#DFF9F2]  border-[#CBCBCB] px-5  py-2 rounded-[106px]'>
                <p className='text-[#58585A] hover:text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]'>This Week</p>
            </button>
            <button className='bg-white border hover:bg-[#DFF9F2] hover:border-[#DFF9F2]  border-[#CBCBCB] px-6  py-2 rounded-[106px]'>
                <p className='text-[#58585A] hover:text-[#1AB78D] text-[16px] not-italic font-normal leading-[normal]'>This Month</p>
            </button>
        </div>
        <hr  className='mt-6'/>
        <div className='bg-white shadow-xl'> 

            <div className='flex'>
                <div className='bg-[#DFF9F2] px-4 py-4'></div>
            </div>
        </div>
    </div>
</div>

        </div> 
        </div>
    );
};

export default UserDashboard;
