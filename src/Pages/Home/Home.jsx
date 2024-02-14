import react from "react";
import Home from "../../Components/Home/index";
import Card1 from "../../Components/Card1/Card";
import Card2 from "../../Components/Card2/Card2"; 
import Card3 from '../../Components/Card3/Card3';
import Card4 from '../../Components/Card4/Card4';
import Card5 from '../../Components/Card5/Card5';
import Card6 from '../../Components/Card6/Card6';
import Card7 from '../../Components/Card7/Card7';
import Footer from '../../Components/Footer/Footer';


const HomePage = () => {

    return (
        <div>
    <Home/>
    <Card1/>
    <Card2/>  
    <Card3/>
    <Card4/> 
   <Card5/> 
  <Card6/>  
     <Card7/>  
  <Footer/> 
    </div>
    )
}
export default HomePage;