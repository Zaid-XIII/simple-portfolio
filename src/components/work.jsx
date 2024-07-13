
"use client";

import { Card } from "flowbite-react";
import { projectItems } from "./constant";

function WorkSection() {
  const projectArray = Object.values(projectItems);
  return (
    <>
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          My <span className="text-teal-400">Project</span>

        </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projectArray.map((project,index) => (
      <Card
      key={index}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={project.picture}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {project.title}
      </h5>
      <a
          href={project.link}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          See Project
        </a>
    </Card>
         ))}</div>
  </>);
  }
  export default WorkSection;