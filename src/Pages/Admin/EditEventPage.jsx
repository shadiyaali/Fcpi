import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import EditEvents from "../../Components/Admin/AEvents/Edit";
 
import "./Adashboard.css";

const  EditPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <EditEvents/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default EditPage;
