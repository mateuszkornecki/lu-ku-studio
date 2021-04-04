import React, { ReactElement, useState } from "react"

import Logo from "../../components/Logo"
import Navigation from "./components/Navigation"
import useWidth from "../../hooks/useWidth"

type NavigationLayoutProps = {
  children?: ReactElement
  path: string
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children, path } = props
  const { isMobile } = useWidth()
  const isLayoutPage = path === "/"

  const [isExpandedMobileMenu, setIsExpandedMobileMenu] = useState(false)

  function toggleNavigation() {
    setIsExpandedMobileMenu(prevState => !prevState)
  }

  function closeNavigation() {
    setIsExpandedMobileMenu(false)
  }

  if (isMobile && isLayoutPage) {
    return (
      <div className="static grid md:grid-cols-2 h-screen">
        <div
          className={`absolute z-10 w-screen ${
            isExpandedMobileMenu ? "bg-white h-screen" : ""
          }`}
        >
          <header className="pt-8 px-8">
            <Logo onClick={toggleNavigation} />
            <div className={`${isExpandedMobileMenu ? "" : "hidden"}`}>
              <Navigation onClick={closeNavigation} path={path} />
            </div>
          </header>
        </div>
        <main className="relative">{children}</main>
      </div>
    )
  } else {
    return (
      <div className="static grid md:grid-cols-2 h-screen">
        <header className="pt-8 px-8">
          <Logo />
          <Navigation path={path} />
        </header>
        <main>{children}</main>
      </div>
    )
  }
}

export default NavigationLayout
