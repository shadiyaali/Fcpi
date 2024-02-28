import React from "react";
import Sidebar from "../../../Components/User/Dashboard/Sidebar/Sidebar";
import Navbar from "../../../Components/User/Dashboard/Navbar/Navbar"; 
import Points from "../../../Components/User/Dashboard/UseDashboard/MyPoints"; 
import "./Dashboard.css";

const MyPointsPage = () => {
    return (
       
        <div className="">
            <div className="sidebardiv pos-side">
            <Sidebar />
            </div>

            <div className="navdiv pos">          
            <Navbar />
            <Points/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default MyPointsPage;
