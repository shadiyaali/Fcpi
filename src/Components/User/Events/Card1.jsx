import React, { useState } from 'react';
import Logo16 from "../../../assets/images/event-1.png";


const Card = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className=' bg-white rounded-[30px] p-2'>
                        <div className='text-start pt-10 pl-12'>
                            <p className='text-[#222] text-[36px] not-italic font-semibold leading-[normal]' >Media</p>
                            <p className='text-[#58585A] pt-4 text-[19px] not-italic font-normal leading-[28px]'  >Lorem Ipsum has been the industry's standard dummy text ever since the<br /> 1500s, when an unknown printer took a galley of type and scrambled it to<br /> make a type specimen book</p>
                        </div>
                        <div className='grid grid-cols-3 p-10 gap-10'>
                           
                     
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                       
                      <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                             
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                            <img src={Logo16} alt="Logo" className=" w-full rounded-[30px]" />
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Card;
