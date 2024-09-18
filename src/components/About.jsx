import React from "react";
import { motion } from "framer-motion";
import portfolioImage from "../assets/sufiyan.jpg";
import portfolioImage2 from "../assets/portfolioImage2.jpg";
import portfolioImage3 from "../assets/portfolioImage3.jpg";

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium ">{skill}</span>
      <span className="text-sm font-medium ">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      {/* Use Framer Motion to animate the skill bar */}
      <motion.div
        className="bg-orange-500 h-2.5 rounded-full"
        initial={{ width: 0 }} // Start from 0
        animate={{ width: `${level}%` }} // Animate to the skill level percentage
        transition={{ duration: 2, ease: "easeInOut" }} // Animation settings
      ></motion.div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="h-auto w-full">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="md:w-2/6 mb-8 md:mb-0 ">
              <img
                src={portfolioImage2}
                alt="About Me"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto bg-gray-300"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left md:text-left">
                About Me
              </h2>
              <p className="mb-6">
                Developed custom websites for clients , utilizes technologies
                such as <span className="font-bold ">HTML</span>, <span className="font-bold ">CSS</span>, <span className="font-bold ">JavaScript</span>,<span className="font-bold "> Tailwind CSS</span> and <span className="font-bold ">react JS</span>. Collaborated with
                clients to understand their requirements and deliver tailored
                solutions that met their needs and expectations. Managed project
                timelines, budgets and communication to ensure timely delivered
                and client satisfaction.
              </p>
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
