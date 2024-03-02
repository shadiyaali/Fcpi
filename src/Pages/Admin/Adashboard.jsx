import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import Adashboard from "../../Components/Admin/Adashboard/Adashboard"
 
import "./Adashboard.css";

const PasswordPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           < Adashboard/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default PasswordPage;
