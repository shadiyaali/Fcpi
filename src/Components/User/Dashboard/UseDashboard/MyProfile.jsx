import React, { useState } from 'react';
import imag from "../../../../assets/images/user-circle.png";
import imag1 from "../../../../assets/images/mail.png"; 
import log from "../../../../assets/images/Frame.png"; 

const Profile = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);

    const togglePersonalInfo = () => {
        setPersonalInfoActive(!personalInfoActive);
       
        if (!personalInfoActive) {
            setmailingAddressActive(false);
        }
    };
    const togglemailingAddress = () => {
        setmailingAddressActive(!mailingAddressActive);
      
        if (!mailingAddressActive) {
            setPersonalInfoActive(false);
        }
    };
    return (
        <div className='bg-[#f4f4f4] h-[100vh] p-6 '>
            <div className='bg-white p-6'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>My Profile</p>
                <div className='flex pt-12 gap-16 p-8'>
                <div className='flex gap-3'>
                <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                            {personalInfoActive && <img src={imag} alt="" />}
                            <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Personal Information</p>
                            
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : ''}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                            {mailingAddressActive && <img src={imag1} alt="" />}
                            <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Mailing Address</p>
                            
                            </div>
                        </button>
                    </div>
                </div>
                <hr />
                {personalInfoActive && (
                    <div>
                    <div className='flex pt-8'>
                        <div>
                            <img src={log} alt="" className='h-[100%] rounded-[8px]' />
                        </div>
                        <div className='w-[100%] pl-8 rounded-[8px] rounded-l-none h-[192px] p-8'>
                            <div>
                                <div className='flex pt-3 gap-8'>
                                    <p className='text-[color:var(--Black,#222)] text-[20px] not-italic font-semibold leading-[normal]'>Mammen Paul</p>
                                    <button className='bg-[#EAFCEC] border border-[#64A15E] px-3 rounded-[30px]'>
                                        <p className='text-[#64A15E] text-[14px] not-italic font-semibold leading-[17px]'>Active</p>
                                    </button>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <p className='text-gray-600 text-sm text-[16px] font-normal leading-normal'>
                                    <span className='text-[16px] text-gray-600'> Male</span>
                                    <span className="dot-before text-gray-600 pl-3 text-[18px]">36 years (24/06/1984)</span>
                                    <span className="dot-before text-gray-600 pl-3 text-[18px]">Clinical Pharmacist</span>
                                </p>
                            </div>
                            <div className='pt-2 flex'>
                                <div>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-normal leading-[normal]'>Email: </p>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-normal leading-[normal]'>test@gmail.com</p>
                                </div>
                                <div className='pl-6'>
                                    <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-normal leading-[normal]'>Phone:</p>
                                    <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-normal leading-[normal]'>+91 9995475832</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className='flex   pt-8'>
        <div >
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
        </div>
        
    </div>
    <div className='flex   pt-8'>
        <div >
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
        </div>
        
    </div>
    <div className='flex   pt-16'>
        <div>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px]  not-italic font-normal leading-[22px] tracking-[-0.07px]'>Secondary<br/> Pharmacy Degree:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Doctor of Pharmacy</p>
        </div>
        <div className='pl-[7.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Name of Pharmacy <br/>College Degree:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> KMCT</p>
        </div>
        <div className='pl-[7.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Additional Degrees: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Yes</p>
        </div>
        
    </div>
    <div className='flex   pt-16'>
        
        <div className=''>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Name of Pharmacy <br/>College Degree:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> KMCT</p>
        </div>
        <div className='pl-[9rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Additional Degrees: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Yes</p>
        </div>
        
    </div>
                    </div> 
                )}
               {mailingAddressActive && (
                    <div className=' pt-8'>
                            <div className='flex   pt-8'>
        <div >
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Full Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Mammen Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Last Name:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Paul</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Date of Birth:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>24/06/1984</p>
        </div>
        <div className='pl-[10.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Primary Position: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> Clinical pharmacist</p>
        </div>
        
    </div>
    <div className='flex   pt-16'>
        <div>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px]  not-italic font-normal leading-[22px] tracking-[-0.07px]'>Secondary<br/> Pharmacy Degree:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Doctor of Pharmacy</p>
        </div>
        <div className='pl-[7.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Name of Pharmacy <br/>College Degree:</p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'> KMCT</p>
        </div>
        <div className='pl-[7.5rem]'>
            <p className='text-[color:var(--Gray,#58585A)] text-[16px] not-italic font-normal leading-[22px] tracking-[-0.07px]'>Additional Degrees: </p>
            <p className='text-[color:var(--Black,#222)] text-[18px] pt-1 not-italic font-semibold leading-[22px] tracking-[-0.08px]'>Yes</p>
        </div>
        
    </div>
                        </div>
                    
                )}
            </div>


            
        </div>
    );
};

export default Profile;
