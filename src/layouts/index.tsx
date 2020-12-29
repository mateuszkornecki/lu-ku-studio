import React, { ReactNode } from "react"
import "./layout.css"
import "fontsource-roboto-condensed"

import NavigationLayout from "./NavigationLayout"

type LayoutProps = {
  children: ReactNode
  path: string
}

const Layout = (props: LayoutProps) => {
  const { children, path } = props
  const isNavigationPage = !Boolean(path.split("/")[2])

  if (!isNavigationPage) {
    return <div>{children}</div>
  }

  return <NavigationLayout>{children}</NavigationLayout>
}

export default Layout
