import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import Status from "../../Components/Admin/Auser/Astatus";
 
import "./Adashboard.css";

const  StatusPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <Status/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default StatusPage;
