import React from "react";
import Sidebar from "../../../Components/User/Dashboard/Sidebar/Sidebar";
import Navbar from "../../../Components/User/Dashboard/Navbar/Navbar"; 
import UserDashboard from "../../../Components/User/Dashboard/UseDashboard/UserDashboard"; 
import "./Dashboard.css";

const PasswordPage = () => {
    return (
       
        <div className="">
            <div className="sidebardiv pos-side">
            <Sidebar />
            </div>

            <div className="navdiv pos">          
            <Navbar />
            <UserDashboard />
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default PasswordPage;