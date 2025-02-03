"use client";
import { Card } from "flowbite-react";
import { projectItems } from "./constant";

function WorkSection() {
  const projectArray = Object.values(projectItems);

  return (
    <>
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          My <span className="text-teal-400">Projects</span>
        </h1>
      </div>

      {/* 📌 Grid Layout with Equal Height Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectArray.map((project, index) => (
          <div key={index} className="h-full my-3">
            <Card className="h-full flex flex-col justify-between border border-gray-700 p-6 shadow-lg rounded-lg bg-[#fffafa]">
              
              {/* 💡 Forced Fixed Image Size + Cropping */}
              <div className="w-full h-50 overflow-hidden rounded-lg">
                <img
                  src={project.picture}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 📌 Title */}
              <h5 className="text-2xl font-bold text-[#101720] mt-4">{project.title}</h5>

              {/* 📌 Description - Flex-grow ensures equal height */}
              <p className="text-gray-400 text-sm flex-grow">
                {project.description || "A detailed overview of this project."}
              </p>

              {/* 📌 Button always at the bottom */}
              <div className="mt-auto">
                <a
                  href={project.link}
                  className="block bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 rounded-lg transition"
                >
                  See Project
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkSection;
