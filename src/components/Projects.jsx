import React from 'react';
import currencyImage1 from '../assets/currencyImage1.png';
import adminDashboard from '../assets/project1.png';
import allProjects from '../assets/allProjects.png';
import project3 from '../assets/project3.avif';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.avif';

const Projects = () => {
  // Project data including links, names, and descriptions
  const projectData = [
    { id: 1, link: 'https://admin-dashboardsyncfusion.vercel.app', image: adminDashboard, name: 'Admin Dashboard', description: 'I can make an admin-dashboard. It is fully responsive and attractive for users.' },
    { id: 2, link: 'https://currency-converterjs.vercel.app', image: currencyImage1, name: 'Currency Converter', description: 'I can make a currency converter app with real-time API' },
    { id: 3, link: 'https://my-all-personal-projects.vercel.app/', image: allProjects, name: 'All Projects', description: 'All my projects are available here. You can visit and see them.' },
    { id: 4, link: 'https://ahmadmamoon.netlify.app', image: project3, name: 'Project 4', description: 'Graphic Design' },
    { id: 5, link: 'https://ahmadmamoon.netlify.app', image: project4, name: 'Project 5', description: 'Web Development' },
    { id: 6, link: 'https://ahmadmamoon.netlify.app', image: project5, name: 'Project 6', description: 'Graphic Art' },
  ];

  return (
    <section id="projects">
      <div className="max-w-[90%] mx-auto pt-16 md:pt-10 px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center mb-12">Showcase of my works on website development</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" // Added for security when opening in a new tab
              className="relative block h-48 sm:h-64 rounded-lg overflow-hidden group shadow-lg"
            >
              {/* Background image with hover effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Dark overlay and text reveal */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <div className="text-center text-white px-4 py-2">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Button to view all projects */}
        <div className="flex justify-center">
          <a
            href="https://my-all-personal-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-orange-600 transition duration-300"
          >
            All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
