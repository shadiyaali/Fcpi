import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import Aforum from "../../Components/Admin/Forum/Aforum";
 
import "./Adashboard.css";

const  AforumPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <Aforum/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default AforumPage;
