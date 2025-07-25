import React from "react";
import { FaLinkedin, FaGithub, FaVideo } from "react-icons/fa";
import {
    FaHome,
    FaUser,
    FaFolder,
    FaBriefcase,
    FaTrophy,
    FaEnvelope,
} from "react-icons/fa";
import { fullname, links, profileImage, tagline } from "./data";

export default function Home() {
    return (
        <div id="home" className="min-h-screen bg-gradient-to-r from-slate-100 to-white flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-16 "
        >
            {/* Main Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left ">
                <h1 className="text-2xl md:text-4xl sm:text-2xl font-bold text-gray-800 mb-2">{fullname}</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-4">{tagline}</p>
                <div className="flex justify-center md:justify-start items-center space-x-4 mb-4">
                    <a href={links.linkedin.link} className="text-blue-600 text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href={links.github.link} className="text-green-600 text-2xl">
                        <FaGithub />
                    </a>
                    <a href={links.linkedin.link} className="text-green-400 text-2xl">
                        <FaVideo />
                    </a>
                </div>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                >
                    Download Resume
                </a>
            </div>

            {/* Profile Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]  -ml-0 md:-ml-16 bg-blue-200 rounded-full flex items-center justify-center z-10">
                    <div className="w-56 h-56 md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border shadow-2xl">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={(e) =>
                                (e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found")
                            }
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce z-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full animate-bounce delay-300 z-20"></div>
                </div>
            </div>
        </div>

    );
}
