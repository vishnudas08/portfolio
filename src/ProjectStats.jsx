import React from "react";

import {projectStats} from "./data.js"

const StatCard = ({ img, count, label }) => (
  <div className="bg-card rounded-xl p-4 w-auto transition-shadow">
     <div className="flex">
         <img
        src={img}
        alt={label}
        className="h-24 w-24 object-cover mr-3"
      />
      <div>
        <span className="text-primary text-5xl text-blue-400">{count}</span>
    <div className="text-center text-sm font-medium text-foreground mt-4">{label}</div>
      </div>
     </div>
      
  </div>
);

export default function ProjectStats() {
  return (
    <section className="py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {projectStats?.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
