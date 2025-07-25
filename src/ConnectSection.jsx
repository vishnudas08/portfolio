import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { email, links } from "./data";

const ConnectSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#eaf2f8] to-white flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-5xl ">
        <h2 className="header-name">LET'S CONNECT</h2>
        <p className="text-gray-600 mb-8">
          Feel free to get in touch with me. I am always open to discussing new projects, 
          creative ideas or opportunities to be part of your visions.
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Mail */}
          <div className="flex text-sm md:text-base items-center gap-4 bg-white shadow-md rounded-xl p-3 md:p-4 w-full">
            <Mail className="text-indigo-600 w-6 h-6" />
            <div className="text-left">
              <p className="text-gray-500">Mail Me</p>
              <p className="font-semibold text-gray-900">{email}</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex text-sm md:text-base items-center gap-4 bg-white shadow-md rounded-xl p-3 md:p-4 w-full">
            <Linkedin className="text-indigo-600 w-6 h-6" />
            <div className="text-left">
              <p className="text-gray-500">LinkedIn</p>
              <a
                href="http://bit.ly/3Qr8sbP"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 hover:underline"
              >
                {links.linkedin.link}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex text-sm md:text-base items-center gap-4 bg-white shadow-md rounded-xl p-3 md:p-4 w-full">
            <Github className="text-indigo-600 w-6 h-6" />
            <div className="text-left">
              <p className="text-gray-500">GitHub</p>
              <a
                href="http://bit.ly/3UFO9K9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 hover:underline"
              >
                {links?.github?.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
