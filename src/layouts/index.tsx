import React, { ReactElement, ReactNode } from "react"

import NavigationLayout from "./NavigationLayout"

type LayoutProps = {
  children: ReactElement
  path: string
}

const Layout = (props: LayoutProps) => {
  const { children, path } = props
  const isNavigationPage = !Boolean(path.split("/")[2])

  if (!isNavigationPage) {
    return <div>{children}</div>
  }

  return <NavigationLayout path={path}>{children}</NavigationLayout>
}

export default Layout
