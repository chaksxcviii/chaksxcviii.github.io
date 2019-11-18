import React from "react"

import Landing from "./landing"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

export default function layout() {
  return (
    <div className="layout">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
