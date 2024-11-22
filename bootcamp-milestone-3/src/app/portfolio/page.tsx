import React from 'react';
import PortfolioPreview from '../components/portfolioPreview';
import connectDB from '../database/db';
import Project from '../database/portfolioSchema'; 

async function getProjects() {
  await connectDB();

  try {
      const projects = await Project.find().sort({ name: 1 }).orFail();
      return projects;
  } catch (err) {
      return null; 
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Homepage</a>
        </h1>
      </nav>

      <main className="px-5 pt-2 pb-5">
        <h1 className="text-5xl font-bold text-center mb-3">Project Portfolio</h1>
        <h2 className="text-2xl text-center mb-5">Some of the projects I have worked on!</h2>
        <div id="portfolio-container" className="flex flex-wrap justify-center gap-5">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <PortfolioPreview
                key={project._id}
                name={project.name}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                link={project.link}
              />
            ))
          ) : (
            <p className="text-center">No projects found. Please check back later!</p>
          )}
        </div>
      </main>
      <hr />

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
}
