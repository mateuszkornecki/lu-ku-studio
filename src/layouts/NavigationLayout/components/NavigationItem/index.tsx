import React, { ReactText, useState } from "react"
import { Link } from "gatsby"

type Index = {
  children: ReactText
  active: boolean
  redirectTo: string
}

const NavigationItem = (props: Index) => {
  const { children, redirectTo, active } = props

  return (
    <Link to={redirectTo}>
      <li
        className={`${
          active ? "translate-x-8" : ""
        } m-0 text-xl duration-500 ease-in-out text-black-400 transform hover:translate-x-8`}
      >
        / {String(children).toUpperCase()}
      </li>
    </Link>
  )
}

export default NavigationItem
