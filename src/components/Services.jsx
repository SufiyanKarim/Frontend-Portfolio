import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ServiceCard = ({ icon, title, description }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center ${
        isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div
        className={`flex items-center justify-center text-4xl mb-4 ${
          isDarkMode ? 'text-orange-500' : 'text-orange-600'
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const services = [
    {
      icon: <AiFillHtml5 />,
      title: 'HTML5',
      description: 'Craft and style web pages with HTML5, the core technology of the web.',
    },
    // {
    //   icon: <DiCss3 />,
    //   title: 'CSS3',
    //   description: 'Design and layout your web pages with CSS3 for modern and responsive designs.',
    // },
    {
      icon: <DiJavascript1 />,
      title: 'JavaScript',
      description: 'Enhance user interactivity and functionality on your websites with JavaScript.',
    },
    {
      icon: <SiTailwindcss />,
      title: 'Tailwind CSS',
      description: 'Create custom, responsive designs quickly with the Tailwind CSS utility framework.',
    },
    {
      icon: <FaReact />,
      title: 'React JS',
      description: 'Build dynamic, component-based user interfaces with React.',
    },
  ];

  return (
    <section id="services"  >
      <div className="max-w-[90%] pt-16 md:pt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services</h2>
          <p className="text-center mb-12">
            Explore the range of services and technologies we specialize in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-duration="1000">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
