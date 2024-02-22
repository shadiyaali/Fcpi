import React from "react";
import './Card.css'; 

const Card3 = () => {
    return (
        <div className="w-full h-full pt-6 bg-[#f4f4f4]">
            <div className="container">
                <div className="rounded-[30px] flex flex-col aspect-[4] bg-home-background bg-cover responsive-card">
                    <div className="text-end pt-20 ">
                        <p className="text-white text-[32px] pr-40 not-italic font-light leading-[43px]"  >Dedicated to your</p>
                        <p className="text-white text-[32px] pr-24 pt-2 not-italic font-semibold leading-[43px]"  >health and happiness</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;
