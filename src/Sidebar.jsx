// Sidebar.jsx
import React from "react";
import { FaHome, FaUser, FaFolder, FaBriefcase, FaTrophy, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-16 md:w-20 bg-white shadow-md flex flex-col justify-center items-center z-50">
      <div className="flex flex-col items-center justify-center space-y-8 text-gray-500 text-2xl mt-8">
        <a href="#home" className="group relative flex items-center">
          <FaHome />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Home
          </span>
        </a>
        <a href="#about" className="group relative flex items-center">
          <FaUser />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            About
          </span>
        </a>
        <a href="#projects" className="group relative flex items-center">
          <FaFolder />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Projects
          </span>
        </a>
        <a href="#work" className="group relative flex items-center">
          <FaBriefcase />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Work
          </span>
        </a>
        <a href="#certificates" className="group relative flex items-center">
          <FaTrophy />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Achievements
          </span>
        </a>
        <a href="#contact" className="group relative flex items-center">
          <FaEnvelope />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
