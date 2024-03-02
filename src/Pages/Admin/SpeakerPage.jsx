import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import Speaker from "../../Components/Admin/Speaker/Speaker";
 
import "./Adashboard.css";

const  AforumPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <Speaker/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default AforumPage;
