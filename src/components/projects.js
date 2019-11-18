import React from "react"
import Project from "./project"
import Data from "../utils/Data"

export default function projects() {
  if (Data.projects.length >= 1) {
    return (
      <div
        id="projects"
        className="section flex flex-col  items-stretch  py-8 md:px-16 lg:px-32 lg:py-20"
      >
        <div className="w-full container px-6 pb-6">
          <h3 className="text-white text-center">Some projects I've made</h3>
        </div>
        <div className="scroll mx-auto py-10">
          {Data.projects.map(project => (
            <div key={project.id} className="mx-6 inline-block bg-gray-100">
              <Project
                name={project.name}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div
        id="projects"
        className="section  items-stretch  py-8 md:px-16 lg:px-32 bg-pink-900 lg:py-32"
      >
        <div className="w-full container px-6 pb-6">
          <h3 className="text-center">Projects</h3>
        </div>
      </div>
    )
  }
}
