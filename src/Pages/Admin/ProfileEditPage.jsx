import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import Profile from "../../Components/Admin/Auser/ProfileEdit";
 
import "./Adashboard.css";

const  ProfilePage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <Profile/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default ProfilePage;
