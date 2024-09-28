import React, { useEffect } from "react";
import { motion } from "framer-motion";
import portfolioImage2 from "../assets/portfolioImage2.jpg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium">{skill}</span>
      <span className="text-sm font-medium">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-orange-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section 
      id="about" 
      className="h-auto w-full py-16"
      data-aos="fade-up" // Use fade-up for bottom to top effect
      data-aos-duration="1000" // Duration of the animation
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div
            className="md:w-2/6 mb-8 md:mb-0"
            data-aos="fade-up" // Apply the same effect to the image
            data-aos-duration="1000"
          >
            <img
              src={portfolioImage2}
              alt="About Me"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto bg-gray-300 shadow-lg"
            />
          </div>
          <div
            className="md:w-1/2 md:pl-12"
            data-aos="fade-up" // Apply the same effect to the text
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left md:text-left">
              About Me
            </h2>
            <p className="mb-6">
              Developed custom websites for clients, utilizing technologies
              such as <span className="font-bold">HTML</span>,{" "}
              <span className="font-bold">CSS</span>,{" "}
              <span className="font-bold">JavaScript</span>,{" "}
              <span className="font-bold">Tailwind CSS</span>, and{" "}
              <span className="font-bold">React JS</span>. Collaborated with
              clients to understand their requirements and deliver tailored
              solutions that met their needs and expectations. Managed project
              timelines, budgets, and communication to ensure timely delivery
              and client satisfaction.
            </p>
            <div className="space-y-4">
              <SkillBar skill="HTML/CSS" level={90} />
              <SkillBar skill="JavaScript" level={85} />
              <SkillBar skill="Tailwind CSS" level={80} />
              <SkillBar skill="React JS" level={75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
