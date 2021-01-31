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

  const Posts = edges.map((edge, index, posts) => {
    const project = edge.node.frontmatter
    const projectCoverFluid = project.projectCover.childImageSharp.fluid
    const isLast = index === posts.length - 1
    return (
      <ProjectCoverLink
        key={edge.node.id}
        path={project.slug}
        image={projectCoverFluid}
        projectName={project.title.toUpperCase()}
        isLast={isLast}
      />
    )
  })

  return (
    <div
      className={`p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 ${
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
