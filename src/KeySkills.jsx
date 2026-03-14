import React from "react";
import { skills } from "./data";

const KeySkills = () => {
  return (
    <section className="px-4 md:px-8 py-12 bg-gradient-to-r from-[#eaf2f8] to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="header-name mb-6">KEY SKILLS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills?.map((skill, idx) => {
            const level = (typeof skill === "object" && skill.level) ? skill.level : "Intermediate";
            const width = level === "Expert" ? "100%" : level === "Advanced" ? "85%" : level === "Intermediate" ? "70%" : "55%";
            const name = (typeof skill === "object" && skill.name) ? skill.name : skill;
            return (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 font-semibold text-sm">{name}</span>
                  <span className="text-xs text-blue-700 font-bold">{level}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400 skill-bar-fill"
                    style={{ width, "--target-width": width }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
