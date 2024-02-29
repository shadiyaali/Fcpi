import React, { useState, useEffect } from "react";
import cap from "../../../assets/images/lineee.svg";
import blog from "../../../assets/images/blog.png";
import arrow from "../../../assets/images/arrow-right-01-round.png";
import blog1 from "../../../assets/images/blog-1.png";
import arrow3 from "../../../assets/images/arrow3.png";
import { Link } from 'react-router-dom';



const Blogs = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="bg-white rounded-[30px]">
                        <div className="bg-[#00549A] h-[573px] rounded-t-[30px]">
                            <p className="text-white absolute left-48 top-36 transform -translate-y-1/2 text-[32px] not-italic font-semibold leading-[normal]"  >Blogs</p>
                            <div className="relative pl-[40rem]">
                                <img src={cap} alt="cap" className="w-[1789px] h-[567px]" />

                                <img src={blog} alt="Left Arrow" className="w-[740px] pt-12 absolute left-0 -bottom-[17rem] transform -translate-y-1/2 rounded-tr-[30px]" />

                            </div>
                            <div className="text start absolute right-[30rem] top-[26rem] transform -translate-y-1/2">
                                <p className="text-[#FFC233] text-[23px] pt-28 not-italic font-medium leading-[normal]"  >FEATURED</p>
                                <p className="text-white text-[42px] pt-4 not-italic font-normal leading-[51px]"  >Looking back at
                                    2023</p>
                                <div className="pt-4">
                                    <button className="bg-white px-[32px] py-2 rounded-[30px]">
                                        <div className="flex gap-4 ">
                                            <p className="text-[#00549A] text-[16px] not-italic font-semibold leading-[normal]"  >Continue reading</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="p-12 pt-24">
                            <p className="text-[#222] text-[34px] not-italic font-semibold leading-[normal]" >Freshly squeezed</p>
                            <p className="text-[#58585A] text-[18px] pt-4 not-italic font-normal leading-[28px]"  >Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover<br /> many web sites still in their infancy. Various versions have evolved</p>
                        </div>
                        <div className="grid grid-cols-3 pl-12 pr-12 gap-12">

                        <Link to="/blogs-detail">
            <div className="bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                <img src={blog1} alt="" className="rounded-[30px] w-[99%]" />
                <p className="text-[#222] pt-8  text-[21px] not-italic font-medium leading-[28px]" >SaaS Billing Software:<br />
                    Lemon Squeezy,<br />
                    The Ultimate Solution
                </p>
                <div className="flex pt-12  gap-[12rem]">
                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]" >February 13, 2023</p>
                    <img src={arrow3} alt="" className="pl-8"/>
                </div>
            </div>
        </Link>
        <Link to="/blogs-detail">
            <div className="bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                <img src={blog1} alt="" className="rounded-[30px] w-[99%]" />
                <p className="text-[#222] pt-8  text-[21px] not-italic font-medium leading-[28px]" >SaaS Billing: How To <br/>
Get It Right<br />
                   
                </p>
                <div className="flex pt-20  gap-[12rem]">
                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]"  >February 13, 2023</p>
                    <img src={arrow3} alt="" className="pl-8" />
                </div>
            </div>
        </Link>
        <Link to="/blogs-detail">
            <div className="bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                <img src={blog1} alt="" className="rounded-[30px] w-[99%]" />
                <p className="text-[#222] pt-8  text-[21px] not-italic font-medium leading-[28px]"  >How to sell B2B SaaS in the <br/>European Union<br />
                   
                </p>
                <div className="flex pt-20   gap-[12rem]">
                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]"  >February 13, 2023</p>
                    <img src={arrow3} alt="" className="pl-8" />
                </div>
            </div>
        </Link>
                        </div>
                        <div className="pt-12 pl-12 pr-12">
                        <div className="  pt-8">
                            
                            <div className="flex justify-between ">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >How to sell B2B SaaS in the European Union</p>
                                <p className="text-[#222] text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>

                            <div className="pt-6  ">
                            
                            <div className="flex justify-between ">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222] text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>

                            <div className="pt-6">
                            
                            <div className="flex justify-between ">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >Product-Led Growth vs. Sales-Led Growth vs. Marketing-Led Growth</p>
                                <p className="text-[#222] text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr className="mt-6"/>
                            </div>

                            <div className=" pt-6">
                            
                            <div className="flex justify-between">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]" >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222]  text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>
                            <div className=" pt-6  ">
                            
                            <div className="flex justify-between">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]" >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222]  text-[17px] not-italic font-normal leading-[normal]" >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>
                            <div className=" pt-6 pb-12">
                            
                            <div className="flex justify-between">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222]  text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>
                            </div>

                        </div>
                     
                </div>

            </div>
        </div>
    );
};

export default Blogs;


 