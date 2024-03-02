import React, { useState } from 'react';
import logo3 from "../../../assets/images/user-story.svg";
// import "./Navbar.css";
import { Link } from 'react-router-dom';  
import acc from "../../../assets/images/user-account.png";
import adm1 from "../../../assets/images/profile image.png";
import adm from "../../../assets/images/admin-1.png";
import but from "../../../assets/images/search-normal.png";


const Anavbar = () => {
 
    return (
        <div className=''>
             <div className= " w-full h-full ">
                 <div className="flex p-4 bg-white pt-4 justify-end">
                    <p className='text-[#06101C] pt-2 text-[22px] not-italic font-semibold leading-[24px] pr-40'>Welcome to FCPI Dashboard</p>
                    <div className='pl-[20rem]'>
                        <button className='bg-gray-100 px-4 py-3 pr-[15rem] rounded-[6px]'>
                            <div className='flex gap-2'>
                        <img src={but} alt="" className=''/>
                        <p className='text-[color:var(--Gray,#58585A)] text-[15px] not-italic font-normal leading-[normal]'>Search by data...</p>
                        </div>
                        </button>
                        </div>
                  <div className='pt-3 pl-12'> 
              <img src={adm} alt="" />
              </div> 
            <div className='pl-12 pr-3'>
            <img src={adm1} alt="" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default Anavbar;
