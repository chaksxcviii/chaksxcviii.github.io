import React from "react"
import { Element } from "react-scroll"

export default function Landing() {
  return (
    <Element name="/">
      <div className=" block h-screen pt-20 md:flex align-stretch">
        <div className="flex flex-col justify-center items-center h-full sm:items-end sm:w-full sm:pr-32">
          <h2 className="text-center text-3xl text-white uppercase my-4 sm:text-right lg:mt-4 lg:ml-4  ">
            Shaquil Maria
          </h2>
          <p className="text-xl text-center text-gray-400 sm:text-right">
            Junior Full Stack Developer | Illustrator | Amateur Photographer
          </p>
        </div>
      </div>
    </Element>
  )
}
