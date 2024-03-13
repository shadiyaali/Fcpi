import React, { useState, useEffect } from "react";
import axios from "axios";
import RightArrow from "../../../src/assets/images/Frame 10.svg";
import "./Card6.css";
import { BASE_URL } from '../../Utils/Config';

const Card6 = () => {
  const [forums, setForums] = useState([]);


useEffect(() => {
  const fetchForums = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admins/forums/`);
      setForums(response.data);
      console.log(response.data); // Log the response to check the structure and image URLs
    } catch (error) {
      console.error("Error fetching forums:", error);
    }
  };

  fetchForums();
}, []);

  return (
    <div className="w-full h-full pt-6 bg-[#f4f4f4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {forums.map((forum) => (
            <div key={forum.id} className="bg-[#C5E5FF] rounded-[30px]">
              <div className="relative">
                <img src={forum.image} alt="Logo" className="w-full rounded-[30px]" />
                <img src={RightArrow} alt="Right Arrow" className="absolute right-3 top-8 transform -translate-y-1/2" />
              </div>
              <p className="text-[#222] p-4 text-start pl-8 text-[21px] not-italic font-medium leading-[normal]">{forum.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card6;
