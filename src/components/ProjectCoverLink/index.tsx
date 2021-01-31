import Img, { FluidObject } from "gatsby-image"
import React, { useState } from "react"
import { Link } from "gatsby"
import useWidth from "../../hooks/useWidth"

type ProjectCoverLink = {
  path: string
  image: FluidObject
  projectName: string
  isLast?: boolean
}

const ProjectCoverLink = (props: ProjectCoverLink) => {
  const { path, image, projectName, isLast } = props
  const [isHover, setIsHover] = useState(false)
  const { isMobile } = useWidth()

  return (
    <div className={isLast && !isMobile ? "pb-8" : ""}>
      <Link
        to={path}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Img
          fluid={{ ...image, aspectRatio: 1 }}
          className="transition duration-500 ease-out filter-grayscale hover:filter-none"
        />
        <p
          className={`${
            isHover ? "opacity-1" : "opacity-0"
          } absolute duration-500 ease-in-out left-8 bottom-8 text-2xl`}
        >
          {projectName}
        </p>
      </Link>
    </div>
  )
}

export default ProjectCoverLink
