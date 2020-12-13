import React, { ReactNode } from "react"
import "./layout.css"
import "fontsource-roboto-condensed"

type LayoutProps = {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  return <div className="p-8 h-screen">{props.children}</div>
}

export default Layout
