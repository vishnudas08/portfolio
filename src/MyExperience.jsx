import React from "react";
import { experiences } from "./data";

const MyExperience = () => {

  return (
    <div id="work" className="bg-gradient-to-br from-blue-50 to-white  px-4 md:px-8 font-inter">
      <div className="max-w-5xl mx-auto rounded-lg">
        <h1 className="header-name">MY EXPERIENCE</h1>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              {exp.role} - {exp.company}
              <span className="block text-sm text-gray-500 font-medium">{exp.duration}</span>
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {exp.technologies && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">Key Technologies:</h3>
                <p className="text-gray-600">{exp.technologies.join(", ")}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
