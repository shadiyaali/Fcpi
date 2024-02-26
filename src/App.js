import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/Home';
import AboutfcpiPage from './Pages/User/About/AboutfcpiPage';
import AboutBoardPage from './Pages/User/About/AboutBoardPage';
import AboutForumPage from './Pages/User/About/AboutForumPage';
import Events from './Pages/User/Events/Eventpage'; 
import DetailPage from './Pages/User/Events/EventDetailPage'; 
import SpecialityForum from './Pages/User/SpecialityForum/SpecialityPage';
import MemberPage from './Pages/User/About/MemberPage';
import BlogsPage from './Pages/User/Blogs/BlogsPage';
import BlogDetailPage from './Pages/User/Blogs/BlogDetailPage';
import ContactPage from './Pages/User/Contact/ContactPage';
import RegisterPage from './Pages/User/Register/RegisterPage';
import Otp from './Components/User/Dashboard/Otp';
import LoginPage from './Pages/User/Dashboard/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-fcpi' element={<AboutfcpiPage />} />
          <Route path='/board-of-directors' element={<AboutBoardPage />} />
          <Route path='/forum-members' element={<AboutForumPage />} />
          <Route path='/speciality-forum' element={<SpecialityForum />} />
          <Route path='/events' element={<Events />} />
          <Route path='/details/:id' element={<MemberPage />} />
          <Route path='/event-detail' element={<DetailPage/>} />
          <Route path='/blogs' element={<BlogsPage/>} />
          <Route path='/blogs-detail' element={<BlogDetailPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
{/* ........................................................................... */}
           <Route path='/otp' element={<Otp/>} />
           <Route path='/login' element={<LoginPage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
