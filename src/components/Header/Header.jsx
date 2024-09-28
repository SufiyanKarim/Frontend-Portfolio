import { Moon, Sun, Menu, X } from "lucide-react"; // Importing lucide-react icons
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { toggleTheme, setDarkMode } from "../../features/themeSlice";

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility
  const [activeSection, setActiveSection] = useState("home"); // State to track the active section
  const [scrolled, setScrolled] = useState(false); // State to track scroll position for navbar height

  const navigate = useNavigate(); // For navigating to the Resume page

  // Toggle dark mode using Redux
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  // Check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      dispatch(setDarkMode(true));
      document.documentElement.classList.add("dark");
    } else {
      dispatch(setDarkMode(false));
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  // Apply the theme based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section); // Update active section
    setMenuOpen(false); // Close the menu on mobile
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  // Change navbar height on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // You can adjust 50px as per your preference
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle CV download and navigation to the Resume page
  const handleDownloadCV = () => {
    navigate("/resume"); // Navigate to the resume page
  };

  // Dynamically change the active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "services", "projects",  "contact"];
    
    const sectionElements = sections.map((section) => document.getElementById(section));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // Change this value to adjust when the section is considered "in view"
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
        scrolled ? "py-2 lg:py-3 bg-opacity-90" : "py-2 lg:py-3"
      } bg-gray-100 dark:bg-gray-900`}
    >
      <div className="lg:max-w-[90%] lg:mx-auto w-full px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xs lg:text-2xl md:text-2xl font-bold text-gray-900 dark:text-gray-100"
          >
            Sufiyan <span className=" border-b-2 border-orange-500 text-orange-500">Karim</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 lg:space-x-10">
            {["Home", "About", "Services", "Projects",  "Contact"].map((item) => {
              const section = item.replace(/\s+/g, "").toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${section}`}
                  onClick={() => handleSectionClick(section)}
                  className={`text-gray-900 dark:text-gray-100 pb-1 ${
                    activeSection === section ? "border-b-4 border-orange-500" : ""
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="bg-orange-500 text-white lg:px-4 lg:py-2 md:py-2 md:px-4 lg:text-sm py-1 px-2 text-xs rounded hover:bg-orange-600"
            >
              View CV
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={handleToggleTheme}
              className={`text-gray-900 dark:text-gray-100 p-2 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            >
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile & Tablet Menu Toggle Button */}
            <button
              onClick={handleToggleMenu}
              className={`lg:hidden text-gray-900 dark:text-gray-100 p-2 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile and Tablet Navigation Menu */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-center gap-5 py-4 bg-gray-100 dark:bg-gray-800 absolute left-0 w-full z-50 shadow-lg">
            {["Home", "About", "Services", "Projects",  "Contact"].map((item) => {
              const section = item.replace(/\s+/g, "").toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${section}`}
                  onClick={() => handleSectionClick(section)}
                  className={`text-gray-900 dark:text-gray-100 ${
                    activeSection === section ? "border-b-2 border-orange-500" : ""
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
