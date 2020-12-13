import React from "react"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import NavigationItem from "../components/NavigationItem"

const IndexPage = () => (
  <Layout>
    <header>
      <Logo />
      <Navigation>
        <NavigationItem redirectTo="/architektura">Architektura</NavigationItem>
        <NavigationItem redirectTo="/wnetrza">Wnętrza</NavigationItem>
        <NavigationItem redirectTo="/info">Info</NavigationItem>
      </Navigation>
    </header>
  </Layout>
)

export default IndexPage
