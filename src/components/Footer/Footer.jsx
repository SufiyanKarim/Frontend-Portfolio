import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import { useSelector } from "react-redux";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div>
      <footer className="pt-8">
        <div className="container mx-auto px-4 py-14">
          <div className="flex flex-col items-center gap-10">
            <nav className="mb-4">
              <ul className="flex flex-wrap justify-center gap-4">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Projects",
                
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className=""
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
             
              <a
                href="mailto:sufiyankarimk@gmail.com" // Replace with your email
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "hover:bg-gray-700 hover:text-white"
                    : "hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <FaEnvelope size={24} />
              </a>

              <a
                href="https://github.com/SufiyanKarim" // GitHub link
                target="_blank" // Open link in new tab
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "hover:bg-gray-700 hover:text-white"
                    : "hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sufiyan-karim-4974782a3/" // LinkedIn link
                target="_blank" // Open link in new tab
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "hover:bg-gray-700 hover:text-white"
                    : "hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`w-full mx-auto flex justify-center items-center p-3 ${
            isDarkMode
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-300 text-gray-900"
          }`}
        >
          <p className="text-sm">
            © 2024 SufiyanKarim All Rights Reserved, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
