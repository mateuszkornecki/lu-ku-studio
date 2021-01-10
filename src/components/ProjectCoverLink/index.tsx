import Img, { FluidObject } from "gatsby-image"
import React, { useState } from "react"
import { Link } from "gatsby"

type ProjectCoverLink = {
  path: string
  image: FluidObject
  projectName: string
  key: string
}

const ProjectCoverLink = (props: ProjectCoverLink) => {
  const { path, image, projectName, key } = props
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      to={path}
      key={key}
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Img
        fluid={{ ...image, aspectRatio: 1.75 }}
        className="duration-500 ease-in-out hover:opacity-0"
      />
      <p
        className={`${
          isHover ? "opacity-1" : "opacity-0"
        } absolute duration-500 ease-in-out top-4 left-4 text-xl`}
      >
        {projectName}
      </p>
    </Link>
  )
}

export default ProjectCoverLink
