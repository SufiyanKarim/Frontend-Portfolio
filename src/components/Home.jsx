import React, { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import Typewriter from "typewriter-effect";
import portfolioImage from "../assets/sufiyan.jpg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="home" className="h-auto lg:h-[75vh] max-w-[100%] mt-8">
      <main className="max-w-[90%] mx-auto pt-16 md:pt-36 px-4 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around h-full">
          <div
            className="md:w-1/2 mb-8 md:mb-0 lg:ml-20 mx-auto"
            data-aos="fade-up" // Apply AOS effect
            data-aos-duration="1000"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Hi I am</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              Sufiyan Karim
            </h2>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              <Typewriter
                options={{
                  strings: [
                    "React Developer",
                    "Web Developer",
                    "UI & UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 75,
                }}
              />
            </div>
            <p className="mb-6">
              Are you searching for a dedicated and reliable professional web
              developer who can take your project to the next level? Look no
              further! With a strong commitment to quality and satisfaction, I'm
              here to help you achieve your goals.
            </p>
            <a
              href="#contact"
              className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-orange-600 inline-block mb-6"
            >
              Hire Me
            </a>
          </div>
          <div
            className="md:w-2/6 flex justify-center items-center flex-col gap-4"
            data-aos="fade-up" // Apply AOS effect
            data-aos-duration="1000"
          >
            <img
              src={portfolioImage}
              alt="Sufiyan Karim"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto bg-gray-300"
            />
            <div className="flex space-x-4">
              {/* Mail Icon */}
              <a
                href="mailto:sufiyankarimk@gmail.com" // Replace with your email
                className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              {/* GitHub Icon */}
              <a
                href="https://github.com/SufiyanKarim" // Replace with your GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <FaGithub size={24} />
              </a>
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/sufiyan-karim-4974782a3/" // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
