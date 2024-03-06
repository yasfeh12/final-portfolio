import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  return (
    <div>
      <img
        src="https://imgs.search.brave.com/xtE9jIIsy8NLtx0-EpJOUk67TcTaHvMJEEeC1Hcf35w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/OTExMzY2Ny9waG90/by9nb3QtYS1wcm9i/bGVtLWNvbnRhY3Qt/dXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVhZNkNkVFM0/UGxraVMycndfRVdt/SmRnN19mRzVvNHQy/OHh4TDVHVTlkMEU9" 
        alt="contact me Image"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
    
      <h1>Contact me</h1>
      <ul>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://github.com/yasfeh12', '_blank')}>
            <i className="fa-brands fa-square-github"></i> Github: yasfeh12
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://instagram.com/yaseenfehad', '_blank')}>
            <i className="fa-brands fa-square-instagram"></i> Instagram: Yaseen fehad
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://facebook.com/YaseenFehad', '_blank')}>
            <i className="fa-brands fa-square-facebook"></i> Facebook: Yaseen Fehad
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://www.linkedin.com/in/yaseen-fehad-760605282/', '_blank')}>
            <i className="fa-brands fa-linkedin"></i> LinkedIn: https://www.linkedin.com/in/yaseen-fehad-760605282/
          </button>
        </li>
      </ul>

      <div className="learn-container">
        <Link to="learn" role="button" className="btn btn-link" id="learnmore-btn">
          Learn More
        </Link>
        <Link to="contact" role="button" className="btn btn-link" id="learnless-btn"> 
          Learn Less
        </Link>
      </div>

      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
