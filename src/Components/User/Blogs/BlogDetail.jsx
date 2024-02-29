import React, { useState, useEffect } from "react";
import cap from "../../../assets/images/Cap.svg";
import blog from "../../../assets/images/blog.png";
import arrow from "../../../assets/images/arrow-right-01-round.png";
import blog1 from "../../../assets/images/blog-1.png";
import arrow3 from "../../../assets/images/arrow3.png";
import share from "../../../assets/images/share.png";
import ant from "../../../assets/images/antigen.png";
import ant1 from "../../../assets/images/antigen-1.png";
import ant2 from "../../../assets/images/antigen-2.png";



const BlogDetail = () => {


    return (
        <div className="w-full h-full bg-[#f4f4f4]">
            <div className="container">
                <div className="pt-6">
                    <div className="bg-white rounded-[30px]">
                        <div className="bg-[#00549A] h-[573px] rounded-t-[30px]">
                            <p className="text-white absolute left-48 top-36 transform -translate-y-1/2 text-[32px] not-italic font-semibold leading-[normal]"  >Blogs</p>
                            <div className="relative pl-[40rem]">
                                <img src={cap} alt="cap" className="" />

                                <img src={blog} alt="Left Arrow" className=" pt-12 absolute left-0 -bottom-[17rem] transform -translate-y-1/2 rounded-tr-[30px]" />

                            </div>
                            <div className="text start absolute right-60 top-[24rem] transform -translate-y-1/2">
                                <p className="text-[#FFC233] text-[23px] pt-28 not-italic font-medium leading-[normal]"  >FEATURED</p>
                                <p className="text-white text-[42px] pt-4 not-italic font-normal leading-[51px]" >Looking back at
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
                         <div className="flex pl-[20rem] pr-[20rem] gap-32 p-24 ">
                            <div className=" ">
                                 <div className=" " >
                                    <p className="text-[#222] text-[21px] not-italic font-medium leading-[normal]" >Author</p>
                                    <p className="text-[#58585A] pt-1 text-[17px] not-italic font-normal leading-[normal]" >Grace Mary John</p>
                                 </div>
                                 <div className="pt-8">
                                    <p className="text-[#222] text-[21px] not-italic font-medium leading-[normal]" >Date</p>
                                    <p className="text-[#58585A] pt-1 text-[17px] not-italic font-normal leading-[normal]" >January 1, 2024</p>
                                 </div>
                                 <div className="pt-8">
                                    <p className="text-[#222] text-[21px] not-italic font-medium leading-[normal]" >Category</p>
                                    <p className="text-[#58585A] pt-1 text-[17px] not-italic font-normal leading-[normal]" >Health Tips</p>
                                 </div>
                                 <div className="pt-8">
                                 <img src={share} alt="" />
                                 </div>
                            </div>
                            <div>
                                <p className="text-[#222] text-[36px] not-italic font-medium leading-[normal]" >Vaccine (Part-1)</p>
                                <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >The revolutionary weapon for immunisation was inspired by the Latin word <br/>"vacca," which means "cow." Yeah! You heard it right! .The name ‘vaccine’ was<br/> derived from the cowpox virus.</p>
                           <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >The world was introduced to vaccines when Edward Jenner discovered the<br/> smallpox vaccine in 1796. He inoculated eight-year-old James Phipps with <br/>material from a cowpox sore on the hand of a milkmaid. Phipps suffered a local <br/>reaction and felt sick for several days, but made a full recovery. In 1980, we were<br/> able to eradicate smallpox, which was a significant medical breakthrough. Since<br/> the COVID-19 outbreak, the general public has become more aware about<br/> vaccines. Vaccines are simple to understand, so this is a brief overview of<br/> vaccines.</p>
                           <div className="pt-12">
                                <p className="text-[#222] text-[36px] not-italic font-medium leading-[normal]" >What are vaccines?</p>
                             
                           <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >The world was introduced to vaccines when Edward Jenner discovered the<br/> smallpox vaccine in 1796. He inoculated eight-year-old James Phipps with <br/>material from a cowpox sore on the hand of a milkmaid. Phipps suffered a local <br/>reaction and felt sick for several days, but made a full recovery. In 1980, we were<br/> able to eradicate smallpox, which was a significant medical breakthrough. Since<br/> the COVID-19 outbreak, the general public has become more aware about<br/> vaccines. Vaccines are simple to understand, so this is a brief overview of<br/> vaccines.</p>
                            </div>
                            <div className="pt-8">
                            <img src={ant} alt=" " />
                            </div>
                            <p className="text-[#222] pt-8 text-[36px] not-italic font-medium leading-[normal]" >Research and discovery</p>
                                <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >Scientists conduct laboratory research to discover the best vaccine for a<br/> specific infectious disease. The research moves on to the next stage after<br/> establishing a rationale for a vaccine and its viability.<br/> derived from the cowpox virus.</p>
                                <div className="pt-8">
                            <img src={ant1} alt=" " />
                            </div>
                            <p className="text-[#222] pt-8 text-[36px] not-italic font-medium leading-[normal]" >Pre-clinical development</p>
                                <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >Scientists conduct laboratory research to discover the best vaccine for a<br/> specific infectious disease. The research moves on to the next stage after<br/> establishing a rationale for a vaccine and its viability.<br/> derived from the cowpox virus.</p>
                                <div className="pt-12">
                            <img src={ant2} alt=" " />
                            </div>
                            <p className="text-[#222] pt-8 text-[36px] not-italic font-medium leading-[normal]" >Live attenuated vaccine</p>
                                <p className="text-[#58585A] pt-4 text-[18px] not-italic font-normal leading-[28px]" >Scientists conduct laboratory research to discover the best vaccine for a<br/> specific infectious disease. The research moves on to the next stage after<br/> establishing a rationale for a vaccine and its viability.<br/> derived from the cowpox virus.</p>
                            </div>
                           
                         </div>



                        <div className="p-12">
                            <p className="text-[#222] text-[34px] not-italic font-semibold leading-[normal]"  >Related articles</p>
                            
                        </div>
                        <div className="grid grid-cols-3 pl-12 pr-12 gap-12">
                            <div className=" bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                                <img src={blog1} alt="" className="rounded-[30px] w-[99%]" />
                                <p className="text-[#222] pt-8 pl-4 text-[21px] not-italic font-medium leading-[28px]"  >SaaS Billing Software:<br />
                                    Lemon Squeezy,<br />
                                    The Ultimate Solution

                                </p>
                                <div className="flex pt-12 pl-4 gap-52">
                                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]"  >February 13, 2023</p>
                                    <img src={arrow3} alt="" />
                                </div>
                            </div>
                            <div className=" bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                                <img src={blog1} alt="" className="rounded-[30px]  w-[99%]" />
                                <p className="text-[#222] pt-8 pl-4 text-[21px] not-italic font-medium leading-[28px]"  >SaaS Billing Software:<br />
                                    Lemon Squeezy,<br />
                                    The Ultimate Solution

                                </p>
                                <div className="flex pt-12 pl-4 gap-52">
                                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]"  >February 13, 2023</p>
                                    <img src={arrow3} alt="" />
                                </div>
                            </div>
                            <div className=" bg-white hover:bg-[#f4f4f4] p-8 rounded-[10px]">
                                <img src={blog1} alt="" className="rounded-[30px] w-[99%]" />
                                <p className="text-[#222] pt-8 pl-4 text-[21px] not-italic font-medium leading-[28px]"  >SaaS Billing Software:<br />
                                    Lemon Squeezy,<br />
                                    The Ultimate Solution

                                </p>
                                <div className="flex pt-12 pl-4 gap-52 ">
                                    <p className="text-[#222] text-[16px] not-italic font-normal leading-[28px]" >February 13, 2023</p>
                                    <img src={arrow3} alt="" />
                                </div>
                            </div>
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
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]" >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222] text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>

                            <div className="pt-6">
                            
                            <div className="flex justify-between ">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]" >Product-Led Growth vs. Sales-Led Growth vs. Marketing-Led Growth</p>
                                <p className="text-[#222] text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr className="mt-6"/>
                            </div>

                            <div className=" pt-6">
                            
                            <div className="flex justify-between">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >SaaS sales tax in the European Union: Doing VAT right</p>
                                <p className="text-[#222]  text-[17px] not-italic font-normal leading-[normal]"  >Nov 7, 2022</p>
                            </div>
                            <hr  className="mt-6"/>
                            </div>
                            <div className=" pt-6  ">
                            
                            <div className="flex justify-between">
                                <p className="text-[#222] text-[29px] not-italic font-normal leading-[normal]"  >SaaS sales tax in the European Union: Doing VAT right</p>
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

export default BlogDetail;


 