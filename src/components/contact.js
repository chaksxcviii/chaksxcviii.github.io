import React from "react"
import Icon from "./Icon"

export default function Contact() {
  return (
    <div name="contact" className="py-32 flex items-center justify-center">
      <section className="bg-blueish h-64 w-11/12 flex flex-col justify-center items-center rounded-lg shadow-lg sm:w-1/2">
        <h2 className="py-4 text-white">Get in touch</h2>
        <Icon type="contact" />
      </section>
    </div>
  )
}
