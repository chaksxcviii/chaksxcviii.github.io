import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJava,
  DiPhp,
  DiGit,
  DiReact,
  DiWordpress,
} from "react-icons/di"
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa"
const data = {
  links: [
    { id: 1, name: "home", route: "/" },
    { id: 2, name: "about", route: "about" },
    { id: 3, name: "projects", route: "projects" },
    { id: 4, name: "contact", route: "contact" },
  ],
  technologies: [
    { id: 1, name: "html", icon: <DiHtml5 /> },
    { id: 2, name: "css", icon: <DiCss3 /> },
    { id: 3, name: "javascript", icon: <DiJavascript /> },
    { id: 4, name: "react", icon: <DiReact /> },
    { id: 5, name: "java", icon: <DiJava /> },
    { id: 6, name: "php", icon: <DiPhp /> },
    { id: 7, name: "wordpress", icon: <DiWordpress /> },
    { id: 8, name: "git", icon: <DiGit /> },
  ],
  contacts: [
    {
      id: 1,
      name: "email",
      url: "mailto:shaquil.maria@gmail.com",
      icon: <FaRegEnvelope />,
    },
    {
      id: 2,
      name: "linkedin",
      url: "https://www.linkedin.com/in/shaqmar/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 3,
      name: "github",
      url: "https://github.com/chaksxcviii",
      icon: <FaGithub />,
    },
    {
      id: 4,
      name: "instagram",
      url: "https://www.linkedin.com/in/shaqmar/",
      icon: <FaInstagram />,
    },
    {
      id: 5,
      name: "telegram",
      url: "https://www.linkedin.com/in/shaqmar/",
      icon: <FaTelegramPlane />,
    },
  ],
  projects: [{ id: 1, name: "Coming Soon", github: "/", demo: "/" }],
}

export default data
