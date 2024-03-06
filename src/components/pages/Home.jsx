import React from 'react';

function Home() {
  return (
    <div>
      <img
        src="https://www.techmagic.co/blog/content/images/size/w1000/2020/09/How-to-Find-and-Hire_inner-02-@2x.png" 
        alt="Bootstrap Image"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
       <h1>Welcome to my portfolio</h1>
      <h1>What you get with me</h1>
      <p>
      Hello! I'm Yaseen, a recently trained Front-End Engineer with a strong foundation in HTML, CSS, and JavaScript.
      Eager to embark on a journey of continuous learning and growth, I am enthusiastic about crafting captivating and user-friendly web experiences. 
      Armed with a passion for clean and efficient code, I am ready to contribute to creating visually appealing and seamlessly functional websites.
      My dedication to staying current with industry trends and my commitment to producing high-level work make me a dynamic addition to any web development team.
      I am excited to apply my skills, embrace challenges, and evolve as a front-end professional in the ever-evolving world of web development.
      </p>
      <button onClick={() => window.open('https://github.com/yasfeh12', '_blank')}
      className="btn btn-dark" 
       id="resume-btn"
      >
        My portfolio
      </button>
    </div>
  );
}

export default Home;
