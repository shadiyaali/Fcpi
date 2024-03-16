import React, { useState, useEffect } from 'react';
import imag from "../../../assets/images/user-circle.png";
import imag1 from "../../../assets/images/mail.png";
import Icon from "../../../assets/images/Icon frame.png";
import { Link } from "react-router-dom";
import del from "../../../assets/images/del.png";
import ed from "../../../assets/images/edit.png";
import click from "../../../assets/images/click.png";
import pic from "../../../assets/images/Picture.png";
import search from "../../../assets/images/search.png";
import cls from "../../../assets/images/close.png";
import icon from "../../../assets/images/icon.png";
import icon1 from "../../../assets/images/icon1.png";
import eye from "../../../assets/images/eye.png";
import img from "../../../assets/images/more.png";
import edi from "../../../assets/images/edituse.png";
import dil from "../../../assets/images/deluser.png";
import ch from "../../../assets/images/change.png";
import st from "../../../assets/images/status.png";
import editt from "../../../assets/images/editt.png";
import axios from 'axios';
import { BASE_URL } from "../../../Utils/Config";
import { toast, Toaster } from "react-hot-toast";

const User = () => {
    const [personalInfoActive, setPersonalInfoActive] = useState(true);
    const [mailingAddressActive, setmailingAddressActive] = useState(false);
    const [userRoleActive, setuserRoleActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);
    const [clickedStates, setClickedStates] = useState(Array(3).fill(false));
    const [dropdownStates, setDropdownStates] = useState(Array(3).fill(false));
    const [imagePositionY, setImagePositionY] = useState(0);
    const [userRoles, setUserRoles] = useState([]);
    const [imagePositionX, setImagePositionX] = useState(0);
    const [userData, setUserData] = useState()
    const [selectedRole, setSelectedRole] = useState("");
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        userrole: ''
    });
    const {
        first_name,
        last_name,
        phone,
        email,
        password,
        password2,
        userrole
    } = formData;
    const [generatedPassword, setGeneratedPassword] = useState("");
    const generatePassword = () => {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
         
        setFormData({
            ...formData,
            password: newPassword,
            password2: newPassword
        });
        setGeneratedPassword(newPassword); 
    };
    const handleRoleSelect = (e) => {
        setSelectedRole(e.target.value);

    };


    const renderPlaceholder = () => {
        return selectedRole ? "" : "User Role";
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
    
        if (name !== 'userrole') {
            setFormData({
                ...formData,
                [name]: value
            });
        } else {
            const selectedRoleName = e.target.options[e.target.selectedIndex].text; // Get the name of the selected role
            setSelectedRole(selectedRoleName); // Update selectedRole with the name of the selected role
            setFormData({
                ...formData,
                userrole: selectedRoleName // Update userrole with the name of the selected role
            });
        }
    };
    
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/accounts/user-roles/`);
                console.log(response.data);
                setUserRoles(response.data);
            } catch (error) {
                console.error('Error fetching user roles:', error);
            }
        };

        fetchData();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!first_name || !last_name || !phone || !email || !password || !password2 || !selectedRole) {
            toast.error("All fields are required.");
            return;
        }
    
        if (password.trim() !== password2.trim()) {
            toast.error("Passwords do not match.");
            return;
        }
    
        try {
            const response = await axios.post(`${BASE_URL}/accounts/add_user/`, {
                first_name,
                last_name,
                email,
                phone,
                password,
                userrole: selectedRole // Send the selected role ID instead of its name
            });
            if (response.status === 200) {
                toast.success("Registration successful.");

            } else {
                toast.error("Something went wrong during registration.");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = Object.values(error.response.data.errors).flat();
                errorMessages.forEach(errorMessage => toast.error(errorMessage));
            } else {
                toast.error("An error occurred during registration.");
            }
        }
    };
    
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/accounts/userlist/`);
                
                const fetchedUserData = response.data;
                setUserData(fetchedUserData);
            } catch (error) {
                console.error('Error fetching user data:', error);
                toast.error("Error fetching user data");
            }
        };

        fetchUserData();
    }, []); // Empty dependency array to ensure the effect runs only once


    const calculateImagePosition = (event) => {
        const imageRect = event.target.getBoundingClientRect();
        setImagePositionY(imageRect.bottom);
        setImagePositionX(imageRect.left);
    };


    const handleToggleDropdown = (index) => {
        const newDropdownStates = [...dropdownStates];
        newDropdownStates[index] = !newDropdownStates[index];
        setDropdownStates(newDropdownStates);
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size <= 25 * 1024 * 1024) {
                setSelectedImage(file);
                setError(null);
            } else {
                setError('File size exceeds 25MB limit.');
            }
        } else {
            setError('Please select a valid image file.');
        }
    };

    const handleClick = (index) => {
        const newClickedStates = [...clickedStates];
        newClickedStates[index] = !newClickedStates[index];
        setClickedStates(newClickedStates);
    };

    const togglePersonalInfo = () => {
        setPersonalInfoActive(!personalInfoActive);

        if (!personalInfoActive) {
            setmailingAddressActive(false);
        }
    };

    const toggleuserRole = () => {
        setuserRoleActive(!userRoleActive);
        if (!userRoleActive) {
            setPersonalInfoActive(false);
            setmailingAddressActive(false);
        }
    };

    const togglemailingAddress = () => {
        setmailingAddressActive(!mailingAddressActive);
        if (!mailingAddressActive) {
            setPersonalInfoActive(false);
            setuserRoleActive(false);
        }
    };
    return (
        <div className='bg-[#f4f4f4] h-[100vh]  p-6 '>
            <div className='bg-white p-6 rounded-[8px]'>
                <p className='text-[color:var(--Black,#222)] text-[24px] not-italic font-semibold leading-[25px] tracking-[-0.12px]'>Add Users</p>
                <div className='flex pt-6 gap-[12rem] p-6'>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${personalInfoActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglePersonalInfo}>
                            <div className='flex gap-3'>
                                {personalInfoActive && <img src={imag} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${personalInfoActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Add User</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${mailingAddressActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={togglemailingAddress}>
                            <div className='flex gap-3'>
                                {mailingAddressActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${mailingAddressActive ? 'text-[#00549A]' : 'text-gray-600'}`}>Manage User</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className={`relative p-8 ${userRoleActive ? 'border-b-2 border-[#00549A]' : 'border-b-2 border-white'}`} onClick={toggleuserRole}>
                            <div className='flex gap-3'>
                                {userRoleActive && <img src={imag1} alt="" />}
                                <p className={`text-center text-[18px] not-italic font-normal leading-[20px] ${userRoleActive ? 'text-[#00549A]' : 'text-gray-600'}`}>User Role</p>
                            </div>
                        </button>
                    </div>
                </div>

                {personalInfoActive && (
                    <div className='w-[40%]'>
                        <Toaster position="top-center reverseOrder={false}" />
                        <form onSubmit={handleSubmit}>
                            <div className="text-start">
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>First Name</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="First Name"
                                        name="first_name"
                                        value={first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] pt-8 not-italic font-medium leading-[24px]'>Last Name</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Email</p>
                                <div className="pt-2">
                                    <input
                                        type="email"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Phone</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium pt-8 leading-[24px]'>Password</p>
                                <div className="pt-2">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Enter your password"
                                        value={generatedPassword} // Bind the generated password to the value attribute
                                        onChange={handleChange}
                                        name="password"
                                    />


                                </div>
                                <div className='pt-6 grid justify-items-end'>
                                    <button type="button" className='bg-[#222222] px-6 py-2 rounded-[6px]' onClick={generatePassword}>
                                        <p className='text-[color:var(--White,#FFF)] text-[16px] not-italic font-normal leading-[24px]'>Generate Password</p>
                                    </button>
                                </div>
                                <p className='text-[color:var(--Black,#222)] pt-8 text-[18px] not-italic font-medium leading-[24px]'>Reenter Password</p>
                                <div className="pt-2 relative">
                                    <input
                                        type="text"
                                        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4]"
                                        placeholder="Reenter Password"
                                        name="password2"
                                        value={password2}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pt-2 relative">
    <select
        className="border border-gray-400 rounded-[6px] px-[20px] py-4 w-full bg-[#F4F4F4] pr-[30px]"
        name="userrole"
        value={selectedRole} // Bind selectedRole to the value of the select element
        onChange={handleChange} // Update the handleChange function to handle changes
    >
        <option value="" disabled selected>Choose a role</option>
        {userRoles.map(role => (
            <option key={role.id} value={role.id}>{role.name}</option>
        ))}
    </select>
</div>

                                <div className='pt-8'>
                                    <button className='bg-[#00549A] rounded-[10px] w-full py-4'>
                                        <p className='text-white text-center text-[20px] not-italic font-semibold leading-[normal]'>Submit</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}


{mailingAddressActive && (
    <div className=' '>
        <div>
            {/* Search bar */}
            <button className='border border-gray-300 px-4 py-3 w-[40%] rounded-[6px]'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <img src={search} alt="" />
                        <p className='text-[color:var(--Gray,#58585A)] pl-2 text-[15px] not-italic font-normal leading-[normal]'>Search by data...</p>
                    </div>
                    <div>
                        <img src={cls} alt="" className='pl-[20rem]' />
                    </div>
                </div>
            </button>
        </div>
        <div className='pt-8'>
            <div className='bg-gray-100 py-4 w-full flex p-6 gap-2 pl-8 pr-8 '>
                <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-semibold leading-[normal]'>#ID</p>
                <div className=''>
                <p className='text-[color:var(--Gray,#58585A)] text-[18px] not-italic font-semibold pl-8  leading-[normal]'>Name</p>
                </div>
                <div>
                <p className='text-[color:var(--Gray,#58585A)] pl-[13rem] text-[18px] not-italic font-semibold leading-[normal]'>Email</p>
                </div>
                <div>
                <p className='text-[color:var(--Gray,#58585A)]  text-[18px] not-italic font-semibold pl-[18.5rem]  leading-[normal]'>Contact</p>
                </div>
                <div>
                <p className='text-[color:var(--Gray,#58585A)] pl-[8rem] text-[18px] not-italic font-semibold leading-[normal]'>User Type</p>
                </div>
                <p className='text-[color:var(--Gray,#58585A)] text-[18px] pl-[9rem] not-italic font-semibold   leading-[normal]'>Status</p>
            </div>
        </div>
        {userData.map((user, index) => (
    <div key={index} className='py-4 w-full flex p-6 items-center pl-8 pr-8'>
        <div className='w-[3%]'>
        <p className='text-[color:var(--Gray,#58585A)] text-[18px]   not-italic font-normal leading-[normal]'>{user.id}</p>
        </div>
        <img src={click} alt="" className=' pl-8' />
        <div className='w-[25%] pl-4'>
        <p className='text-[color:var(--Gray,#58585A)]  text-[18px] not-italic font-normal leading-[normal]'>{`${user.first_name} ${user.last_name}`}</p>
        </div>
        <div className='w-[36%]'>
        <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-normal leading-[normal]'>{user.email}</p>
        </div>
        <div className='w-[15%]'>
        <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-normal leading-[normal]'>{user.phone}</p>
        </div>
        <div className='w-[15%]'>
        <p className='text-[color:var(--Gray,#58585A)]   text-[18px] not-italic font-normal leading-[normal]'>{user?.userrole?.name}</p>
        </div>
        <div className='pl-16'>
            <img src={eye} alt="" className='w-[100%]' />
        </div>
        <div className='pl-[4rem]'>
            <button className='px-6 py-1 rounded-[4px]' style={{ background: "rgba(26, 183, 141, 0.10)" }}>
                <p className='text-[color:var(--Green,#1AB78D)] text-[16px] not-italic font-medium leading-[normal]'>Active</p>
            </button>
        </div>
        <img src={img} alt="" className='pl-[5rem]' onClick={() => handleToggleDropdown(index)} />
        {dropdownStates[0] && (
                                <div className='absolute right-32 top-[20rem] bg-white rounded-[8px] p-6 w-[20%] shadow-2xl'  >
                                    <div className='border border-gray-300 rounded-[8px]'>
                                        <Link to="/user-editprofile">
                                            <div className='flex p-4 '>
                                                <img src={edi} alt="" />
                                                <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Profile Edit</p>
                                            </div>
                                        </Link>
                                        <hr />
                                        <div className='flex p-4 '>
                                            <img src={dil} alt="" />
                                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Delete</p>
                                        </div>
                                        <hr />
                                        <Link to="/usertype">
                                            <div className='flex p-4 '>
                                                <img src={ch} alt="" />
                                                <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Change User Type</p>
                                            </div>
                                        </Link>
                                        <hr />
                                        <Link to="/user-status">
                                            <div className='flex p-4 '>
                                                <img src={st} alt="" />
                                                <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Status</p>
                                            </div>
                                        </Link>
                                        <hr />
                                    </div>
                                </div>
                            )}
    </div>
))}

    </div>
)}
        {userRoleActive && (
                    <div className=' '>

                        <p className='text-[color:var(--Black,#222)] text-[18px] not-italic font-medium leading-[24px]'>Role Name</p>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px]  not-italic font-normal leading-[24px]'>Basic User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px] not-italic font-normal leading-[24px]'>Premium User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-3 pt-4'>
                            <div className=' border border-gary-300 rounded-[6px] px-4 w-[34%] py-3'>
                                <p className='text-gray-400 text-[16px]  not-italic font-normal leading-[24px]'>Advanced User</p>
                            </div>
                            <div className=' border border-gary-300 rounded-[6px]  px-5 py-3'>
                                <img src={editt} alt="" />
                            </div>
                        </div>
                    </div>

                )}
                <div>
                    {/* <div className='bg-white rounded-[8px] p-6 w-[20%] shadow-2xl h-[30%]'>
                        <div className='border border-gray-300 rounded-[8px]'> 
                        <div className='flex p-4 '>
                            <img src={edi} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Profile Edit</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={dil} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Delete</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={ch} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Change User Type</p>
                        </div>
                        <hr />
                        <div className='flex p-4 '>
                            <img src={st} alt="" />
                            <p className='ext-[color:var(--Black,#222)] pl-4 pt-2 text-[14px] not-italic font-semibold leading-[normal]'>Status</p>
                        </div>
                        <hr />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default User;
