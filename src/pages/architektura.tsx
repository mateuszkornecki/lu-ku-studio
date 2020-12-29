import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

type ProjectLinkProps = {
  path: string
  image: FluidObject
  projectName: string
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { path, image, projectName } = props
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      to={path}
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

const ArchitecturePage = props => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props

  const Posts = edges.map(edge => {
    const project = edge.node.frontmatter
    const projectCoverFluid = project.projectCover.childImageSharp.fluid
    return (
      <ProjectLink
        key={edge.id}
        path={project.slug}
        image={projectCoverFluid}
        projectName={project.title.toUpperCase()}
      />
    )
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {Posts}
    </div>
  )
}

export default ArchitecturePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            projectCover {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
