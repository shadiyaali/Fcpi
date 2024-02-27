import React  from 'react';
import logo3 from "../../../../assets/images/user-story.svg";
  
 
 
const Navbar = () => {
    

    return (
        <div className=''>
             <div className= " w-full h-full ">
         <div className=" flex   p-4 bg-white pt-6 justify-end">

         <div className="justify-center items-center px-11   py-4  bg-white hover:bg-[#00549a] text-[#222] hover:text-white ">

             <p className="text-[16px] not-italic font-normal leading-[normal]"  >Home</p>


          </div>
          <div className="justify-center items-center px-8 py-4  bg-white hover:bg-[#00549a] text-[#222] hover:text-white about-us-button" >

                <p className="text-[16px] not-italic font-normal leading-[normal]"  >About Us</p>



           </div>
            <div className="justify-center items-center px-11 py-4  bg-white hover:bg-[#00549a] text-[#222] hover:text-white">

                  <p className="text-[16px] not-italic font-normal leading-[normal]" >Specialty Forums</p>

           </div>
           <div className="justify-center items-center px-11 py-4   bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
            <p className="text-[16px] not-italic font-normal leading-[normal]" >Events</p>

            </div>
          <div className="justify-center items-center px-11 py-4  bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
           <p className="text-[16px] not-italic font-normal leading-[normal]" >Blogs</p>

           </div>
            <div className="justify-center items-center px-11 py-4  bg-white hover:bg-[#00549a] text-[#222] hover:text-white">
            <p className="text-[16px] not-italic font-normal leading-[normal]" >Contact Us</p>

            </div>
            <div className='pl-16'> 
           <button className='bg-[#1AB78D] px-11 py-4 rounded-[4px]'>
                <div className='flex gap-4'>
                    <p className='text-[color:var(--White,#FFF)] text-[16px] not-italic font-semibold leading-[normal]'>My Account</p>
                    <img src={logo3} alt=""  />
           </div>
            </button>
            </div>
            </div>
          
       </div>
  
        </div>
    );
};

export default Navbar;
