import React from 'react';
import ProjectCard from '../projectCard';
import Wrapper from '../Wrapper';
import Title from '../Title';
import projectData from '../projects.json';

function Resume() {
  return (
    <div>
      <img
        src="https://www.upgrad.com/__khugblog-next/image/?url=https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/720x400Technology__1640776472617.png&w=828&q=75"
        alt="employment skills"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
      <h1>What I Bring to the Table</h1>
      <p>
        As a freshly trained Front-End Engineer, I bring a wealth of knowledge in CSS, HTML, and JavaScript to the table. 
        My competency extends beyond just crafting visually appealing and user-friendly interfaces; I am adept at translating design concepts into seamless web experiences. 
        My dedication to staying abreast of the latest industry trends and technologies reflects my commitment to continuous learning and improvement. 
        With a solid foundation in web development, I am well-versed in responsive design principles and front-end frameworks, eager to apply these skills to create dynamic and efficient websites. 
        I am not just a coder but a proactive problem solver, constantly seeking innovative solutions and embracing challenges with enthusiasm. 
        My professional journey is not only about what I already know but also about my eagerness to absorb new knowledge, adapt swiftly, and contribute to the ever-evolving field of front-end development. 
        I am excited to embark on this journey, ready to learn, grow, and make a meaningful impact as a Front-End Engineer.
      </p>
      <button
  onClick={() => window.open('https://docs.google.com/document/d/11cTsTbToq9UAS9qI_QCEdN9FwR35b_2c/edit?usp=sharing&ouid=102268989888194378594&rtpof=true&sd=true', '_blank')}
  className="btn btn-dark" 
  id="resume-btn"
>
  My Resume
</button>

      <Title>MY PROJECTS</Title>
      <button onClick={() => window.open('https://github.com/yasfeh12', '_blank')}
      className="btn btn-dark" 
       id="resume-btn"
      >
        My portfolio
      </button>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          link={(
            <button
              onClick={() => window.open(project.link, '_blank')}
              className="btn btn-dark"
              id="project-btn"
            >
              {project.name} Project
            </button>
          )}
        />
      ))}
    </div>
  );
}

export default Resume;
