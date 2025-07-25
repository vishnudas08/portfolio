import React from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const ProjectModal = ({ isOpen, onClose, project, currentSlide, setCurrentSlide }) => {
  if (!isOpen || !project || !project.attachments?.length) return null;


  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.attachments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === project.attachments.length - 1 ? 0 : prev + 1));
  };
  console.log(project)

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 overflow-y-auto">
      <div className="flex justify-center min-h-screen items-start p-8">
        <div className="bg-white max-w-5xl w-full rounded-xl p-6 relative">
          {/* rest of your modal content */}
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
            <X size={24} />
          </button>

          {/* Header */}
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2 inline-block">
            {project.title}
          </span>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h2>
              <p className="text-gray-600 mb-4">
                <strong>Domain/Function:</strong>{" "}
                <span className="text-blue-600 font-medium">{project.domain}</span>
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">{project.overview}</p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">

                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#e8f0fe] text-black px-4 py-2 rounded-full hover:bg-[#d0e2fc] transition"
                >
                  <div className="bg-[#0077b5] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <img
                      src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                      alt="LinkedIn"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-sm font-medium">View Project Engagement</span>
                </a>

                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#effaf0] text-black px-4 py-2 rounded-full hover:bg-[#d6f2dc] transition"
                >
                  <div className="bg-[#2ea44f] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/ffffff/github.png"
                      alt="GitHub"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-sm font-medium">View Project on GitHub</span>
                </a>

              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              {/* Smooth Slider Carousel */}
              <div className="relative w-full h-auto mb-6 flex items-center justify-between">

                {/* Left Arrow (just outside image) */}
                <button
                  onClick={handlePrev}
                  className="z-10 bg-white p-2 rounded-full shadow hover:scale-110 hover:bg-gray-100 transition ml-[-1.5rem]"
                >
                  <ArrowLeft />
                </button>

                {/* Image Carousel */}
                <div className="w-[90%] h-full overflow-hidden rounded-lg  relative">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {project.attachments.map((src, idx) => (
                      <div
                        key={idx}
                        className="w-full flex-shrink-0 h-80 flex items-center justify-center"
                      >
                        <img
                          src={src}
                          alt={`slide-${idx}`}
                          className="object-contain h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow (just outside image) */}
                <button
                  onClick={handleNext}
                  className="z-10 bg-white p-2 rounded-full shadow hover:scale-110 hover:bg-gray-100 transition mr-[-1.5rem]"
                >
                  <ArrowRight />
                </button>
              </div>
              <div className="text-center text-sm font-medium text-foreground">Attachments description</div>




            </div>
          </div>

          {/* Project skills */}
          <div className="flex gap-4 mt-6 md:mt-0">
            {project.skills.map((icon, idx) => (
              <img key={idx} src={icon} alt="skill-icon" className="w-12 h-auto" />
            ))}
          </div>
          {/* Project Details Section */}
          <div className="text-left space-y-6 text-gray-800 text-sm mt-8">

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.details.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.details.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Challenges Faced</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.details.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.details.solution}
              </p>
            </div>

          </div>


        </div>
      </div>
    </div>

  );
};

export default ProjectModal;
