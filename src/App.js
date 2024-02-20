import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/Home';
import AboutfcpiPage from './Pages/User/About/AboutfcpiPage';
import PrivateRoute from './Components/PrivateRouter';
import AboutBoardPage from './Pages/User/About/AboutBoardPage';
import AboutForumPage from './Pages/User/About/AboutForumPage';
import Events from './Pages/User/Events/Eventpage'; 
import SpecialityForum from './Pages/User/SpecialityForum/SpecialityPage';

 

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
         
            <Route  path='/' element={<HomePage/>} />
      
          <Route Component= {AboutfcpiPage} path='/about-fcpi'/>
          <Route Component= {AboutBoardPage} path='/board-of-directors'/>
          <Route Component= {AboutForumPage} path='/forum-members'/>
          <Route Component={SpecialityForum} path='/speciality-forum'/>
          <Route Component={Events} path='/events'/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;