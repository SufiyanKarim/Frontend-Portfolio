import React, { useEffect } from "react";
import DGSImage from "../assets/DGS.png";
import DGSDashboard from "../assets/DGSDashboard.png";
import currencyImage1 from "../assets/currencyImage1.png";
import adminDashboard from "../assets/project1.png";
import allProjects from "../assets/allProjects.png";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const projectData = [
    {
      id: 1,
      link: "https://digital-gateway-service.vercel.app/",
      image: DGSImage,
      name: "Gigital Gateway Service",
      description:
        "I can make a digital gateway service website to provide the service for users. It is fully responsive and fully animated.",
    },
    {
      id: 2,
      link: "https://digital-gateway-service.vercel.app/",
      image: DGSDashboard,
      name: "Gigital Gateway Service Dashboard",
      description:
        "I can make a digital gateway service dashboard. Admin can add, delete, and update users and perform all activities in the dashboard.",
    },
    {
      id: 3,
      link: "https://admin-dashboardsyncfusion.vercel.app",
      image: adminDashboard,
      name: "Admin Dashboard",
      description:
        "I can make an admin dashboard. It is fully responsive and attractive for users.",
    },
    {
      id: 4,
      link: "https://currency-converterjs.vercel.app",
      image: currencyImage1,
      name: "Currency Converter",
      description: "I can make a currency converter app with real-time API.",
    },
    {
      id: 5,
      link: "https://my-all-personal-projects.vercel.app/",
      image: allProjects,
      name: "All Projects",
      description:
        "All my projects are available here. You can visit and see them.",
    },
  ];

  return (
    <section id="projects">
      <div className="max-w-[90%] mx-auto pt-16 md:pt-10 px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-center mb-12">
          Showcase of my works on website development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-48 sm:h-64 rounded-lg overflow-hidden group shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={project.image}
                alt="Project"
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <div className="text-center text-white px-4 py-2">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

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
