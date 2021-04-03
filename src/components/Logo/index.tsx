import React from "react"
import "./styles.scss"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="logo m-0 mb-8 text-2xl md:text-4xl font-bold text-white">
        <span className="-ml-8 pl-8 bg-black">LU / KO STUDIO</span>
      </h1>
    </Link>
  )
}

export default Logo
