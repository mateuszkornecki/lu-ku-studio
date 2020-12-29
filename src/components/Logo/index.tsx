import React from "react"
import "./styles.css"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="logo m-0 mb-8 text-4xl font-bold">LU / KO STUDIO</h1>
    </Link>
  )
}

export default Logo
