import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/Home';
import AboutfcpiPage from './Pages/User/About/AboutfcpiPage';
import PrivateRoute from './Components/PrivateRouter';
import AboutBoardPage from './Pages/User/About/AboutBoardPage';
import AboutForumPage from './Pages/User/About/AboutForumPage';
 

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
         
            <Route  path='/' element={<HomePage/>} />
      
          <Route Component= {AboutfcpiPage } path='/about-fcpi'/>
          <Route Component= {AboutBoardPage } path='/board-of-directors'/>
          <Route Component= {AboutForumPage } path='/forum-members'/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;