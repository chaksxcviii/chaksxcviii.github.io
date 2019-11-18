import { Link } from "react-scroll"
import React, { useState } from "react"
import Data from "../utils/Data"
import { GiHamburgerMenu } from "react-icons/gi"
// import { MdClose } from "react-icons/md"

export default function Header() {
  // let menuClass = "hidden sm:inline-block"
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div>
      <header className="fixed w-full">
        <div
          id="nav"
          className="bg-curacao w-full flex flex-grow flex-row items-center lg:w-auto justify-between py-4 px-10"
        >
          <Link to="/" spy={true} smooth={true} duration={500}>
            <span className="cursor-pointer text-white font-bold text-xl">
              SRMM
            </span>
          </Link>
          {/* <div className="block sm:hidden"> */}
          <div
            id="menuBtn"
            className="cursor-pointer text-blueish text-2xl block sm:hidden"
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <GiHamburgerMenu />
          </div>
          <div
            className="hidden sm:inline-block"
            // style={{ display: toggle === false ? "none" : "block" }}
          >
            <ul>
              {Data.links.map(link => (
                <Link
                  key={link.id}
                  className="p-2 cursor-pointer text-white uppercase block hover:text-blue-800 no-underline sm:inline"
                  to={link.route}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            width: toggle ? "100%" : "0",
            height: "100vh",
            transition: ".5s",
            zIndex: "-1",
          }}
        >
          <div
            id="navbar"
            className={toggle === true ? "block px-6 bg-curacao view" : "hide "}
          >
            <ul>
              {Data.links.map(link => (
                <Link
                  key={link.id}
                  className="px-2 py-4 cursor-pointer text-white uppercase block hover:text-blue-800 no-underline sm:inline"
                  to={link.route}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
