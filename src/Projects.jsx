import React, { useState } from "react";
import { projects } from "./data.js";
import ProjectModal from "./ProjectModal";



const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section id="projects" className="py-12  px-4 md:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="header-name pb-2">MY PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
        {projects?.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-xl shadow-md overflow-hidden relative group"
          >
            <img src={proj.image} alt={proj.title} className="w-full object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                Domain/Function:{" "}
                <span className={`${proj.domainColor} font-medium`}>
                  {proj.domain}
                </span>
              </p>
              <button
                onClick={() => {
                  setSelectedProject(proj);
                  setSlideIndex(0);
                }}
                className="mt-4 px-4 py-2 border border-black rounded hover:bg-gray-100 cursor-pointer"
              >
                See My Work
              </button>
            </div>

            {/* Skill Icons */}
            <div className="absolute bottom-3 right-3 flex gap-2">
              {proj.skills.map((icon, idx) => (
                <img key={idx} src={icon} alt="skill" className="w-16 h-auto" />
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        currentSlide={slideIndex}
        setCurrentSlide={setSlideIndex}
      />
    </section>
  );
};

export default Projects;
