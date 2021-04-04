import React, { ReactText, useState } from "react"
import { Link } from "gatsby"

type NavigationItemProps = {
  children: ReactText
  active: boolean
  redirectTo: string
  onClick?: () => void
}

const NavigationItem = (props: NavigationItemProps) => {
  const { children, redirectTo, active, onClick } = props

  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link to={redirectTo} onClick={handleClick}>
      <li
        className={`${
          active ? "translate-x-8" : ""
        } m-0 text-base md:text-xl duration-500 ease-in-out text-black-400 transform hover:translate-x-8`}
      >
        / {String(children).toUpperCase()}
      </li>
    </Link>
  )
}

export default NavigationItem
