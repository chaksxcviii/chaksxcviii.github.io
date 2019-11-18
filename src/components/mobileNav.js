import React from "react"
import { slide as Menu } from "react-burger-menu"
import Data from "../utils/Data"

class mobileNav extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <ul className="w-full float-left">
          {Data.links.map(link => (
            <li className="bg-gray-900 my-4 py-2 pl-10 text-white uppercase hover:text-blue-800 no-underline">
              <a key={link.id} href={link.route}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Menu>
    )
  }
}

export default mobileNav
