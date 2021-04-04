import React, { ReactElement, ReactNode } from "react"
import NavigationItem from "../NavigationItem"

type NavigationProps = {
  path: string
  onClick?: () => void
}

const Navigation = (props: NavigationProps) => {
  const { path, onClick } = props

  return (
    <nav>
      <ul className="m-0">
        <NavigationItem
          active={path === "/architektura/"}
          redirectTo="/architektura"
          onClick={onClick}
        >
          Architektura
        </NavigationItem>
        <NavigationItem
          active={path === "/wnetrza/"}
          redirectTo="/wnetrza"
          onClick={onClick}
        >
          Wnętrza
        </NavigationItem>
        <NavigationItem
          active={path === "/info/"}
          redirectTo="/info"
          onClick={onClick}
        >
          Info
        </NavigationItem>
      </ul>
    </nav>
  )
}

export default Navigation
