import React, { ReactElement, ReactNode } from "react"
import NavigationItem from "../NavigationItem"

type NavigationProps = {
  children: ReactNode
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  )
}

export default Navigation
