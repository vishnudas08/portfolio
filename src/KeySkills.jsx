import React from "react";
import { skills } from "./data";

const KeySkills = () => {
  return (
    <section className=" px-4 md:px-8 py-12 bg-gradient-to-r from-[#eaf2f8] to-white">
      <div className="max-w-5xl mx-auto ">
        <h2 className="header-name">KEY SKILLS</h2>
        <div className="flex flex-wrap justify-start gap-4 ">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#f1f3f8] text-gray-700 text-sm md:text-base font-medium px-4 py-2 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
