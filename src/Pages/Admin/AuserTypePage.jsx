import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import UserType from "../../Components/Admin/Auser/AuserType";
 
import "./Adashboard.css";

const  UserTypePage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <UserType/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default UserTypePage;
