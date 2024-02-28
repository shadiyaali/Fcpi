import React from "react";
import Sidebar from "../../../Components/User/Dashboard/Sidebar/Sidebar";
import Navbar from "../../../Components/User/Dashboard/Navbar/Navbar"; 
import Password from "../../../Components/User/Dashboard/UseDashboard/ChangePassword"; 
import "./Dashboard.css";

const MyProfilePage = () => {
    return (
       
        <div className="">
            <div className="sidebardiv pos-side">
            <Sidebar />
            </div>

            <div className="navdiv pos">          
            <Navbar />
            <Password/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default MyProfilePage;
