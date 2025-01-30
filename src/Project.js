import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project One", description: "Description of project one." },
    { title: "Project Two", description: "Description of project two." },
    { title: "Project Three", description: "Description of project three." },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
