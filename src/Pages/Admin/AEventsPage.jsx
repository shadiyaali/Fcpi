import React from "react";
import Asidebar from "../../Components/Admin/Asidebar/Asidebar";
import Anavbar from "../../Components/Admin/Anavbar/Anavbar"; 
import AEvents from "../../Components/Admin/AEvents/AddEvents";
 
import "./Adashboard.css";

const  EventsPage = () => {
    return (
       
        <div className="">
            <div className="asidebardiv apos-side">
            <Asidebar />
            </div>

            <div className="anavdiv apos">          
            <Anavbar />
           <AEvents/>
            </div>
                  
                  
                  
            </div>   
         
          
         
          
       
    );
}

export default EventsPage;
