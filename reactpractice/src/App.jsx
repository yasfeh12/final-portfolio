import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Resume from './components/pages/resume';
import Profile from './components/pages/profile';
import Contact from './components/pages/Contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
