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
      <li>{String(children).toUpperCase()}</li>
    </Link>
  )
}

export default NavigationItem
