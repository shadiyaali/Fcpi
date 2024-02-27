import React from "react";
import Sidebar from "../../../Components/User/Dashboard/Sidebar/Sidebar";
import Navbar from "../../../Components/User/Dashboard/Navbar/Navbar"; 
import UserDashboard from "../../../Components/User/Dashboard/UseDashboard/UserDashboard"; 
import "./Dashboard.css";

const UserDashboardPage = () => {
    return (
       
        <div className="">
            <div className="sidebardiv">
            <Sidebar />
            </div>

            <div className="navdiv">          
            <Navbar />
            <UserDashboard />
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default UserDashboardPage;
