import React from "react"
import "./styles.scss"
import { Link } from "gatsby"

type LogoProps = {
  onClick?: () => void
}

const Logo = (props: LogoProps) => {
  const { onClick } = props

  function handleClick() {
    onClick()
  }

  if (onClick) {
    return (
      <h1
        onClick={handleClick}
        className="cursor-pointer logo m-0 mb-8 text-2xl md:text-4xl font-bold text-white"
      >
        <span className="-ml-8 pl-8 bg-black">LU / KO STUDIO</span>
      </h1>
    )
  } else {
    return (
      <Link to={"/"}>
        <h1 className="logo m-0 mb-8 text-2xl md:text-4xl font-bold text-white">
          <span className="-ml-8 pl-8 bg-black">LU / KO STUDIO</span>
        </h1>
      </Link>
    )
  }
}

export default Logo
