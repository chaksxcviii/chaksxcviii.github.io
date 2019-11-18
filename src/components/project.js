import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Project(props) {
  return (
    <div className="bg-blueish max-w-sm overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/random/250x250"
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl text-gray-300">{props.name}</h3>
      </div>
      <div className=" py-4">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ color: "#b52b59", size: "24px" }}>
            <div className="mx-4 my-2 sm:mx-6 lg:mx-10">
              <FaGithub />
            </div>
          </IconContext.Provider>
        </a>
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ color: "#b52b59", size: "24px" }}>
            <div className="mx-4 my-2 sm:mx-6 lg:mx-10">
              <FaExternalLinkAlt />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  )
}
