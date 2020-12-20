import React, { ReactText, useState } from "react"
import { Link } from "gatsby"

type Index = {
  children: ReactText
  redirectTo: string
}

const NavigationItem = (props: Index) => {
  const [active, setActive] = useState(false)
  const { children, redirectTo } = props

  return (
    <Link
      to={redirectTo}
      activeClassName={"transform translate-x-8"}
      getProps={({ isCurrent }) => {
        if (isCurrent) {
          setActive(true)
        }
        return {}
      }}
    >
      <li
        className={`${
          active ? "transform translate-x-8" : ""
        } m-0 text-xl duration-500 ease-in-out text-black-400 hover:transform hover:translate-x-8`}
      >
        / {String(children).toUpperCase()}
      </li>
    </Link>
  )
}

export default NavigationItem
