import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import User from "../../Components/Admin/Auser/Auser";
 
import "./Adashboard.css";

const  AuserPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <User/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default AuserPage;
