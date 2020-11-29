import React, { ReactNode } from "react"
import "./layout.css"

type LayoutProps = {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div
      className="bg-blue-50"
      style={{
        padding: "3rem",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  )
}

export default Layout
