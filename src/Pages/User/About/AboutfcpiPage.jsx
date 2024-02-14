import react from "react";
import Home from "../../../Components/Home/index";
import About from "../../../Components/User/About/About fcpi"; 
import AboutCard2 from "../../../Components/User/About/Card2"; 
import AboutCard3 from "../../../Components/User/About/Card3"; 
import AboutCard4 from "../../../Components/User/About/Card4"; 
import Footer from  "../../../Components/Footer/Footer";


const AboutPage = () => {

    return (
        <div>
    <Home/>
    <About/>
    <AboutCard2/>
    <AboutCard3/>
    <AboutCard4/>
  <Footer/> 
    </div>
    )
}
export default AboutPage;