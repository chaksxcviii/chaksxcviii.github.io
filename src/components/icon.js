import React from "react"
import { FaSkullCrossbones } from "react-icons/fa"
import Data from "../utils/Data"

export default function Icon(props) {
  let type = props.type
  if (type === "tech") {
    return (
      <div className="">
        <h3 className="py-4 text-white sm:pt-10">
          Technologies I've worked with
        </h3>
        <div className="flex flex-row flex-wrap justify-around">
          {Data.technologies.map(tech => (
            <div key={tech.id}>
              <div className="mx-4 my-2 icon_tech hover:text-gray-300 sm:mx-6 lg:mx-10">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else if (type === "contact") {
    return (
      <div>
        <div className="flex flex-row flex-wrap justify-around">
          {Data.contacts.map(contact => (
            <div key={contact.id}>
              <a href={contact.url} target="_blank" rel="noopener noreferrer">
                <div className="mx-2 my-2 icon_contact hover:text-gray-300 sm:mx-2 lg:mx-6">
                  {contact.icon}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="mx-auto w-auto skull">
          <FaSkullCrossbones />
        </div>
      </div>
    )
  }
}
