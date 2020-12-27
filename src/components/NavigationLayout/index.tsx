import React, { ReactNode, useEffect, useState } from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"
import NavigationItem from "../NavigationItem"

type NavigationLayoutProps = {
  children?: ReactNode
}

const NavigationLayout = (props: NavigationLayoutProps) => {
  const { children } = props
  const [active, setActive] = useState("")

  useEffect(() => console.log(active), [active])

  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="pt-8 px-8">
        <Logo setActive={setActive} />
        <Navigation>
          <NavigationItem
            active={active === "/architektura"}
            setActive={setActive}
            redirectTo="/architektura"
          >
            Architektura
          </NavigationItem>
          <NavigationItem
            active={active === "/wnetrza"}
            setActive={setActive}
            redirectTo="/wnetrza"
          >
            Wnętrza
          </NavigationItem>
          <NavigationItem
            active={active === "/info"}
            setActive={setActive}
            redirectTo="/info"
          >
            Info
          </NavigationItem>
        </Navigation>
      </header>
      <main className="pt-8">{children}</main>
    </div>
  )
}

export default NavigationLayout
