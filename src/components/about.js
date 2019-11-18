import React from "react"
// import data from "../utils/Data"
import { Element } from "react-scroll"
import Icon from "./icon"

export default function about() {
  return (
    // <div id="about" className="h-screen lg:pt-40">
    <Element name="about">
      <div id="about" className="flex flex-col lg:flex-row">
        <div className="container px-6 sm:pl-20 py-6 flex flex-col justify-center md:h-screen lg:w-1/2">
          <div className="">
            <h2 className="pt-10 text-white lg:pt-20">Howdy,</h2>
            <p className="pt-4 text-gray-300">
              I am a curious and eager to learn Information & Communication
              Technology student that fell in love with technology and how
              things work from an early age. Being a curious person I always
              look for a new challenge and what is the next emerging technology
              that can create practical value and solutions that will improve
              the quality of life of humankind.
            </p>
          </div>
          <Icon type="tech" />
        </div>

        <div className="flex flex-col justify-start items-center lg:h-screen lg:w-1/2">
          <div
            id="photo"
            className="block lg:block md:container md:w-auto md:h-auto md:pt-32"
          >
            <div className="w-32 h-32 mb-10 lg:m-0 rounded-full sm:w-64 sm:h-64  shadow-lg m-auto "></div>
          </div>
          <div className="pb-6 lg:pt-32">
            <a
              className="bg-blueish no-underline text-gray-400 hover:text-white py-2 px-4 rounded-full"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}
