import React from 'react';

function Profile() {
  return (
    <div>

<img
        src="https://imgs.search.brave.com/UknLgpqFB4FXNesLcqLdZ5gDCzS42NbKzoJJ-Fy6mbU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI1LzYzLzM4/LzM2MF9GXzEyNTYz/Mzg4NF9UNWEwQU96/bVlXSmtVTHBUdzNM/NGFCMVQ4dFVRTDE3/Zi5qcGc" 
        alt="computer science img"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
      <h1>my profile Page</h1>
      <p>
        
Hello, I'm Yaseen, an individual driven by a passion for technology and a love for coding. Armed with a solid college education and a track record of high grades, I've cultivated a strong foundation in computer science. My journey in the tech realm has been dynamic, exploring and utilizing various types of technology to create innovative solutions.

I have a natural knack for engineering, allowing me to approach challenges with a problem-solving mindset. Throughout my academic journey, I not only excelled in theoretical concepts but also applied my knowledge to real-world scenarios. This hands-on experience has equipped me with the skills to engineer effective solutions.

What sets me apart is not just my academic achievements but my genuine enthusiasm for technology. I am constantly exploring new programming languages, experimenting with cutting-edge tools, and diving into exciting projects. I see technology not just as a tool but as a means to make a meaningful impact on the world.

With a dynamic and innovative approach, I am eager to contribute to and thrive in any tech-driven team. Whether it's coding, creating, or exploring new possibilities, I bring a passion for innovation and a commitment to excellence in everything I do.

      </p>

      <button onClick={() => window.open('https://yasfeh12.github.io/Bootstrap-Portfolio/', '_blank')}
      className="btn btn-dark" 
       id="resume-btn"
      >
    More on me?
      </button>
    </div>
    
  );
}

export default Profile;

