import React, { ReactNode, useEffect, useState } from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"
import NavigationItem from "../NavigationItem"

type URLLocationType = {
  pathname: string
}

type NavigationLayoutProps = {
  children?: ReactNode
  location: URLLocationType
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children, location } = props
  const currentPage = location.pathname

  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="pt-8 px-8">
        <Logo />
        <Navigation>
          <NavigationItem
            active={currentPage === "/architektura"}
            redirectTo="/architektura"
          >
            Architektura
          </NavigationItem>
          <NavigationItem
            active={currentPage === "/wnetrza"}
            redirectTo="/wnetrza"
          >
            Wnętrza
          </NavigationItem>
          <NavigationItem active={currentPage === "/info"} redirectTo="/info">
            Info
          </NavigationItem>
        </Navigation>
      </header>
      <main className="pt-8">{children}</main>
    </div>
  )
}

export default NavigationLayout
