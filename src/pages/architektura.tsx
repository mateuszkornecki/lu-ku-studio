import React from "react"
import { graphql } from "gatsby"

import ProjectCoverLink from "../components/ProjectCoverLink"
import useWidth from "../hooks/useWidth"
import getProjectSlug from "../utils/getProjectSlug"

const ArchitecturePage = props => {
  const {
    data: {
      allDatoCmsProject: { nodes },
    },
  } = props

  const { isMobile } = useWidth()

  const Posts = nodes.map((node, index, posts) => {
    const isLast = index === posts.length - 1
    const projectSlug = `/architektura/${getProjectSlug(node.slug)}/`
    return (
      <ProjectCoverLink
        key={node.id}
        path={projectSlug}
        image={node.cover.fluid}
        projectName={node.name.toUpperCase()}
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
    allDatoCmsProject {
      nodes {
        id
        slug
        name
        cover {
          fluid(
            maxWidth: 400
            forceBlurhash: false
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
