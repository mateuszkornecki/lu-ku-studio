import React from "react"
import { graphql } from "gatsby"

import ProjectCoverLink from "../components/ProjectCoverLink"
import useWidth from "../hooks/useWidth"

const ArchitecturePage = props => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props

  const { isMobile } = useWidth()

  const Posts = edges.map(edge => {
    const project = edge.node.frontmatter
    const projectCoverFluid = project.projectCover.childImageSharp.fluid
    return (
      <ProjectCoverLink
        key={edge.node.id}
        path={project.slug}
        image={projectCoverFluid}
        projectName={project.title.toUpperCase()}
      />
    )
  })

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${
        isMobile ? "" : "h-screen overflow-y-scroll"
      }`}
    >
      {Posts}
    </div>
  )
}

export default ArchitecturePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/architektura/" } } }
    ) {
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
