import React, { ReactNode, useEffect, useState } from "react"

import Logo from "../../components/Logo"
import Navigation from "./components/Navigation"
import NavigationItem from "./components/NavigationItem"

type NavigationLayoutProps = {
  children?: ReactNode
  path: string
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children, path } = props

  // Info page has a slightly different layout.
  const isInfoPage = props.path === "/info/"

  return (
    <div
      className={
        isInfoPage
          ? "grid md:grid-cols-2 h-screen"
          : "flex flex-col justify-between h-screen"
      }
    >
      <header className="pt-8 px-8">
        <Logo />
        <Navigation>
          <NavigationItem
            active={path === "/architektura/"}
            redirectTo="/architektura"
          >
            Architektura
          </NavigationItem>
          <NavigationItem active={path === "/wnetrza/"} redirectTo="/wnetrza">
            Wnętrza
          </NavigationItem>
          <NavigationItem active={path === "/info/"} redirectTo="/info">
            Info
          </NavigationItem>
        </Navigation>
      </header>
      <main className={isInfoPage ? "" : "pt-8"}>{children}</main>
    </div>
  )
}

export default NavigationLayout
