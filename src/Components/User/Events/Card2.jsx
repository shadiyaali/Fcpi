import React, { useState } from 'react';
import blue from "../../../assets/images/blue.png";

const Card2 = () => {
    const [activeDay, setActiveDay] = useState(1);  
    const [showDropdown, setShowDropdown] = useState(false);  

    const handleDayClick = (day) => {
        if (activeDay === day) {
          
            setShowDropdown(!showDropdown);
        } else {
            setActiveDay(day);  
            setShowDropdown(true);  
        }
    };

     
    const scheduleContent = [
        {
            day: 1,
            time: "5:00 PM - 5:30 PM",
            title: "Challenging Cases In Transplant ID",
            speaker: "Dr Parikshit Prayag",
            highlights: [
                "Introduction to Gram-negative Bacteria",
                "Introduction to Antibiotics",
        
            ]
        },
        {
            day: 2,
            time: "5:00 PM - 5:30 PM",
            title: "Challenging Cases In Transplant ID",
            speaker: "Dr Parikshit Prayag",
            highlights: [
                "Introduction to Fungal Infections",
                "Management of Multi-drug Resistant Infections",
               
            ]
        },
        {
            day: 3,
            time: "5:00 PM - 5:30 PM",
            title: "Challenging Cases In Transplant ID",
            speaker: "Dr Parikshit Prayag",
            highlights: [
                "Emerging Infectious Diseases",
                "Infection Control Practices",
              
            ]
        },
        
    ];

    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className='pt-6'>
                    <div className='bg-white  rounded-[30px]'>
                        <div className='p-10 pl-12'>
                            <p className='text-[#222] text-[32px] not-italic font-semibold leading-[normal]' >Program Schedule</p>
                            <div className='flex gap-20 pt-8'>
                          
                                {[1, 2, 3].map(day => (
                                    <button 
                                        key={day}
                                        className={`bg-white py-2 px-10 ${activeDay === day && 'border-b-2 border-[#00549A]'}`}
                                        onClick={() => handleDayClick(day)}  
                                    >
                                        <p className={`text-[#00549A] text-center text-[23px] not-italic font-semibold leading-[21px] tracking-[0.25px] ${activeDay === day && 'text-blue-500'}`}  >{`DAY - ${day}`}</p>
                                    </button>
                                ))}
                            </div>
                         
                            {showDropdown && (
                                <div className='flex gap-16 pr-4 pt-8'>
                                    <div className='bg-[#F4F4F4] rounded-[10px] w-[60%]'>
                                      
                                        {scheduleContent.filter(item => item.day === activeDay).map((item, index) => (
                                            <div key={index} className='pl-6 pr-6 pt-6'>
                                                <div className='bg-white rounded-[10px] p-4'>
                                                    <p className='text-[#58585A] text-[19px] not-italic font-normal leading-[normal] tracking-[0.25px]'  >{`${item.time} ${item.title}`}</p>
                                                    <p className='text-[#00549A] pt-3 text-[21px] not-italic font-semibold leading-[normal] tracking-[0.25px]'  >{item.speaker}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                     
                                    <div className='bg-[#F4F4F4] rounded-[10px] w-[45%]'>
                                        <div className='p-10 pl-10 '>
                                            <p className='text-[#222] text-[25px] not-italic font-semibold leading-[normal]'  >Highlights</p>
                                          
                                            {scheduleContent.find(item => item.day === activeDay).highlights.map((highlight, index) => (
                                                <div key={index} className='flex gap-4 pt-5'>
                                                    <div className='pt-1'>
                                                        <img src={blue} alt="{blue}" className='reounded-[30px]' />
                                                    </div>
                                                    <p className='text-black text-[19px] not-italic font-normal leading-[normal]'  >{highlight}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
