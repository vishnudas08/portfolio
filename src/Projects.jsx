import React, { useState } from "react";
import { projects } from "./data.js";
import ProjectModal from "./ProjectModal";



const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects?.filter((proj) =>
    filter === "All" ? true : proj.domainTag === filter
  );

  return (
    <>
      <section id="projects" className="py-12 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="header-name pb-2">MY PROJECTS</h2>
          <div className="mb-6 flex flex-wrap gap-3">
            {["All", "CV", "NLP", "Finance"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full border ${filter === category ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
            {filteredProjects?.map((proj) => (
              <div key={proj.id} className="bg-white rounded-xl shadow-md overflow-hidden relative group">
                <img src={proj.image} alt={proj.title} className="w-full object-cover" />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Domain/Function:{" "}
                    <span className={`${proj.domainColor} font-medium`}>{proj.domain}</span>
                  </p>

                  <div className="mt-4 flex gap-2">
                    {proj.caseStudyUrl && (
                      <a
                        href={proj.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                      >
                        Case Study
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSelectedProject(proj);
                        setSlideIndex(0);
                      }}
                      className="px-3 py-2 border border-black rounded hover:bg-gray-100 text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2">
                  {proj.skills?.map((icon, idx) => (
                    <img key={idx} src={icon} alt="skill" className="w-16 h-auto" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        currentSlide={slideIndex}
        setCurrentSlide={setSlideIndex}
      />
    </>
  );
};

export default Projects;
