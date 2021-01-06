import React from "react"
import { Link } from "gatsby"
// @ts-ignore
import arrowLeft from "../../images/arrow_left.svg"

type NavigationBackProps = {
  navigateTo: string
}

function NavigationBack(props: NavigationBackProps) {
  const { navigateTo } = props
  return (
    <React.Fragment>
      <Link to={navigateTo}>
        <img
          className="hover:bg-gray-50 p-2 -m-2 rounded-full"
          src={arrowLeft}
        />
      </Link>
    </React.Fragment>
  )
}

export default NavigationBack
