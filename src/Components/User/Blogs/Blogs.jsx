import React, { useState, useEffect } from "react";
import cap from "../../../assets/images/Capa 10.png";



const Blogs = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="bg-white rounded-[30px]">
                        <div className="bg-[#00549A] rounded-t-[30px]">
                            <p className="text-white absolute left-40 top-28  text-[32px] not-italic font-semibold leading-[normal]" style={{ fontfamily: "Inter" }}>Blogs</p>
                            <div className="relative pl-[40rem]">
                                <img src={cap} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;
