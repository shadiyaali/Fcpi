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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
