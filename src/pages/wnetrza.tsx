import React from "react"
import { graphql } from "gatsby"

import ProjectCoverLink from "../components/ProjectCoverLink"

const InteriorPage = props => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props

  const Posts = edges.map(edge => {
    const project = edge.node.frontmatter
    const projectCoverFluid = project.projectCover.childImageSharp.fluid
    return (
      <ProjectCoverLink
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

export default InteriorPage

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
