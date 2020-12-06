import React, { ReactText } from "react"
import { Link } from "gatsby"

type Index = {
  children: ReactText
  redirectTo: string
}

const NavigationItem = (props: Index) => {
  const { children, redirectTo } = props

  return (
    <Link to={redirectTo}>
      <li className="m-0 text-xl duration-500 ease-in-out text-black-400 transform hover:translate-x-8">
        / {String(children).toUpperCase()}
      </li>
    </Link>
  )
}

export default NavigationItem
