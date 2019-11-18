import React from "react"

import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Layout() {
  return (
    <div className="layout">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
